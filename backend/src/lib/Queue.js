import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

// Sempre que tivemos um novo jobs para ser executado adicionamos neste array
const jobs = [CancellationMail];

class Queue {
  constructor() {
    // Cada serviço deve ter sua fila propria.
    this.queues = {};

    this.init();
  }

  init() {
    // Desestruturando para ter acesso aos metodos key e handle de cada job
    jobs.forEach(({ key, handle }) => {
      // adicionando os jobs na variavels this.queues, usando as configuralçoes
      // pro redis e iniciando os handle de cada job
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // Metodo para adiconar novos job na fila esquecifica
  // obs: Podemos ter varias filas para serviços diferentes
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // Processando o handle da fila
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();

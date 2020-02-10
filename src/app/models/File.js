import Sequelize, { Model } from 'sequelize';

class File extends Model {
  // Metodo chamado automaticamente pelo sequelize
  static init(sequelize) {
    // Chamando init da class pai model
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;

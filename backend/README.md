
<h2> Requisitos da API </h2>

## Requisitos Funcionais
<table>
  <tr>
    <td>Usuários devem ser mantidos no sistema.</td>
    <td>O usuário deverá ser mantido (cadastrado/atualizado) na aplicação para ter uma conta de acesso.</td>
  </tr>
  <tr>
    <td>Gerar Hash da senha.</td>
    <td>Ao se cadastrar no sistema, é gerado um hash da senha informada e após isso ele(hash) é guardado na base de dado.</td>
  </tr>
  <tr>
    <td>Usuários são autenticadados ao fazer login.</td>
    <td>Quando o usuário entrar no sistema, é vinculado ao seu login, um token de autenticação, que através deste token é verificado se o usuário está autenticado para interagir com o sistema.</td>
  </tr>
  <tr>
    <td>Validar dados de entrada.</td>
    <td>Todos os dados informados pelo o usuário para fazer algum cadastro/edição deveram ser validado para verificar se estão no formato correto.</td>
  </tr>
  <tr>
    <td>Avatar para provedores</td>
    <td>Usuários que são provedores de serviços podem adicionar um avatar a sua conta.</td>
  </tr>
  <tr>
    <td>Agendamento de um serviço</td>
    <td>Usuários podem agendar um horário(se disponível) com um provedor de serviço.</td>
  </tr>
  <tr>
    <td>Listagem de provedores.</td>
    <td>O sistema deve fazer uma listagem dos provedores de serviços cadastrados.</td>
  </tr>
  <tr>
    <td>Listagem de agendamento do usuário.</td>
    <td>O usuário logado pode listar os agendamentos com os provedores</td>
  </tr>
  <tr>
    <td>Paginação dos agendamentos.</td>
    <td>A listagem de agendamentos do usuário deverá ter um paginação de no maximo 20 agendamentos por páginas.</td>
  </tr>
  <tr>
    <td>Listando a agenda do dia do prestador de serviço.</td>
    <td>O prestador de serviço pode olha a sua agenda do dia, todos os horários livre e marcados de cada dia.</td>
  </tr>
  <tr>
    <td>Notificar o provedor sobre um novo agendamento.</td>
    <td>Todo vez que algum horário foi agendado com um prestador, ele é notificado sobre esse agendamento, ordenando as notificações pela a data mais atual.</td>
  </tr>
  <tr>
    <td>Marcar notificações como lidas.</td>
    <td>O usuário pode marcar as notificações como lidas.</td>
  </tr>
  <tr>
    <td>Cancelamento de agendamento.</td>
    <td>O usuário que fez o agendamento, pode cancelar um agendamento se tiver com 2 horas ou mais de distancia do agendamento.</td>
  </tr>
  <tr>
    <td>Envio de email avisando do cancelamento.</td>
    <td>Quando um usuário conseguir cancelar um agendamento, o provedor recebe um email, avisando sobre o cancelamento, informando a data, hora e o cliente que cancelou.</td>
  </tr>
  <tr>
    <td>Listagem de horários disponívei.</td>
    <td>Quando o usuário escolher um provedor, ele deve receber todos os horários disponíveis deste prestador.</td>
  </tr>
</table>

## Requisitos não funcionais
<table>
  <tr>
    <td>MongoDB para notificações.</td>
    <td>MongoDB para guardar dados relacionados as notificações, por ser um banco NoSQL, ele tem mais desempenho para armazenar dados com poucos relacionamentos.</td>
  </tr>
  <tr>
    <td>RedisDB para fila dos email.s</td>
    <td>Para diminuir o tempo de resposta das rotas de envio de email, usaremos filas(backgrounds jobs), utilizaremos RedisDB para guardar a chave-valor dos registros dos emails.</td>
  </tr>
  <tr>
    <td>Postgres como base de dados principal.</td>
    <td>Postgres vai ser utilizado para guardar o restanto dos dados da aplicação, dados do usuarios, agendamentos, dados dos avatares entre outros.</td>
  </tr>
  <tr>
    <td>Autenticação do usuários.</td>
    <td>Por ser uma API RESTFul a autenticação vai ser utilizando o JWT, (Json Web Token)</td>
  </tr>
  <tr>
    <td>Tratamento de exceções.</td>
    <td>Quando a aplicação tiver em produção, o tratamento de exceções será utilizando o Sentry, por ter uma otima integração com o NodeJS</td>
  </tr>
</table>

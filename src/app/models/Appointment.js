import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  // Metodo chamado automaticamente pelo sequelize
  static init(sequelize) {
    // Chamando init da class pai model
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    // Quando um model tem relacionamento duas vezes com outro model
    // É obrigatorio o uso de as, para diferenciar um relacionamento de outro.
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
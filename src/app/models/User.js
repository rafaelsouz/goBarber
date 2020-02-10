import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  // Metodo chamado automaticamente pelo sequelize
  static init(sequelize) {
    // Chamando init da class pai model
    super.init(
      {
        // Aqui fica todas os campo no qual o usario vai preencher quando der um create ou update
        // Obs: esses campos não precisam ser o reflexo das colunas do bd.
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        // Campo Virtual significa que nunca vai existir no BD,apenas aqui no lado do codigo.
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    // Antes(before) de qualquer usuario ser salvo no bd, esse trecho de codigo vai ser executado.
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // Hasheando a senha do usuario, o 8 significa a "força" da criptografia
        // quanto maior a "força" mais pesado fica a aplicação.
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  // Relacionando model user com model file, pois user não tem o campo avatar_id
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;

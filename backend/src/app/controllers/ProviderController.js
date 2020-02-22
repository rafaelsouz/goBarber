import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: {
        provider: true,
      },
      // Utilizamos atriibutes para dizer que só queremos estes campos da base de dados
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      },
    });
    return res.json(providers);
  }
}

export default new ProviderController();

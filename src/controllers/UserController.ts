import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: 'Bernardo Augusto',
    email: 'bernardo.augusto.bastos@gmail.com'
  }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async crete(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Bernardo augusto', email: 'bernardo.augusto.bastos@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo!' }
    });

    return (res.json("Feito"))
  }
};
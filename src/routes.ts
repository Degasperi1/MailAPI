import Router from 'express';
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const sendMailController = new SendMailController();

router.post('/send', sendMailController.handle);

export { router };

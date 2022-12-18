import {messageModel} from '../model/message.model';
import {Request,Response} from 'express';

export const messageCtrl = {
    getMessage: (req: Request, res: Response) => {

        const result = messageModel.getMessages();

        res.json({message:result});
    },

    postMessage: (req: Request, res: Response) => {
            const message = req.body.basics;

            const result = messageModel.saveMessage(message);

            res.json({message:result});
        }
}

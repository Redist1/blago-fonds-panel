import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

class auth {
   public static show(req: IRequest, res: IResponse): void {
      return res.sendFile(__dirname + '/build/index.html');
   }

   public static perform(req: IRequest, res: IResponse): void {
      console.dir(req.body);
      const user_is_admin = true;
      const login = req.body.login;
      const password = req.body.password;
      console.log(`login: ${login}, password: ${password}`);

      //Запрос в бд ----
      if (user_is_admin) {
         //еще какие то действия

         res.redirect('/adminka');
      } else {
         console.log('not found user, return user to home page ');

         res.redirect('/auth');
      }
   }
}

export default auth;

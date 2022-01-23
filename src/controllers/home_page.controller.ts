import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../LOGS/Logger';
import { Home_page_mware } from '../../middlewares/home_page.mware';
export class Home_page_Controller {
   public static show(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Home_page_mware({ req, res, logger });
   }
}
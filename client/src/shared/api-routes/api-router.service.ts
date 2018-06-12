import {Injectable} from '@angular/core';
import {Config} from '../config';

declare const Routing: any;

@Injectable()
export class ApiRouter {

  constructor() {
    Routing.setBaseUrl(Config.API_URL);
    console.log('Routing');
    console.log(Routing);
  }

   generate(routeName: string, parameters?: any) {
    return Routing.generate(routeName, parameters);
  }
}

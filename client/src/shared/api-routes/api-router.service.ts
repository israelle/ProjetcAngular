import {Injectable} from '@angular/core';
import {Config} from '../config';


declare var Routing: any;

@Injectable()
export class ApiRouter {

    constructor() {
        Routing.setBaseUrl(Config.API_URL);
    }

    generate(routeName: string, parameters?: any) {
        return Routing.generate(routeName, parameters);
    }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class AssociationService {
    newAssociation: any;

    constructor(
        private http: HttpClient,
        private apiRouter: ApiRouter,
        public authHttp: AuthHttp) {

    }

    getAssociation() {
        return this.authHttp.get(this.apiRouter.generate('api_associations_get_collection'))
            .map(data => data.json());
    }

    save(association: any) {
        if (association.id) {
            return this.authHttp.put(this.apiRouter.generate('api_associations_put_item'), association.id)
                .map(data => data.json());
        }
        return this.authHttp.post(this.apiRouter.generate('api_associations_post_collection'), association)
            .map(data => data.json());
    }

    deleteAssociation(association) {
        const associationId = association.id;
        return this.authHttp.delete(this.apiRouter.generate('api_associations_delete_item'), associationId)
            .map(data => data.json());
    }

    saveBDD( newAssociation) {
        this.newAssociation = newAssociation;
    }
}

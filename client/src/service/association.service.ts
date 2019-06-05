import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ApiRouter} from '../shared/api-routes/api-router.service';


@Injectable()
export class AssociationService {
    newAssociation: any;

    constructor(
        private http: HttpClient,
        private apiRouter: ApiRouter) {

    }

    getAssociation() {
        return this.http.get(this.apiRouter.generate('api_associations_get_collection'));
    }

    save(association: any) {
        if (association.id) {
            return this.http.put(this.apiRouter.generate('api_associations_put_item'), association.id);
        }
        return this.http.post(this.apiRouter.generate('api_associations_post_collection'), association);
    }

    deleteAssociation(association) {
        const associationId = association.id;
        return this.http.delete(this.apiRouter.generate('api_associations_delete_item'), associationId);
    }

    saveBDD( newAssociation) {
        this.newAssociation = newAssociation;
    }
}

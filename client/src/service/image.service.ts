import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiRouter } from '../shared/api-routes/api-router.service';

@Injectable()
export class ImageService {
    visibleImages = [];

  constructor(
    private http: HttpClient,
    private apiRouter: ApiRouter,
  ) {}

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id === id);
    }

    getAllCategory(): Observable<any> {
        return this.http.get(this.apiRouter.generate('api_categories_get_collection'));
    }
}

const IMAGES = [
    {'id' : 1, 'category': 'prestations', 'caption': ' prestation festival fondries', 'url': 'assets/paysage8.jpg'},
    {'id' : 2, 'category': 'divers', 'caption': 'tambours de Bambou Kréyol', 'url': 'assets/paysage6.jpg'},
    {'id' : 3, 'category': 'repetitions', 'caption': 'View from the boat', 'url': 'assets/paysage4.jpg'},
    {'id' : 4, 'category': 'repetitions', 'caption': 'View from the boat', 'url': 'assets/paysage1.jpg'},
    {'id' : 5, 'category': 'repetitions', 'caption': 'View from the boat', 'url': 'assets/paysage2.jpg'},
    {'id' : 6, 'category': 'repetitions', 'caption': 'View from the boat', 'url': 'assets/paysage3.jpg'},
    {'id' : 7, 'category': 'divers', 'caption': 'View from the boat', 'url': 'assets/paysage7.jpg'},
    {'id' : 8, 'category': 'prestations', 'caption': 'View from the boat', 'url': 'assets/paysage8.jpg'},
    {'id' : 9, 'category': 'prestations', 'caption': 'View from the boat', 'url': 'assets/BK8.jpg'},
    {'id' : 10, 'category': 'prestations', 'caption': 'Prestation près de la roche sur yon', 'url': 'assets/BK9.png'},
    {'id' : 11, 'category': 'repetitions', 'caption': 'Répétition danse avec Fred', 'url': 'assets/BK10.jpg'},
    {'id' : 12, 'category': 'repetitions', 'caption': 'Répétition tambour avec Philipe', 'url': 'assets/BK11.jpg'},

];

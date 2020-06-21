import {Component, OnChanges, OnInit} from '@angular/core';
import {ImageService} from '../../service/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges, OnInit  {

    images: any[];
    filterBy = 'all';
    visibleImages: any[] = [];
     display = 'none';

    constructor(private imageService: ImageService) {
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {
        this.visibleImages = this.imageService.getImages();
    }

  ngOnInit(): void {
    this.imageService.getAllCategory().subscribe( data => {
      console.log(data);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ImageService} from '../../service/image.service';

@Component({
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
    image: any;
    display = 'none';

    constructor(private imageService: ImageService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.image = this.imageService.getImage(
            +this.route.snapshot.params['id']);
    }

    Back() {
        history.back();
    }
}

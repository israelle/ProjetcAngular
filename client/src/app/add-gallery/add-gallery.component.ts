import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {NotificationService} from '../../shared/notification/notification.service';
import {NotificationType} from '../../shared/notification/notification-type.model';
import {Category} from '../model/Category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css']
})
export class AddGalleryComponent implements OnInit {

  category: Category;

  constructor(
    private categorieService: CategoryService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.category = { name: '', date: new Date()};
  }
  save() {
    console .log(this.category);
    this.categorieService.save(this.category).subscribe(
                  () => {
                      // message de notification
                      this.notificationService.addNotification(NotificationType.SUCCESS, 'Nouvelle association enregistrée !! .');
                      this.router.navigate(['gallery']);
                  });
  }
  onChangeTitle(event) {}
}

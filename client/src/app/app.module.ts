import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EventComponent} from './event/event.component';
import {LoginService} from '../service/login.service';
import {EventService} from '../service/event.service';
import {PresentationService} from '../service/presentation.service';
import {LoginComponent} from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {NgxCarouselModule} from 'ngx-carousel';
import {AlertModule, CarouselModule, ModalModule} from 'ngx-bootstrap';
import { AddEventComponent } from './add-event/add-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageFilterPipe } from '../shared/ImageFilterPipe';
import { ImageService } from '../service/image.service';
import { ImageDetailComponent } from './image/image-detail.component';
import {EventSharedService} from './event/event-shared.service';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {UserService} from '../service/user.service';
import {AuthConfig, AuthHttp, provideAuth} from 'angular2-jwt';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpWrapperModule} from 'angular4-http-wrapper';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {ToastyModule} from 'ng2-toasty';
import {NotificationComponent} from '../shared/notification/notification.component';
import {NotificationService} from '../shared/notification/notification.service';
import {EventModalComponent} from './event/event-modal.component';
import {AssociationService} from '../service/association.service';
import {AddAssociationComponent} from './add-association/add-association.component';
import {ImageUploadService} from '../service/imageUpload.service';
import {ImageUploadModel} from './image/imageUpload-model';

@NgModule({
    declarations: [
        AppComponent,
        AddAssociationComponent,
        LoginComponent,
        PresentationComponent,
        EventComponent,
        HeaderComponent,
        HomeComponent,
        RegisterComponent,
        AddEventComponent,
        GalleryComponent,
        ImageComponent,
        ImageFilterPipe,
        ImageDetailComponent,
        NotificationComponent,
        EventModalComponent,
    ],
    imports: [
        BrowserModule,
        NgxCarouselModule,
        NgxSpinnerModule,
        HttpWrapperModule,
        CarouselModule.forRoot(),
        AlertModule,
        FormsModule,
        ToastyModule.forRoot(),
        HttpClientModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, // for database
        AngularFireStorageModule,
        ModalModule.forRoot(),
        RouterModule.forRoot([
            {path: '',
                component: HomeComponent,
            },
            {path: 'home',
                component: HomeComponent},
            {path : 'login',
                component: LoginComponent,
            },
            {path : 'presentation',
                component: PresentationComponent,
            },
            {path: 'register',
                component: RegisterComponent,
            },
            {path: 'event',
                component: EventComponent},
            {path: 'event/add',
                component: AddEventComponent},
            {path: 'gallery',
                component: GalleryComponent},
            { path: 'image/:id', component: ImageDetailComponent },
        ])
    ],
    providers: [
        LoginService,
        EventService,
        PresentationService,
        ImageService,
        AssociationService,
        ApiRouter,
        EventSharedService,
        NotificationService,
        UserService,
        HttpClientModule,
        HttpClient,
        ImageUploadService,
    provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'token',
            tokenGetter: (() => localStorage.getItem('id_token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

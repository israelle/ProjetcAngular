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
import {AlertModule, CarouselModule} from 'ngx-bootstrap';
import { AddEventComponent } from './add-event/add-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageFilterPipe } from '../shared/ImageFilterPipe';
import { ImageService } from '../service/image.service';
import { ImageDetailComponent } from './image/image-detail.component';
import {EventSharedService} from './event/event-shared.service';
import {ApiRouter} from '../shared/api-routes/api-router.service';
import {UserService} from '../service/user.service';
import {AuthHttp, provideAuth} from 'angular2-jwt';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {UploadService} from '../service/upload.service';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {NgxSpinnerModule} from 'ngx-spinner';



@NgModule({
    declarations: [
        AppComponent,
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
        ImageDetailComponent
    ],
    imports: [
        BrowserModule,
        NgxCarouselModule,
        NgxSpinnerModule,
        CarouselModule.forRoot(),
        AlertModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, // for database
        AngularFireStorageModule,
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
        ApiRouter,
        EventSharedService,
        UserService,
        HttpClientModule,
        HttpClient,
        UploadService,
        AuthHttp,
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

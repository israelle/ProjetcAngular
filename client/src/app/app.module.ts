import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EventComponent} from './event/event.component';
import { LoginService } from '../service/login.service';
import { EventService } from '../service/event.service';
import { PresentationService } from '../service/presentation.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { AlertModule, BsDatepickerModule, CarouselModule, ModalModule, TimepickerModule} from 'ngx-bootstrap';
import { AddEventComponent } from './add-event/add-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageFilterPipe } from '../shared/ImageFilterPipe';
import { ImageService } from '../service/image.service';
import { ImageDetailComponent } from './image/image-detail.component';
import { EventSharedService } from './event/event-shared.service';
import { ApiRouter } from '../shared/api-routes/api-router.service';
import { UserService } from '../service/user.service';
import { provideAuth } from 'angular2-jwt';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpWrapperModule } from 'angular4-http-wrapper';
import { Http, HttpModule } from '@angular/http';
import { ToastyModule } from 'ng2-toasty';
import { NotificationComponent } from '../shared/notification/notification.component';
import { NotificationService } from '../shared/notification/notification.service';
import { EventModalComponent } from './event/event-modal.component';
import { AssociationService } from '../service/association.service';
import { AddAssociationComponent } from './add-association/add-association.component';
import { ImageUploadService } from '../service/imageUpload.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { JoinUsComponent } from './join-us/join-us.component';
import {AgmCoreModule} from '@agm/core';
import { FooterComponent } from './footer/footer.component';


const config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('377006560054-o7c3ampae1srchmo4mk6o18u2jvsch4t.apps.googleusercontent.com')
    },
]);
const routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path : 'login', component: LoginComponent},
    {path : 'presentation', component: PresentationComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'event', component: EventComponent},
    {path: 'event/add', component: AddEventComponent},
    {path: 'gallery', component: GalleryComponent},
    { path: 'image/:id', component: ImageDetailComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'joinUs', component: JoinUsComponent },
    ];

export function provideConfig() {
    return config;
}

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
        ProfileComponent,
        JoinUsComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxCarouselModule,
        HttpWrapperModule,
        CarouselModule.forRoot(),
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        AlertModule,
        FormsModule,
        ToastyModule.forRoot(),
        CalendarModule,
        HttpClientModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, // for database
        AngularFireStorageModule,
        ModalModule.forRoot(),
        DlDateTimePickerDateModule,
        SocialLoginModule,
        RouterModule.forRoot(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAZiNVLRX6HTsJ-0hFcsp3nzuMODU2o2ss'
        })
    ],
    providers: [
        LoginService,
        EventService,
        PresentationService,
        FormsModule,
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
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { UserService } from '../core/services';

import { AboutComponent } from "../about/about.component";
import { AdminComponent } from "../admin/admin.component";
import { ContactComponent } from "../contact/contact.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { ServicesComponent } from "../services/services.component";
import { WhatsNewComponent } from "../whats-new/whats-new.component";
import { PageNotFoundComponent } from '../page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [CanActivateAuthGuard],
    },
    {
        path: 'contact',
        component: ContactComponent        
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'whats-new',
        component: WhatsNewComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];

export const routing = RouterModule.forRoot([...routes, ...routes]);

routing.providers.push([
    CanActivateAuthGuard,    
    UserService
]);
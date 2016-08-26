import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';

import { CanActivateAboutPageGuard } from './can-activate-about-page.service';
import { CanActivateContactPageGuard } from './can-activate-contact-page.service';
import { CanActivateGalleryPageGuard } from './can-activate-gallery-page.service';
import { CanActivateHomePageGuard } from './can-activate-home-page.service';
import { CanActivateServicesPageGuard } from './can-activate-services-page.service';
import { CanActivateWhatsNewPageGuard } from './can-activate-whats-new-page.service';


import { UserService } from '../core/services';

import { AboutComponent } from "../about/about.component";
import { AdminComponent } from "../admin/admin.component";

import * as admin from "../admin";

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
        component: AboutComponent,
        canActivate:[CanActivateAboutPageGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [CanActivateAuthGuard],
        children: [
            {
                path: '',
                component: admin.ServicesComponent
            }
        ]
    },
    {
        path: 'contact',
        component: ContactComponent,
        canActivate: [CanActivateContactPageGuard]        
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        canActivate: [CanActivateGalleryPageGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [CanActivateHomePageGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'services',
        component: ServicesComponent,
        canActivate: [CanActivateServicesPageGuard]
    },
    {
        path: 'whats-new',
        component: WhatsNewComponent,
        canActivate: [CanActivateWhatsNewPageGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];

export const routing = RouterModule.forRoot([...routes, ...routes]);

routing.providers.push([
    CanActivateAboutPageGuard,
    CanActivateContactPageGuard,
    CanActivateGalleryPageGuard,
    CanActivateHomePageGuard,
    CanActivateServicesPageGuard,
    CanActivateWhatsNewPageGuard,
    CanActivateAuthGuard,    
    UserService
]);
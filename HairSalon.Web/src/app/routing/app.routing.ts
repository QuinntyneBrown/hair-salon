import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { UserProfileService } from '../shared/user-profile.service';

import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module',
        canActivate: [CanActivateAuthGuard],
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module'        
    },
    {
        path: 'gallery',
        loadChildren: 'app/gallery/gallery.module'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'services',
        loadChildren: 'app/services/services.module'
    },
    {
        path: 'whats-new',
        loadChildren: 'app/whats-new/whats-new.module'
    }
];

export const routing = RouterModule.forRoot(routes);

routing.providers.push([
    //CanActivateAuthGuard,    
    //UserProfileService
]);
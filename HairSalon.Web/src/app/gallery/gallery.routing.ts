import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent }     from './gallery.component';

const routes: Routes = [
    { path: 'gallery', component: GalleryComponent }
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = routes.filter(r => r.component != undefined).map(r => r.component)

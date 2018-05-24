import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { MenuComponent } from '../app/components/menu/index';
import { CadcliComponent } from '../app/components/cad-cli/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: MenuComponent, canActivate: [AuthGuard] },
    { path: 'cad', component: CadcliComponent }
    // { path: '**', component: NotFoundCmp }
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

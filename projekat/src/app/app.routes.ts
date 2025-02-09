import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/components/favorites/favorites.component';
import { LoginComponent } from './admin/components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { LogoutComponent } from './admin/components/logout/logout.component';
import { loginPageGuard } from './guard/login-page.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'properties',
        loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule)
    },
    {
        path: 'favorites',
        component: FavoritesComponent,
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loginPageGuard]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
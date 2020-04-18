import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading, PreloadAllModules} from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: 'contacts',
      component: ContactsListComponent,
      data: {title: 'Contacts', animation: 'contacts'},
      canActivate: [ AuthGuard ]
    },
    { path: 'contact-detail',
      data: { animation: 'contact-details' },
      loadChildren: () => import('./contact-detail/contact-detail.module').then(m => m.ContactDetailModule),
    },
    { path: 'login', component: LoginComponent, data: {title: 'Login'} },
    { path: 'logout', component: LogOutComponent, outlet: 'popup', canActivate : [ AuthGuard ]},
    { path: 'not-found', component: NotFoundComponent, data: {title: 'Ooops! 404'}},
    { path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
          { enableTracing: true, preloadingStrategy: PreloadAllModules}
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
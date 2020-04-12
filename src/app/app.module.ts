import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactDetailModule } from './contact-detail/contact-detail.module';

const appRoutes: Routes = [
  { path: 'contacts',
    component: ContactsListComponent,
    data: {title: 'Contacts'},
    canActivate: [ AuthGuard ]
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
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ContactDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

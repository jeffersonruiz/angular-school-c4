import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailShellComponent } from './contact-detail-shell/contact-detail-shell.component';
import { ContactDetailEmptyComponent } from './contact-detail-empty/contact-detail-empty.component';
import { LogOutComponent } from './log-out/log-out.component';

const appRoutes: Routes = [
  { path: 'contacts', component: ContactsListComponent, data: {title: 'Contacts'} },
  { path: 'contact-detail', component: ContactDetailShellComponent, data: {title: 'Contact detail'},
    children: [
      {path: ':id', component: ContactDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent, data: {title: 'Login'} },
  {path: 'logout', component: LogOutComponent, outlet: 'popup'},
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
    ContactDetailComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
    ContactDetailShellComponent,
    ContactDetailEmptyComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

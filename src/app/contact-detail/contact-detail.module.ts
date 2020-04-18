import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactDetailShellComponent } from './contact-detail-shell/contact-detail-shell.component';
import { ContactDetailResolverService } from './contact-detail-resolver.service';

const contactDetailRoutes: Routes = [
  { path: '', component: ContactDetailShellComponent, data: {title: 'Contact detail'},
    children: [
      { path: ':id', component: ContactDetailComponent,
        resolve: { contact: ContactDetailResolverService }
      }
    ],
  },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(contactDetailRoutes)
    ],
    declarations: [
        ContactDetailComponent,
        ContactDetailShellComponent
    ]

})
export class ContactDetailModule { }

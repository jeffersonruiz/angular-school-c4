import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { ContactsService } from '../contacts.service';
import { Contact, PhoneType } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public contact:Contact;

  constructor(
    public contactsService:ContactsService, 
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(params => console.log(params.get('foo'))),
      map(params => Number(params.get('id')))
    )
    .subscribe(id => {
      this.contact = this.contactsService.getContactById(id);
    });
  }

}

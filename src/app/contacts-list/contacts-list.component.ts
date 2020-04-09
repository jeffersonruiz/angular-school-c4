import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public contacts: Contact[] = [];
  constructor(
    public contactsService: ContactsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  }

  onContactSelected(id: number) {
    this.router.navigate(['contact-detail', id, {foo: 'bar'}], {
      queryParams: {
        hello: 'world',
        affiliatedId: 12345
      }
    });
  }

}

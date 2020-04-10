import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.closePopup();
  }

  leave(){
    this.closePopup();
  }  

  closePopup(){
    this.router.navigate([ {outlets: {popup: null}} ]);
  }

}

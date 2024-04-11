import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fryday';
  constructor(private router: Router) {}
  sidenavList=[
    {
      name:"",
      title:"Home Page",
      iconName:"home",
      link:"home"
    },
    {
      name:"",
      title:"Menu",
      iconName:"menu",
      link:"menu"
    }, 
    {
      name:"",
      title:"Business with us",
      iconName:"business",
      link:"business"
    },
    {
      name:"",
      title:"About us",
      iconName:"about",
      link:"about"
    },
    {
      name:"",
      title:"Contact us",
      iconName:"contact",
      link:"contact"
    }
  ]
}

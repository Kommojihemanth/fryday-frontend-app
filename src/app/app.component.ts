import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SubNavState {
  home: boolean;
  menu: boolean;
  franchise: boolean;
  contact : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fryday';
  subNavState: SubNavState = {
    home: false,
    menu: false,
    franchise: false,
    contact:false
  };

  constructor(private router: Router) {}

  toggleSubNav(navName: keyof SubNavState): void {
    this.subNavState[navName] = !this.subNavState[navName];
    if (this.subNavState[navName]) {
      this.router.navigate([`/${navName}`]);
    }
  }

  isSubNavOpen(navName: keyof SubNavState): boolean {
    return this.subNavState[navName];
  }

  sidenavList=[
    {
      name:"",
      title:"Home",
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
      title:"Franchise",
      iconName:"franchise",
      link:"franchise"
    },
    {
      name:"",
      title:"contact",
      iconName:"contact",
      link:"contact"
    }
  ]
}

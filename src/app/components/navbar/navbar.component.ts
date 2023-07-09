import { Component, HostListener } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolling: boolean = false;
  isScrollingDown: boolean = false;
  scrollTimeout: any;
  expandNavbar: boolean = false

  toggleNavbar(): void {
    this.expandNavbar = !this.expandNavbar
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.isScrolling = true;
    this.expandNavbar = false
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 200);
  }

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "Demo";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
      }

    });

  }
}

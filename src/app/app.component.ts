import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nitej-website';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
  }
  isMenuOpen = false;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

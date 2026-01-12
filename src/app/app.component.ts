import { Component/*, OnInit*/ } from '@angular/core';
/*import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare function gtag(...args: any[]): void;*/

@Component({
  selector: 'pierwszastrona',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent/* implements OnInit*/ {
  title = 'Karol Góralczyk - strona';

  /*constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        gtag('config', 'G-JWMF2ZZY2Z', { page_path: event.urlAfterRedirects });
      });
  }*/
}

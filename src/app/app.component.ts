import { Component } from '@angular/core';
import { Page } from './shared/interfaces/page.interface';
import { PageService } from './shared/services/page.services';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages!: Page;
  constructor(private pagesSvc: PageService) {}

  ngOnInit(): void {
    this.pagesSvc
      .getPages()
      .pipe(tap((pages: Page) => (this.pages = pages)))
      .subscribe();
  }
}

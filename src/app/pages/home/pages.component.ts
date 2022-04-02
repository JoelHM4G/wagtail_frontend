import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Page } from './interfaces/page.interface';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  pages!: Page;
  constructor(private pagesSvc: PageService) {}

  ngOnInit(): void {
    this.pagesSvc
      .getPages()
      .pipe(tap((pages: Page) => (this.pages = pages)))
      .subscribe();
  }
}

import { Component, Inject } from '@angular/core';
import { PageService } from '../services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent {
  public pages: any;

  constructor(private router: Router, private pageService: PageService) {
    this.pageService.getPages().subscribe(result => {
      this.pages = result;
    }, error => console.error(error));
  }
}  

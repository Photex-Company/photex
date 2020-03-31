import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/portal/catalogue/services/catalogue.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
   // let ca: Array<string> = document.cookie;
   // console.log(ca);
    this.catalogueService.getAllCatalogues().subscribe((res: any) => {
      console.log(res);
    });
  }

}

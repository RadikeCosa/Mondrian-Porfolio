import { Component, OnInit } from '@angular/core';
import { IHome } from 'src/app/models/home.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public data: any = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.homeService.getHomeData().subscribe((respuesta) => {
      console.log(respuesta);
      this.data = respuesta;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  template: `
    
      <div style="outline: 1px cyan solid; font-size: 18px;
      height: 100%; width: 70%; margin: auto; display: block; border-sizing: border-box;">
        <div style="width: 50%; display: block; border-sizing: border-box; text-align: justify;">
          <h2 style="color: #008b8b; margin: 10px;">About US</h2>
          <p style="margin: 10px;">The Association of Mountain Skiers has
          been established in 2016. 
          Its purpose is to boost the development of mountain 
          skiing culture in Armenia. The Association 
          seeks to promote and ensure a large influx of people 
          into the mountains of Armenia. The Association's 
          mission is to gather ski lovers, professionals and experts 
          around it to find ways to improve this type of sport in Armenia. 
          The founding members of the Association are Hovhannes Martirosyan as director and Tigran Simonyan 
          as deputy director. Association aims to develop skiing in Armenia, 
          particularly through festivals and competitions.</p>
        </div>
      </div>
  `,
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

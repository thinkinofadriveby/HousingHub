import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IProperty> = []; 
  
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      let sellRent = 2; // Default value for renting properties
      if (url[0].path === "buy-property") {
        sellRent = 1;
      }
      this.housingService.getAllProperties(sellRent).subscribe(
        data => {
          this.properties = data;
          console.log(data);
        }, error => {
          console.log('httperror:');
          console.log(error);
        }
      );
    });
  }
}  

import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IProperty> = []; 
  City = '';
  searchCity: any;
  sortDirection = 'asc';
  
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.SellRent = 2; // Default value for renting properties
      if (url[0].path === "buy-property") {
        this.SellRent = 1;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(
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

  onCityFilter() {
    this.searchCity = this.City;
  }

  onCityFilterClear() {
    this.City = '';
    this.searchCity = '';
  } 

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc'
    }
    else {
      this.sortDirection = 'desc'
    }
  }

  sortByParameter() {
  }



}

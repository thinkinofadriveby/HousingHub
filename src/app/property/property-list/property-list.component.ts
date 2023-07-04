import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  properties: Array<any> = [{
    "Id": 1,
    "Name": "La Vida Loca",
    "Type": "House",
    "Price": 12000
  },

  {
    "Id": 2,
    "Name": "Windstat Manor",
    "Type": "Mansion",
    "Price": 36000
  },

  {
    "Id": 3,
    "Name": "Snowfoot Sanctum",
    "Type": "Apartment",
    "Price": 16000
  },

  {
    "Id": 4,
    "Name": "Lakeview Manor",
    "Type": "Mansion",
    "Price": 39000
  },

  {
    "Id": 5,
    "Name": "Proudspire Estate",
    "Type": "House",
    "Price": 24000
  },

  {
    "Id": 6,
    "Name": "Little Paradise",
    "Type": "Mansion",
    "Price": 50000
  }


]
  
  constructor() { }

  ngOnInit(): void {

  }
}

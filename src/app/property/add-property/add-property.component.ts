import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {


  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;
  Name: any;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null
  };
  constructor(private router: Router) { }

  ngOnInit() {
  } 

  onBack() 
  {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) 
  {
    console.log('Congratulations, form submitted!');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}


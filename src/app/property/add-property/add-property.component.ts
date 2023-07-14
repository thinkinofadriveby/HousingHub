import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';



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

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    ReadyToMove: null
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


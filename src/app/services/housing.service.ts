import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get<{ [key: string]: IProperty }>('assets/data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        
        const localPropertiesStr = localStorage.getItem('newProp');
        if (localPropertiesStr !== null) {
          const localProperties = JSON.parse(localPropertiesStr);
          for (const id in localProperties) {
            if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          }
        }
  
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
  
        return propertiesArray;
      })
    );
  }
  
  


  // getAllProperties(SellRent: number): Observable<IProperty[]> {
  //   return this.http.get<IProperty[]>('assets/data/properties.json').pipe(
  //     map(properties => properties.filter(property => property.SellRent === SellRent))
  //   );
  // }
 
  


  addProperty(property: Property) {
    let newProp = [property];
    
    let existingProps = localStorage.getItem('newProp');
    
    // Add new property in array if newProp already exists in local storage
    if (existingProps !== null) {
      newProp = [property, ...JSON.parse(existingProps)];
    }
  
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  
  
  newPropID() {
    let pid = localStorage.getItem('PID');
    
    if (pid === null) {
      // PID does not exist, initialize it
      localStorage.setItem('PID', '10');
      return 10;
    } else {
      // PID exists, increment it
      let pidNum = parseInt(pid);
      localStorage.setItem('PID', (pidNum + 1).toString());
      return pidNum + 1;
    }
  }
  
  

}


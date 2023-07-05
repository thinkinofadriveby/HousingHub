import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  // getAllProperties() {
  //   return this.http.get('assets/data/properties.json').pipe(
  //     map(data => {
  //       const propertiesArray: Array<any> = [];
  //       for (const id in data) {
  //         if (data.hasOwnProperty(id)) {
  //           propertiesArray.push(data[id]);
  //         }
  //       }
  //       return propertiesArray;
  //     })
  //   );
  // }

    getAllProperties(): Observable<IProperty[]> {
      return this.http.get<IProperty[]>('assets/data/properties.json');
    }
  

}


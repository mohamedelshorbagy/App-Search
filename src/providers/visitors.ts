import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Visitors provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Visitors {

url = "http://localhost:85/EEDAPI/api.php/";


  constructor(public http: Http) {
  }

  getVisitorData(unique) {
    return this.http.get(this.url + 'getVisitorData/' + unique).map((res) => res.json());

  }

  checkVisitor(unique) {

    return this.http.get(this.url + 'checkVisitor/' + unique).map((res) => res.json());

  }

  uncheckVisitor(unique) {
    return this.http.get(this.url + 'uncheckVisitor/' + unique).map((res) => res.json());

  }




}

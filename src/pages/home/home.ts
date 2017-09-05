import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Visitors } from '../../providers/visitors';
import { Data } from '../data/data';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  unique:any;
  result:any;
  constructor(public navCtrl: NavController,public visitor:Visitors,public barcode:BarcodeScanner) {


  }


  printData() {
    this.visitor.getVisitorData(this.unique).subscribe((res) => {
      this.result = res[0];
      this.navCtrl.push(Data, {
        resultData: this.result
      });

    })

  }



  async scanQrCode() {

    const results = await this.barcode.scan();
    this.unique = results.text;



  }




}

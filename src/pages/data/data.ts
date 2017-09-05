import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { Visitors } from '../../providers/visitors';

/**
 * Generated class for the Data page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class Data {
  result:any;
  respond:boolean;
  message:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public visitors:Visitors) {
    this.result = navParams.get('resultData');

    
}

  ionViewDidLoad() {
  }

  checkInFunc() {
    this.visitors.checkVisitor(this.result.random).subscribe((res) => {
        this.respond = res.flag;
        this.message = res.msg;
    });
  }

  unCheckFunc() {
    this.visitors.uncheckVisitor(this.result.random).subscribe((res) => {
        this.respond = res.flag;
        this.message = res.msg;

    });

  }



}

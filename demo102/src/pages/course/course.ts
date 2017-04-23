import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Course page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class Course {

  constructor(private navCtrl: NavController, private navParams: NavParams)
   {
     let id = this.navParams.get('id');
     console.log(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Course');
  }

}

import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import {Course} from '../course/course';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public nav:Nav) {

  }
  goToCourse(){
    this.nav.push(Course, {
      id:1
    });
  }

}

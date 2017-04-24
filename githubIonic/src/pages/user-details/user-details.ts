import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from '../../models/user';
import {GithubUsers} from '../../providers/github-users';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  login: string;
  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private githubUsers: GithubUsers
    ) {
    this.login=navParams.get('login'); //Obtenemos el login del usuario para mostralo en el header
    githubUsers.loadDetails(this.login).subscribe(user =>{
      this.user = user;
    })
    //este metodo cargara los detalles de los usuarios en la aplicacion
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetails');
  }

}

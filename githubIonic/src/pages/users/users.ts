import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import {User} from '../../models/user';
import {UserDetailsPage} from '../user-details/user-details'

import {GithubUsers} from '../../providers/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:User[] //Objeto que despliega los usuarios en una lista en el html de users

  constructor(public navCtrl: NavController, private gitHubUsers: GithubUsers) {
    gitHubUsers.load().subscribe(users =>{
      this.users=users;
    })
  }
  //Funciona para ir a la pagina detalles de cada usuario
  goToDetails(login: string){
    this.navCtrl.push(UserDetailsPage,{login: login}); //Ir a la otra pagina se comporta como pila
    //el segundo parametro es lo que quiero mandar a la otra pagina
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

}

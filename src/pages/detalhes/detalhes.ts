import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  //informacoes;
  alunos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //  this.informacoes ='Time: '+ this.navParams.get("time")+
    //      " - Títulos:" + this.navParams.get('titulos');
      this.alunos = this.navParams.get("alunos");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}

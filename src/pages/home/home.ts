import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aluno;
  alunos;
  constructor(public navCtrl: NavController,
      public toastCtrl: ToastController,
      public alertCtrl: AlertController) {
    this.aluno = {nome:'',ra:''};
    this.alunos = [];
  }

  cadastrarComDialog(){
    this.alertCtrl.create({
      title: 'Cadastro',
      message: "Aluno",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Aluno'
        },
        {
          name: 'ra',
          placeholder: 'Ra'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.aluno.nome = data.nome;
            this.aluno.ra = data.ra;
            this.alunos.push(this.aluno);
            this.toastCtrl.create({
              message: 'Aluno '+this.aluno.nome +" adicionado!!",
              duration: 3000
            }).present();
            this.aluno = {nome:'',ra:''};
            console.log('Saved clicked');
          }
        }
      ]
    }).present();

  }

  cadastrar(){
    this.alunos.push(this.aluno);

    this.toastCtrl.create({
      message: 'Aluno '+this.aluno.nome +" adicionado!!",
      duration: 3000
    }).present();

    this.aluno = {nome:'',ra:''};
    console.log(this.alunos);
  }

  mostrarAlunos(){
    this.navCtrl.push(DetalhesPage, {'alunos':this.alunos});
  }


  chamarPagina(){
    this.navCtrl.push(DetalhesPage,{"time":"Palmeiras","titulos":10});
  }

  chamarPaginaRaiz(){
    this.navCtrl.setRoot(DetalhesPage,{"time":"Palmeiras","titulos":10});
  }

}

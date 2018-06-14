import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../../providers/global/global';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EnsaladasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ensaladas',
  templateUrl: 'ensaladas.html',
})
export class EnsaladasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public global: GlobalProvider, public alerta: AlertController ) {
  }

  anadirPlatillo(platillo:any){

    const confirmar = this.alerta.create({
      title: 'Confirmación Plato',
      message: '¿Desea añadir plato a la orden?',
      buttons: [
      {
        text: 'Cancelar',
        handler: ()=>{

        }
      },
      {
        text: 'Confirmar',
        handler: ()=>{
           this.global.listaOrden.push(platillo);
        }
      }]
    });
      confirmar.present();
  }


}

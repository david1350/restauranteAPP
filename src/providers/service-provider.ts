import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/add/operator/map'


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServiceProvider {

  refListaPlatillos:string;
  refListOrdenes:string;

  constructor(public http:HttpClient) {
    this.refListaPlatillos = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/jsonConsultarListaPlatillos.php';
    this.refListOrdenes = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosAdmin/wsJSONConsultarListaPedidosHechos.php';
  }

  //metodo para obtener la informacion en formato json.
  getListaPlatillos(){
  	return this.http.get(this.refListaPlatillos);
  }

  getListaOrdenes(){
      return this.http.get(this.refListOrdenes);
  }

}

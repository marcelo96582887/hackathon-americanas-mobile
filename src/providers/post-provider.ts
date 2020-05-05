import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostProvider{
  server: string = "http://2b2fabbb.ngrok.io/clientes";
  server1: string = "http://2b2fabbb.ngrok.io/clientesLogin";

  email: string;
  senha: string;

    constructor(private http: HttpClient){
    }

    // incluir cliente 
    inserirApi(dados: any, api: string){

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
       
            let url = this.server;
           return this.http.post(url, JSON.stringify(dados), httpOptions)
           .map(res => res); 
  }
  
  // consultar cliente 
  inserirApi2(dados: any, api: string){

    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
   
        let url = this.server1;
       return this.http.post(url,JSON.stringify(dados), httpOptions)
       .map(res => res); 
}


}
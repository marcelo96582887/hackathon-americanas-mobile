import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id: number;
  nome: string;
  celular: string;
  email: string;
  senha: string;
  dadosBusca: any;

  constructor(
    private nativeStorage: NativeStorage,
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.nativeStorage.getItem('localStorage').then((res) => {
      this.dadosBusca = res;
      this.id = this.dadosBusca.id;
      this.nome = this.dadosBusca.nome;
      this.email = this.dadosBusca.email;
      this.celular = this.dadosBusca.celular;
      console.log(res);
    })
    }



}

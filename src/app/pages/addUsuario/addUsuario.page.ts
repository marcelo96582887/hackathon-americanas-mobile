import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController, IonicModule } from '@ionic/angular';
import { Injectable } from "@angular/core";
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-addUsuario',
  templateUrl: './addUsuario.page.html',
  styleUrls: ['./addUsuario.page.scss'],
})

export class AddUsuarioPage implements OnInit {
  nome: string = "";
  telefone: string = "";
  celular: string = "";
  email: string = "";
  senha: string = "";
  confirmaSenha: string = "";
  id: number;

  constructor(
    private router: Router,
    private provider: PostProvider,
    public toast: ToastController,
    private actRoute: ActivatedRoute,
    private nativeStorage: NativeStorage

  ) { }



  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.celular = data.celular;
      this.email = data.email;
      this.senha = data.senha;
      console.log(data);
    });
    
  }


  addUsuario() {
    this.router.navigate(['/addUsuario'])
  }

  async cadastrar() {
    if (this.senha != this.confirmaSenha) {

      const toast = await this.toast.create({
        message: 'Senhas não conferem',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;
    }

    if (!this.nome) {

      const toast = await this.toast.create({
        message: 'Preencha seu nome completo',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;
    }

    if (!this.celular) {

      const toast = await this.toast.create({
        message: 'Preencha o seu Celular',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }
    if (!this.email) {

      const toast = await this.toast.create({
        message: 'Preencha seu email',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;
    }

    if (!this.senha) {

      const toast = await this.toast.create({
        message: 'Cadastre a sua senha',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;
    }
    if (!this.confirmaSenha) {

      const toast = await this.toast.create({
        message: 'Confirme a sua Senha',
        duration: 2000,
        color: 'warning'
      });

      toast.present();
      return;

    }

    return new Promise(resolve => {
      let dados = {
        requisicao: 'post',
        nome: this.nome,
        telefone: this.telefone,
        celular: this.celular,
        email: this.email,
        senha: this.senha,
        confirmaSenha: this.confirmaSenha
      };
      this.provider.inserirApi(dados, '')
        .subscribe(async data => {
          var alert = data['msg'];
          if (data['success']) {
            this.router.navigate(['/tabs/tab1']);
            const toast = await this.toast.create({
              message: 'Inserido com Sucesso',
              duration: 2000,
              color: 'success'
            });
            toast.present();
            this.nome = "";
            this.celular = "";
            this.email = "";
            this.senha = "";
            this.confirmaSenha = "";
            console.log(data);
          } else {
            const toast = await this.toast.create({
              message: alert,
              duration: 2000,
              color: 'danger'
            });
            toast.present();
          }

        });

    })

  }
}

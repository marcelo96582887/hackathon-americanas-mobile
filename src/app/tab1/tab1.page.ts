import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PostProvider } from './../../providers/post-provider';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  show1: boolean;
  show2: boolean;
  dadosBusca: any;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  passwordType: string="password";
  passwordShown: boolean =false;
  dadosLogin: any;
  idEntidade: string = "";
  tipoEntidade: string = "";
  id: number;
  nome: string = "";
  email: string = "";
  senha: string = "";
  celular: string="";
  ddi: string = "";
  ddd: string = "";



  constructor(
    public platform: Platform,
    public nativeStorage: NativeStorage,
    public router: Router,
    public toast:Toast,
    public alert: AlertController,
    public toastController: ToastController,
    private provider: PostProvider,
    private splashScreen: SplashScreen
  ) {
    this.platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.ionViewWillEnter();
     });
  
   this.platform.backButton.subscribe (async () => {
     console.log('this.router.url', this.router.url);
     if (new Date (). getTime () - this.lastTimeBackPress <this.timePeriodToExit) {
     navigator ['app']. exitApp (); 
     } else if (this.router.url === '/tabs/tab1') {
     this.toast.show ('Pressione novamente para sair do aplicativo', '2000',
     'center')
     .subscribe(toast => {
          console.log(JSON.stringify(toast));
     });
     this.lastTimeBackPress = new Date (). getTime ();
     }
     });  
  }

  public mostrarSenha(){
    if(this.passwordShown){
      this.passwordShown =false;
      this.passwordType ='password';
    }else{
      this.passwordShown =true;
      this.passwordType = 'text';
    }
  }

  async ionViewWillEnter(){
    await this.carregar();
    }

    carregar(){
     console.log('Estamos aqui');

    this.nativeStorage.keys().then(data=> {
      if(Array.isArray(data)&& data.length) {
        this.nativeStorage.getItem('localStorage').then((res) => {
          this.dadosBusca = res;
          console.log(res);
          error => console.log(error);
          this.show1 =true; 
          this.show2 = false;
          this.router.navigate(['/dashboard']);        
        })
      } else {
        this.show1=false;
        this.show2 = true;
      }
  })   
  }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  async presentAlert() {
    const alert = await this.alert.create({
      message: 'Você precisa entrar no aplicativo para acessar o seu painel.',
      buttons: ['OK']
    });

    await alert.present();
    }
      async aguardar(): Promise<string> {    
      await this.nativeStorage.keys();
      let data = await this.nativeStorage.getItem("localStorage");
      return (data) ? JSON.stringify(data) : "";
  }

  async login() {
    if (!this.email) {

      const toastController = await this.toastController.create({
        message: 'PREENCHA O EMAIL',
        duration: 2000,
        color: 'warning'
      });

      toastController.present();
      return;
    }

    if (!this.senha) {

      const toastController = await this.toastController.create({
        message: 'PREENCHA A SENHA',
        duration: 2000,
        color: 'warning'
      });
      toastController.present();
      return;
    }

    let dados = {
      requisicao: 'login',
      email: this.email,
      senha: this.senha,
      
    };

    this.provider.inserirApi2(dados, '').subscribe(async data => {
      var alert = data['msg'];
      if (data['success']) {
        this.dadosLogin = data['result'];
        this.id = this.dadosLogin.id;
        this.email = this.dadosLogin.email;
        this.nome = this.dadosLogin.nome;
        this.ddi = this.dadosLogin.ddi;
        this.ddd = this.dadosLogin.ddd;
        this.celular = this.dadosLogin.celular;
        this.senha = this.dadosLogin.senha;
        console.log(this.dadosLogin);

        this.nativeStorage.setItem('localStorage', {id: this.id, nome: this.nome, ddi: this.ddi , ddd:this.ddd ,celular: this.celular, email: this.email, senha: this.senha})
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );  

       this.router.navigate(['/dashboard']).then(() => {
        this.pageRefresh();
      });

        const toastController = await this.toastController.create({
          message: 'LOGADO COM SUCESSO',
          duration: 2000,
          color: 'success'
        });
        toastController.present();
      } else {
        const toastController = await this.toastController.create({
          message: 'ERRO DE CONEXÃO',
          duration: 2000,
          color: 'danger'
        });
        toastController.present();
      }

    });

  }

  pageRefresh() {
    location.reload();
 }

}

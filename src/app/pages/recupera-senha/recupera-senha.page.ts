import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../../providers/post-provider';
import { ToastController, IonicModule } from '@ionic/angular';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {
  email: string = "";
  id: number;

  constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toast: ToastController,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
    this.id = data.id;
    this.email = data.email;
      
      console.log(data);
    });
  }

  recuperaSenha(){
    this.router.navigate(['/recupera-senha'])
    }
  
    async recuperarSenha(){
  
  if(this.email == "" ){
  
    const toast = await this.toast.create({
    message: 'Preencha seu email',
    duration: 4000,
    color: 'warning'
  });
  
  toast.present();
  return;
  }

  
      return new Promise(resolve => {
        let dados = {
          requisicao : 'add',
          email: this.email,
          

        };
        this.provider.inserirApi(dados, '')
        .subscribe(async data => {
          var alert = data['msg'];
          if(data['success']){
          this.router.navigate(['/recupera-senha']);
          const toast = await this.toast.create({
           message: 'Sua nova senha seguirá por SMS.',
           duration: 4000,
           color: 'success'
         });
         toast.present();
         this.email = "";
         console.log(data);
       }else{
        const toast = await this.toast.create({
          message: 'Email Incorreto',
          duration: 4000,
          color: 'danger'
        });
        toast.present();
       }
        
      });
  
    })
   } 
  
  

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router,
    private toast: ToastController,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.logout();

}

  async logout() {
   const toast = await this.toast.create({
     message: 'Sessão Encerrada!',
    duration: 1000,
     color: 'success'
    });

    this.nativeStorage.remove('localStorage')
    .then(
     data => console.log(data),
    error => console.error(error)
    );    
    this.router.navigate(['/tabs/tab1']).then(() => {
      window.location.reload();
    });
   }
}


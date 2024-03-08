import { Component, Input, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contra } from 'src/app/cambiar-contraena/models/contra';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-contraena',
  templateUrl: './cambiar-contraena.page.html',
  styleUrls: ['./cambiar-contraena.page.scss'],
})
export class CambiarContraenaPage implements OnInit {

  
  contra1:string =''
  contra2:string=''
  cedula:string='020202020222'


  constructor(private conexion: ConexionService,
              private toastController: ToastController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  verificarContrasena() {
    if (this.contra1 == this.contra2){

      const dat = {
        contra1: this.contra1,
        cedula: this.cedula
      };

      this.conexion.cambiarContra(dat).subscribe(
        data => {
          this.presentToast('La contrasela se cambio con exito');
          this.closeModal();
        },
        error => {
          this.presentToast('Error al cambiar la contraseña');
          this.closeModal();
        }
      );
    } else {
      this.presentToast('Las contraseñas no coinciden');
      this.closeModal();
    }}



  async closeModal() {
    this.modalCtrl.dismiss(null, 'closed');
  }
    
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }    
}

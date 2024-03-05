/* import { Component,Input, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contra } from 'src/app/cambiar-contraena/models/contra'
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cambiar-contraena',
  templateUrl: './cambiar-contraena.page.html',
  styleUrls: ['./cambiar-contraena.page.scss'],
})
export class CambiarContraenaPage implements OnInit {

  @Input() contra!:Partial<Contra>

  cambiarContraVali:boolean = false

  constructor(private conexion:ConexionService,
              private toastController:ToastController,
              private modalCtrl:ModalController) { }

  ngOnInit() {
    this.cambiarContra()
  }

  form = new FormGroup({
    cedula: new FormControl('',[
      Validators.minLength(6)
    ]),
    contra1: new FormControl('',[
      Validators.minLength(8)
    ]),
    contra2: new FormControl('',[
      Validators.minLength(8)
    ]),
  })

  cambiarContra(){
    if(this.contra){
      this.form.patchValue(
    {
      cedula: this.contra.cedula,
      contra1: this.contra.contra1,
      contra2: this.contra.contra2
    }
      
    ) 
  }
  }

  verificar_contrasena(contra1, contra2){
    if (contra1 == contra2){
      this.cambiarContraVali = true
    }
  }

  form = new FormGroup({
    cedula: new FormControl('', [
      Validators.minLength(6)
    ]),
    contra1: new FormControl('', [
      Validators.minLength(8)
    ]),
    contra2: new FormControl('', [
      Validators.minLength(8)
    ]),
  });
  
  cambiarContra() {
    if (this.contra) {
      this.form.patchValue({
        cedula: this.contra.cedula,
        contra1: this.contra.contra1,
      });
  
      this.verificar_contrasena();
    }
  }
  
  verificar_contrasena() {
    const contra1 = this.form.value.contra1;
    const contra2 = this.form.value.contra2;
  
    if (contra1 === contra2) {
      this.cambiarContraVali = true;
    }
    else{ 
      this.presentToast('las contraseñas no coinciden')
    }
  }


  onSubmit(){

    console.log("Ingreso")

    if(this.cambiarContraVali){
      //cambiar

      const dat:Contra = {
            cedula: this.contra.cedula!,
            contra1: this.form.value.contra1!
          }
      
      this.conexion.cambiarContra(dat).subscribe(
        data=>{
            this.presentToast('contraseña cambiada con exito')
            this.closeModal()
      }, error=>{
        this.presentToast('Error al cambiar la contraseña')
        this.closeModal()
      })

    }else{
          this.presentToast('Las contraseñas no coinciden')
          this.closeModal()
      
      }
    }

  async closeModal(){
    this.modalCtrl.dismiss(null, 'closed')
  }
    
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }    
} */
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

  @Input() contra!: Partial<Contra>;

  cambiarContraVali: boolean = false;

  form = new FormGroup({
    cedula: new FormControl('', [
      Validators.minLength(6)
    ]),
    contra1: new FormControl('', [
      Validators.minLength(8)
    ]),
    contra2: new FormControl('', [
      Validators.minLength(8)
    ]),
  });

  constructor(private conexion: ConexionService,
              private toastController: ToastController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cambiarContra();
  }

  cambiarContra() {
    if (this.contra) {
      this.form.patchValue({
        cedula: this.contra.cedula,
        contra1: this.contra.contra1,
      });

      this.verificarContrasena();
    }
  }

  verificarContrasena() {
    const contra1 = this.form.value.contra1;
    const contra2 = this.form.value.contra2;

    if (contra1 === contra2) {
      this.cambiarContraVali = true;
    } else { 
      this.cambiarContraVali = false; // Resetear el estado de validez si las contraseñas no coinciden
      this.presentToast('Las contraseñas no coinciden');
    }
  }

  onSubmit() {
    if (this.cambiarContraVali) {
      const dat: Contra = {
        cedula: this.contra.cedula!,
        contra1: this.form.value.contra1!
      };

      this.conexion.cambiarContra(dat).subscribe(
        data => {
          this.presentToast('Contraseña cambiada con éxito');
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
    }
  }

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

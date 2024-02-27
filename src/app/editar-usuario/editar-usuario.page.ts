import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  public alertButtons = [
    {
      text: 'Regresar',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Cambiar',
      cssClass: 'alert-button-confirm',
    },
  ];

  public alertButtons2 = [
    {
      text: 'Regresar',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Cambiar',
      cssClass: 'alert-button-confirm',
    },
  ];

  public alertInputs = [
    {
      placeholder: 'Correo',
      type: 'email',
    },
    {
      placeholder: 'coloca de nuevo el correo',
      type: 'email',
    },
  ];

  public alertInputs2 = [
    {
      placeholder: 'Coloca la contraseña',
      type: 'text'
    },
    {
      placeholder: 'Vuelve a colocar la contraseña',
      type: 'text',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

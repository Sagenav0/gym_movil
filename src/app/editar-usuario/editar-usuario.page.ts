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
      cssClass: 'botton',
    },
    {
      text: 'Guardar cambios',
      cssClass: 'botton',
    },
  ];

  public alertButtons2 = [
    {
      text: 'Regresar',
      cssClass: 'botton',
    },
    {
      text: 'Guardar cambios',
      cssClass: 'botton',
    },
  ];

  public alertInputs = [
    {
      placeholder: 'Nuevo correo',
      type: 'email',
      cssClass: 'titulo',
    },
    {
      placeholder: 'Repita el correo',
      type: 'email',
      cssClass: 'Correo',
    },
  ];

  public alertInputs2 = [
    {
      placeholder: 'Nueva contraseña',
      type: 'text',
      cssClass: 'contra',
    },
    {
      placeholder: 'Repita la contraseña',
      type: 'text',
      cssClass: 'contra',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
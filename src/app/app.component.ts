import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'INICIO', url: '/folder/INICIO', icon: 'home' },
    { title: 'AVANCES', url: '/folder/AVANCES', icon: 'analytics' },
    { title: 'MEDIDAS', url: '/folder/MEDIDAS', icon: 'scale' },
    { title: 'PERSONALIZADOS', url: '/folder/PERSONALIZADOS', icon: 'barbell' },
    { title: 'RUTINAS', url: '/folder/RUTINAS', icon: 'barbell' },
    { title: 'CONTACTANOS', url: '/contactanos', icon: 'hand-left' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

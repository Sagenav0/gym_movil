import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },  {
    path: 'cambiar-contraena',
    loadChildren: () => import('./cambiar-contraena/cambiar-contraena.module').then( m => m.CambiarContraenaPageModule)
  },
  {
    path: 'cambiar-correo',
    loadChildren: () => import('./cambiar-correo/cambiar-correo.module').then( m => m.CambiarCorreoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./page/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'notas',
    loadChildren: () => import('./page/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./page/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'horarios',
    loadChildren: () => import('./page/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./page/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./page/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tab2',
    pathMatch: 'full'
  },
  {
    path: 'hero/:id',
    loadChildren: () => import('./hero/hero.module').then( m => m.HeroPageModule)
  },

  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

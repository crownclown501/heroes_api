//heroes-app\src\app\heroes\heroes-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MarvelModule } from './marvel/marvel.module';

const routes: Routes = [
  {path: 'marvel',
    loadChildren:() => import('./marvel/marvel.module').then(m=>m.MarvelModule)
  },
  {path: 'dc',
    loadChildren:() => import('./dc/dc.module').then(m=>m.DcModule)
  },
  { path: '', redirectTo:'',pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

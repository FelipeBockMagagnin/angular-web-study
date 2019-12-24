import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from 'src/pages/games/games.component';
import { CreatorsComponent } from 'src/pages/creators/creators.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent},
  { path: 'creators', component: CreatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

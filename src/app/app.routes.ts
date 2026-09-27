import { Routes } from '@angular/router';
import{MovieList} from './components/movie-list/movie-list';
import{MovieDetail} from './components/movie-detail/movie-detail';
import{Favorites} from './components/favorites/favorites';

export const routes: Routes = [
    {path: '', redirectTo:'movies',pathMatch:'full'},
    {path:'movies', component:MovieList},
    {path:'movies/:id', component:MovieDetail},
    {path:'favorites', component:Favorites},
    {path:'**', redirectTo:'movies'},

    

];

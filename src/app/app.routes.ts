import { Routes } from '@angular/router';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'videos' },
    { path: 'home', component: HomeComponent },
    { path: 'bookmarked', component: BookmarkedComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'tv-series', component: TvSeriesComponent },
    { path: 'signals', component: SignalsComponent },

];

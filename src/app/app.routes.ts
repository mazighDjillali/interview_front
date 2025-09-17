import { Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments';

export const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent }
];

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
    data: { animation: 'users' },
  },
  {
    path: 'users',
    component: ContactListComponent,
    data: { animation: 'users' },
  },

  {
    path: 'users/:id',
    component: ViewContactComponent,
    data: { animation: 'view' },
  },

  { path: '**', component: NotFoundComponent, data: { animation: 'notFound' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

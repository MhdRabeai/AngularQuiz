import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { FilterPipe } from './pipe/filter.pipe';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoaderComponent } from './components/loader/loader.component';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NotFoundComponent,
    FilterPipe,
    ViewContactComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
    
  ],
  providers: [ provideHttpClient(withInterceptors([withHttpCacheInterceptor()])), provideHttpCache()],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}

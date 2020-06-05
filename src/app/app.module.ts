import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templete/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templete/footer/footer.component';
import { NavComponent } from './components/templete/nav/nav.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { MatButtonModule  } from '@angular/material/button';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { CasashowCreateComponent } from './components/casashow/casashow-create/casashow-create.component';
import { CasashowCrudComponent } from './views/casashow-crud/casashow-crud.component';

import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { EventReadComponent } from './components/event/event-read/event-read.component';
import { ClienteReadComponent } from './components/client/cliente-read/cliente-read.component';
import { CasashowReadComponent } from './components/casashow/casashow-read/casashow-read.component';
import { EventRead2Component } from './components/event/event-read2/event-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { EventUpdateComponent } from './components/event/event-update/event-update.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { CasashowUpdateComponent } from './components/casashow/casashow-update/casashow-update.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { CasashowDeleteComponent } from './components/casashow/casashow-delete/casashow-delete.component';


registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EventCrudComponent,
    EventCreateComponent,
    ClientCrudComponent,
    ClientCreateComponent,
    CasashowCreateComponent,
    CasashowCrudComponent,
    EventReadComponent,
    ClienteReadComponent,
    CasashowReadComponent,
    EventRead2Component,
    EventUpdateComponent,
    ClientUpdateComponent,
    CasashowUpdateComponent,
    EventDeleteComponent,
    ClientDeleteComponent,
    CasashowDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

   
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

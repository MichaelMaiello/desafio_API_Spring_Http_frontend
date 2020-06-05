import { CasashowDeleteComponent } from './components/casashow/casashow-delete/casashow-delete.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';
import { CasashowUpdateComponent } from './components/casashow/casashow-update/casashow-update.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { EventUpdateComponent } from './components/event/event-update/event-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { ClientCrudComponent} from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { CasashowCrudComponent} from './views/casashow-crud/casashow-crud.component';
import { CasashowCreateComponent } from './components/casashow/casashow-create/casashow-create.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
}, 
//Event
{
  path: "event",
  component: EventCrudComponent
},
{
  path: "event/create",
  component: EventCreateComponent
},
{
  path: "event/update/:id",
  component: EventUpdateComponent
},
{
  path: "event/delete/:id",
  component: EventDeleteComponent
},

//Client
{
  path: "client",
  component: ClientCrudComponent
},
{
  path: "client/create",
  component: ClientCreateComponent
},
{
  path: "client/update/:id",
  component: ClientUpdateComponent
},
{
  path: "client/delete/:id",
  component: ClientDeleteComponent
},

//CasaShow
{
  path: "casashow",
  component: CasashowCrudComponent
},
{
  path: "casashow/create",
  component: CasashowCreateComponent
},
{
  path: "casashow/update/:id",
  component: CasashowUpdateComponent
},
{
  path: "casashow/delete/:id",
  component: CasashowDeleteComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

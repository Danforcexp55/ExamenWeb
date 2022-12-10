import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';

  const appRoutes:Routes=[
    {path:'create', component:CreateComponent},
    {path:'list', component:ListComponent},
    {path:'edit', component:EditComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

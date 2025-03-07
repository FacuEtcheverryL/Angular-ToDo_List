import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from "./components/addTask/add.component";
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    AddComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
   
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]})
export class AppModule { }

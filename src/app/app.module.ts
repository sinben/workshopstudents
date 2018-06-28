import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './module1/component1/component1.component';
import { Component2Component } from './module2/component2/component2.component';
import { PeopleService } from './services/people.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'module1', component: Component1Component },
  { path: 'module2', component: Component2Component },
  { path: '',
    redirectTo: '/module1',
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    Module1Module,
    Module2Module,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

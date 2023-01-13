import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanComponent } from './plan/plan.component';
import { AddOnComponent } from './add-on/add-on.component';
import { ResumComponent } from './resum/resum.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonalInfoComponent,
    PlanComponent,
    AddOnComponent,
    ResumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { PlanComponent } from "./plan/plan.component";
import { AddOnComponent } from "./add-on/add-on.component";
import { ResumComponent } from "./resum/resum.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";

const routes: Routes = [
  { path: "personal-info", component: PersonalInfoComponent },
  { path: "plan", component: PlanComponent },
  { path: "add-on", component: AddOnComponent },
  { path: "resum", component: ResumComponent },
  { path: "thankyou", component: ThankyouComponent },
  { path: "", component: PersonalInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

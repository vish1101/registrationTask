import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { LoginComponent } from './login/login.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

// import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'registration',component:RegistrationformComponent},
  // {path:'verification',component:VerificationComponent},
  {path:'login',component:LoginComponent},
  {path:'cases', component:CasesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

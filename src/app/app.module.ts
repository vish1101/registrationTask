import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './verification/verification.component';
import { LoginComponent } from './login/login.component';
import { CasesComponent } from './cases/cases.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    HomeComponent,
    VerificationComponent,
    LoginComponent,
    CasesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
      provide:TranslateLoader,
      useFactory:TraslateFactoiry,
      deps:[HttpClient]
      }
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function TraslateFactoiry(HttpClient:HttpClient){
  return new TranslateHttpLoader(HttpClient)
}
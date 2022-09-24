import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
export class AsyncValidatorEmail {
  static forbiddenEmail(control:AbstractControl):Promise<any> | Observable<any>{
    const p = new Promise((resolve , reject) =>{
      setTimeout(() => {
        if(control.value === 'admin@gmail.com'){
          resolve({emailError : 'this Email id is Already Exist'})
        }else{
          resolve(null)
        }
      }, 1000);
    })
    return p;
  }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpaceValidator {
    static canNotAllowSpace(control:AbstractControl): ValidationErrors | null{
        if((control.value as string)?.indexOf(' ') >= 0){
            return {canNotAllowSpace:'space is Not Allowed !!!'}
        }else{
            return null
        }
    }
}
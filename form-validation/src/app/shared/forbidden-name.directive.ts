import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(namePe: RegExp):ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = namePe.test(control.value)
        return forbidden ? {'forbiddenName' : {value: control.value}} : null
    }
}
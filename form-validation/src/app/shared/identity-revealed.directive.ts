import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const identityRevealedValidator: ValidatorFn = (control : AbstractControl) :ValidationErrors | null => {
    const name = control.get("name")
    const age = control.get("age")

    return name && age && name.value === age.value ? { 'identityRevealed': true }: null
}

@Directive({
    selector: '[appIdentityRevealed]',
    providers: [{ provide: NG_VALIDATORS, useExisting: identityRevealedValidatorDirective, multi: true}]
})
export class identityRevealedValidatorDirective implements Validator{
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return identityRevealedValidator(control)
    }
}
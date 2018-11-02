
import { AbstractControl } from '@angular/forms';

export function validateDate(control: AbstractControl, age: number = 18) {
  let time = new Date().getTime() - new Date(control.value).getTime();
  time = time / 1000 / 60 / 60 / 24 / 365;
  if (time >= age)
    return null;
  return { validDate: true };
}

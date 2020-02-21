import { FormControl, ValidationErrors } from '@angular/forms';

export function validateTrim(c: FormControl): ValidationErrors | null {
  const str = c.value as string;

  if (str.trim().length > 0) {
    return null;
  }
  return {
    trimError: 'champ vide',
  };
}

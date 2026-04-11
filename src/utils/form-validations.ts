import {
  AbstractControl,
  FormArray,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';

export class Validations {
  static LANG = 'es';

  /**
   * Regular Expression to email
   */
  static PATTERN_EMAIL: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * A Compose Validation for a string with spaces
   */
  static ForPassword = Validators.compose([Validators.minLength(8)]);
  /**
   * A Compose Validation for a string with spaces
   */
  static ForEmail = Validators.compose([
    Validators.email,
    Validators.pattern(Validations.PATTERN_EMAIL),
  ]);
  static ForEmailNoRequired = Validators.compose([
    Validators.email,
    Validators.pattern(Validations.PATTERN_EMAIL),
  ]);
}

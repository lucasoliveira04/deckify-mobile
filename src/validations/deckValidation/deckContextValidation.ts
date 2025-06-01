import { IValidationFields } from "../interfaces/IValidationFields";

export class DeckContextValidation implements IValidationFields {
  validate(field: string, value: string | number | boolean): string | true {
    if (value === undefined || value === null || value === "") {
      return `${field} não pode ser vazio.`;
    }

    return true;
  }
}

import { IValidationFields } from "../interfaces/IValidationFields";

export class DeckNameValidation implements IValidationFields {
  validate(field: string, value: string | number | boolean): string | true {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (typeof value !== "string") {
      return `${field} deve ser uma string.`;
    }

    if (!regex.test(value)) {
      return `${field} contém caracteres inválidos.`;
    }

    if (value.length < 3) {
      return `${field} deve ter pelo menos 3 caracteres.`;
    }

    if (value.length > 20) {
      return `${field} deve ter no máximo 20 caracteres.`;
    }

    return true;
  }
}

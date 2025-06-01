export interface IValidationFields {
  validate: (field: string, value: string | number | boolean) => string | true;
}

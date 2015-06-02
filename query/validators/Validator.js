/**
 * Parameter validator for calls.
 *
 * @interface
 interface Validator {
   validate(schema: Schema,
            parameter: validated parameter,
            parameters: all parameters): boolean or throws exception
 }
 **/
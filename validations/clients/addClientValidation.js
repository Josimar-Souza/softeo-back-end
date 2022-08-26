const joi = require('joi');

const addClientSchema = joi.object({
  name: joi.string()
    .min(3)
    .max(30)
    .required(),
  email: joi.string()
    .email()
    .required(),
  phone: joi.string()
    .regex(/\d{11}/)
    .required(),
  installments: joi.array()
    .items(joi.object({
      date: joi.string()
        .regex(/\d{2}(-)\d{2}(-)\d{4}/)
        .required(),
      value: joi.number()
        .required(),
    })),
});

module.exports = (value) => addClientSchema.validate(value);

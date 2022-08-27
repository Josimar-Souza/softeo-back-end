const joi = require('joi');

const updateCustmomerSchema = joi.object({
  name: joi.string()
    .min(3)
    .max(30),
  email: joi.string()
    .email(),
  phone: joi.string()
    .regex(/\d{11}/),
  installments: joi.array()
    .items(
      joi.object(
        {
          date: joi.string()
            .regex(/\d{2}(-)\d{2}(-)\d{4}/)
            .required(),
          value: joi.number()
            .required(),
        },
      )
        .required(),
    ),
});

module.exports = (value) => updateCustmomerSchema.validate(value);

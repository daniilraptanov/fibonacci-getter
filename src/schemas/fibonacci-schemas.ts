const Joi = require("joi");

export const indexSchema = Joi.object({
    index: Joi.number().required(),
});

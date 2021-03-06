const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
    firstName: Joi.string().min(1).max(1024).required(),
    lastName: Joi.string().min(1).max(1024).required(),
    email: Joi.string().min(6).max(255).required().email(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};

const joi = require('joi');

const badge = joi.object({
  firstName: joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  lastName: joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  email: joi.string()
    .email()
    .required(),
  jobTitle: joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  twitter: joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .optional()
    .empty("")
});

module.exports = badgesValidation = (reqBodyBadge) => badge.validate(reqBodyBadge, { abortEarly: false});
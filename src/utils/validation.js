import * as Yup from 'yup'

export const userSchema = Yup.object({
  name: Yup.string()
    .required()
    .min(7),
  username: Yup.string()
    .required()
    .min(3),
  email: Yup.string()
    .email()
    .required(),
  street: Yup.string()
    .required()
    .min(3),
  suite: Yup.string()
    .required()
    .min(2),
  city: Yup.string()
    .required()
    .min(3),
  zipcode: Yup.number()
    .required()
    .min(4),
  phone: Yup.number()
    .required()
    .min(8),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    ),
  companyName: Yup.string()
    .required().min(3),
  catchPhrase: Yup.string(),
  bs: Yup.string()
})
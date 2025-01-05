import * as Yup from 'yup';

export interface ContactFormValues {
  name: string;
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

export const publicContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .required('Veuillez saisir votre nom')
    .min(3, '3 caractères minimum'),
  firstName: Yup.string()
    .required('Veuillez saisir votre prénom')
    .min(3, 'Veuillez saisir un prénom de 3 caractères minimum'),
  email: Yup.string()
    .email('Veuillez saisir une adresse email valide')
    .required('Veuillez saisir votre adresse email'),
  subject: Yup.string()
    .required('Veuillez saisir un sujet')
    .min(8, '8 caractères minimum')
    .max(100, '100 caractères maximum'),
  message: Yup.string()
    .required('Veuillez saisir un message')
    .min(100, '100 caractères minimum')
    .max(1000, '1000 caractères maximum'),
});

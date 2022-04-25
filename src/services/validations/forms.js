import * as Yup from 'yup';
import { validateMinAndMaxTime } from './functions';

export const schedulingFormSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .required('Campo Obrigatório')
    .matches(/^[A-Za-zà-úÀ-Ú ]+$/, ' O campo nome deve conter apenas letras'),
  birthday: Yup.date().required('Campo Obrigatório!').nullable(),
  selectedDate: Yup.date()
    .test('selectedDate', 'Horário inválido!', () => validateMinAndMaxTime)
    .required('Campo Obrigatório!')
    .nullable(),
});

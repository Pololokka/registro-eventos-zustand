import * as yup from 'yup';

export const eventSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3, 'Preencha corretamente este campo!')
    .required('Preencha este campo!'),
  tipoFesta: yup.string().required('Escolha uma opção!'),
  tipOutro: yup.string().when('eventType', {
    is: 'Outro',
    then: (schema) => schema.required('Preencha este campo!'),
    otherwise: (schema) => schema.min(0),
  }),
  quantidadeMin: yup
    .number()
    .integer()
    .typeError('Preencha corretamente o campo de mínimo de pessoas!')
    .required('Preencha o campo de mínimo de pessoas!'),
  quantidadeMax: yup
    .number('Preencha o campo de máximo de pessoas!')
    .integer('Preencha corretamente este campo!')
    .typeError('Preencha corretamente o campo de máximo de pessoas!')
    .required('Preencha o campo de máximo de pessoas!'),
  email: yup
    .string()
    .email()
    .typeError('Preencha corretamente este campo!')
    .required('Preencha este campo!'),
  cpfCnpj: yup
    .number()
    .test(
      'len',
      'Preencha corretamente este campo!',
      (val) => val.toString().length >= 11,
    )
    .typeError('Preencha corretamente este campo!')
    .required('Preencha este campo!'),
  tema: yup.string(),
  idade: yup
    .string()
    .typeError('')
    .when('eventType', {
      is: 'Aniversário',
      then: (schema) =>
        schema
          .typeError('Preencha corretamente este campo!')
          .required('Preencha este campo!'),
      otherwise: (schema) => schema.min(0),
    }),
  genero: yup.string().when('eventType', {
    is: 'Aniversário',
    then: (schema) => schema.required('Preencha este campo!'),
    otherwise: (schema) => schema.min(0),
  }),
  conheceu: yup.string(),
  conheceuOutro: yup.string().when('foundOut', {
    is: 'Outro',
    then: (schema) => schema.min(0),
  }),
});

export const eventSchemaDictionary = {
  nome: 'Nome Completo/Razão Social',
  tipoFesta: 'Tipo de Evento/Festa',
  tipOutro: 'Especifique',
  quantidadeMin: 'Mínimo',
  quantidadeMax: 'Máximo',
  email: 'Email',
  cpfCnpj: 'CPF/CNPJ',
  tema: 'Tema da Festa',
  idade: 'Idade do Aniversariante',
  genero: 'Gênero do Aniversariante',
  conheceu: 'Como nos Conheceu?',
  conheceuOutro: 'Especifique',
};

import { create } from 'zustand';

type formTypes = {
  nome: string;
  tipoFesta: string;
  tipOutro: string;
  quantidadeMin: number;
  quantidadeMax: number;
  email: string;
  cpfCnpj: string;
  tema: string;
  idade: number;
  genero: string;
  conheceu: string;
  conheceuOutro: string;
};

type formDefaultValue = {
  nome: '';
  tipoFesta: '';
  tipOutro: '';
  quantidadeMin: '';
  quantidadeMax: '';
  email: '';
  cpfCnpj: '';
  tema: '';
  idade: '';
  genero: '';
  conheceu: '';
  conheceuOutro: '';
};

type FormStore = {
  answers: formTypes;
  changeAnswer: (field: string, value: string | number) => void;
  clearAnswers: () => void;
};

//@ts-ignore
export const useFormStore = create<FormStore>((set) => {
  return {
    answers: {},

    changeAnswer: (field, value) => {
      console.log(field);
      console.log(value);
      set((state) => ({ answers: { ...state.answers, [field]: value } }));
    },

    //@ts-ignore
    clearAnswers: () => set(() => ({ answers: formDefaultValues })),
  };
});

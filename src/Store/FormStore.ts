import { create } from 'zustand';

type formShowTypes = {
  tipoFestaAniversário: boolean;
  tipoFestaOutro: boolean;
  conheceuOutro: boolean;
};

export const formShowDefaultValues = {
  tipoFestaAniversário: false,
  tipoFestaOutro: false,
  conheceuOutro: false,
};

type FormShowStore = {
  formShowValues: formShowTypes;
  showField: (field: string, value: string | number) => void;
};

//@ts-ignore
export const useFormShowStore = create<FormShowStore>((set) => {
  return {
    formShowValues: {},

    showField: (fieldValue) => {
      console.log(fieldValue);
      set((state) => ({
        formShowValues: {
          ...state.formShowValues,
          //@ts-ignore
          [fieldValue]: !state.formShowValues[fieldValue],
        },
      }));
    },
  };
});

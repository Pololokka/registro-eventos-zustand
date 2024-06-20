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
  showField: (value: string) => void;
};

//@ts-ignore
export const useFormShowStore = create<FormShowStore>((set) => {
  return {
    formShowValues: {},

    showField: (fieldValue) => {
      if (
        fieldValue == 'tipoFestaAniversário' ||
        fieldValue == 'tipoFestaOutro' ||
        fieldValue == 'conheceuOutro'
      ) {
        set((state) => ({
          formShowValues: {
            ...state.formShowValues,
            //@ts-ignore
            [fieldValue]: !state.formShowValues[fieldValue],
          },
        }));
      } else {
        return null;
      }
    },
  };
});

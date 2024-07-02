import { create } from 'zustand';

export interface FormShowStore {
  tipoFesta: string;
  conheceu: string;
  showField: (name: string, value: string) => void;
}

export const useFormShowStore = create<FormShowStore>((set) => ({
  tipoFesta: '',
  conheceu: '',
  showField: (name: string, fieldValue: string) =>
    set((state) => ({
      ...state,
      [name]: fieldValue,
    })),
}));

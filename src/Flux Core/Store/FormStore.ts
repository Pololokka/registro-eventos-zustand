import { create } from 'zustand';
import { dispatchAction } from '../Actions/FormActions';

export interface FormShowStore {
  state: ShowFormState;
  dispatch: (action: dispatchAction) => void;
}

type ShowFormState = {
  tipoFesta: string;
  conheceu: string;
};

const initialState = {
  tipoFesta: '',
  conheceu: '',
} as ShowFormState;

export const useFormShowStore = create<FormShowStore>((set) => ({
  state: initialState,
  dispatch: (action: dispatchAction) => {
    switch (action.type) {
      case 'showField':
        set((store) => ({
          ...store,
          state: {
            ...store.state,
            [action.payload.name]: action.payload.fieldValue,
          },
        }));
        break;

      default:
        break;
    }
  },
}));

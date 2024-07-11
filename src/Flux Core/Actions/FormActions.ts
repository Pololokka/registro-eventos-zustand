export type dispatchAction = { type: keyof typeof FormActions; payload?: any };

export const FormActions = {
  showField: (name: string, fieldValue: string): dispatchAction => ({
    type: 'showField',
    payload: { name, fieldValue },
  }),
};

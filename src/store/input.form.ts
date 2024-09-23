import { InputFormType } from "@/types/input.form.type";
import { create } from "zustand";

interface InputFormStoreState {
  inputForm: InputFormType;
  setInputForm: (inputForm: InputFormType) => void;
}

export const useInputFormStore = create<InputFormStoreState>((set) => ({
  inputForm: {
    patrimoine: "Cresus",
    agregat: true,
    tresorerie: true,
    immobilisations: true,
    obligations: true,
    debut: "2024-07-01",
    fin: "2024-07-16",
  },
  setInputForm: (inputForm: InputFormType) =>
    set(() => ({ inputForm: inputForm })),
}));

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//==================================

//==================================

const util = createSlice({
  name: "util",
  initialState: {
    Atividade1ShowOrHide: true,
    Atividade2ShowOrHide: false,
    Atividade3ShowOrHide: false,
  },

  reducers: {
    Atividade1ShowOrHide(state, action: PayloadAction<boolean>) {
      state.Atividade1ShowOrHide = action.payload;
    },

    //==================================
    Atividade2ShowOrHide(state, action: PayloadAction<boolean>) {
      state.Atividade2ShowOrHide = action.payload;
    },
    //==================================
    Atividade3ShowOrHide(state, action: PayloadAction<boolean>) {
      state.Atividade3ShowOrHide = action.payload;
    },
  },
});

// Exportar as Funçoes
export const {
  Atividade1ShowOrHide,
  Atividade2ShowOrHide,
  Atividade3ShowOrHide,
} = util.actions;

export default util.reducer;

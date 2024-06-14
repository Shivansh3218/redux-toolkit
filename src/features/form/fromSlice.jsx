import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      // action => type and payload
      const { name, value } = action.payload;// destructuringg payload
      state.formData[name] = value; // setting the formData fields dynamically, whatever the field name is coming it will automatically be stored with the name of the key
      console.log(name, value);
    },
    resetForm: (state) => {
      state.formData = {};// setting the formData as an empty object
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;

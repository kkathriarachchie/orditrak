import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  orderId: string;
  customerName: string;
  customerPhone: string;
  guests: number;
  table: string | number | null;
}

const initialState: CustomerState = {
  orderId: "",
  customerName: "",
  customerPhone: "",
  guests: 0,
  table: null,
};

interface SetCustomerPayload {
  name: string;
  phone: string;
  guests: number;
}

interface UpdateTablePayload {
  table: string | number | null;
}

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<SetCustomerPayload>) => {
      const { name, phone, guests } = action.payload;
      state.orderId = `${Date.now()}`;
      state.customerName = name;
      state.customerPhone = phone;
      state.guests = guests;
    },

    removeCustomer: (state) => {
      state.customerName = "";
      state.customerPhone = "";
      state.guests = 0;
      state.table = null;
    },

    updateTable: (state, action: PayloadAction<UpdateTablePayload>) => {
      state.table = action.payload.table;
    },
  },
});

export const { setCustomer, removeCustomer, updateTable } =
  customerSlice.actions;
export default customerSlice.reducer;

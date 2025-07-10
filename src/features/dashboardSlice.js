import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    weeklySales: 12000,
    weeklyOrders: 320,
    visitorsOnline: 850,
  },
  reducers: {},
});

export default dashboardSlice.reducer;
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialItems = {
  'Fruits and vegetables': [
    { item: 'Avocado', count: 0 },
    { item: 'Banana', count: 0 },
    { item: 'Bunch of carrots 5pcs', count: 0 },
    { item: 'Chicken 1kg', count: 0 },
    { item: 'Pre-cooked corn 450g', count: 0 },
    { item: 'Mandarin Nadorcott', count: 0 },
    { item: 'Piele De Sapo Melon', count: 0 },
    { item: 'Watermelon', count: 0 },
  ],
  'Meat and Fish': [
    { item: 'Chicken leg box', count: 0 },
    { item: 'Chicken 1kg', count: 0 },
    { item: 'Pork fillets 450g', count: 0 },
    { item: 'Salmon 1kg', count: 0 },
  ],
  Beverages: [
    { item: 'Barley', count: 0 },
    { item: 'Hot drinks', count: 0 },
    { item: 'Wine', count: 0 },
    { item: 'Cocktails', count: 0 },
    { item: 'Cider', count: 0 },
    { item: 'Beer', count: 0 },
    { item: 'Chocolate', count: 0 },
    { item: 'Mixed Drinks', count: 0 },
  ],
  Pet: [
    { item: 'Chicken', count: 0 },
    { item: 'Pork', count: 0 },
    { item: 'Whole grain', count: 0 },
    { item: 'Hamster Feed', count: 0 },
  ],
}

const itemsSlice = createSlice({
  name: 'Items',
  initialState: initialItems,
  reducers: {
    addItem(state, { payload }) {
      if (state[payload.category]) {
        const idx =
          state[payload.category].findIndex(
            item => item.item === payload.item
          ) + 1
        if (idx) {
          state[payload.category][idx - 1] = {
            ...state[payload.category][idx - 1],
            count: state[payload.category][idx - 1].count + 1,
          }
        } else {
          state[payload.category] = [
            ...state[payload.category],
            { item: payload.item, count: 0 },
          ]
        }
      } else {
        state[payload.category] = [payload.item]
      }
    },
  },
})

const eventsSlice = createSlice({
  name: 'Events',
  initialState: {},
  reducers: {
    addEvent(state, { payload }) {
      if (state[payload.date]) {
        state[payload.date] = [
          ...state[payload.date],
          { name: payload.name, date: payload.day, status: payload.state },
        ]
      } else {
        state[payload.date] = [
          { name: payload.name, date: payload.day, status: payload.state },
        ]
      }
    },
  },
})

export default { items: itemsSlice.actions, events: eventsSlice.actions }

export const store = configureStore({
  reducer: { items: itemsSlice.reducer, events: eventsSlice.reducer },
})

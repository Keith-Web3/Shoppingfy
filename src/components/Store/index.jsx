import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialItems = {
  'Fruits and vegetables': [
    { item: 'Avocado', count: 1 },
    { item: 'Banana', count: 1 },
    { item: 'Bunch of carrots 5pcs', count: 1 },
    { item: 'Chicken 1kg', count: 1 },
    { item: 'Pre-cooked corn 450g', count: 1 },
    { item: 'Mandarin Nadorcott', count: 1 },
    { item: 'Piele De Sapo Melon', count: 1 },
    { item: 'Watermelon', count: 1 },
  ],
  'Meat and Fish': [
    { item: 'Chicken leg box', count: 1 },
    { item: 'Chicken 1kg', count: 1 },
    { item: 'Pork fillets 450g', count: 1 },
    { item: 'Salmon 1kg', count: 1 },
  ],
  Beverages: [
    { item: 'Barley', count: 1 },
    { item: 'Hot drinks', count: 1 },
    { item: 'Wine', count: 1 },
    { item: 'Cocktails', count: 1 },
    { item: 'Cider', count: 1 },
    { item: 'Beer', count: 1 },
    { item: 'Chocolate', count: 1 },
    { item: 'Mixed Drinks', count: 1 },
  ],
  Pet: [
    { item: 'Chicken', count: 1 },
    { item: 'Pork', count: 1 },
    { item: 'Whole grain', count: 1 },
    { item: 'Hamster Feed', count: 1 },
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
            { item: payload.item, count: 1 },
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
          { name: payload.name, day: payload.day, state: payload.state },
        ]
      } else {
        state[payload.date] = [
          { name: payload.name, day: payload.day, state: payload.state },
        ]
      }
    },
  },
})

export default itemsSlice.actions

export const store = configureStore({
  reducer: { items: itemsSlice.reducer, events: eventsSlice.reducer },
})

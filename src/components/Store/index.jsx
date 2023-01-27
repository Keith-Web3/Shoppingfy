import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialItems = {
  'Fruits and vegetables': [
    { item: 'Avocado', count: 0, checked: false },
    { item: 'Banana', count: 0, checked: false },
    { item: 'Bunch of carrots 5pcs', count: 0, checked: false },
    { item: 'Chicken 1kg', count: 0, checked: false },
    { item: 'Pre-cooked corn 450g', count: 0, checked: false },
    { item: 'Mandarin Nadorcott', count: 0, checked: false },
    { item: 'Piele De Sapo Melon', count: 0, checked: false },
    { item: 'Watermelon', count: 0, checked: false },
  ],
  'Meat and Fish': [
    { item: 'Chicken leg box', count: 0, checked: false },
    { item: 'Chicken 1kg', count: 0, checked: false },
    { item: 'Pork fillets 450g', count: 0, checked: false },
    { item: 'Salmon 1kg', count: 0, checked: false },
  ],
  Beverages: [
    { item: 'Barley', count: 0, checked: false },
    { item: 'Hot drinks', count: 0, checked: false },
    { item: 'Wine', count: 0, checked: false },
    { item: 'Cocktails', count: 0, checked: false },
    { item: 'Cider', count: 0, checked: false },
    { item: 'Beer', count: 0, checked: false },
    { item: 'Chocolate', count: 0, checked: false },
    { item: 'Mixed Drinks', count: 0, checked: false },
  ],
  Pet: [
    { item: 'Chicken', count: 0, checked: false },
    { item: 'Pork', count: 0, checked: false },
    { item: 'Whole grain', count: 0, checked: false },
    { item: 'Hamster Feed', count: 0, checked: false },
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
    removeItem(state, { payload }) {
      const idx = state[payload.category].findIndex(
        item => item.item === payload.item
      )

      state[payload.category][idx] = {
        item: payload.item,
        count: state[payload.category][idx].count - 1,
      }
    },
    toggleChecked(state, { payload }) {
      const idx = state[payload.category].findIndex(
        item => item.item === payload.item
      )

      state[payload.category][idx] = {
        ...state[payload.category][idx],
        checked: !state[payload.category][idx].checked,
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

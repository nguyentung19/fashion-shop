import { createSlice, current } from "@reduxjs/toolkit";

const productsArray = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = { productsArray: productsArray }

export const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const checkItem = findItem(state.productsArray, newItem)
            if (checkItem.length > 0) {
                state.productsArray = deleteItem(state.productsArray, newItem)
                state.productsArray = [...state.productsArray, {
                    ...newItem,
                    id: checkItem[0].id,
                    quantity: checkItem[0].quantity + newItem.quantity
                }]
            } else {
                state.productsArray = [...state.productsArray, {
                    id: state.productsArray.length + 1,
                    ...newItem
                }]
            }
            localStorage.setItem("cartItems", JSON.stringify(sortItem(state.productsArray)))
        },
        updateQuantity: (state, action) => {
            let index = state.productsArray.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                if (action.payload.boolean) {
                    state.productsArray[index].quantity += 1
                } else {
                    if (state.productsArray[index].quantity > 1) {
                        state.productsArray[index].quantity -= 1
                    }
                }
            }
            localStorage.setItem("cartItems", JSON.stringify(sortItem(state.productsArray)))
        },
        removeItem: (state, action) => {
            let index = state.productsArray.findIndex(product => product.id === action.payload)
            if (index !== -1) {
                state.productsArray.splice(index, 1)
                state.productsArray = state.productsArray.map((product, index) => {
                   return {
                       ...product,
                       id : index + 1
                   }
                })  
            }
            localStorage.setItem("cartItems", JSON.stringify(state.productsArray))
        }
    }
})

const findItem = (state, newItem) => {
    return state.filter(item =>
        item.slug === newItem.slug &&
        item.color === newItem.color &&
        item.size === newItem.size
    )
}

const deleteItem = (state, newItem) => {
    return state.filter(item =>
        item.slug !== newItem.slug &&
        item.color !== newItem.color &&
        item.size !== newItem.size
    )
}

const sortItem = (array) => {
    if (array.length > 0) return array.sort((a, b) => a.id - b.id)
}

export const { addItem, updateQuantity, removeItem } = cartItemsSlice.actions

export default cartItemsSlice.reducer
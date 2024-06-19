import { createReducer } from "@reduxjs/toolkit"
import { productActions } from "../actions/products"

const initialState: {text: string} = { text: "" }
const { captureText } = productActions

const productsReducer = createReducer(
	initialState,
	(build) => build.addCase(
		captureText,
		(state, action) => {
			const newState = { ...state, text: action.payload.text }
			return newState
		}
	)
)

export { productsReducer }
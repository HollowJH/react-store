import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
	"captureText",
	obj => ({ payload: { text: obj.text } })
)

const productActions = { captureText }

export { productActions, captureText }
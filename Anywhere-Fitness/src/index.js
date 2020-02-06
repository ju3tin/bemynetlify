import React from "../node_modules/@types/react"
import ReactDOM from "../node_modules/@types/react-dom"
import { createStore, applyMiddleware } from "../node_modules/redux"
import { Provider } from "../node_modules/react-redux/lib"
import thunk from "../node_modules/redux-thunk"
import logger from "../node_modules/redux-logger/dist/redux-logger"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { fitnessReducer } from "./reducers/fitnessReducer"

const store = createStore(fitnessReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

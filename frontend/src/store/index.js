import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createAppropriateStore = createStore;
// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const tronMiddleware =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createAppropriateStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware()
  )
);

sagaMiddleware.run(sagas);

export default store;

// import { createStore, compose, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

// import reducers from "./ducks";
// import sagas from "./sagas";

// const middlewares = [];

// const sagaMonitor =
//   process.env.NODE_ENV === "development"
//     ? console.tron.createSagaMonitor()
//     : null;

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// middlewares.push(sagaMiddleware);

// const tronMiddleware =
//   process.env.NODE_ENV === "development"
//     ? console.tron.createEnhancer
//     : () => {};

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(...middlewares),
//     tronMiddleware()
//   )
// );

// sagaMiddleware.run(sagas);

// export default store;

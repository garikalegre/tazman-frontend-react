import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root.reducer';
import { rootSaga } from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export { store };

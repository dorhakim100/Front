import { legacy_createStore as createStore, combineReducers } from 'redux'

import { gameReducer } from './reducers/game.reducer'



const rootReducer = combineReducers({
    gameModule: gameReducer,
    // userModule: userReducer,
    // systemModule: systemReducer,
  })

  export const store = createStore(rootReducer, undefined)

export type RootState = ReturnType<typeof rootReducer>;
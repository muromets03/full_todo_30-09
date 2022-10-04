import {takeLatest} from "redux-saga/effects"
import ACTIONS_TYPES from "../actions/types"

import {createUserSagas,  getAllUsersSaga} from './userSagas'

function* rootSaga(){
yield takeLatest(ACTIONS_TYPES.CREATE_USER_REQUESTS, createUserSagas)
yield takeLatest(ACTIONS_TYPES.GET_USERS_REQUEST, getAllUsersSaga)
}

export default rootSaga
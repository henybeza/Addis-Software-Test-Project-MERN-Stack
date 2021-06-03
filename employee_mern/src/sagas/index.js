import {takeEvery} from 'redux-saga/effects';



function createEmployeeAsync(){
    yield put({type:'CREATE_EMPLOYEE_ASYNC', value:})
}


export default* watchCreateEmployee(){
    yield takeEvery('CREATE_EMPLOYEE',createEmployeeAsync);
}
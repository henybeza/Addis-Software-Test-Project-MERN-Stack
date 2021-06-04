import {takeLatest, put} from 'redux-saga/effects';

//A saga for creating an employee

function createEmployeeAsync(){
    yield put({type:'CREATE_EMPLOYEE_ASYNC', value:})
}


export default* watchCreateEmployee(){
    yield takeLatest('CREATE_EMPLOYEE',createEmployeeAsync);
}
    

//A saga for reading employee
    
//A saga for updating employee

//A saga for deleting employee 
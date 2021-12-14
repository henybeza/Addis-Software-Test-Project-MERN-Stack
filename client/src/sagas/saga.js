import {delay} from 'redux-saga';
import{takeEvery,put} from 'redux-saga/effects';
		//Step2: Make API calls/asynchronus tasks and dispatch another action 
		//that will reach the reducer
function* createEmployeeAsync(){
		//Async tasks example
	yield delay(4000);
		//Dispatch a new action to the reducer
	yield put({type:'CREATE_EMPLOYEE_ASYNC', value:''})
}

function* readEmployeeAsync(){
		//Async tasks example
	yield delay(6000);
		//Dispatch a new action to the reducer
	yield put({type:'READ_EMPLOYEE_ASYNC', value:''})
}

function* updateEmployeeAsync(){
		//Async tasks example
	yield delay(8000);
		//Dispatch a new action to the reducer
	yield put({type:'UPDATE_EMPLOYEE_ASYNC', value:''})
}

function* deleteEmployeeAsync(){
		//Async tasks example
	yield delay(2000);
		//Dispatch a new action to the reducer
	yield put({type:'DELETE_EMPLOYEE_ASYNC', value:''})
}


		//Step1: Watch for the actions dispatched from the UI
		//and call the corresponding function to make the 
		//asynchronus task
export function* watchCreateEmployee(){
	yield takeEvery('CREATE_EMPLOYEE',createEmployeeAsync);
}

export function* watchReadEmployee(){
	yield takeEvery('READ_EMPLOYEE',readEmployeeAsync);
}

export function* watchUpdateEmployee(){
	yield takeEvery('UPDATE_EMPLOYEE',updateEmployeeAsync);
}

export function* watchDeleteEmployee(){
	yield takeEvery('DELETE_EMPLOYEE',deleteEmployeeAsync);
}
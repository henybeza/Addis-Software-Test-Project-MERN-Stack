//Step1: Get the newly dipached action from the sagaMiddleWare
//Step2: Update the state in the store based on the the new action type

const initialState = {
	//The initial state of the application goes here
}

const reducer = function(state = initialState,action){
	const newState = {...initialState};

	switch(action.type){
		case 'CREATE_EMPLOYEE_ASYNC':
				//update the newState with new employee
			  break;
		case 'READ_EMPLOYEE_ASYNC':
				//Read the values in the newState 
			  break;
		case 'UPDATE_EMPLOYEE_ASYNC':
				//Update the values newState 
			  break;
		case 'DELETE_EMPLOYEE_ASYNC':
				//Delete the values in the newState
			  break;

	}

	return newState;
	//update the state based on the new action type from the sagaMiddleWare

};
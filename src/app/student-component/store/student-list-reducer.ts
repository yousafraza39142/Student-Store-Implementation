import {Student} from '../student-model'
import { Action } from '@ngrx/store'
import * as studentActions from './student-list-actions'

export interface AppState{
    studentList: State
}
  
export interface State{
   students:Student[];
   // editedIngredient:Student;
   // editedIngredientIndex: number;
}

const initialState = {
    students: [
      new Student('Yousaf',112),
      new Student('Ali',115)
    ]
}

export function student_list_reducer(state = initialState, action:studentActions.studentActions){
    switch(action.type){
        case studentActions.ADD_STUDENT:
            return{
                ...state,
                students: [...state.students,action.payload]
            }
        case studentActions.ADD_STUDENTS:
            return{
                ...state,
                students: [...state.students,...action.payload]
            } 
        default:
            return state; 
    }
}
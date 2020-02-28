import {Student} from '../student-model'
import { Action } from '@ngrx/store'
import * as studentActions from './student-list-actions'

export interface AppState{
    studentList: State
}
  
export interface State{
   students:Student[];
   editedStudent:Student;
   editedStudentIndex: number;
}

const initialState = {
    students: [
      new Student('Yousaf',112),
      new Student('Ali',115)
    ],
    editedStudent:null,
    editedStudentIndex: -1
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
        case studentActions.UPDATE_STUDENT:
            const student = state.students[state.editedStudentIndex];
            const updatedStudent = {
                ...student,
                ...action.payload
            }
            const updatedStudents = [...state.students]
            updatedStudents[state.editedStudentIndex] = updatedStudent;
            return{
                ...state,
                students: updatedStudents
            }
        case studentActions.DELETE_STUDENT:
            state.students.splice(state.editedStudentIndex,1)
            return{
                ...state,
                students: state.students
            }
        case studentActions.START_EDIT:
            return{
                ...state,
                editedStudent: {...state.students[action.payload]},
                editedStudentIndex : action.payload
            }
        case studentActions.STOP_EDIT:
            return{
                ...state,
                editedStudent:null,
                editedStudentIndex : -1
            }

        default:
            return state; 
    }
}
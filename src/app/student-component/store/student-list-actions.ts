import { Action } from '@ngrx/store';
import { Student } from '../student-model';
export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_STUDENTS = 'ADD_STUDENTS';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const START_EDIT = 'START_EDIT'
export const STOP_EDIT = 'STOP_EDIT'


export class AddStudent implements Action{
    readonly type = ADD_STUDENT;
    constructor(public payload: Student){
        
    }
}

export class AddStudents implements Action{
    readonly type = ADD_STUDENTS;
    constructor(public payload: Student[]){
        
    }
}

export class UpdateStudent implements Action{
    readonly type = UPDATE_STUDENT;
    constructor(public payload:Student){}
}

export class DeleteStudent implements Action{
    readonly type = DELETE_STUDENT;
}

export class StartEdit implements Action{
    readonly type = START_EDIT;
    constructor(public payload:number){}
}

export class StopEdit implements Action{
    readonly type = STOP_EDIT;
}

export type studentActions = 
AddStudent 
|AddStudents
|DeleteStudent
|UpdateStudent
|StartEdit
|StopEdit;
import { Action } from '@ngrx/store';
import { Student } from '../student-model';


export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_STUDENTS = 'ADD_STUDENTS';


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


export type studentActions = AddStudent | AddStudents;
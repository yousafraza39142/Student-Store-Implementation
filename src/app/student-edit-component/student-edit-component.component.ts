import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student-component/student-model';
import * as fromStudentList from "../student-component/store/student-list-reducer";
import * as studentActions from '../student-component/store/student-list-actions'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-student-edit-component',
  templateUrl: './student-edit-component.component.html',
  styleUrls: ['./student-edit-component.component.css']
})
export class StudentEditComponentComponent implements OnInit {


  editMode = false;
  constructor(public store:Store<fromStudentList.AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const valuesForm = f.value;
    const age = parseInt(valuesForm.rollNo);
    const newStudent = new Student(valuesForm.name,valuesForm.rollNo);
    // console.log(newStudent);
    if(!this.editMode){
      this.store.dispatch(new studentActions.AddStudent(newStudent));
    }
  }

  onDelete(){

  }

  onClear(){

  }

}

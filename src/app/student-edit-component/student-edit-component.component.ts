import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student-component/student-model';
import * as fromStudentList from "../student-component/store/student-list-reducer";
import * as studentActions from '../student-component/store/student-list-actions'
import {Store} from '@ngrx/store'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-edit-component',
  templateUrl: './student-edit-component.component.html',
  styleUrls: ['./student-edit-component.component.css']
})
export class StudentEditComponentComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) slForm: NgForm;
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


  editMode = false;
  subscribe: Subscription;
  constructor(public store:Store<fromStudentList.AppState>) { }

  ngOnInit(): void {
    this.subscribe = this.store.select('studentList').subscribe((stateData)=>{
      if(stateData.editedStudentIndex > -1){
        console.log("Start Editing", stateData.editedStudent,stateData.editedStudentIndex);
        this.editMode = true
        this.slForm.setValue({
          name: stateData.editedStudent.name,
          rollNo: stateData.editedStudent.rollNo
        });
        
        
      }
      else{
        console.log('Stop editing', stateData.editedStudent,stateData.editedStudentIndex);
        this.editMode = false;
      }
    })

  }

  onSubmit(f:NgForm){
    const valuesForm = f.value;
    const age = parseInt(valuesForm.rollNo);
    const newStudent = new Student(valuesForm.name,valuesForm.rollNo);
    // console.log(newStudent);
    if(!this.editMode){
      console.log('Add Mode');
      
      this.store.dispatch(new studentActions.AddStudent(newStudent));
    }else{
      console.log('Update Mode');
      this.store.dispatch(new studentActions.UpdateStudent(newStudent));
    }

    this.slForm.reset();
  }

  onDelete(){
    this.store.dispatch(new studentActions.DeleteStudent())
    this.editMode = false
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.store.dispatch(new studentActions.StopEdit())
    this.editMode = false;
  }

  onDestroy(){
    // clear Subscription
    this.subscribe.unsubscribe();
  }

}

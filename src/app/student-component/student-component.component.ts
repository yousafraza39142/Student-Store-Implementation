import { Component, OnInit } from '@angular/core';
import { Student } from './student-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStudentList from './store/student-list-reducer'

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  students : Observable<{students: Student[]}>
  // students: Student[]
  constructor(private store: Store<fromStudentList.AppState>) { }

  ngOnInit(): void {
    this.students = this.store.select('studentList');
  }
  onEditItem(index:number){
    console.log(index);
  }

}

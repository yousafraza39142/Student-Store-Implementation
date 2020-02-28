import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Student } from './student-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStudentList from './store/student-list-reducer'
import * as studentActions from './store/student-list-actions'

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  @ViewChild('listStudents',{ static: false }) listStudents: ElementRef;

  students : Observable<{students: Student[]}>
  // students: Student[]
  constructor(private store: Store<fromStudentList.AppState>) {
    document.addEventListener('DOMContentLoaded',()=>{
      // //  console.log('Elements Count',this.listStudents.nativeElement.[0]);
      //  for(let i = 0;i<this.listStudents.nativeElement.childElementCount;i++){
      //   this.listStudents.nativeElement.children[i].addEventListener('click',(val:MouseEvent)=>{
      //     console.log('Clicked',val.toElement);
      //   })
         
      //  }
      // //  const htmlList = this.listStudents.nativeElement.children;
      // //  for (let Myelement in htmlList){
      // //    console.log(Myelement);
         
      // //  }
    })
  }

  ngOnInit(): void {
    this.students = this.store.select('studentList');
  }
  onEditItem(index:number){
    this.store.dispatch(new studentActions.StartEdit(index));
  }

}

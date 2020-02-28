import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { StudentEditComponentComponent } from './student-edit-component/student-edit-component.component';
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {student_list_reducer} from './student-component/store/student-list-reducer'
@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    StudentEditComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({studentList: student_list_reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

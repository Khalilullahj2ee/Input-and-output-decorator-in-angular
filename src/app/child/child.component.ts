 
import { Component, Input, Output, EventEmitter, OnInit,} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() studentName !: string;
  @Output() newStudentEvent = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void { 
  }

  addNewStudent(value: string){
    this.newStudentEvent.emit(value)
  }

}

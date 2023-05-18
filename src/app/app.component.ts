import { Component } from '@angular/core';



// interface employee {  
//   id: Number;  
//   name: String;  
//   email: String;  
//   gender: String;  
// }  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'ang_project'; 
sname : string = "A. T. M. KHALILULLAH"

 
  students = ['Yakul ali', 'Younus', 'Sayeed', 'Khalilullah'];

  addNewStudent(addNewStudent: string) {
    this.students.push(addNewStudent);
  }


//  students: any[] = [  
//   {  
//     "id": 1,  
//     "name": "Khalilullah",  
//     "email": "khalil@gmail.com",  
//     "gender": "male"  
//   },  
//   {  
//     "id": 2,  
//     "name": "younus",  
//     "email": "yunusa@gmail.com",  
//     "gender": "male"  
//   }
// ];  
}
function newStudent(newStudent: any) {
  throw new Error('Function not implemented.');
}


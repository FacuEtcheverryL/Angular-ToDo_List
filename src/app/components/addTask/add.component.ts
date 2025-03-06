import {Component} from "@angular/core";



@Component({
  selector: "app-addTask",
  standalone: false,
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})

export class AddComponent{

   numberTask: number = 10;
   titleTask: string ='';
   activeButton: boolean = true;

   sendTask(){
    const sizeTitleTask = this.titleTask.split('');
    if(sizeTitleTask.length > 0){
      this.activeButton = false}
    else{this.activeButton = true}
    console.log(`${this.titleTask}`);
   }
}


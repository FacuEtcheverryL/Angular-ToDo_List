import {Component, OnInit} from "@angular/core";
import {NgForm, FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: "app-addTask",
  standalone: false,
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})

export class AddComponent implements OnInit {
  
  numberTask: number = 11;
   isActive: boolean = false;
   taskActive!: boolean;

   tasks: any[] = ['tarea 1', 'tarea 2' , 'tarea 3']


  constructor( private fb: FormBuilder) {}

form! : FormGroup;

    ngOnInit(): void {
      this.form = this.fb.group({
        title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      })
    }
  
  sendTaskTitle(): void {
    if(this.form.valid && this.form.get('title')?.value!==''){
      this.taskActive = false;

      console.log(this.form.value.title + 'mamamiaa' );
    }else{
    this.taskActive=true
    }
  }


//! -------------------------------------------------------------
   titleTask: string ='';
   activeButton: boolean = true;

  sendData( form: NgForm){
    console.log(this.titleTask +'Macacao')

  }



   sendTask(){
    const sizeTitleTask = this.titleTask.split('');
    if(sizeTitleTask.length > 0){
      this.activeButton = false}
    else{this.activeButton = true}
  
   }
}


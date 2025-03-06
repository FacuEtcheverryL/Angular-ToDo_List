import { AfterViewInit, Component, DoCheck } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck{
  
  titleTask: string = '';
  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;

  updateValue():void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    },2000)
}
ngDoCheck(): void {
  if(this.value !== this.previousValue){
    this.changesDetected = true;
    this.previousValue = this.value;
  }
}
}

//! ngAfterViewInit
// export class AppComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//   console.log("ha sido creado desde la vista del componente y las vistasd e los hijos");
//   }}


//!constructor de ngDestroy
// export class AppComponent {
//   isDestroyed: boolean = true;
//   countDow: number
//   intervalID: any;


// constructor(){
//   this.countDow = 10;
//   this.intervalID = setInterval(( ) => {
//     this.countDow--;
//     if(this.countDow === 0){
//       clearInterval(this.intervalID);
//       this.isDestroyed = false;
//     }
//   },1000);
// }

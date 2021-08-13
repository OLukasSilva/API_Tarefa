import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showFiller = false ;
  constructor(private rolter: Router) { }

  ngOnInit(): void {
  }



navegarHome(){
  this.rolter.navigateByUrl("");
}


  navegarTarefa() {
    this.rolter.navigateByUrl("tarefa");
 }





}





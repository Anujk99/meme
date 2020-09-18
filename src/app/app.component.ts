import { Component } from '@angular/core';
import { MemeService } from './meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public meme={};
  constructor(private _memeservice:MemeService  ) {
    
  }
  ngOnInit(): void {
    this._memeservice.getMeme().subscribe(data=>(this.meme=data,console.log(this.meme)), error => console.log(error));
   }

  title = "ji";
  onclick(){
     this._memeservice.getMeme().subscribe(data=>(this.meme=data,console.log(this.meme)), error => console.log(error));
    }
  
}

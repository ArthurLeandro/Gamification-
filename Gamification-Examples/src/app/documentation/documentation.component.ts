import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

    textThatIsGonnaBeLoaded:string; 

    constructor() { 
      
    }

    ngOnInit() {
      
    }

    // ReadFileText(_textToStore:string):void {
    // let fileReader = new FileReader();
    // fileReader.readAsText(File)
    // fileReader.onload = (e) => {this.textThatIsGonnaBeLoaded = fileReader.result as string;}
    
    // // "./src/app/documentation/documentation.txt"
    // }
  
}

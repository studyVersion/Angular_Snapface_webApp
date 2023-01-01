import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../Models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
   buttonText!: String;

   constructor(private faceSnapService: FaceSnapService) {}
  ngOnInit(): void {
    this.buttonText = 'Oh Snap!'
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!'
    }else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSpap');
      this.buttonText ='Oh Snap!'
    }

  }

}

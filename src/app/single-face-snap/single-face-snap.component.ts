import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../Models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!'
    // get the snap id from the route '+' to cast it to number
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSpap');
      this.buttonText = 'Oh Snap!'
    }

  }
}

import {Injectable} from "@angular/core";
import {FaceSnap} from "../Models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'old greece',
      description: 'A glance at ancient history',
      snaps: 6,
      createdDate: new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2022/08/21/21/13/athens-7402123_960_720.jpg',
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Big city of new york',
      description: 'Manhattan Central Park',
      snaps: 0,
      createdDate: new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_960_720.jpg',

    },
    {
      id: 3,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'la montagne'
    },
    {
      id: 4,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FcaeSnap not found!')
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSpap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.id--;
  }
}

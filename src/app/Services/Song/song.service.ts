import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, getDoc, docData, updateDoc } from '@angular/fire/firestore';
import Song from 'src/interfaces/song.interface';
import { doc, deleteDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor( private firestore: Firestore) { }
  addSong(song: Song) {
    const songRef = collection(this.firestore, 'songs');
    return addDoc(songRef, song);
  }

  getSonList(): Observable <Song []>{
    const songRef = collection(this.firestore, 'songs');
    return collectionData(songRef, {idField: 'id'}) as Observable<Song[]>
  }

  getSonDetail(songId: any){
    const songRef = doc(this.firestore, `songs/${songId}`);
    return getDoc(songRef)
  }

  deleteSong(song: Song) {
    const songRef = doc(this.firestore,`songs/${song.id}`);
    return deleteDoc(songRef);
  }
  getSongById(id:any): Observable<Song>{
    const songRef = doc(this.firestore,`songs/${id}` );
    console.log(id)
    return docData(songRef, {idField: 'id'}) as Observable<Song>
  
  }
  updateSong(song: Song) {
    const songRef = doc(this.firestore, `songs/${song.id}`)
    return updateDoc(songRef, {title:song.title, album: song.album, artist: song.artist, duration: song.duration })
    
  }


  
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, getDoc, docData, updateDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import Recording from 'src/interfaces/recording.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordingStudioService {

  constructor(private firestore: Firestore) { }

  addRecording(record: Recording){
    const recordingRef = collection(this.firestore, 'recording-studio')
    return addDoc(recordingRef, record);

  }
  getRecordingList(): Observable <Recording[]>{
    const recordRef = collection(this.firestore, 'recording-studio');
    return collectionData(recordRef, {idField: 'id'}) as Observable<Recording[]>

  }

  getRecordingDetail(id: any){
    const recordRef = doc(this.firestore, `recording-studio/${id}`);
    return getDoc(recordRef);
  }

  deleteRecording(recording: Recording){
    const recordRef = doc(this.firestore, `recording-studio/${recording.id}`);
    return deleteDoc(recordRef);
  }
  getRecordingById(id: any): Observable<Recording>{
    const recordRef = doc(this.firestore, `recording-studio/${id}`);
    return docData(recordRef, {idField: 'id'}) as Observable<Recording>
  }  

  updateRecording(recording:Recording){
    const recordRef = doc(this.firestore,`recording-studio/${recording.id}`);
    return updateDoc(recordRef, { owner: recording.owner, nameRecording: recording.name_recording, number_of_cabins:recording.numberof_cabins, type_of_melody: recording.type_melody })
  }
}


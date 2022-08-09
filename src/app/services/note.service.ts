import { Injectable } from '@angular/core';
import { Firestore,setDoc,doc, collection, collectionSnapshots, deleteDoc } from '@angular/fire/firestore';
import { Note } from 'src/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private db: Firestore) { }
  addNewNote(note: Note) {
    if (!note.id) {
      throw new Error('Note id is required');
    }
    return setDoc(doc(this.db,'notes/'+note.id),note);
  }
  getAllNotes() {
    return collectionSnapshots(collection(this.db,'notes'));
  }
  update(note: Note) {
    return setDoc(doc(this.db,'notes/'+note.id),note); 
  }
  delete(noteID: String) {
    return deleteDoc(doc(this.db,'notes/'+noteID));
  }

}

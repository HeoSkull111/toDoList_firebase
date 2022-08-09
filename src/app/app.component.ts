import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import { Note } from 'src/models/note.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toDoList';
  noteState$ = this.store.select('note');
  note$ = this.store.select((state) => state.note.notes);
  currentNote: Note = {
    id: "",
    title: "",
    content: "",
    DateCreate: "",
  };
  constructor(private store: Store<{note: NoteState}>) { }
  ngOnInit():void {
    this.noteState$. subscribe(state => {
      console.log(state);
    }),
    this.store.dispatch(NoteActions.getNotes());
  }
  addNote() {
    this.store.dispatch(NoteActions.addNote({note: this.currentNote}));
  }
  getNote() {
    this.store.dispatch(NoteActions.addNote({note: this.currentNote}));
  }
  updateNote() {
    this.store.dispatch(NoteActions.updateNote({note: this.currentNote}));
  }
  deleteNote() {
    this.store.dispatch(NoteActions.deleteNote({noteID: this.currentNote.id}));
  }
}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, switchMap, map, catchError,of } from "rxjs";
import { NoteService } from "src/app/services/note.service";
import * as NoteActions from "src/actions/note.action";
import {Note} from "src/models/note.model";
@Injectable()
export class NoteEffect {
    constructor(
        private actions$: Actions,
        private noteService: NoteService
    ) { }

    addNote$ = createEffect(() => this.actions$.pipe(
            ofType(NoteActions.addNote),
            switchMap(({ note }) => from(this.noteService.addNewNote(note))),
                map(() => NoteActions.addNoteSuccess()),
                catchError(error => { 
                    return of(NoteActions.addNoteFail({error: error}));
                })
    ));
    getNotes$ = createEffect(() => this.actions$.pipe(
            ofType(NoteActions.getNotes),
            switchMap(() => from(this.noteService.getAllNotes())),
                map((snapshot) => {
                    let notes = snapshot.map((doc) => <Note>doc.data());
                    return NoteActions.getNotesSuccess({notes: notes});
                }),
                catchError(error => {
                    return of(NoteActions.getNotesFail({ error: error }));
                })));
    updateNote$ = createEffect(() => this.actions$.pipe(
            ofType(NoteActions.updateNote),
            switchMap(({ note }) => from(this.noteService.update(note))),
                map(() => NoteActions.updateNoteSuccess()),
                catchError(error => {
                    return of(NoteActions.updateNoteFail({ error: error }));
                })));
    deleteNote$ = createEffect(() => this.actions$.pipe(
            ofType(NoteActions.deleteNote),
            switchMap(({ noteID }) => from(this.noteService.delete(noteID))),
                map(() => NoteActions.deleteNoteSuccess()),
                catchError(error => {
                    return of(NoteActions.deleteNoteFail({ error: error }));
                })));
}
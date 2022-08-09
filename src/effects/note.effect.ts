import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, switchMap, map, catchError,of } from "rxjs";
import { NoteService } from "src/app/services/note.service";
import * as NoteActions from "src/actions/note.action";

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
}
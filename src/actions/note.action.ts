import { createAction,props } from "@ngrx/store";
import { Note } from "../models/note.model";

export const addNote = createAction(
    "[Note] Add Note",
    props<{ note: Note }>()
)
export const addNoteSuccess = createAction(
    "[Note] Add Note Success",
)
export const addNoteFail = createAction(
    "[Note] Add Note Failure",
    props<{ error: string }>()
)
export const getNotes = createAction (
    "[Note] Get Notes",
)
export const getNotesSuccess = createAction(
    "[Note] Get Notes Success",
    props<{ notes: Note[] }>()
)
export const getNotesFail = createAction(
    "[Note] Get Notes Failure",
    props<{ error: string }>()
)
export const updateNote = createAction(
    "[Note] Update Note",
    props<{ note: Note }>()
)
export const updateNoteSuccess = createAction(
    "[Note] Update Note Success",
)
export const updateNoteFail = createAction(
    "[Note] Update Note Failure",
    props<{ error: string }>()
)
export const deleteNote = createAction(
    "[Note] Delete Note",
    props<{ noteID: string }>()
)
export const deleteNoteSuccess = createAction(
    "[Note] Delete Note Success",
)
export const deleteNoteFail = createAction(
    "[Note] Delete Note Failure",
    props<{ error: string }>()
)

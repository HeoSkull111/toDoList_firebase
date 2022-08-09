import { createAction,props } from "@ngrx/store";
import { Note } from "../models/note.model";

export const addNote = createAction(
    "[Note] Add Note",
    props<{ note: Note }>()
)
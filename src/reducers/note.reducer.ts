import { createReducer,on } from "@ngrx/store";
import { NoteState } from "src/states/note.state";
import * as NoteActions from "src/actions/note.action";

const initialState: NoteState = {
    notes: [],
    error: "",
    isLoading: false
}
export const NoteReducer = createReducer(
    initialState,
    on(NoteActions.addNote, state  => ({
        ...state,
        isLoading: true
    })),
    on(NoteActions.addNoteSuccess, state => ({
        ...state,
        isLoading: false,
        error: "",
    })),
    on(NoteActions.addNoteFail, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
    on(NoteActions.getNotes, state => ({
        ...state,
        isLoading: true,
        error: ""
    })),
    on(NoteActions.getNotesSuccess, (state, { notes }) => ({
        ...state,
        isLoading: false,
        error: "",
        notes: notes
    })),
    on(NoteActions.getNotesFail, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
    on(NoteActions.updateNote, state => ({
        ...state,
        isLoading: true,
        error: ""
    })),
    on(NoteActions.updateNoteSuccess, state => ({
        ...state,
        isLoading: false,
        error: ""
    })),
    on(NoteActions.updateNoteFail, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
    on(NoteActions.deleteNote, state => ({
        ...state,
        isLoading: true,
        error: ""
    })),
    on(NoteActions.deleteNoteSuccess, state => ({
        ...state,
        isLoading: false,
        error: ""
    })),
    on(NoteActions.deleteNoteFail, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
);

import { createReducer,on } from "@ngrx/store";
import { NoteState } from "src/states/note.state";
import * as StudentActions from "src/actions/note.action";

const initialState: NoteState = {
    notes: [],
    error: "",
    isLoading: false
}
export const NoteReducer = createReducer(
    initialState,
    on(StudentActions.addNote, state  => ({
        ...state,
        isLoading: true
    })),
    on(StudentActions.addNoteSuccess, state => ({
        ...state,
        isLoading: false,
        error: "",
    })),
    on(StudentActions.addNoteFail, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
);

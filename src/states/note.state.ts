import { Note } from "src/models/note.model";

export interface NoteState {
    notes: Note[];
    error: String;
    isLoading: boolean
}
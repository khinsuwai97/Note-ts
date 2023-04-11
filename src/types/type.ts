export type Note = {
  id: string;
  title: string;
  markdown: string;
};

export type NoteObj = {
  notes: Note[];
  createNote: (note: Note) => void;
  editNote: (id: string, note: Note) => void;
  deleteNote: (id: string) => void;
};

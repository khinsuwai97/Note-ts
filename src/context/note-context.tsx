import React, { createContext, PropsWithChildren } from 'react';
import { NoteObj, Note } from '../types/type';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const NoteContext = createContext<NoteObj>({
  notes: [],
  createNote() {},
  editNote() {},
  deleteNote() {},
});

const NoteProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

  const createNote = (note: Note) => {
    setNotes((prevNote) => [...prevNote, note]);
  };

  const editNote = (id: string, note: Note) => {
    const updatedNotes = notes.map((prevNote) =>
      prevNote.id === id ? { ...prevNote, ...note } : prevNote
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const removeNotes = notes.filter((note) => note.id !== id);
    setNotes(removeNotes);
  };

  const contextValue: NoteObj = {
    notes,
    createNote,
    editNote,
    deleteNote,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};

export default NoteProvider;

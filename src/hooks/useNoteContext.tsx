import { useContext } from 'react';
import { NoteContext } from '../context/note-context';

const useNoteContext = () => {
  return useContext(NoteContext);
};

export default useNoteContext;

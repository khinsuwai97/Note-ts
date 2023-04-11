import {
  Outlet,
  useParams,
  Navigate,
  useOutletContext,
} from 'react-router-dom';
import useNoteContext from '../hooks/useNoteContext';
import { Note } from '../types/type';

const NoteLayout = () => {
  const { id } = useParams();
  const { notes } = useNoteContext();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;

export const useNote = () => {
  return useOutletContext<Note>();
};

import NoteForm from './NoteForm';
import useNoteContext from '../hooks/useNoteContext';

const NewNote = () => {
  const { createNote } = useNoteContext();
  return (
    <section className="container">
      <div className="mb-10 ">
        <h1 className="text-header">New Note</h1>
      </div>
      <NoteForm onSubmit={createNote} title="" markdown="" />
    </section>
  );
};

export default NewNote;

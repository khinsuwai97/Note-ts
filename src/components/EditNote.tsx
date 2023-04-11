import NoteForm from './NoteForm';
import { useNote } from './NoteLayout';
import useNoteContext from '../hooks/useNoteContext';

const EditNote = () => {
  const note = useNote();
  const { editNote } = useNoteContext();

  return (
    <section className="container">
      <div className="mb-10 ">
        <h1 className="text-header">Edit Note</h1>
      </div>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        onSubmit={(data) => editNote(note.id, data)}
      />
    </section>
  );
};

export default EditNote;

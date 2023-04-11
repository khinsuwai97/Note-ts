import { Link, useNavigate, Navigate } from 'react-router-dom';
import Button from './Button';
import { useNote } from './NoteLayout';
import useNoteContext from '../hooks/useNoteContext';

const Note = () => {
  const note = useNote();
  const navigate = useNavigate();
  const { deleteNote } = useNoteContext();

  if (!note) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="container">
      <div className="mb-10 flex md:flex-row flex-col-reverse justify-between ">
        <div>
          <h1 className="text-header sm:mt-0 mt-4 sm:mb-8 mb-4">
            {note.title}
          </h1>
          <p className="text-primary">{note.markdown}</p>
        </div>
        <div className="sm:mb-2 mb-0">
          <Link to={`/${note.id}/edit`}>
            <button className="text-button outline-none  cursor-pointer rounded-[5px] whitespace-nowrap bg-secondary px-[15px] py-[8px] mr-2">
              Edit
            </button>
          </Link>

          <button
            className="text-button outline-none  cursor-pointer rounded-[5px] whitespace-nowrap bg-red-500 px-[15px] py-[8px] mr-2  "
            onClick={() => {
              deleteNote(note.id);
              navigate('/');
            }}
          >
            Delete
          </button>
          <Button text="Back" background={false} link="" />
        </div>
      </div>
    </section>
  );
};

export default Note;

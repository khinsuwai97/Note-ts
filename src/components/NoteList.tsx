import { useState, useMemo } from 'react';
import Button from './Button';
import NoteCard from './NoteCard';
import useNoteContext from '../hooks/useNoteContext';

const NoteList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { notes } = useNoteContext();

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notes, searchTerm]);

  return (
    <section className="container">
      <div className="flex justify-between items-center mb-10 ">
        <h1 className="text-header">Notes</h1>
        <Button text="Create" link="new" background={true} />
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <input
          type="text"
          id="title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search note"
          className="text-primary py-[3px] px-[20px] md:w-[40%] sm:w-[60%] w-[80%]  rounded-[5px] border-solid border-2 border-primary1"
        />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
      {filteredNotes.length === 0 && (
        <p className="text-primary text-center">
          No notes found.Please create one 😃 !
        </p>
      )}
    </section>
  );
};

export default NoteList;

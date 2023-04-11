import { FormEvent, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Note } from '../types/type';

type NoteFormProps = {
  title: string;
  markdown: string;
  onSubmit: (data: Note) => void;
};

const NoteForm = ({ title, markdown, onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const noteData: Note = {
      id: nanoid(),
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
    };
    onSubmit(noteData);

    navigate('/');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-10">
        <label className="block mb-2" htmlFor="title text-primary">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          defaultValue={title}
          placeholder=""
          className="text-primary py-[3px] px-[20px] md:w-[40%] sm:w-[60%] w-[80%]  rounded-[5px] new-note-input "
          required
        />
      </div>
      <div className="mb-10">
        <label className=" block mb-2" htmlFor="text">
          Text
        </label>
        <textarea
          className="text-area-container text-primary"
          name="text"
          id="text"
          ref={markdownRef}
          defaultValue={markdown}
          rows={13}
          required
        ></textarea>
      </div>
      <div className="flex flex-row gap-4 justify-end">
        <button
          type="submit"
          className={`px-[15px] py-[8px]  bg-secondary
          text-button outline-none  cursor-pointer rounded-[5px] whitespace-nowrap `}
        >
          Save
        </button>

        <Button text="Cancel" link="" background={false} />
      </div>
    </form>
  );
};

export default NoteForm;

import { Link } from 'react-router-dom';
import { Note } from '../types/type';

const NoteCard = (props: Note) => {
  return (
    <Link to={`/${props.id}`} key={props.id}>
      <div className=" card cursor-pointer text-title box-shadow text-center px-[20px] py-[25px]  ">
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
};

export default NoteCard;

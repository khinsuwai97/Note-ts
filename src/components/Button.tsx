import { Link } from 'react-router-dom';

type Props = {
  text: string;
  link: string;
  background: boolean;
};

const Button = ({ text, link, background }: Props) => {
  return (
    <Link to={`/${link}`}>
      <button
        className={`px-[15px] py-[8px] ${
          background ? ' bg-secondary' : 'bg-primary1'
        } text-button outline-none  cursor-pointer rounded-[5px] whitespace-nowrap  `}
        type="button"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

import { ReactElement } from 'react';
import classes from './bookItem.module.scss';
import IBookItem from '../../types/IBookItem';
import { Link } from 'react-router-dom';

interface IBookItemProps {
  book: IBookItem;
}

const BookItem: React.FC<IBookItemProps> = (props) => {
  const { title, subtitle, isbn13, price, image, url } = props.book;
  return (
    <div className={classes.bookItem}>
      <div className={classes.top}>
        <img src={image} />
      </div>
      <div className={classes.bottom}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.subtitle}>{subtitle}</p>
        <div className={classes.price}>{price}</div>
        <Link to={`bookInfo/${isbn13}`}>More info</Link>
      </div>
    </div>
  );
};

export default BookItem;

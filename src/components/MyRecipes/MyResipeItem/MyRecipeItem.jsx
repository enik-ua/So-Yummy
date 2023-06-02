import React from 'react';
import SuperBtn from '../../../reusableComponents/SuperBtn/SuperBtn';
import TrashButton from '../../../reusableComponents/TrashButton/TrashButton';
import css from '../MyResipeItem/MyRecipeItem.module.css';
import ImageCard from '../ImageCard/ImageCard';
import TitleRecip from '../TitleRecip/TitleRecip';
import Textt from '../Text/Text';
import Time from '../Time/Time';
import { useLocation } from 'react-router-dom';

const MyRecipeItem = ({
  category,
  description,
  preview,
  time,
  title,
  id,
  handelDelete,
}) => {
  const location = useLocation();

  return (
    <li className={css.cardItem}>
      <ImageCard image={preview} />
      <div className={css.mainContainer}>
        <div className={css.wrapperButtons}>
          <TitleRecip text={title} />
          <div>
            <TrashButton
              bgColorClass={'darkBcg'}
              onDelete={e => {
                handelDelete(id, e);
              }}
            />
          </div>
        </div>
        <Textt description={description} />
        <div className={css.wrapperUp}>
          <div>
            <Time text={time} />
          </div>
          <div className={css.superBtnWrapper}>
            <SuperBtn
              title="See recipe"
              lnk
              to={`/recipe/${id}`}
              statefrom={{ from: location }}
              
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default MyRecipeItem;

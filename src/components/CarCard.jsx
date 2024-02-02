import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favSelector } from '../redux/selectors';
import { addToFavorites, removeFromFavorites } from '../redux/slice';
import {
  BtnHeart,
  BtnLearnMore,
  CardLi,
  ImgDiv,
  ImgStyle,
  InfoDiv,
  ModelDiv,
  StyledH2,
  StyledPrice,
  TextStyle,
} from './styles/CarCard.styled';

export const CarCard = ({ car }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(favSelector);

  useEffect(() => {
    const isCarInFavorites = favorites.some(
      favoriteCar => favoriteCar.id === car.id
    );
    setIsFav(isCarInFavorites);
  }, [favorites, car]);

  const handleBtnFavorites = () => {
    if (isFav) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
    setIsFav(!isFav);
  };

  console.log(car);
  return (
    <CardLi>
      <ImgDiv>
        <ImgStyle src={car.img} alt={car.model} />
        <BtnHeart type="button" onClick={handleBtnFavorites} isFav={isFav}>
          &#9829;
        </BtnHeart>
      </ImgDiv>

      <ModelDiv>
        <StyledH2>
          {car.make} {car.model},{car.year}
        </StyledH2>
        <StyledPrice>{car.rentalPrice}</StyledPrice>
      </ModelDiv>
      <InfoDiv>
        <TextStyle>{car.address.split(',')[1].trim()}</TextStyle>

        <TextStyle>{car.rentalCompany}</TextStyle>

        <TextStyle>{car.type}</TextStyle>

        <TextStyle>{car.mileage}</TextStyle>
        <TextStyle>{car.accessories[0]}</TextStyle>
      </InfoDiv>
      <BtnLearnMore>Learn more</BtnLearnMore>
    </CardLi>
  );
};

import { getCarById } from 'api/getCarById';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favSelector } from '../redux/selectors';
import { addToFavorites, removeFromFavorites } from '../redux/slice';
import { Modal } from './Modal';
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
  StyledSpan,
  TextStyle,
} from './styles/CarCard.styled';

export const CarCard = ({ car }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(favSelector);
  const [isModal, setIsModal] = useState(false);

  const [cardInfo, setCardInfo] = useState(null);

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

  const getCarInfo = async id => {
    try {
      const data = await getCarById({ id: id });
      setCardInfo(data);
      setIsModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = () => {
    setIsModal(false);
  };
  return (
    <CardLi>
      <ImgDiv>
        <ImgStyle src={car.img} alt={car.model} />
        <BtnHeart type="button" onClick={handleBtnFavorites} isfav={isFav}>
          &#9829;
        </BtnHeart>
      </ImgDiv>

      <ModelDiv>
        <StyledH2>
          {car.make} <StyledSpan>{car.model},</StyledSpan>
          {car.year}
        </StyledH2>
        <StyledPrice>{car.rentalPrice}</StyledPrice>
      </ModelDiv>
      <InfoDiv>
        <TextStyle>{car.address}</TextStyle>

        <TextStyle>{car.rentalCompany}</TextStyle>

        <TextStyle>{car.type}</TextStyle>

        <TextStyle>{car.mileage.toLocaleString('en-US')}</TextStyle>
        <TextStyle>{car.accessories[0]}</TextStyle>
      </InfoDiv>
      <BtnLearnMore
        onClick={() => {
          getCarInfo(car.id);
        }}
      >
        Learn more
      </BtnLearnMore>
      <Modal cardInfo={cardInfo} isModal={isModal} onClose={onClose} />
    </CardLi>
  );
};

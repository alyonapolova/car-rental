import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/slice';
import {
  BtnHeart,
  BtnLearnMore,
  CardDiv,
  ImgDiv,
  ImgStyle,
  InfoDiv,
  ModelDiv,
  StyledH2,
  StyledPrice,
  TextStyle,
} from './styles/CarCard.styled';

export const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(car));
  };

  console.log(car);
  return (
    <CardDiv>
      <ImgDiv>
        <ImgStyle src={car.img} alt={car.model} />
        <BtnHeart type="button" onClick={handleAddToFavorites}>
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
    </CardDiv>
  );
};

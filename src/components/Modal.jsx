// import { useSelector } from 'react-redux';
// import { carSelector } from '../redux/selectors';
import {
  Accessories,
  AccessoriesList,
  AccessoryItem,
  Backdrop,
  BtnClose,
  Desc,
  InfoDiv,
  InfoDiv2,
  ModalImg,
  ModalStyled,
  RentBtn,
  Styled1,
  StyledSpan2,
  StyledSpan3,
  TextStyle,
  TitleDiv,
} from './styles/Modal.styled';

export const Modal = ({ cardInfo, isModal, onClose }) => {
  // const cardInfo = useSelector(carSelector);

  // const handleKeyDown = event => {
  //   if (event.key === 'Escape') {
  //     onClose();
  //   }
  // };

  if (!isModal || !cardInfo) return null;



  return (
    <Backdrop isModal={isModal} onClick={onClose}>
      <ModalStyled isModal={isModal} onClick={e => e.stopPropagation()}>
        <BtnClose type="button" onClick={onClose}>
          &#9421;
        </BtnClose>
        <ModalImg src={cardInfo.img} alt={cardInfo.model} />
        <TitleDiv>
          <Styled1>
            {cardInfo.make} <StyledSpan2>{cardInfo.model}</StyledSpan2>,
            {cardInfo.year}
          </Styled1>{' '}
        </TitleDiv>
        <InfoDiv>
          <TextStyle>{cardInfo.address}</TextStyle>
          <TextStyle>{cardInfo.year}</TextStyle>
          <TextStyle>{cardInfo.rentalCompany}</TextStyle>
          <TextStyle>{cardInfo.type}</TextStyle>
          <TextStyle>{cardInfo.fuelConsumption}</TextStyle>
          <TextStyle>{cardInfo.engineSize}</TextStyle>
        </InfoDiv>
        <Desc>{cardInfo.description}</Desc>
        <Accessories>Accessories and functionalities:</Accessories>
        <AccessoriesList>
          {cardInfo.accessories.map((accessory, index) => (
            <AccessoryItem key={index}>{accessory}</AccessoryItem>
          ))}
        </AccessoriesList>
        <Accessories>Rental Conditions: </Accessories>
        <InfoDiv2>
          {cardInfo.rentalConditions.split('\n').map((condition, index) => (
            <TextStyle key={index}>
              {condition}
              <br />
            </TextStyle>
          ))}
          <TextStyle>
            <StyledSpan3>mileage: </StyledSpan3>
            {cardInfo.mileage.toLocaleString('en-US')}
          </TextStyle>
          <TextStyle>
            <StyledSpan3>price:</StyledSpan3> {cardInfo.rentalPrice}
          </TextStyle>
        </InfoDiv2>

        <RentBtn href="tel:+380730000000">Rental car</RentBtn>
      </ModalStyled>
    </Backdrop>
  );
};

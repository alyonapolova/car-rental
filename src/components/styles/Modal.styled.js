import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #12141780;
  transition-property: opacity, visibility;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => (props.isModal ? 1 : 0)};
  visibility: ${props => (props.isModal ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.isModal ? 'auto' : 'none')};
  z-index: 10001;
`;

export const ModalStyled = styled.div`
  position: absolute;
  padding: 40px;
  width: 541px;

  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transform: translate(-50%, -50%) scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => (props.isModal ? 1 : 0)};
  visibility: ${props => (props.isModal ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.isModal ? 'auto' : 'none')};
`;

export const ModalImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const BtnClose = styled.button`
  position: absolute;
  border: none;
  top: 10px;
  right: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    font-size: 25px;
  }
  &:focus {
    font-size: 25px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Styled1 = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 2px;
`;

export const StyledSpan2 = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-right: 2px;
  color: #3470ff;
`;

export const StyledSpan3 = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-right: 2px;
  color: #3470ff;
`;
export const InfoDiv = styled.div`
  max-width: 277px;
  margin-top: 8px;
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InfoDiv2 = styled.div`
  max-width: 277px;
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const TextStyle = styled.p`
  border-right: 1px solid #1214171a;
  padding-right: 6px;
  font-size: 12px;
  color: #12141780;
`;

export const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const Accessories = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const AccessoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 277px;
  margin-bottom: 24px;
`;

export const AccessoryItem = styled.p`
  border-right: 1px solid #1214171a;
  padding-right: 6px;
  font-size: 12px;
  color: #12141780;
`;

export const RentBtn = styled.a`
  display: inline-block;

  background-color: #3470ff;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  padding: 12px 50px;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
  &:focus {
    background-color: #0b44cd;
  }
`;

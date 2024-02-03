import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(46, 47, 66, 0.4);
  transition-property: opacity, visibility;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => (props.isModal ? 1 : 0)};
  visibility: ${props => (props.isModal ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.isModal ? 'auto' : 'none')};
`;

export const ModalStyled = styled.div`
  position: absolute;
  padding: 72px 16px 24px;
  width: 392px;
  min-height: 584px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
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
  z-index: 999;
`;

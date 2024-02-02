import { styled } from 'styled-components';

export const CardDiv = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 275px;
`;

export const ModelDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledH2 = styled.h2`
  font-size: 16px;
  margin-right: 2px;
`;

export const StyledPrice = styled.h2`
  font-size: 16px;
`;

export const ImgDiv = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 14px;
`;

export const ImgStyle = styled.img`
    
  width:274px;
  height:268px;
  object-fit: cover; 
  
  }
`;

export const BtnHeart = styled.button`
  font-size: 40px;
  color: #3470ff;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;

  &:hover {
    color: red;
  }
  &:focus {
    color: red;
  }
  &:active {
    color: red;
  }
`;

export const InfoDiv = styled.div`
  margin-top: 8px;
  margin-bottom: 27px;
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

export const BtnLearnMore = styled.button`
  font-size: 14px;
  color: white;
  background-color: #3470ff;
  border: none;
  width: inherit;
  border-radius: 12px;

  padding: 12px 99px;
`;

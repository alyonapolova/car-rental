import { styled } from 'styled-components';

export const FiltersDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
`;

export const Select = styled.select`
  font-size: 18px;
  border: none;
  padding: 14px 89px;
  border-radius: 14px;
  background-color: #f7f7fb;
`;

// Стилизуем опции
export const Option = styled.option`
  font-size: 16px; /* Размер шрифта */
`;

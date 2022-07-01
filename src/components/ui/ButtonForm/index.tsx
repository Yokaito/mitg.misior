import { FC } from 'react';
import * as S from './styles';

export type ButtonFormProps = {
  extend?: boolean;
};

export const ButtonForm: FC<ButtonFormProps> = ({ extend, children }) => {
  return (
    <S.ButtonFormWrapper extend={extend} type="submit">
      <S.ButtonFormText as="span">{children}</S.ButtonFormText>
    </S.ButtonFormWrapper>
  );
};

export default ButtonForm;

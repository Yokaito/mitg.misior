import { FC } from 'react';
import * as S from './styles';

export type ButtonFormProps = {
  extend?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export const ButtonForm: FC<ButtonFormProps> = ({
  extend,
  children,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <S.ButtonFormWrapper extend={extend} type="submit" disabled={disabled}>
      <S.ButtonFormText as="span">
        {isLoading ? <S.IconLoading height={16} speed={2} /> : children}
      </S.ButtonFormText>
    </S.ButtonFormWrapper>
  );
};

export default ButtonForm;

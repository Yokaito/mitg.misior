import { FieldHookConfig, useField } from 'formik';
import { useState } from 'react';
import * as S from './styles';

type InputFormikProps = {
  label: string;
};

export const InputFormik = ({
  label,
  ...props
}: InputFormikProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <S.InputWrapper>
      <S.Label htmlFor={props.id}>{label}</S.Label>
      <S.Input
        {...props}
        {...field}
        onFocus={handleFocus}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
      />
      {meta.error ? meta.error : `✓`}
    </S.InputWrapper>
  );
};

export default InputFormik;

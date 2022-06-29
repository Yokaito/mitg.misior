import { FieldHookConfig, useField } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';
import CloseIcon from '@/assets/images/helpers/false.png';
import TrueIcon from '@/assets/images/helpers/true.png';

type InputFormikProps = {
  label: string;
  showLabel?: boolean;
};

export const InputFormik = ({
  label,
  showLabel,
  ...props
}: InputFormikProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value?.trim().length > 2) || meta.touched;

  return (
    <S.InputWrapper
      containError={meta.error ? true : false}
      showError={showFeedback ? true : false}
    >
      {showLabel && <S.Label htmlFor={props.id}>{label}</S.Label>}

      <S.InputWithFeedback>
        <S.Input
          {...props}
          {...field}
          onFocus={handleFocus}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
        />
        {showFeedback ? (
          <S.Feedback id={`${props.id}-feedback`} aria-live="polite">
            {meta.error ? (
              <>
                <S.ToolTipWrapper>
                  <Image src={CloseIcon} alt="icon error" />
                  <S.ToolTipText>{meta.error}</S.ToolTipText>
                </S.ToolTipWrapper>
              </>
            ) : (
              <Image src={TrueIcon} alt="icon alright" />
            )}
          </S.Feedback>
        ) : null}
      </S.InputWithFeedback>
      <S.ErrorFeedback>{meta.error}</S.ErrorFeedback>
    </S.InputWrapper>
  );
};

export default InputFormik;

import { FieldHookConfig, useField } from 'formik';
import { useState } from 'react';
import RightIcon from '../Icons/Right';
import * as S from './styles';

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
                  <S.ErrorIcon />
                  <S.ToolTipText>{meta.error}</S.ToolTipText>
                </S.ToolTipWrapper>
              </>
            ) : (
              <RightIcon />
            )}
          </S.Feedback>
        ) : null}
      </S.InputWithFeedback>
      <S.ErrorFeedback>{meta.error}</S.ErrorFeedback>
    </S.InputWrapper>
  );
};

export default InputFormik;

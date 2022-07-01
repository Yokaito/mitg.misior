import { FieldHookConfig, useField } from 'formik';
import { useState } from 'react';
import * as S from './styles';

import Link from 'next/link';

type CheckBoxFormikProps = {
  label: string;
  showLabel?: boolean;
  terms?: string;
  urlToTerms?: string;
  termsWithStyle?: string;
};

export const CheckBoxRulesFormik = ({
  label,
  showLabel,
  terms,
  urlToTerms,
  termsWithStyle,
  ...props
}: CheckBoxFormikProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = !!didFocus && !!meta.error && !!meta.touched;

  return (
    <>
      <S.CheckboxFormikWrapper
        containError={meta.error ? true : false}
        showError={showFeedback ? true : false}
      >
        {showLabel && (
          <S.CheckBoxLabel htmlFor={props.id}>{label}</S.CheckBoxLabel>
        )}
        <S.CheckBoxWithText>
          <S.CheckBox
            {...props}
            {...field}
            onFocus={handleFocus}
            aria-describedby={`${props.id}-feedback ${props.id}-help`}
            type="checkbox"
          />
          <Link href={urlToTerms || `/`}>
            <S.CheckBoxText>
              {terms}
              <S.TermsAndConditions>{termsWithStyle}</S.TermsAndConditions>
            </S.CheckBoxText>
          </Link>
        </S.CheckBoxWithText>

        <S.CheckBoxError>{meta.error}</S.CheckBoxError>
      </S.CheckboxFormikWrapper>
    </>
  );
};

export default CheckBoxRulesFormik;

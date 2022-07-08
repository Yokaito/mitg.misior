import { FC } from 'react';
import BackgroundBar from '../ui/shared/BackgroundBar';

export const InfoBar: FC = () => {
  return (
    <>
      <BackgroundBar typeBackground="red" hasBottomBorder></BackgroundBar>
    </>
  );
};

export default InfoBar;

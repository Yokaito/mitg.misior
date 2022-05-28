import { FC, useState } from 'react';
import * as S from './styles';

interface TickerItemProps {
  icon: string;
  date: string;
  text: string;
}

export const TickerItem: FC<TickerItemProps> = ({ icon, date, text }) => {
  const [active, setActive] = useState(false);

  return (
    <S.TickerItemWrapper isActive={active} onClick={() => setActive(!active)}>
      <S.TickerIcon icon={icon} />
      <S.TickerDate>{date}</S.TickerDate>
      <S.TickerText isActive={active}>{text}</S.TickerText>
      <S.TickerShow isActive={active} />
    </S.TickerItemWrapper>
  );
};

export default TickerItem;

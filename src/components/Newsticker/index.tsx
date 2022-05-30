import useNewsticker from '@/sdk/services/Newsticker';
import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { TickerItem } from './TickerItem';

import * as S from './styles';

export const Newsticker: FC = () => {
  const { newstickers, loading } = useNewsticker();

  return (
    <S.NewstickerWrapper>
      {loading ? (
        <SkeletonTheme baseColor="#d4c0a1" highlightColor="#ffd698">
          <Skeleton
            height={15}
            width="100%"
            count={5}
            inline={true}
            borderRadius="2px"
          />
        </SkeletonTheme>
      ) : (
        newstickers.map(({ icon, id, message, created_at }) => (
          <TickerItem
            text={message}
            key={id}
            icon={icon}
            date={created_at}
          ></TickerItem>
        ))
      )}
    </S.NewstickerWrapper>
  );
};

export default Newsticker;
/*


*/

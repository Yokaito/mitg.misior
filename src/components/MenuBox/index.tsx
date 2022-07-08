import * as S from './styles';
import Image from 'next/image';
import BoxBorder from '@/assets/images/general/box-top.gif';
import { MenuItem } from './MenuItem';
import { MenuSubItem } from './MenuSubItem';
import { useSelector } from 'react-redux';
import { getMenu } from '@/sdk/store/slicers';

export const MenuBox = () => {
  const menu = useSelector(getMenu());

  return (
    <>
      <S.MenuBoxWrapper>
        <S.MenuBoxBorderWrapper>
          <Image src={BoxBorder} alt="box border top" />
        </S.MenuBoxBorderWrapper>
        <S.MenuBoxContent>
          {menu.map((item, index) => {
            return (
              <MenuItem
                key={index}
                text={item.text}
                icon={item.icon}
                initiallyOpen={item.initiallyOpen}
              >
                {item.subItems.map((subItem, subItemIndex) => {
                  return (
                    <MenuSubItem
                      parentName={item.text}
                      key={subItemIndex}
                      text={subItem.title}
                      href={subItem.href}
                    />
                  );
                })}
              </MenuItem>
            );
          })}
        </S.MenuBoxContent>
        <S.MenuBoxBorderWrapper bottom>
          <Image src={BoxBorder} alt="box border bottom"></Image>
        </S.MenuBoxBorderWrapper>
      </S.MenuBoxWrapper>
    </>
  );
};

export default MenuBox;

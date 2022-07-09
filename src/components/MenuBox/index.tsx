import * as S from './styles';
import Image from 'next/image';
import BoxBorder from '@/assets/images/general/box-top.gif';
import { MenuItem } from './MenuItem';
import { MenuSubItem } from './MenuSubItem';
import { useSelector, useStore } from 'react-redux';
import { getMenu, changeLanguageMenu } from '@/sdk/store/slicers';
import useTranslation from '@/sdk/hooks/useTranslation';
import { useEffect } from 'react';

export const MenuBox = () => {
  const store = useStore();
  const menu = useSelector(getMenu());
  const { locale } = useTranslation();

  useEffect(() => {
    store.dispatch(changeLanguageMenu(locale));
  }, [locale, store]);

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

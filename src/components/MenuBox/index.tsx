import * as S from './styles';
import Image from 'next/image';
import BoxBorder from '@/assets/images/general/box-top.gif';
import { MenuItem } from './MenuItem';
import { MenuSubItem } from './MenuSubItem';

// Config Menu
import NewsMenu from '@/assets/images/shared/menu/news-menu.gif';
import Armillary from '@/assets/images/shared/menu/armillary_sphere.gif';
import StolenMoment from '@/assets/images/shared/menu/scroll_of_the_stolen_moment.gif';
import Bookworm from '@/assets/images/shared/menu/bookworm_doll.gif';
import CitizenDoll from '@/assets/images/shared/menu/citizen_doll.gif';
import Goromaphone from '@/assets/images/shared/menu/goromaphone.gif';
import BabyMonster from '@/assets/images/shared/menu/baby_munster.gif';
import JournalShield from '@/assets/images/shared/menu/journal_shield.gif';
import LoreMaster from '@/assets/images/shared/menu/loremaster_doll.gif';

const MenuItensConfig = [
  {
    id: 1,
    text: `News`,
    icon: Goromaphone,
    subItems: [
      {
        id: 1,
        title: `Latest News`,
        href: `/`,
      },
      {
        id: 2,
        title: `News Archive`,
        href: `/news-archive`,
      },
      {
        id: 3,
        title: `Event Schedule`,
        href: `/event-schedule`,
      },
    ],
  },
  {
    id: 2,
    text: `About Tibia`,
    icon: Armillary,
    subItems: [
      {
        id: 1,
        title: `What is Tibia?`,
        href: `/what-is-tibia`,
      },
      {
        id: 2,
        title: `Screenshots`,
        href: `/screenshots`,
      },
      {
        id: 3,
        title: `Game Features`,
        href: `/game-features`,
      },
      {
        id: 4,
        title: `Premium Features`,
        href: `/premium-features`,
      },
      {
        id: 5,
        title: `About Misior`,
        href: `/about-misior`,
      },
    ],
  },
  {
    id: 3,
    text: `Game Guides`,
    icon: StolenMoment,
    subItems: [
      {
        id: 1,
        title: `Quick Start`,
        href: `/quick-start`,
      },
      {
        id: 2,
        title: `Manual`,
        href: `/manual`,
      },
      {
        id: 3,
        title: `Security Hints`,
        href: `/security-hints`,
      },
    ],
  },
  {
    id: 4,
    text: `Library`,
    icon: Bookworm,
    subItems: [
      {
        id: 1,
        title: `Creatures`,
        href: `/creatures`,
      },
      {
        id: 2,
        title: `Spells`,
        href: `/spells`,
      },
      {
        id: 3,
        title: `Achievements`,
        href: `/achievements`,
      },
      {
        id: 4,
        title: `World Quests`,
        href: `/world-quests`,
      },
      {
        id: 5,
        title: `Experience Table`,
        href: `/experience-table`,
      },
      {
        id: 6,
        title: `Maps`,
        href: `/maps`,
      },
      {
        id: 7,
        title: `Genesis`,
        href: `/genesis`,
      },
    ],
  },
  {
    id: 5,
    text: `Community`,
    icon: CitizenDoll,
    subItems: [
      {
        id: 1,
        title: `Characters`,
        href: `/characters`,
      },
      {
        id: 2,
        title: `Worlds`,
        href: `/worlds`,
      },
      {
        id: 3,
        title: `Tournaments`,
        href: `/tournaments`,
      },
      {
        id: 4,
        title: `Highscores`,
        href: `/highscores`,
      },
      {
        id: 5,
        title: `Leader Boards`,
        href: `/leader-boards`,
      },
      {
        id: 6,
        title: `Kill Statistics`,
        href: `/kill-statistics`,
      },
      {
        id: 7,
        title: `Houses`,
        href: `/houses`,
      },
      {
        id: 8,
        title: `Guilds`,
        href: `/guilds`,
      },
      {
        id: 9,
        title: `Polls`,
        href: `/polls`,
      },
      {
        id: 10,
        title: `Feedback Form`,
        href: `/feedback-form`,
      },
      {
        id: 11,
        title: `Fansites`,
        href: `/fansites`,
      },
      {
        id: 12,
        title: `Resellers`,
        href: `/resellers`,
      },
    ],
  },
  {
    id: 6,
    text: `Forum`,
    icon: NewsMenu,
    subItems: [
      {
        id: 1,
        title: `World Boards`,
        href: `/world-boards`,
      },
      {
        id: 2,
        title: `Trade Boards`,
        href: `/trade-boards`,
      },
      {
        id: 3,
        title: `Community Boards`,
        href: `/community-boards`,
      },
      {
        id: 4,
        title: `Support Boards`,
        href: `/support-boards`,
      },
      {
        id: 5,
        title: `Guild Boards`,
        href: `/guild-boards`,
      },
      {
        id: 6,
        title: `CM Post Archive`,
        href: `/cm-post-archive`,
      },
    ],
  },
  {
    id: 7,
    text: `Account`,
    icon: BabyMonster,
    subItems: [
      {
        id: 1,
        title: `Account Management`,
        href: `/account/management`,
      },
      {
        id: 2,
        title: `Create Account`,
        href: `/account/create`,
      },
      {
        id: 3,
        title: `Download Client`,
        href: `/download-client`,
      },
      {
        id: 4,
        title: `Webshop`,
        href: `/webshop`,
      },
      {
        id: 5,
        title: `Lost Account`,
        href: `/account/lost`,
      },
    ],
  },
  {
    id: 8,
    text: `Char Bazaar`,
    icon: JournalShield,
    subItems: [
      {
        id: 1,
        title: `Current Auctions`,
        href: `/current-auctions`,
      },
      {
        id: 2,
        title: `Auction History`,
        href: `/auction-history`,
      },
      {
        id: 3,
        title: `My Bids`,
        href: `/my-bids`,
      },
      {
        id: 4,
        title: `My Auctions`,
        href: `/my-auctions`,
      },
      {
        id: 5,
        title: `My Watched Auctions`,
        href: `/my-watched-auctions`,
      },
    ],
  },
  {
    id: 9,
    text: `Support`,
    icon: LoreMaster,
    subItems: [
      {
        id: 1,
        title: `FAQ`,
        href: `/faq`,
      },
      {
        id: 2,
        title: `Tibia Rules`,
        href: `/tibia-rules`,
      },
      {
        id: 3,
        title: `Tutor Guide`,
        href: `/tutor-guide`,
      },
      {
        id: 4,
        title: `Parent's Guide`,
        href: `/parents-guide`,
      },
      {
        id: 5,
        title: `Legal Documents`,
        href: `/legal-documents`,
      },
    ],
  },
];

// Config Menu

export const MenuBox = () => {
  return (
    <>
      <S.MenuBoxWrapper>
        <S.MenuBoxBorderWrapper>
          <Image src={BoxBorder} alt="box border top" />
        </S.MenuBoxBorderWrapper>
        <S.MenuBoxContent>
          {MenuItensConfig.map((item) => {
            return (
              <MenuItem key={item.id} text={item.text} icon={item.icon}>
                {item.subItems.map((subItem) => {
                  return (
                    <MenuSubItem
                      key={subItem.id}
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

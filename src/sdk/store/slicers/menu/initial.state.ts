import { StaticImageData } from 'next/image';
import NewsMenu from '@/assets/images/shared/menu/news-menu.gif';
import Armillary from '@/assets/images/shared/menu/armillary_sphere.gif';
import StolenMoment from '@/assets/images/shared/menu/scroll_of_the_stolen_moment.gif';
import Bookworm from '@/assets/images/shared/menu/bookworm_doll.gif';
import CitizenDoll from '@/assets/images/shared/menu/citizen_doll.gif';
import Goromaphone from '@/assets/images/shared/menu/goromaphone.gif';
import BabyMonster from '@/assets/images/shared/menu/baby_munster.gif';
import JournalShield from '@/assets/images/shared/menu/journal_shield.gif';
import LoreMaster from '@/assets/images/shared/menu/loremaster_doll.gif';

export type MenuItem = {
  initiallyOpen: boolean;
  text: string;
  icon: StaticImageData;
  subItems: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  href: string;
};

export const initialState: MenuItem[] = [
  {
    initiallyOpen: false,
    text: `News`,
    icon: Goromaphone,
    subItems: [
      {
        title: `Latest News`,
        href: `/`,
      },
      {
        title: `News Archive`,
        href: `/news-archive`,
      },
      {
        title: `Event Schedule`,
        href: `/event-schedule`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `About Tibia`,
    icon: Armillary,
    subItems: [
      {
        title: `What is Tibia?`,
        href: `/what-is-tibia`,
      },
      {
        title: `Screenshots`,
        href: `/screenshots`,
      },
      {
        title: `Game Features`,
        href: `/game-features`,
      },
      {
        title: `Premium Features`,
        href: `/premium-features`,
      },
      {
        title: `About Misior`,
        href: `/about-misior`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Game Guides`,
    icon: StolenMoment,
    subItems: [
      {
        title: `Quick Start`,
        href: `/quick-start`,
      },
      {
        title: `Manual`,
        href: `/manual`,
      },
      {
        title: `Security Hints`,
        href: `/security-hints`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Library`,
    icon: Bookworm,
    subItems: [
      {
        title: `Creatures`,
        href: `/creatures`,
      },
      {
        title: `Spells`,
        href: `/spells`,
      },
      {
        title: `Achievements`,
        href: `/achievements`,
      },
      {
        title: `World Quests`,
        href: `/world-quests`,
      },
      {
        title: `Experience Table`,
        href: `/experience-table`,
      },
      {
        title: `Maps`,
        href: `/maps`,
      },
      {
        title: `Genesis`,
        href: `/genesis`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Community`,
    icon: CitizenDoll,
    subItems: [
      {
        title: `Characters`,
        href: `/characters`,
      },
      {
        title: `Worlds`,
        href: `/worlds`,
      },
      {
        title: `Tournaments`,
        href: `/tournaments`,
      },
      {
        title: `Highscores`,
        href: `/highscores`,
      },
      {
        title: `Leader Boards`,
        href: `/leader-boards`,
      },
      {
        title: `Kill Statistics`,
        href: `/kill-statistics`,
      },
      {
        title: `Houses`,
        href: `/houses`,
      },
      {
        title: `Guilds`,
        href: `/guilds`,
      },
      {
        title: `Polls`,
        href: `/polls`,
      },
      {
        title: `Feedback Form`,
        href: `/feedback-form`,
      },
      {
        title: `Fansites`,
        href: `/fansites`,
      },
      {
        title: `Resellers`,
        href: `/resellers`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Forum`,
    icon: NewsMenu,
    subItems: [
      {
        title: `World Boards`,
        href: `/world-boards`,
      },
      {
        title: `Trade Boards`,
        href: `/trade-boards`,
      },
      {
        title: `Community Boards`,
        href: `/community-boards`,
      },
      {
        title: `Support Boards`,
        href: `/support-boards`,
      },
      {
        title: `Guild Boards`,
        href: `/guild-boards`,
      },
      {
        title: `CM Post Archive`,
        href: `/cm-post-archive`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Account`,
    icon: BabyMonster,
    subItems: [
      {
        title: `Account Management`,
        href: `/account/management`,
      },
      {
        title: `Create Account`,
        href: `/account/create`,
      },
      {
        title: `Download Client`,
        href: `/download-client`,
      },
      {
        title: `Webshop`,
        href: `/webshop`,
      },
      {
        title: `Lost Account`,
        href: `/account/lost`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Char Bazaar`,
    icon: JournalShield,
    subItems: [
      {
        title: `Current Auctions`,
        href: `/current-auctions`,
      },
      {
        title: `Auction History`,
        href: `/auction-history`,
      },
      {
        title: `My Bids`,
        href: `/my-bids`,
      },
      {
        title: `My Auctions`,
        href: `/my-auctions`,
      },
      {
        title: `My Watched Auctions`,
        href: `/my-watched-auctions`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Support`,
    icon: LoreMaster,
    subItems: [
      {
        title: `FAQ`,
        href: `/faq`,
      },
      {
        title: `Tibia Rules`,
        href: `/tibia-rules`,
      },
      {
        title: `Tutor Guide`,
        href: `/tutor-guide`,
      },
      {
        title: `Parent's Guide`,
        href: `/parents-guide`,
      },
      {
        title: `Legal Documents`,
        href: `/legal-documents`,
      },
    ],
  },
];

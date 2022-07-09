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
  textPt: string;
  textEn: string;
  icon: StaticImageData;
  subItems: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  titlePt: string;
  titleEn: string;
  href: string;
};

export const initialState: MenuItem[] = [
  {
    initiallyOpen: false,
    text: `News`,
    textPt: `Notícias`,
    textEn: `News`,
    icon: Goromaphone,
    subItems: [
      {
        title: `Latest News`,
        titlePt: `Últimas Notícias`,
        titleEn: `Latest News`,
        href: `/`,
      },
      {
        title: `News Archive`,
        titlePt: `Arquivo de Notícias`,
        titleEn: `News Archive`,
        href: `/news-archive`,
      },
      {
        title: `Event Schedule`,
        titlePt: `Agenda de Eventos`,
        titleEn: `Event Schedule`,
        href: `/event-schedule`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `About Tibia`,
    textPt: `Sobre o Tibia`,
    textEn: `About Tibia`,
    icon: Armillary,
    subItems: [
      {
        title: `What is Tibia?`,
        titlePt: `O que é o Tibia?`,
        titleEn: `What is Tibia?`,
        href: `/what-is-tibia`,
      },
      {
        title: `Screenshots`,
        titlePt: `Screenshots`,
        titleEn: `Screenshots`,
        href: `/screenshots`,
      },
      {
        title: `Game Features`,
        titlePt: `O Jogo`,
        titleEn: `Game Features`,
        href: `/game-features`,
      },
      {
        title: `Premium Features`,
        titlePt: `Premium Features`,
        titleEn: `Premium Features`,
        href: `/premium-features`,
      },
      {
        title: `About Misior`,
        titlePt: `Sobre Misior`,
        titleEn: `About Misior`,
        href: `/about-misior`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Game Guides`,
    textPt: `Guias do Jogo`,
    textEn: `Game Guides`,
    icon: StolenMoment,
    subItems: [
      {
        title: `Quick Start`,
        titlePt: `Início Rápido`,
        titleEn: `Quick Start`,
        href: `/quick-start`,
      },
      {
        title: `Manual`,
        titlePt: `Manual`,
        titleEn: `Manual`,
        href: `/manual`,
      },
      {
        title: `Security Hints`,
        titlePt: `Dicas de Segurança`,
        titleEn: `Security Hints`,
        href: `/security-hints`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Library`,
    textPt: `Biblioteca`,
    textEn: `Library`,
    icon: Bookworm,
    subItems: [
      {
        title: `Creatures`,
        titlePt: `Criaturas`,
        titleEn: `Creatures`,
        href: `/creatures`,
      },
      {
        title: `Spells`,
        titlePt: `Magias`,
        titleEn: `Spells`,
        href: `/spells`,
      },
      {
        title: `Achievements`,
        titlePt: `Conquistas`,
        titleEn: `Achievements`,
        href: `/achievements`,
      },
      {
        title: `World Quests`,
        titlePt: `Missões Mundiais`,
        titleEn: `World Quests`,
        href: `/world-quests`,
      },
      {
        title: `Experience Table`,
        titlePt: `Tabela de Experiência`,
        titleEn: `Experience Table`,
        href: `/experience-table`,
      },
      {
        title: `Maps`,
        titlePt: `Mapas`,
        titleEn: `Maps`,
        href: `/maps`,
      },
      {
        title: `Genesis`,
        titlePt: `Gênesis`,
        titleEn: `Genesis`,
        href: `/genesis`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Community`,
    textPt: `Comunidade`,
    textEn: `Community`,
    icon: CitizenDoll,
    subItems: [
      {
        title: `Characters`,
        titlePt: `Personagens`,
        titleEn: `Characters`,
        href: `/characters`,
      },
      {
        title: `Worlds`,
        titlePt: `Mundos`,
        titleEn: `Worlds`,
        href: `/worlds`,
      },
      {
        title: `Tournaments`,
        titlePt: `Torneios`,
        titleEn: `Tournaments`,
        href: `/tournaments`,
      },
      {
        title: `Highscores`,
        titlePt: `Highscores`,
        titleEn: `Highscores`,
        href: `/highscores`,
      },
      {
        title: `Leader Boards`,
        titlePt: `Tabela de Líderes`,
        titleEn: `Leader Boards`,
        href: `/leader-boards`,
      },
      {
        title: `Kill Statistics`,
        titlePt: `Estatísticas de Kill`,
        titleEn: `Kill Statistics`,
        href: `/kill-statistics`,
      },
      {
        title: `Houses`,
        titlePt: `Casas`,
        titleEn: `Houses`,
        href: `/houses`,
      },
      {
        title: `Guilds`,
        titlePt: `Guildas`,
        titleEn: `Guilds`,
        href: `/guilds`,
      },
      {
        title: `Polls`,
        titlePt: `Enquetes`,
        titleEn: `Polls`,
        href: `/polls`,
      },
      {
        title: `Feedback Form`,
        titlePt: `Enquete de Feedback`,
        titleEn: `Feedback Form`,
        href: `/feedback-form`,
      },
      {
        title: `Fansites`,
        titlePt: `Fansites`,
        titleEn: `Fansites`,
        href: `/fansites`,
      },
      {
        title: `Resellers`,
        titlePt: `Revendedores`,
        titleEn: `Resellers`,
        href: `/resellers`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Forum`,
    textPt: `Fórum`,
    textEn: `Forum`,
    icon: NewsMenu,
    subItems: [
      {
        title: `World Boards`,
        titlePt: `Fóruns Mundiais`,
        titleEn: `World Boards`,
        href: `/world-boards`,
      },
      {
        title: `Trade Boards`,
        titlePt: `Fóruns de Trade`,
        titleEn: `Trade Boards`,
        href: `/trade-boards`,
      },
      {
        title: `Community Boards`,
        titlePt: `Fóruns de Comunidade`,
        titleEn: `Community Boards`,
        href: `/community-boards`,
      },
      {
        title: `Support Boards`,
        titlePt: `Fóruns de Suporte`,
        titleEn: `Support Boards`,
        href: `/support-boards`,
      },
      {
        title: `Guild Boards`,
        titlePt: `Fóruns de Guildas`,
        titleEn: `Guild Boards`,
        href: `/guild-boards`,
      },
      {
        title: `CM Post Archive`,
        titlePt: `Arquivo de Postagens CM`,
        titleEn: `CM Post Archive`,
        href: `/cm-post-archive`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Account`,
    textPt: `Conta`,
    textEn: `Account`,
    icon: BabyMonster,
    subItems: [
      {
        title: `Account Management`,
        titlePt: `Gerenciamento de Conta`,
        titleEn: `Account Management`,
        href: `/account/management`,
      },
      {
        title: `Create Account`,
        titlePt: `Criar Conta`,
        titleEn: `Create Account`,
        href: `/account/create`,
      },
      {
        title: `Download Client`,
        titlePt: `Baixar Cliente`,
        titleEn: `Download Client`,
        href: `/download-client`,
      },
      {
        title: `Webshop`,
        titlePt: `Loja`,
        titleEn: `Webshop`,
        href: `/webshop`,
      },
      {
        title: `Lost Account`,
        titlePt: `Conta Perdida`,
        titleEn: `Lost Account`,
        href: `/account/lost`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Char Bazaar`,
    textPt: `Bazar `,
    textEn: `Char Bazaar`,
    icon: JournalShield,
    subItems: [
      {
        title: `Current Auctions`,
        titlePt: `Leilões Atuais`,
        titleEn: `Current Auctions`,
        href: `/current-auctions`,
      },
      {
        title: `Auction History`,
        titlePt: `Histórico de Leilões`,
        titleEn: `Auction History`,
        href: `/auction-history`,
      },
      {
        title: `My Bids`,
        titlePt: `Minhas Ofertas`,
        titleEn: `My Bids`,
        href: `/my-bids`,
      },
      {
        title: `My Auctions`,
        titlePt: `Meus Leilões`,
        titleEn: `My Auctions`,
        href: `/my-auctions`,
      },
      {
        title: `My Watched Auctions`,
        titlePt: `Meus Leilões Assistidos`,
        titleEn: `My Watched Auctions`,
        href: `/my-watched-auctions`,
      },
    ],
  },
  {
    initiallyOpen: false,
    text: `Support`,
    textPt: `Suporte`,
    textEn: `Support`,
    icon: LoreMaster,
    subItems: [
      {
        title: `FAQ`,
        titlePt: `Perguntas Frequentes`,
        titleEn: `FAQ`,
        href: `/faq`,
      },
      {
        title: `Tibia Rules`,
        titlePt: `Regras do Tibia`,
        titleEn: `Tibia Rules`,
        href: `/tibia-rules`,
      },
      {
        title: `Tutor Guide`,
        titlePt: `Guia do Tutor`,
        titleEn: `Tutor Guide`,
        href: `/tutor-guide`,
      },
      {
        title: `Parent's Guide`,
        titlePt: `Guia do Pai`,
        titleEn: `Parent's Guide`,
        href: `/parents-guide`,
      },
      {
        title: `Legal Documents`,
        titlePt: `Documentos Legais`,
        titleEn: `Legal Documents`,
        href: `/legal-documents`,
      },
    ],
  },
];

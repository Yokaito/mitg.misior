interface MisiorProps {
  [key: string]: string;
}

export const misior: MisiorProps = {
  db_version: `19`,
  motd_hash: ``,
  motd_num: `0`,
  players_record: `0`,
};

interface MisiorWebProps {
  otName: string;
  timezone: string;
  domain: string;
  ga_tracking_id: string;
}

export const misiorWeb: MisiorWebProps = {
  otName: `Misior`,
  timezone: `America/Sao_Paulo`,
  domain: `https://misior.mitg.dev/`,
  ga_tracking_id: `G-MGCRHDCYFK`,
};

export const otConfigs = {
  server: {
    worldName: `Gardebra`,
    ip: `35.247.229.151`,
    loginProtocolPort: 7171,
    gameProtocolPort: 7172,
    pvpType: 2, // 0 = no-pvp, 1 = pvp, 2 = retro pvp
    worldid: 0,
    premiumIsFree: false,
    location: `BRA`,
    battleEyeActive: false,
  },
  vocations: [
    { id: 0, name: `No Vocation` },
    { id: 1, name: `Sorcerer` },
    { id: 2, name: `Druid` },
    { id: 3, name: `Paladin` },
    { id: 4, name: `Knight` },
    { id: 5, name: `Master Sorcerer` },
    { id: 6, name: `Elder Druid` },
    { id: 7, name: `Royal Paladin` },
    { id: 8, name: `Elite Knight` },
    { id: 10, name: `All` },
  ],
};

export default misior;

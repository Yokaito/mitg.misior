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
  timezone: string;
}

export const misiorWeb: MisiorWebProps = {
  timezone: `America/Sao_Paulo`,
};

export default misior;

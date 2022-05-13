import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const serverConfig = [
  {
    config: `db_version`,
    value: `18`,
  },
  {
    config: `motd_hash`,
    value: ``,
  },
  {
    config: `motd_num`,
    value: `0`,
  },
  {
    config: `players_record`,
    value: `0`,
  },
];

export const main = async (): Promise<void> => {
  const configs = await prisma.server_config.findMany();
  console.log(configs);
  if (configs.length === 0) {
    await prisma.server_config.createMany({
      data: serverConfig,
    });
  }
  return;
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

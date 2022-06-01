import { PrismaClient, server_config } from '@prisma/client';
import misior from '../misior.config';

const prisma = new PrismaClient();

export const main = async (): Promise<void> => {
  const localConfigs: Array<server_config> = [];
  const dbConfigs = await prisma.server_config.findMany();

  Object.keys(misior).forEach((config) => {
    localConfigs.push({ config: config, value: misior[config] });
  });

  if (dbConfigs.length === 0) {
    await prisma.server_config.createMany({
      data: localConfigs,
    });
  }

  if (JSON.stringify(localConfigs) !== JSON.stringify(dbConfigs)) {
    await prisma.server_config.deleteMany();
    await prisma.server_config.createMany({
      data: localConfigs,
    });
  }
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

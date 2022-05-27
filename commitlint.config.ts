import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: [`@commitlint/config-conventional`],
  rules: {
    'type-enum': [
      2,
      `always`,
      [
        `feat`,
        `fix`,
        `docs`,
        `style`,
        `refactor`,
        `perf`,
        `test`,
        `chore`,
        `revert`,
        `prisma`,
      ],
    ],
  },
};

module.exports = Configuration;

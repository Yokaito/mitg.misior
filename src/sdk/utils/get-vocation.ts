import { otConfigs } from '@/misior';

export const getVocationName = (vocation: number) => {
  const vocationName = otConfigs.vocations.find(
    (vocationItem) => vocationItem.id === vocation,
  );

  return vocationName?.name;
};

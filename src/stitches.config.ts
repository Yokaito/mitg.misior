import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;
export const { styled, css, getCssText, config, createTheme } = createStitches({
  prefix: `misior`,
});

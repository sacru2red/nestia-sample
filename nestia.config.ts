import type nestia from '@nestia/sdk';

export const NESTIA_CONFIG = {
  input: 'src/**/*.controller.ts',
  output: 'src/api',
  clone: true,
  swagger: {
    output: './swagger.json',
  },
  distribute: 'packages/api',
} satisfies nestia.INestiaConfig;
export default NESTIA_CONFIG;

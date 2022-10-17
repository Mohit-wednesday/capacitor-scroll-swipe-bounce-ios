import { registerPlugin } from '@capacitor/core';

import type { CapacitorScrollSwipeBounceIosPlugin } from './definitions';

const CapacitorScrollSwipeBounceIos =
  registerPlugin<CapacitorScrollSwipeBounceIosPlugin>(
    'CapacitorScrollSwipeBounceIos',
    {
      web: () =>
        import('./web').then(m => new m.CapacitorScrollSwipeBounceIosWeb()),
    },
  );

export * from './definitions';
export { CapacitorScrollSwipeBounceIos };

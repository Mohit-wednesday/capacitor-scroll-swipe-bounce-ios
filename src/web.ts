import { WebPlugin } from '@capacitor/core';

import type { CapacitorScrollSwipeBounceIosPlugin } from './definitions';

export class CapacitorScrollSwipeBounceIosWeb
  extends WebPlugin
  implements CapacitorScrollSwipeBounceIosPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

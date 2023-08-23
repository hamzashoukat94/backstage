import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const apiDocPlugin = createPlugin({
  id: 'api-doc',
  routes: {
    root: rootRouteRef,
  },
});

export const ApiDocPage = apiDocPlugin.provide(
  createRoutableExtension({
    name: 'ApiDocPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

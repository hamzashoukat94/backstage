import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { apiDocPlugin, ApiDocPage } from '../src/plugin';

createDevApp()
  .registerPlugin(apiDocPlugin)
  .addPage({
    element: <ApiDocPage />,
    title: 'Root Page',
    path: '/api-doc'
  })
  .render();

import type { NpmGlo } from '~/types';
import { mdiIdeogramCjkVariant } from '@mdi/js';

const BuildNpmChild: NpmGlo[] = [
  {
    title: 'Vite',
    descrpition: '下一代的前端工具链。为开发提供极速响应',
    url: [
      {
        label: 'docs',
        icon: mdiIdeogramCjkVariant,
        url: 'https://cn.vitejs.dev/'
      }
    ]
  },
];

const Build = {
  title: 'Build',
  type: 'build',
  children: BuildNpmChild
};

export default Build;

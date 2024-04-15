import type { NpmGlo } from '~/types';
import { mdiIdeogramCjkVariant } from '@mdi/js';

const MicroNpmChild: NpmGlo[] = [
  {
    title: 'wujie',
    descrpition: '无界微前端解决方案',
    url: [
      {
        label: 'docs 中文文档',
        icon: mdiIdeogramCjkVariant,
        url: 'https://wujie-micro.github.io/doc/guide/'
      }
    ]
  },
  {
    title: 'micro-app',
    descrpition: '京东MicroApp微前端解决方案',
    url: [
      {
        label: 'docs 中文文档',
        icon: mdiIdeogramCjkVariant,
        url: 'https://micro-zoe.github.io/micro-app/docs.html#/'
      }
    ]
  }
];

const Micro = {
  title: '微前端',
  type: 'web',
  children: MicroNpmChild
};

export default Micro;

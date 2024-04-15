import type { NpmGlo } from '~/types';
import { mdiIdeogramCjkVariant } from '@mdi/js';

const ServerNpmChild: NpmGlo[] = [
  {
    title: 'Node',
    descrpition: 'Node.js官方API参考文档',
    url: [
      {
        label: 'docs 中文文档',
        icon: mdiIdeogramCjkVariant,
        url: 'https://nodejs.cn/api/'
      },
    ]
  }
];

const Server = {
  title: 'Server',
  type: 'node',
  children: ServerNpmChild
};

export default Server;

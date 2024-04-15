import type { NpmGlo } from '~/types';
import { mdiFileDocumentOutline, mdiNpm } from '@mdi/js';

const CmdNpmChild: NpmGlo[] = [
  {
    title: 'zx',
    descrpition: '一个写出更好剧本(命令操作)的工具',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://google.github.io/zx/'
      },
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/zx'
      }
    ]
  }
];

const Cmd = {
  title: 'Cmd',
  type: 'npm',
  children: CmdNpmChild
};

export default Cmd;

import type { NpmGlo } from '~/types';
import { mdiFileDocumentOutline, mdiNpm } from '@mdi/js';

const GitNpmChild: NpmGlo[] = [
  {
    title: 'commitizen',
    descrpition: 'git提交规范，标准Commitizen格式',
    url: [
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/commitizen'
      }
    ]
  },
  {
    title: 'cz-git',
    descrpition: '工程性更强，轻量级，高度自定义，输出标准格式的 Commitizen 适配器和 CLI',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://github.com/commitizen/cz-cli'
      },
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/cz-git'
      }
    ]
  }
];

const Git = {
  title: 'Git',
  type: 'npm',
  children: GitNpmChild
};

export default Git;

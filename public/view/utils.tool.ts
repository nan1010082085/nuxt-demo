import type { NpmGlo } from '~/types';
import { mdiFileDocumentOutline, mdiIdeogramCjkVariant } from '@mdi/js';

const UtilsNpmChild: NpmGlo[] = [
  {
    title: 'Vercel',
    descrpition: 'Vercel 是前端云。构建、扩展和保护更快、个性化的网络。',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://vercel.com/home'
      }
    ]
  },
  {
    title: 'Emoji',
    descrpition: 'emoji表情大全',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://www.emojiall.com/zh-hans/all-emojis'
      }
    ]
  },
  {
    title: 'IT-Tools',
    descrpition: 'IT-TOOL IT工具大全，助力开发。',
    url: [
      {
        label: 'docs',
        icon: mdiIdeogramCjkVariant,
        url: 'https://it-tools.tech/'
      }
    ]
  }
];

const Utils = {
  title: 'Utils',
  type: 'tool',
  children: UtilsNpmChild
};

export default Utils;

import type { NpmGlo } from '~/types';
import { mdiFileDocumentOutline, mdiNpm } from '@mdi/js';

const PluginNpmChild: NpmGlo[] = [
  {
    title: 'clipboard',
    descrpition: '浏览器剪切板插件',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://clipboardjs.com/'
      },
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/clipboard'
      }
    ]
  },
  {
    title: 'Jsencrypt',
    descrpition: 'RSA 加密解密',
    url: [
      {
        label: 'docs',
        icon: mdiFileDocumentOutline,
        url: 'https://travistidwell.com/jsencrypt/'
      },
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/jsencrypt'
      }
    ]
  },
  {
    title: 'Cryptojs',
    descrpition: '加密解密',
    url: [
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/cryptojs'
      }
    ]
  }
];

const Plugin = {
  title: 'Plugin',
  type: 'npm',
  children: PluginNpmChild
};

export default Plugin;

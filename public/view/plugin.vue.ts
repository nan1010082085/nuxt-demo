import type { NpmGlo } from '~/types';
import { mdiIdeogramCjkVariant, mdiFileDocumentOutline } from '@mdi/js';

const PluginNpmChild: NpmGlo[] = [
  {
    title: 'VueUse',
    descrpition: '基于Vue组合式API的实用工具集',
    url: [
      {
        label: 'docs 英文文档',
        icon: mdiFileDocumentOutline,
        url: 'https://vueuse.org/'
      },
      {
        label: 'docs 中文文档',
        icon: mdiIdeogramCjkVariant,
        url: 'https://www.vueusejs.com/'
      }
    ]
  }
];

const Plugin = {
  title: 'Plugin',
  type: 'vue',
  children: PluginNpmChild
};

export default Plugin;

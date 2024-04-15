import type { NpmGlo } from '~/types';
import { mdiFileDocumentOutline } from '@mdi/js';

const VueNpmChild: NpmGlo[] = [
  {
    title: 'Vue',
    descrpition: 'JavaScript 框架。易学易用，性能出色，适用场景丰富的 Web 前端框架。',
    url: [
      {
        label: 'docs 中文文档',
        icon: mdiFileDocumentOutline,
        url: 'https://cn.vuejs.org/'
      }
    ]
  }
];

const Vue = {
  title: 'Vue',
  type: 'vue',
  children: VueNpmChild
};

export default Vue;

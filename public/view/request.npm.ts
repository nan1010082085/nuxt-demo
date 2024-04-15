import type { NpmGlo } from '~/types';
import { mdiIdeogramCjkVariant, mdiNpm } from '@mdi/js';

const RequestNpmChild: NpmGlo[] = [
  {
    title: 'axios',
    descrpition:
      'Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。',
    url: [
      {
        label: 'docs',
        icon: mdiIdeogramCjkVariant,
        url: 'https://www.axios-http.cn/docs/intro'
      },
      {
        label: 'npm',
        icon: mdiNpm,
        url: 'https://www.npmjs.com/package/axios'
      }
    ]
  }
];

const Request = {
  title: 'Request',
  type: 'npm',
  children: RequestNpmChild
};

export default Request;

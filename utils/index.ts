import type { URLGlo, ViewDef } from '~/types';

const ObjecttoString = Object.prototype.toString;

/**
 * object is Array
 * @param object
 * @returns boolean
 */
export const isArray = (object: any) => {
  return ObjecttoString.call(object) === '[object Array]';
};

/**
 * 将文件后缀转换成类目
 * @param metaKey globEager对象
 * @returns
 */
export const metaKeyByCetagory = (metaKey: object) => {
  const ks = Object.keys(metaKey).map((i) => {
    const match = i.match(/\.[a-zA-Z]+\./);
    if (match) return match[0].replace(/\./g, '');
    return null;
  });
  return ks.filter((i) => i);
};

/**
 * 转换globEager应用为数组
 */
type objectArr = {
  [key: string]: Record<'default', ViewDef>;
};
export const objectByDefaults = (object: objectArr) =>
  Object.values(object)
    .map((i: any) => i.default)
    .filter((i) => i) as ViewDef[];

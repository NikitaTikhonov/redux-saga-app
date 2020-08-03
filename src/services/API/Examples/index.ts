import  _ from 'lodash';

import { Example } from '_store/types/example/models';

const examples: Example[] = [
  { id: 1, body: 'example 1 body', title: 'example 1 title' },
  { id: 2, body: 'example 2 body', title: 'example 2 title' },
  { id: 3, body: 'example 3 body', title: 'example 3 title' },
];


export class ExamplesAPI {
  static getExamples() {
    return new Promise<Example[]>((resolve, reject) => {
      if (_.random(0, 10) > 7) {
        reject('No items');
      }
      setTimeout(() => {
        resolve(examples);
      }, 3000);
    });
  }
  static getExampleById(id: number) {
    return new Promise<Example>((resolve, reject) => {
      console.log(id);
      if (_.random(0, 10) > 7) {
        reject('Some eroor');
      }
      setTimeout(() => {
        resolve(examples[0]);
      }, 3000);
    });
  }
}

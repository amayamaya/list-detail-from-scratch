import { gems } from './data.js';
import { renderListItem } from './render-utils.js';

const main = document.querySelector('main');

for (let gem of gems) {
    const gemDiv = renderListItem(gem);
    main.append(gemDiv);
}
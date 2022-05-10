export function renderListItem(gem) {
    const div = document.createElement('div');
    div.classList.add('gem');
    //class stuff later!
    const img = document.createElement('img');
    img.src = `./assets/${gem.type}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = gem.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = gem.represents;

    const a = document.createElement('a');
    a.href = `./dynamic-gems/?id=${gem.id}`;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
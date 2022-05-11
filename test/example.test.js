// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderListItem } from '../render-utils.js';

const test = QUnit.test;

test('renderListItem renders a div with gem details', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="gem"><a href="./dynamic-gems/?id=1"><img src="./assets/amethyst.jpg"><span class="name">Amethyst</span><span>purity of spirit</span></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const amethyst = {
        id: '1',
        name: 'Amethyst',
        type: 'amethyst',
        represents: 'purity of spirit',
        gemMonth: 'February',
        hardness: '7',
        metaphysicalProperties: 'relieves stress and anxiety',
    };
    const actual = renderListItem(amethyst);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

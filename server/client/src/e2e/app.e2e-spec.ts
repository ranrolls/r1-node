import { browser, by,  element } from 'protractor';

describe('Admin Web E2E Tests',  () => {

    const expectedMsg = 'Admin Web!';

    beforeEach( () => {
        browser.get('index.html');
    });

    it('should display: ' + expectedMsg,  () => {
        //  expect(element(by.css('div')).getText()).toEqual(expectedMsg);
    });

});

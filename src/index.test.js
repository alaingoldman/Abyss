import { JSDOM } from 'jsdom';
import expect from 'expect';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
}); 

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html');
    const dom = new JSDOM(index);
    const contents = dom.window.document.querySelector("h1").textContent;
    expect(contents, 'Hello World!');
  });
});
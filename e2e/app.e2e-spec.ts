import { EverydayappPage } from './app.po';

describe('everydayapp App', () => {
  let page: EverydayappPage;

  beforeEach(() => {
    page = new EverydayappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

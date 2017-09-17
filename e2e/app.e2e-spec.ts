import { DjControllerPage } from './app.po';

describe('dj-controller App', () => {
  let page: DjControllerPage;

  beforeEach(() => {
    page = new DjControllerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

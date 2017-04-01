import { MyAngularApp11AMPage } from './app.po';

describe('my-angular-app11-am App', () => {
  let page: MyAngularApp11AMPage;

  beforeEach(() => {
    page = new MyAngularApp11AMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

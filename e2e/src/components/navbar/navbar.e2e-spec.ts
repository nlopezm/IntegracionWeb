import { NavBarPage } from './navbar.po';

describe('workspace-project App', () => {
  let page: NavBarPage;

  beforeEach(() => {
    page = new NavBarPage();
  });

  it('should display Leagues link', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Leagues');
  });

  it('should display Home link', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Home');
  });

  it('should display Ranking link', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Ranking');
  });

});

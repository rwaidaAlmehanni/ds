import { AppTodoPage } from './app.po';

describe('app-todo App', () => {
  let page: AppTodoPage;

  beforeEach(() => {
    page = new AppTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

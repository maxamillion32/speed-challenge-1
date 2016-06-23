import { SpeedChallenge02Page } from './app.po';

describe('speed-challenge-02 App', function() {
  let page: SpeedChallenge02Page;

  beforeEach(() => {
    page = new SpeedChallenge02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

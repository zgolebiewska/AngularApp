import { FetchjsonPipe } from './fetchjson.pipe';

describe('FetchjsonPipe', () => {
  it('create an instance', () => {
    const pipe = new FetchjsonPipe();
    expect(pipe).toBeTruthy();
  });
});

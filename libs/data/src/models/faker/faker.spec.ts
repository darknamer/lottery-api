import { Faker } from './faker';

describe('Faker', () => {
  it('should be defined', () => {
    expect(new Faker()).toBeDefined();
  });
});

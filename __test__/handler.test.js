import router from '/src/routes/index.js';

describe('Sample Test', () => {
    test('responds to empty get', () => {
      const req = {},
            res = {render: jest.fn() }
      expect(true).toBe(true)
    })
  })
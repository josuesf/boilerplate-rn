import {getTotalPoints} from './calculation';

test('evaluate Sum of Points correctly when Earned is more', () => {
  const products = [
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 200,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 100,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 50,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
  ];
  expect(getTotalPoints(products)).toBe(50);
});
test('evaluate Sum of Points correctly when Redemption is more', () => {
  const products = [
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 100,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 100,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 50,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
  ];
  expect(getTotalPoints(products)).toBe(-50);
});

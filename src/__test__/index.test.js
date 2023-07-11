import indicatorHealth from '../index';

test.each([
  ['Маг', 51, 'healthy'],
  ['Воин', 16, 'wounded'],
  ['Стрелок', 14, 'critical'],
])(('health bar display should %i %s'), (_, health, expected) => {
  const result = indicatorHealth({ health });
  expect(result).toBe(expected);
});

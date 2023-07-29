import Validator from '../js/Validator';

const dataList = [
  ['Ni54kik', new Validator('Ni54kik'), true],
  ['Nik', new Validator('Nik'), true],
  ['Nk', new Validator('Nk'), true],
  ['N888k', new Validator('N888k'), true],
  ['Ni66-kik', new Validator('Ni66-kik'), true],
  ['Ni66_ki', new Validator('Ni66_ki'), true],
  ['N8K', new Validator('N8K'), true],
  ['_Nik', new Validator('_Nik'), false],
  ['9Nikdfd', new Validator('9Nikdfd'), false],
  ['Nikdfd9', new Validator('Nikdfd9'), false],
  ['-Nik', new Validator('-Nik'), false],
  ['Nik-', new Validator('Nik-'), false],
  ['Ni6666kik', new Validator('Ni6666kik'), false],
];

test.each(dataList)('testing Validator with name %s ', (_, object, expected) => {
  const result = object.validateUsername();

  expect(result).toBe(expected);
});

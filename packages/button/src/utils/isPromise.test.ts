import { isPromise } from './isPromise';

describe('isPromise', () => {
  it('должен вернуть true для Promise', () => {
    const promise = Promise.resolve(42);
    expect(isPromise(promise)).toBe(true);
  });

  it('должен вернуть true для объекта с методом then', () => {
    const thenable = {
      then: () => 'thenable',
    };
    expect(isPromise(thenable)).toBe(true);
  });

  it('должен вернуть false для null', () => {
    expect(isPromise(null as any)).toBe(false);
  });

  it('должен вернуть false для undefined', () => {
    expect(isPromise(undefined as any)).toBe(false);
  });

  it('должен вернуть false для простого объекта без then', () => {
    const obj = { value: 42 };
    expect(isPromise(obj as any)).toBe(false);
  });

  it('должен вернуть false для строки', () => {
    expect(isPromise('string' as any)).toBe(false);
  });

  it('должен вернуть false для числа', () => {
    expect(isPromise(123 as any)).toBe(false);
  });

  it('должен вернуть false для функции без then', () => {
    const func = () => 42;
    expect(isPromise(func as any)).toBe(false);
  });

  it('должен вернуть true для async функции', async () => {
    const asyncFunc = async () => 42;
    const result = asyncFunc();
    expect(isPromise(result)).toBe(true);
  });
});

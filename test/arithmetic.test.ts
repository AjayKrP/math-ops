import { calculate } from '../lib/arithmetic';

describe('Arithmetic Operations', () => {
    test('Addition of multiple numbers', () => {
        expect(calculate("addition", 1, 2, 3, 4)).toBe(10);
    });

    test('Subtraction of multiple numbers', () => {
        expect(calculate("subtraction", 10, 2, 1)).toBe(7);
    });

    test('Multiplication of multiple numbers', () => {
        expect(calculate("multiplication", 2, 3, 4)).toBe(24);
    });

    test('Division of multiple numbers', () => {
        expect(calculate("division", 12, 3, 2)).toBe(2);
    });

    test('Division by zero', () => {
        expect(() => calculate("division", 12, 0)).toThrow("Division by zero: 0");
    });

    test('Invalid operation', () => {
        expect(calculate("unknown", 1, 2)).toBe("Invalid operation. Please use one of the following: addition, subtraction, multiplication, or division.");
    });
});

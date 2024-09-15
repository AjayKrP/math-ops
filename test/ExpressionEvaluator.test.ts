import { ExpressionEvaluator } from '../lib/ExpressionEvaluator';

describe('Complex Arithmetic Operations', () => {
    test('Simple expression without brackets', () => {
        expect(ExpressionEvaluator.evaluate('1 + 2 * 4 / 6')).toBeCloseTo(2.3333, 4);
    });

    test('Expression with brackets', () => {
        expect(ExpressionEvaluator.evaluate('(1 + 2) * 4 / 6')).toBeCloseTo(2, 4);
    });

    test('Nested brackets', () => {
        expect(ExpressionEvaluator.evaluate('1 + (2 * (3 + 4)) / 5')).toBeCloseTo(3.8, 4);
    });

    test('Division by zero', () => {
        expect(() => ExpressionEvaluator.evaluate('1 / 0')).toThrow('Division by zero');
    });

    test('Invalid character', () => {
        expect(() => ExpressionEvaluator.evaluate('1 + a * 4')).toThrow('Invalid character');
    });
});
# Math Ops Package

The `@ajaykrp/math-ops` npm package provides functionalities for both basic arithmetic operations and complex arithmetic expression evaluations. It supports addition, subtraction, multiplication, and division, as well as the evaluation of complex expressions with parentheses.

## Installation

You can install the package via npm:

```bash
npm install @ajaykrp/math-ops
```

## Usag

### Basic Arithmetic Operations

For basic arithmetic operations (addition, subtraction, multiplication, and division), use the `calculate` function.

```typescript
import { calculate } from '@ajaykrp/math-ops';

// Basic arithmetic operations
const result1 = calculate('addition', 1, 2, 3); // 6
const result2 = calculate('subtraction', 10, 5, 2); // 3
const result3 = calculate('multiplication', 2, 3, 4); // 24
const result4 = calculate('division', 12, 3, 2); // 2

console.log(result1); // 6
console.log(result2); // 3
console.log(result3); // 24
console.log(result4); // 2
```

### Complex Arithmetic Expression Evaluation

For evaluating complex arithmetic expressions, use the `ExpressionEvaluator` class.

```typescript
import ExpressionEvaluator from '@ajaykrp/math-ops';

// Evaluating complex expressions
const result1 = ExpressionEvaluator.evaluate('1 + 2 * 4 / 6'); // 2.3333
const result2 = ExpressionEvaluator.evaluate('(1 + 2) * 4 / 6'); // 2
const result3 = ExpressionEvaluator.evaluate('1 + (2 * (3 + 4)) / 5'); // 3.4

console.log(result1); // 2.3333
console.log(result2); // 2
console.log(result3); // 3.4
```

## API

### `calculate(operation: string, ...args: number[]): number`

Performs the specified arithmetic operation.

**Parameters:**

- `operation` (string): The operation to perform. Possible values: 'addition', 'subtraction', 'multiplication', 'division'.
- `...args` (number[]): The numbers to operate on.

**Returns:**

- `number`: The result of the operation.

### `ExpressionEvaluator.evaluate(expression: string): number`

Evaluates the given arithmetic expression.

**Parameters:**

- `expression` (string): The arithmetic expression to evaluate. Supports operators `+`, `-`, `*`, `/` and parentheses.

**Returns:**

- `number`: The result of the expression.

## Error Handling

- **Basic Arithmetic Operations:** 
  - Throws an error if an invalid argument (non-number) is provided.
  - Throws an error if division by zero is attempted.
  - Throws an error if an invalid operation is specified.

- **Complex Arithmetic Expression Evaluation:**
  - Throws an error if division by zero is attempted.
  - Throws an error if an invalid character is found in the expression.
  - Throws an error if the expression is invalid or cannot be parsed correctly.

## Examples

- **Basic Arithmetic:**
  - Addition: `calculate('addition', 1, 2, 3)`
  - Subtraction: `calculate('subtraction', 10, 5, 2)`
  - Multiplication: `calculate('multiplication', 2, 3, 4)`
  - Division: `calculate('division', 12, 3, 2)`

- **Complex Expressions:**
  - Simple Expression: `ExpressionEvaluator.evaluate('1 + 2 * 4 / 6')`
  - With Brackets: `ExpressionEvaluator.evaluate('(1 + 2) * 4 / 6')`
  - Nested Brackets: `ExpressionEvaluator.evaluate('1 + (2 * (3 + 4)) / 5')`
  - Division by Zero: `ExpressionEvaluator.evaluate('1 / 0')` (Throws error)

## License

MIT License
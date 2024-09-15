export class ExpressionEvaluator {
    private static precedence(op: string): number {
        switch (op) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            default:
                return 0;
        }
    }

    private static applyOperator(operators: string[], values: number[]): void {
        const operator = operators.pop()!;
        const right = values.pop()!;
        const left = values.pop()!;
        switch (operator) {
            case '+':
                values.push(left + right);
                break;
            case '-':
                values.push(left - right);
                break;
            case '*':
                values.push(left * right);
                break;
            case '/':
                if (right === 0) {
                    throw new Error('Division by zero');
                }
                values.push(left / right);
                break;
        }
    }

    public static evaluate(expression: string): number {
        const operators: string[] = [];
        const values: number[] = [];
        let i = 0;

        while (i < expression.length) {
            if (expression[i] === ' ') {
                i++;
                continue;
            }

            if (expression[i] === '(') {
                operators.push('(');
                i++;
            } else if (expression[i] === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    this.applyOperator(operators, values);
                }
                operators.pop(); // Pop '('
                i++;
            } else if (/[0-9]/.test(expression[i])) {
                let value = 0;
                while (i < expression.length && /[0-9]/.test(expression[i])) {
                    value = value * 10 + parseInt(expression[i], 10);
                    i++;
                }
                values.push(value);
            } else if (['+', '-', '*', '/'].includes(expression[i])) {
                while (operators.length && this.precedence(operators[operators.length - 1]) >= this.precedence(expression[i])) {
                    this.applyOperator(operators, values);
                }
                operators.push(expression[i]);
                i++;
            } else {
                throw new Error('Invalid character');
            }
        }

        while (operators.length) {
            this.applyOperator(operators, values);
        }

        if (values.length !== 1) {
            throw new Error('Invalid expression');
        }

        return values[0];
    }
}

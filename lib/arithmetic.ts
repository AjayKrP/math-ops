export function calculate(operation: string, ...args: number[]): number | string {
    // initialize the result variable
    let result = 0;

    // check the operation and perform the corresponding calculation
    switch (operation) {
        case "addition":
            // loop through the arguments and add them to the result
            for (let arg of args) {
                if (typeof arg !== "number") {
                    throw new Error("Invalid argument: " + arg);
                }
                result += arg;
            }
            break;

        case "subtraction":
            result = args[0];
            for (let i = 1; i < args.length; i++) {
                if (typeof args[i] !== "number") {
                    throw new Error("Invalid argument: " + args[i]);
                }
                result -= args[i];
            }
            break;

        case "multiplication":
            result = args[0];
            for (let i = 1; i < args.length; i++) {
                if (typeof args[i] !== "number") {
                    throw new Error("Invalid argument: " + args[i]);
                }
                result *= args[i];
            }
            break;

        case "division":
            result = args[0];
            for (let i = 1; i < args.length; i++) {
                if (typeof args[i] !== "number") {
                    throw new Error("Invalid argument: " + args[i]);
                }
                if (args[i] === 0) {
                    throw new Error("Division by zero: " + args[i]);
                }
                result /= args[i];
            }
            break;

        default:
            return "Invalid operation. Please use one of the following: addition, subtraction, multiplication, or division.";
    }

    // return the final result
    return result;
}
export const calculate = (state, button) => {
    let { displayValue, operator, previousValue } = state;

    switch (button) {
        case 'C':
            return { displayValue: '0', operator: null, previousValue: null };
        case '=':
            if (operator && previousValue != null) {
                const current = parseFloat(displayValue);
                const previous = parseFloat(previousValue);
                let result = 0;
                switch (operator) {
                    case '+':
                        result = previous + current;
                        break;
                    case '-':
                        result = previous - current;
                        break;
                    case '*':
                        result = previous * current;
                        break;
                    case '/':
                        result = previous / current;
                        break;
                }
                return { displayValue: String(result), operator: null, previousValue: null };
            }
            return state;
        case '+':
        case '-':
        case '*':
        case '/':
            return { operator: button, previousValue: displayValue, displayValue: '0' };
        default:
            return { ...state, displayValue: displayValue === '0' ? button : displayValue + button };
    }
};
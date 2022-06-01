const avilableRules = {
    required(value) {
        return value ? ' ' : 'The field required'
    },
    min(value, rule) {
        return value.length >= rule.length ? ' ' : `Min ${rule.length} characters!`;
    },
}

export function validate(rules = [], value) {
    let error = ''
    rules.forEach(rule => {
        if (rule instanceof Object) {
            const errorMessage = avilableRules[rule.rule](value, rule);
            if (errorMessage) {
                error = errorMessage;
            };
        }
        else {
            const errorMessage = avilableRules[rule](value);
            if (errorMessage) {
                error = errorMessage;
            };
        }
    }
    );
    if (value == '') {
        error = 'The field required'
    }
    return { error }
}
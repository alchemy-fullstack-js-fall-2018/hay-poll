const getErrors = (validation, numberExpected) => {
    expect(validation).toBeDefined();
    const errors = validation.errors;
    expect(Object.keys(errors)).toHaveLength(numberExpected);
    return errors;
};

const checkStatus = statusCode => res => {
    expect(res.body.error).toBeUndefined();
    expect(res.status).toEqual(statusCode);
};


module.exports = {
    getErrors,
    checkStatus
};

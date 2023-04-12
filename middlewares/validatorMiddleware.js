const {body, validationResult} = require('express-validator');

// this function validates the incoming data for insert new student or update existing student's data
exports.validateNewAndUpdateStudentData = () => {
    return [
        body('firstName').exists({checkFalsy: true}),
        body('middleName').exists({checkFalsy: true}),
        body('lastName').exists({checkFalsy: true}),
        body('contact').exists({checkFalsy: true}),
        body('age').exists({checkFalsy: true}),
        body('rollNumber').exists({checkFalsy: true}),
        body('email').exists({checkFalsy: true}).isEmail(),
        body('hobbies').exists().isArray(),
    ];
}

// this middleware checks if the incoming data is valid and proper then it will call next() otherwise it will return errors.
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
}
const {Router} = require('express');

// controllers
const studentController = require('../controllers/studentController');

// middlewares
const formDataMiddleware = require('../middlewares/validatorMiddleware');

const router = Router();
router.get('/students', studentController.getStudents);
router.get('/get-student/:studentId', studentController.getStudent);

router.post('/add-student',formDataMiddleware.validateNewAndUpdateStudentData(), formDataMiddleware.validate,studentController.addStudent);

router.put('/update-student/:studentId', formDataMiddleware.validateNewAndUpdateStudentData(), formDataMiddleware.validate, studentController.updateStudent);

router.delete('/delete-student/:studentId', studentController.deleteStudent);

module.exports = router;
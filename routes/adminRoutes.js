const {Router} = require('express');

const studentController = require('../controllers/studentController');

const router = Router();

router.get('/students', studentController.getStudents);
router.get('/get-student/:studentId', studentController.getStudent);
router.post('/add-student', studentController.addStudent);
router.put('/update-student/:studentId', studentController.updateStudent);
router.delete('/delete-student/:studentId', studentController.deleteStudent);

module.exports = router;
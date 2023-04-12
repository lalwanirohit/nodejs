const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const Student = require('../models/student');

// this function return all student's data
exports.getStudents = async (req,res,next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch(err) {
        res.json(err);
    }
};

// this function return single student's data
exports.getStudent = async (req,res,next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findById(studentId);
        res.json(student);
    } catch(err) {
        res.json(err);
    }
}

// this function add single student's data
exports.addStudent = async (req,res,next) => {
    try {
        const {firstName, middleName, lastName, contact, age, rollNumber, email, hobbies} = req.body;

        const student = new Student({
            firstName,
            middleName,
            lastName,
            contact,
            age,
            rollNumber,
            email,
            hobbies
        });

        await student.save();
        res.json(student);
    } catch(err) {
        res.json(err);
    }
};

// this function update single student's data
exports.updateStudent = async (req,res,next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findById(studentId);

        const{firstName, middleName, lastName, contact, age, rollNumber, email, hobbies} = req.body;

        student.firstName = firstName;
        student.middleName = middleName;
        student.lastName = lastName;
        student.contact = contact;
        student.age = age;
        student.rollNumber = rollNumber;
        student.email = email;
        student.hobbies = hobbies;

        await student.save();
        res.json(student);
    } catch(err) {
        res.json(err);
    }
};

// this function delete single student's data
exports.deleteStudent = async (req,res,next) => {
    try {
        const studentId = req.params.studentId;
        await Student.findByIdAndRemove(studentId);
        res.json({"msg": "student document deleted successfully."});
    } catch(err) {
        res.json(err);
    }
};
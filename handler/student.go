package handler

import (
	"errors"
	"github.com/gofiber/fiber/v2"
	database "student_management/repository"
	"student_management/service"
)

type Student struct {
	ID      uint   `json:"id"`
	Fname   string `json:"fname"`
	Lname   string `json:"lname"`
	City    string `json: "city"`
	Contact string `json:"contact"`
	Grade   string `json:"grade"`
}

func CreateResponseStudent(studentService service.Student) Student {
	return Student{
		ID:      studentService.ID,
		Fname:   studentService.Fname,
		Lname:   studentService.Lname,
		City:    studentService.City,
		Contact: studentService.Contact,
		Grade:   studentService.Grade,
	}
}

// add new student
func CreateStudent(c *fiber.Ctx) error {
	var student service.Student

	if err := c.BodyParser(&student); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	database.Database.Db.Create(&student)
	responseStudent := CreateResponseStudent(student)
	return c.Status(200).JSON(responseStudent)
}

// view all students
func GetAllStudents(c *fiber.Ctx) error {
	students := []service.Student{}
	database.Database.Db.Find(&students)
	responseStudents := []Student{}

	for _, student := range students {
		responseStudent := CreateResponseStudent(student)
		responseStudents = append(responseStudents, responseStudent)
	}
	return c.Status(200).JSON(responseStudents)
}

func FindStudent(id int, student *service.Student) error {
	database.Database.Db.Find(&student, "id =?", id)

	if student.ID == 0 {
		return errors.New("Student ID doesnot exist")
	}
	return nil
}

// get a single student by id
func GetStudent(c *fiber.Ctx) error {
	id, err := c.ParamsInt("id")
	var student service.Student

	if err != nil {
		return c.Status(400).JSON("Please ensure that id is an integer")
	}
	if err := FindStudent(id, &student); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	responseStudent := CreateResponseStudent(student)
	return c.Status(200).JSON(responseStudent)
}

// update student details
func UpdateStudent(c *fiber.Ctx) error {
	id, err := c.ParamsInt("id")

	var student service.Student
	if err != nil {
		return c.Status(400).JSON("Please ensure that student id is an integer")
	}
	if err := FindStudent(id, &student); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	type UpdateStudent struct {
		City    string `json:"city"`
		Contact string `json:"contact"`
		Grade   string `json:"grade"`
	}
	var updatedata UpdateStudent

	if err := c.BodyParser(&updatedata); err != nil {
		return c.Status(500).JSON(err.Error())
	}
	student.City = updatedata.City
	student.Contact = updatedata.Contact
	student.Grade = updatedata.Grade

	database.Database.Db.Save(&student)
	reponseStudent := CreateResponseStudent(student)
	return c.Status(200).JSON(reponseStudent)
}

// delete a student
func DeleteStudent(c *fiber.Ctx) error {
	id, err := c.ParamsInt("id")

	var student service.Student
	if err != nil {
		return c.Status(400).JSON("Please ensure that id is an integer")
	}
	if err := FindStudent(id, &student); err != nil {
		return c.Status(400).JSON(err.Error())
	}
	if err := database.Database.Db.Delete(&student).Error; err != nil {
		return c.Status(400).JSON(err.Error())
	}
	return c.Status(200).JSON("Successfully Deleted Student Details!!")
}

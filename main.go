package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
	"student_management/handler"
	"student_management/repository"
)

// welcome function
func welcome(c *fiber.Ctx) error {
	return c.SendString("Welcome to the STUDENT MANAGEMENT Application")
}

// routes setup function
func SetupRoutes(app *fiber.App) {
	api := app.Group("/api/students")
	api.Get("", welcome)
	// student endpoints
	api.Post("", handler.CreateStudent)
	api.Get("", handler.GetAllStudents)
	api.Get("/:id", handler.GetStudent)
	api.Put("/:id", handler.UpdateStudent)
	api.Delete("/:id", handler.DeleteStudent)
}

func main() {
	database.ConnectDb()

	app := fiber.New()
	SetupRoutes(app)
	log.Fatal(app.Listen(":3000"))

}

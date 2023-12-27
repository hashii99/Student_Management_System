package database

import (
	"log"
	"os"
	"student_management/service"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type Dbinstance struct {
	Db *gorm.DB
}

var Database Dbinstance

func ConnectDb() {
	dsn := "host=localhost user=postgres password=haSH1003 dbname=student_management port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to the database! \n", err.Error())
		os.Exit(2)
	}
	log.Println("Connected to the database successfully!!")
	db.Logger = logger.Default.LogMode(logger.Info)
	log.Println("Running Migrations")

	err = db.AutoMigrate(&service.Student{})
    if err != nil {
        log.Fatal("Failed to auto migrate\n",err.Error())
        os.Exit(2)
    }
	Database = Dbinstance{Db: db}
}


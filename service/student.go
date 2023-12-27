package service

type Student struct {
	ID      uint   `json:"id"`
	Fname   string `json:"fname"`
	Lname   string `json:"lname"`
	City    string `json: "city"`
	Contact string `json:"contact"`
	Grade 		string `json:"grade"`
}

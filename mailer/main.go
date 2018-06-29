package mailer

import (
	"fmt"
	"strings"

	"notification-center-go-api/models"
)

// SendEmailToReceivers via smtp
func SendEmailToReceivers(activity models.Activity, data models.RawContent) {

	emailTo := strings.Join(data.Email.To, ", ")
	emailCc := strings.Join(data.Email.Cc, ", ")
	emailBcc := strings.Join(data.Email.Bcc, ", ")
	emailFrom := data.Email.From
	emailReplyTo := data.Email.ReplyTo

	fmt.Println(emailTo)
	fmt.Println(emailCc)
	fmt.Println(emailBcc)
	fmt.Println(emailFrom)
	fmt.Println(emailReplyTo)

	for _, receiver := range data.Email.To {
		fmt.Println("create receiver: " + receiver)
	}
}

// SendEmailToTest email for test
func SendEmailToTest() {

}

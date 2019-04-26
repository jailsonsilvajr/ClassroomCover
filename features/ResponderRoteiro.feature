Feature: Student can answer scripts on the System
 As a: student
 So that i can complete the scripts provided by my teacher
 I want to answer or skip all the questions on the script

Background: Start on one of the scrip questions
 Given I am on one of the scripts questions
 And there is a "Timer" running

Scenario: Answer question on the script and go to next question
 Given I know the answer to the question
 And the question isn't the final question
 When I answerer the question 
 And I press "Next Question" 
 Then the next question should appear
 And I can't go back to any of the previous questions

Scenario: Skip question I dont know the answer to
 Given I don't know the answer to the question
 And I wish to skip the question
 When I press "Skip Question"
 Then the question will remain unanswered 
 And the next question should appear
 And I can't go back to any of the previous questions

Scenario: Pause the “Timer” on the script
 When I press "Pause"
 Then the "Timer" stops
 And I cannot answer any questions
 When I press "Unpause"
 Then the "Timer" starts running fromm where it left off
 And I can continue answering the questions

Scenario: Answer the final question
 Given I know the answer to the question
 And I have answered the question
 And the question is the final question
 When I press "Send Script to Teacher"
 Then the script will be complete
 And the “Timer” stops 
 And the script should be sent to the teacher 

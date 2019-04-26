Feature: Responder roteiro
 As a student
 I want to answer or skip all the questions on the script
 So that i can complete the scripts provided by my teacher

# Guilherme Calland Rosa Borba
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

Scenario: Pause the �Timer� on the script
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
 And the �Timer� stops
 And the script should be sent to the teacher

# João Paulo Gomes de Freitas
Scenario: responder questão do roteiro corretamente
  Given that the student “João” is on the page “questão 1” from script “Requisitos”
  When “João” fill the field “resposta” with “Os cenários X e Y são imperativos”
 	And “João” asks for “próxima questão”
  Then “questão 2” pages from script “Requisitos” is displayed

Scenario: responder questão do roteiro com campo de resposta vazio
  Given that the student “João” is on the page “questão 1” from script “Requisitos”
 	When “João” fill the field “resposta” with “”
 	And “João” asks for “próxima questão”
  Then a message “Campo de resposta vazio” is displayed

Scenario: responder questão do roteiro com formato de imagem inválido
  Given that the student “João” is on the page “questão 2” from script “Requisitos”
 	And “questão 2” response requires sending a image file
  When “João” send the file “res.mp4”
 	And “João” asks for “próxima questão”
  Then a message “Formato inválido” is displayed

Scenario: responder questão do roteiro com formato de imagem válido
  Given that the student “João” is on the page “questão 2” from script “Requisitos”
  And “questão 2” response requires sending a image file
  When “João” send the file “res.jpg”
  And “João” asks for “próxima questão”
  Then “questão 3” pages from script “Requisitos” is displayed

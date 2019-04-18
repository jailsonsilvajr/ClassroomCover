Feature: Cadastro de Roteiros
	As a: professor responsável por uma classe
	I want to: criar roteiros para as metas e adicionar questões aos roteiros
	So that: Eu posso disponibilizar os roteiros para avaliar os alunos

Scenario: Cadastrar um roteiro
	Given estou logado como "Professor"
	And estou na página "Cadastro de Roteiros"
	And vejo o campo "nome" vazio
	And vejo o campo "meta" vazio
	When adiciono "Gerência de projetos" ao campo "nome"
	And adiciono a meta "Gerência de projetos" ao campo "meta"
	And salvo o roteiro
	Then vejo uma mensagem de sucesso
	And estou na página "Roteiros"
	And vejo o roteiro "Gerência de projetos" na lista de roteiros cadastrados

Scenario: Cadastrar uma questão
	Given estou logado como "Professor"
	And estou na página "Cadastro de Questões"
	When adiciono "Qual o significado do comando 'git log --graph'?" no campo "pergunta"
	And adiciono a meta "Gerência de Configuração" ao campo "meta"
	And salvo a pergunta
	Then vejo uma mensagem de sucesso
	And estou na página "Questões"
	And vejo uma lista das questões cadastradas

Scenario: Adicionar uma questão a um roteiro
	Given estou logado como "Professor"
	And estou na página "Roteiros"
	When seleciono o roteiro "Gerência de Configuração"
	And adiciono a pergunta "Qual o significado do comando 'git log --graph'?" ao roteiro "Gerência de Configuração"
	And salvo o roteiro
	Then vejo uma mensagem de sucesso
	And estou na página de "Roteiros"

Scenario: Remover um roteiro
	Given estou logado como "Professor"
	And estou na página de "Roteiros"
	And vejo o roteiro "Gerência de Configuração" na lsta de roteiros
	When removo o roteiro "Gerência de Configuração"
	Then a mensagem "O roteiro foi removido" é exibida
	And o roteiro "Gerência de Configuração" não aparece na lista
	And estou na página "Roteiros"

Scenario: Remover uma questão
	Given estou logado como "Professor"
	And estou na página "Questões"
	And vejo a questão "Qual o significado do comando 'git log --graph'?" na lista de questões cadastradas
	When removo a questão "Qual o significado do comando 'git log --graph'?"
	Then a mensagem "A questão foi removida" é exibida
	And a questão "Qual o significado do comando 'git log --graph'?" não aparece na lista
	And estou na página de questões

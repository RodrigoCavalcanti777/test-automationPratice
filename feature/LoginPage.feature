Funcionalidade: Login de usuário

Cenário: Usuário faz login com sucesso usando credenciais válidas
  Dado que o usuário está na página de login
  E o usuário inseriu um e-mail válido "usuario@teste.com"
  E o usuário inseriu uma senha válida "senha123"
  Quando o usuário clica no botão "Entrar"
  Então o usuário é redirecionado para a página inicial
  E o nome do usuário "Usuario Teste" é exibido no cabeçalho

Cenário: Usuário tenta fazer login com uma senha incorreta
  Dado que o usuário está na página de login
  E o usuário inseriu um e-mail válido "usuario@teste.com"
  E o usuário inseriu uma senha incorreta "senhaErrada"
  Quando o usuário clica no botão "Entrar"
  Então uma mensagem de erro "Senha incorreta" é exibida
  E o usuário permanece na página de login

Cenário: Usuário tenta fazer login com um e-mail inválido
  Dado que o usuário está na página de login
  E o usuário inseriu um e-mail inválido "email_invalido"
  E o usuário inseriu uma senha válida "senha123"
  Quando o usuário clica no botão "Entrar"
  Então uma mensagem de erro "Por favor, insira um e-mail válido" é exibida
  E o usuário permanece na página de login

Cenário: Usuário tenta fazer login com e-mail e senha vazios
  Dado que o usuário está na página de login
  E o usuário não preencheu o campo de e-mail
  E o usuário não preencheu o campo de senha
  Quando o usuário clica no botão "Entrar"
  Então uma mensagem de erro "E-mail e senha são obrigatórios" é exibida
  E o usuário permanece na página de login

Cenário: Usuário solicita redefinição de senha
  Dado que o usuário está na página de login
  E o usuário clica no link "Esqueci minha senha"
  Quando o usuário insere um e-mail válido "usuario@teste.com"
  E clica no botão "Redefinir senha"
  Então uma mensagem "Instruções de redefinição de senha foram enviadas para seu e-mail" é exibida

Cenário: Usuário tenta fazer login com conta bloqueada
  Dado que o usuário está na página de login
  E o usuário inseriu um e-mail válido "usuario@teste.com"
  E o usuário inseriu uma senha válida "senha123"
  Quando o usuário clica no botão "Entrar"
  Então uma mensagem de erro "Sua conta está bloqueada, entre em contato com o suporte" é exibida

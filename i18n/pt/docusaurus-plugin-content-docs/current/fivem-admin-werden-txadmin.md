# Como se tornar um Admin no FiveM com txAdmin

## Introdução  
Neste guia, você vai aprender como se tornar admin em um servidor de jogos FiveM usando o txAdmin. Isso inclui os passos necessários para configurar suas permissões de admin através da interface do txAdmin.

## Requisitos  
- Acesso ao seu servidor de jogos FiveM via interface web ou painel da ZAP-Hosting  
- txAdmin deve estar instalado e rodando no seu servidor de jogos FiveM  
- Conhecimento básico sobre gerenciamento de servidor de jogos FiveM  

## Guia Passo a Passo

### 1. Acesse o Painel do txAdmin  
1. Faça login na sua conta ZAP-Hosting.  
2. Vá até o dashboard do seu servidor de jogos FiveM.  
3. Clique no botão **Abrir txAdmin** para iniciar a interface do txAdmin.  
   
   ![Abrir txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Faça login no txAdmin  
1. Se for sua primeira vez acessando o txAdmin, será solicitado que você crie uma conta de admin.  
2. Preencha o nome de usuário e senha desejados e salve.  
3. Se já tiver uma conta, basta inserir suas credenciais para fazer login.  

### 3. Adicione suas Permissões de Admin  
1. No dashboard do txAdmin, vá até a aba **Players**.  
2. Encontre seu jogador buscando pelo seu Steam ID ou nome dentro do jogo.  
3. Clique no botão **Gerenciar** ao lado da sua entrada.  
4. Na seção de permissões, atribua a si mesmo o papel de **admin** ou as permissões necessárias que você precisar.  
   
   ![Atribuir Papel de Admin](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Configure as Permissões (Opcional)  
1. Vá para a aba **Configurações** no txAdmin.  
2. Selecione **Permissões** para ajustar os comandos e privilégios específicos disponíveis para admins.  
3. Faça as alterações conforme sua necessidade e salve.  

### 5. Salve e Reinicie o Servidor  
1. Depois de atribuir as permissões, volte para a aba **Dashboard**.  
2. Clique em **Reiniciar Servidor** para aplicar todas as mudanças.  
   
   ```bash
   # Alternativamente, reinicie via painel da ZAP-Hosting:
   # 1. Vá até o dashboard do seu servidor
   # 2. Clique em "Reiniciar"
   ```  

### 6. Verifique seu Status de Admin no Jogo  
1. Entre no seu servidor de jogos FiveM.  
2. Abra o console dentro do jogo (geralmente com a tecla F8).  
3. Teste comandos de admin como:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Se os comandos funcionarem, você tem direitos de admin.  

> **Dica:** Se tiver problemas, confira seu Steam ID ou as configurações de whitelist do servidor no txAdmin.

## Conclusão  
Seguindo esses passos, você configurou com sucesso seu acesso como admin no seu servidor de jogos FiveM usando o txAdmin. Agora você pode gerenciar seu servidor com privilégios administrativos de forma eficiente.
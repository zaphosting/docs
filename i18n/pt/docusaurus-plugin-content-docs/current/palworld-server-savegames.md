---
id: palworld-server-savegames
title: "Palworld: Gerenciando Savegames do Palworld"
description: "Descubra como gerenciar e fazer backup dos seus savegames do Palworld com segurança para uma continuidade de jogo sem interrupções → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

Neste guia, vamos explorar como gerenciar seus savegames do Palworld no seu servidor de jogos, incluindo como fazer backup dos seus savegames locais e do servidor, além de como enviá-los para o seu servidor.

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel web do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão com seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles criados enquanto você hospeda um jogo multiplayer localmente no seu dispositivo. Eles ficam dentro do AppData do Windows, no seguinte caminho:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Você pode acessar esse caminho direto pressionando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%localappdata%/Pal/Saved/SaveGames/`. É só clicar em **OK** e você será levado para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

Nesse local, você verá uma pasta com seu SteamID. Abra essa pasta para ver todos os seus savegames locais em um só lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Acessando Savegame via FTP

Fazer backup do savegame no servidor é fácil. Depois de conectar ao seu servidor de jogos via cliente FTP, vá até o seguinte caminho:
```
../palworld/Pal/Saved/SaveGames/0
```

Lá você verá uma pasta com uma sequência de caracteres aleatórios, que é o seu savegame. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Backup Automático

Também oferecemos a opção de fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo painel web. Basta acessar o painel do seu servidor de jogos e ir em **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá até o caminho:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

É só arrastar e soltar qualquer savegame nessa pasta pelo cliente FTP que ele será enviado para o servidor.

:::tip
Pode ser útil copiar o nome da pasta do savegame que você enviou, pois você vai precisar dele para ativar o savegame na próxima seção.
:::

## Ativando Savegame

Para usar um savegame específico, você precisa editar um arquivo de configuração. Vá até o seguinte caminho e encontre o arquivo chamado **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Para Windows
../Pal/Saved/Config/LinuxServer/ # Para Linux
```

Abra o arquivo **GameUserSettings.ini** e localize o parâmetro `DedicatedServerName`.

Nessa linha, substitua o conteúdo pelo nome da pasta do savegame que você quer ativar no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Salve o arquivo e reinicie seu servidor para que a alteração tenha efeito. Pronto, você adicionou um savegame ao seu servidor de jogos.

## Savegame Desapareceu

Em casos raros, o servidor pode criar um novo savegame ao iniciar, em vez de carregar um existente.

Primeiro, verifique seus arquivos de savegame pelo cliente FTP no caminho:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Lá você deve ver o savegame antigo e um novo que foi gerado. Para resolver, basta editar o arquivo de configuração conforme explicado na seção Ativando Savegame, usando o nome correto da pasta do savegame.

O savegame deve voltar a funcionar depois de salvar o arquivo e reiniciar o servidor.

:::info
Recomendamos muito ativar os Backups Automáticos, como explicado na seção anterior [Backup Automático](#backup-automático), já que o Palworld ainda está em Early Access e é possível que savegames sejam perdidos ou corrompidos durante atualizações.
:::

<InlineVoucher />
---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Gerenciando Savegames do Rimworld Together"
description: "Descubra como gerenciar e fazer backup dos seus savegames do Rimworld Together para uma jogabilidade multiplayer sem interrupções → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus Savegames do Rimworld Together no seu servidor de jogos, incluindo como fazer backup dos seus savegames locais e do servidor, além de como enviá-los para o seu servidor.

:::info
Lembre-se que mover um jogo vanilla existente para um servidor Rimworld Together com mods provavelmente causará problemas na jogabilidade. Isso é especialmente válido ao mover mundos entre servidores com mods diferentes.
:::

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** na interface web do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão com seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava um jogo multiplayer localmente no seu dispositivo. Eles ficam dentro da pasta AppData LocalLow do Windows, especificamente no caminho:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Você pode acessar esse caminho facilmente pressionando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Basta clicar em **OK** e você será levado direto para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

Nesse local, você verá todos os seus Savegames locais.

### Acessando Savegame via FTP

Fazer backup do seu Savegame no servidor é simples. Depois de se conectar ao seu servidor de jogos via cliente FTP, vá até o seguinte caminho:
```
../rimworld-together/Saves
```

Lá você verá pastas, cada uma representando um Savegame. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Backup Automático

Também oferecemos a opção de fazer backup automático do seu Savegame (e arquivo de configuração) direto pela interface web. Basta acessar o painel do seu servidor de jogos e ir para a seção **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Fornecemos 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como no backup, enviar seu Savegame é fácil. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá até o caminho:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Basta arrastar e soltar qualquer um dos seus Savegames nessa pasta pelo cliente FTP e ele será enviado para o seu servidor.

:::info
Como mencionado no começo do guia, mover mundos entre servidores com mods diferentes provavelmente causará problemas na jogabilidade.
:::

<InlineVoucher />
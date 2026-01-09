---
id: enshrouded-server-savegames
title: "Enshrouded: Gerenciando Savegames de Enshrouded"
description: "Descubra como gerenciar e fazer backup dos seus Savegames de Enshrouded para um multiplayer seguro → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus Savegames de Enshrouded no seu servidor de jogos, incluindo como fazer backup dos seus savegames locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um Cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), que são ambos open-source e gratuitos para baixar.

Você terá que se conectar ao seu servidor via Cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [Guia de Acesso via FTP](gameserver-ftpaccess.md) para te ajudar a conectar ao seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava um jogo multiplayer localmente no seu dispositivo. Por padrão, Enshrouded usa o Steam Cloud para fazer backup automático do seu savegame. Para acessar isso, você precisa ir até a pasta userdata do Steam para acessar os dados do jogo. Vá para o seguinte caminho:
```
../Steam/userdata/[seu_steamid]/1203620/remote
```

:::tip
Em instalações padrão, a pasta Steam estará no seu drive do sistema operacional, no caminho: `C://Program Files x86/Steam`. Lembre-se que pode ser diferente se você instalou o Steam em outro lugar.
:::

Quando chegar nessa pasta, você verá um arquivo de personagens junto com todos os seus savegames locais em um só lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Se você **não** estiver usando o Steam Cloud para salvar, poderá encontrar sua pasta de save no seguinte diretório: `C://Users/[seuusuario]/Saved Games/Enshrouded`.
:::

### Acessando Savegame via FTP

Fazer backup do seu savegame no servidor é fácil. Depois de se conectar ao seu servidor de jogos via Cliente FTP, vá para o seguinte caminho:
```
../enshrouded/savegame/
```

Nesse local, você verá um arquivo com caracteres aleatórios que é o seu savegame. Basta clicar com o botão direito no arquivo e usar o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Backup Automático

Também oferecemos uma opção para fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo nosso painel de controle. É só acessar o painel do seu servidor de jogos e ir em **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via Cliente FTP. Quando estiver pronto, vá para o seguinte caminho:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Basta arrastar e soltar qualquer um dos seus savegames nessa pasta pelo Cliente FTP que ele será enviado para o seu servidor.

## Ativando Savegame

Usar seu savegame é muito fácil. Basta conectar ao seu servidor e, na tela de configuração do jogo, você poderá escolher um savegame específico para usar. O nome do save, nível e a última data jogada serão exibidos abaixo de cada save para te ajudar a identificar qual quer selecionar.

Você adicionou com sucesso um savegame ao seu servidor de jogos.

<InlineVoucher />
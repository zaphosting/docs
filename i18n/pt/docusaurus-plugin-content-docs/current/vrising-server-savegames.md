---
id: vrising-server-savegames
title: "V Rising: Gerenciando Savegames do V Rising"
description: "Descubra como gerenciar e fazer backup dos seus saves do V Rising para uma experiência multiplayer segura → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus saves do V Rising no seu servidor de jogos, incluindo como fazer backup dos seus saves locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles criados enquanto você hospeda uma partida multiplayer localmente no seu dispositivo. Eles ficam na pasta LocalLow do AppData do Windows, no caminho:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Você pode acessar esse caminho direto pressionando `CTRL` + `R` ao mesmo tempo e digitando o seguinte no diálogo de execução: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. É só clicar em **OK** e você será levado para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

Nesse local, você verá uma pasta `Saves` e/ou `CloudSaves`, dependendo se você usou o recurso Steam Cloud Saving e do tipo de servidor. Entrando nas pastas, você encontrará seus saves locais.

:::note
Dependendo da versão do jogo, seus saves estarão em uma pasta v1 ou v3.
:::

### Acessando Savegame via FTP

Fazer backup do savegame no servidor é fácil. Depois de conectar ao seu servidor de jogos via cliente FTP, vá para o caminho:
```
../vrising/save-data/Saves
```

Lá você verá as pastas v1 e v3, dependendo da versão do jogo. Dentro delas, estarão seus saves. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Backup Automático

Também oferecemos a opção de fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo painel de controle. Vá até a seção **Ferramentas->Backups** no painel do seu servidor de jogos. Lá você pode configurar várias opções para agendar backups automáticos. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes, confira nosso guia dedicado de [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como no backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá para o caminho:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Dependendo da versão dos seus saves, basta arrastar e soltar qualquer savegame na pasta correta pelo cliente FTP para enviá-lo ao servidor.

:::tip
Pode ser útil copiar o nome da pasta do savegame que você enviou, pois você vai precisar dele para ativar o save na próxima etapa.
:::

## Ativando Savegame

Para usar um savegame específico, você precisa editar um arquivo de configuração. Existem várias formas de fazer isso, mas vamos mostrar pelo painel de controle, que é o jeito mais fácil. Se quiser ver outras formas, confira nosso guia de [Configuração do Servidor](vrising-configuration.md).

Vá para a seção **Configurações** no painel do seu servidor de jogos e encontre a opção **Savename**.

Altere essa configuração para o nome da pasta do savegame que você enviou no passo anterior. Depois, salve no botão verde **Salvar** no final da página e reinicie seu servidor.

<InlineVoucher />
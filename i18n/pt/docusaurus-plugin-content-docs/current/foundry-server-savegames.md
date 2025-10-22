---
id: foundry-server-savegames
title: "Foundry: Gerenciando Savegames do Foundry"
description: "Descubra como fazer backup seguro e gerenciar seus Savegames do Foundry localmente e no seu servidor para uma continuidade de jogo sem interrupções → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus Savegames do Foundry no seu servidor de jogos, incluindo fazer backup dos seus savegames locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um Cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via Cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão com seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava uma partida multiplayer localmente no seu dispositivo. Eles ficam dentro do AppData LocalLow do Windows, especificamente no caminho:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Você pode acessar esse caminho direto apertando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. É só clicar em **OK** e você será levado direto para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

Nesse local, você verá todos os seus Savegames locais.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Acessando Savegame via FTP

Fazer backup do seu Savegame no servidor é fácil. Depois de se conectar ao seu servidor de jogos via Cliente FTP, vá até o seguinte caminho:
```
../foundry/saves/save
```

Lá você verá pastas, cada uma representando um Savegame. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Backup Automático

Também oferecemos a opção de fazer backup automático do seu Savegame (e do arquivo de configuração) direto pelo painel de controle. Vá até a seção **Ferramentas->Backups** no painel do seu servidor de jogos. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes, confira nosso guia dedicado de [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu Savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via Cliente FTP. Depois, vá até o caminho:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Basta arrastar e soltar qualquer Savegame nessa pasta pelo seu Cliente FTP que ele será enviado para o servidor.

:::tip
Pode ser útil copiar o nome da pasta do Savegame que você enviou, pois você vai precisar dele para ativar o save na próxima etapa.
:::

## Ativando Savegame

Para usar um Savegame específico, você precisa editar um arquivo de configuração. Existem algumas formas de fazer isso, mas vamos mostrar pelo painel de controle, que é o jeito mais fácil. Se quiser ver outras formas de editar o arquivo, confira nosso [Guia de Configuração do Servidor](foundry-configuration.md).

Vá até a seção **Configurações** no painel do seu servidor de jogos e encontre a opção **Savename**.

Altere essa configuração para o nome da pasta do savegame que você enviou no passo anterior. Quando terminar, não esqueça de salvar no botão verde **Salvar** lá embaixo e depois reinicie seu servidor.

<InlineVoucher />
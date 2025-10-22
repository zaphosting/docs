---
id: satisfactory-savegame
title: "Satisfactory: Gerencie seus Savegames"
description: "Descubra como gerenciar e fazer backup dos seus saves de Satisfactory localmente e no seu servidor para um gameplay seguro → Saiba mais agora"
sidebar_label: Gerenciando Savegames
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus saves de Satisfactory no seu servidor de jogos, incluindo fazer backup dos seus saves locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para baixar.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel web do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para te ajudar a conectar ao servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou jogando single player ou hospedando uma partida multiplayer localmente no seu dispositivo. Eles ficam dentro do AppData do Windows, no seguinte caminho:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Você pode acessar esse caminho direto apertando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na janela de executar: `%localappdata%/FactoryGame/Saved/SaveGames`. É só clicar em **OK** e você será levado direto para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

Nesse local, você vai ver pastas que contêm seus saves locais todos organizados.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Acessando Savegame via FTP

Fazer backup do seu savegame no servidor é fácil. Depois de conectar ao seu servidor de jogos via cliente FTP, vá até o seguinte caminho:
```
../satisfactory/save-backups
```

Lá você verá uma pasta com uma sequência de caracteres aleatórios, que é o seu savegame. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Backup Automático

Também oferecemos a opção de fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo painel web. Basta acessar o painel do seu servidor de jogos e ir em **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá até o caminho:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

É só arrastar e soltar qualquer savegame nessa pasta pelo cliente FTP que ele será enviado para o seu servidor.

:::tip
Pode ser útil copiar o nome da pasta do savegame que você enviou, pois você vai precisar dele para ativar o save na próxima seção.
:::

## Ativando Savegame

Usar seu savegame é bem fácil. Você pode gerenciar isso pelo Satisfactory Server Manager dentro do jogo ou acessando o dashboard do seu servidor e usando a seção **Savegame Manager**.

## Conclusão

Você adicionou seu savegame com sucesso no seu servidor de jogos. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂


<InlineVoucher />
---
id: moe-server-savegames
title: "Myth of Empires: Gerenciando Savegames"
description: "Descubra como gerenciar e fazer backup dos seus saves de Myth of Empires com segurança para uma continuidade de jogo sem interrupções → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, você vai aprender como gerenciar seus Saves de Myth of Empires no seu servidor de jogos, incluindo como fazer backup dos seus saves locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava uma partida multiplayer localmente no seu dispositivo. O MOE armazena esses saves em uma pasta dentro da instalação do jogo.

Abra o Steam no seu sistema, clique com o botão direito no jogo **Myth of Empires** e selecione **Procurar arquivos locais** enquanto estiver na seção **Gerenciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navegue até o seguinte caminho:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

Nesta pasta, você verá todos os seus saves locais existentes.

### Acessando Savegame via FTP

Fazer backup do seu savegame no servidor é fácil. Depois de se conectar ao seu servidor de jogos via cliente FTP, vá até o seguinte caminho:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Neste local, você verá pastas que são seus saves. Basta clicar com o botão direito na pasta e usar o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Backup Automático

Também oferecemos uma opção para fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo painel de controle. Vá até a seção **Ferramentas->Backups** no painel do seu servidor de jogos. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Fornecemos 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como no backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá até o seguinte caminho:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Basta arrastar e soltar qualquer um dos seus saves nessa pasta pelo cliente FTP e ele será enviado para o seu servidor.

## Ativando Savegame

Para usar seu savegame, você precisa selecioná-lo na configuração do servidor. A forma mais fácil é ir até a seção **Configurações** no painel de controle do seu servidor de jogos. Use nosso [guia de Configuração do Servidor](moe-configuration.md) para mais informações.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Nesta seção, encontre o parâmetro **Nome do Mapa** nas configurações básicas, e seu mundo enviado deve aparecer aqui. Se não aparecer, certifique-se de reiniciar seu servidor após o upload.

Pronto! Você adicionou com sucesso um savegame ao seu servidor de jogos.

<InlineVoucher />
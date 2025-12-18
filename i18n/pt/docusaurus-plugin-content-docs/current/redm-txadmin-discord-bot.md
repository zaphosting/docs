---
id: redm-txadmin-discord-bot
title: "RedM: Bot Discord do txAdmin"
description: "Configure e integre um bot Discord com seu servidor RedM txAdmin para melhorar a gestão e comunicação → Saiba mais agora"
sidebar_label: Bot Discord do txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução
O painel txAdmin traz várias funcionalidades para seu servidor RedM, incluindo a integração com um bot Discord.  
Neste guia, vamos mostrar como configurar o bot Discord e como usá-lo.

<InlineVoucher />

## Preparação

Para configurar o bot Discord para seu servidor txAdmin, primeiro você precisa fazer login no seu Painel txAdmin.  
As informações de login aparecem na página de visão geral do servidor, como mostrado aqui:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Este guia requer que o txAdmin já esteja configurado. Para aprender como fazer isso, você pode visitar nosso [guia RedM: Configuração do txAdmin](redm-txadmin-setup.md).

:::

## Configuração

### Criando uma Aplicação Discord

Para configurar o bot com o txAdmin, você precisa criar uma aplicação Discord. Seu bot será vinculado a essa aplicação e atuará em seu nome. Para criar essa aplicação, acesse [o Portal de Desenvolvedores do Discord](https://discord.com/developers/applications/).

Agora, crie uma nova aplicação clicando em **New Application** e atribua um nome, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Depois, crie a aplicação clicando em **Create**. Para os próximos passos, anote o ID da aplicação:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurando o Bot e Pegando o Token

Ao criar a aplicação, um bot é criado automaticamente. Você pode pegar o token clicando em **Reset Token**. Depois, você receberá um token de usuário que também deve ser anotado:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Não revele o token do bot para ninguém para que ele funcione sem interrupções e não cause problemas de segurança. O token é como uma chave secreta e não deve ser compartilhado.
:::

Na mesma página, role um pouco para baixo, ative a opção "Server Members Intent" e salve as alterações:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Convidando o Bot para seu Discord

Para convidar o bot, insira o client ID anotado anteriormente no link abaixo no lugar indicado, abra o link no navegador e adicione o bot ao seu servidor Discord. Deve ficar parecido com este exemplo:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Pegando os IDs do Servidor e do Canal

Para usar o bot corretamente com o txAdmin, você precisa do ID do servidor onde o bot vai operar.  
Você pode pegar clicando com o botão direito no ícone do servidor no Discord e selecionando **Copiar ID do Servidor**. Anote esse ID também.

Exemplo de como deve ficar:  
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Opcionalmente, você pode definir um canal onde atualizações de status, como horários de reinício, serão postadas. Copie o ID do canal da mesma forma.  
Não esqueça que o bot precisa ter permissão para ler e escrever nesse canal.

:::info
Se você não vê a opção para copiar o ID do servidor ou do canal, ative o modo desenvolvedor nas Configurações do usuário do Discord primeiro:  
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personalizando as Configurações no txAdmin

Agora você pode ativar o bot Discord no txAdmin e inserir todos os IDs e tokens que anotou antes:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opcional: Enviar Mensagem de Status

Você pode enviar uma mensagem de status que será atualizada constantemente com o status atual do servidor, jogadores, etc.  
Para isso, clique no canal Discord onde quer a mensagem e digite `/status add`. Certifique-se que o bot tem permissão para enviar mensagens nesse canal.

Isso deve criar uma mensagem assim:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tudo nessa mensagem pode ser personalizado na página de configurações do Discord dentro do txAdmin.

## Conclusão

Configurar um bot Discord para o txAdmin permite mostrar facilmente o status do seu servidor RedM e outras infos no seu servidor Discord.  
Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
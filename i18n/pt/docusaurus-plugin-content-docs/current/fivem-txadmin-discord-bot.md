---
id: fivem-txadmin-discord-bot
title: "FiveM: Bot Discord do txAdmin"
description: "Descubra como integrar e usar o bot do Discord com seu servidor txAdmin para uma gestão top do seu servidor de jogos FiveM → Saiba mais agora"
sidebar_label: Bot Discord do txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução
O painel txAdmin traz várias funcionalidades para o seu servidor de jogos FiveM, incluindo a integração com um bot do Discord.  
Neste guia, vamos mostrar como configurar o bot do Discord e como usá-lo.

<InlineVoucher />

## Preparação

Para configurar o bot do Discord para seu servidor txAdmin, primeiro você precisa fazer login no seu Painel txAdmin.  
As informações de login aparecem na página de visão geral do servidor, como mostrado aqui:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Este guia pressupõe que o txAdmin já está configurado. Para aprender como fazer isso, você pode visitar nosso [Guia FiveM: Configuração do txAdmin](fivem-txadmin-setup.md).

:::

## Configuração

### Criando uma Aplicação no Discord

Para configurar o bot com o txAdmin, você precisa criar uma aplicação no Discord. Seu bot será vinculado a essa aplicação e atuará em nome dela. Para criar essa aplicação, acesse [o Portal de Desenvolvedores do Discord](https://discord.com/developers/applications/).

Agora, crie uma nova aplicação clicando em **New Application** e dê um nome para ela, como no exemplo abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Depois, crie a aplicação clicando em **Create**. Anote o ID da aplicação para os próximos passos:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurando o Bot e Pegando o Token

Ao criar a aplicação, um bot é criado automaticamente. Você pode pegar o token clicando em **Reset Token**. Anote esse token, pois ele é essencial para o funcionamento do bot:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Não compartilhe o token do bot com ninguém para garantir que ele funcione sem problemas e evitar riscos de segurança. O token é como uma chave secreta.
:::

Na mesma página, role um pouco para baixo e ative a opção "Server Members Intent" e salve as alterações:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Convidando o Bot para seu Discord

Para convidar o bot, insira o client ID anotado anteriormente no link abaixo, substituindo o valor no lugar certo, e abra o link no seu navegador para adicionar o bot ao seu servidor Discord. O link deve ficar parecido com este exemplo:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Pegando os IDs do Servidor e do Canal

Para usar o bot corretamente com o txAdmin, você precisa do ID do servidor onde o bot vai operar.  
Você pode pegar esse ID clicando com o botão direito no ícone do servidor no Discord e selecionando **Copiar ID do Servidor**. Anote esse ID também.

Exemplo de como deve aparecer:  
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Você também pode definir opcionalmente um canal onde atualizações de status, como horários de reinício, serão postadas. Copie o ID do canal da mesma forma.  
Lembre-se que o bot precisa ter permissão para ler e enviar mensagens nesse canal.

:::info
Se você não vê a opção para copiar o ID do servidor ou do canal, ative o modo desenvolvedor nas configurações do seu usuário no Discord primeiro:  
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personalizando as Configurações no txAdmin

Agora você pode ativar o bot do Discord no txAdmin e inserir todos os IDs e tokens que anotou anteriormente:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opcional: Enviar Mensagem de Status

Você pode enviar uma mensagem de status que será atualizada constantemente com o status atual do servidor, jogadores, etc.  
Para isso, vá até o canal do Discord onde quer a mensagem e digite `/status add`. Certifique-se que o bot tem permissão para enviar mensagens nesse canal.

Isso vai criar uma mensagem parecida com esta:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tudo nessa mensagem pode ser personalizado na página de configurações do Discord dentro do txAdmin.

## Conclusão

Configurar um bot do Discord para o txAdmin facilita mostrar o status do seu servidor de jogos FiveM e outras infos direto no seu servidor Discord.  
Se tiver dúvidas ou precisar de ajuda, nosso time de suporte está disponível todos os dias para te dar aquela força! 🙂

<InlineVoucher />
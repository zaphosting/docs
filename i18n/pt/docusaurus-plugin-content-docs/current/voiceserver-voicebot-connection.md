---
id: voiceserver-voicebot-connection
title: "Voiceserver: Conectando seu bot de voz ao seu servidor de voz"
description: "Descubra como conectar seu bot de voz aos servidores TeamSpeak e Discord para uma comunicação e controle sem interrupções → Saiba mais agora"
sidebar_label: Conectar ao servidor de voz
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introdução

Quer conectar seu bot de voz ao seu servidor TeamSpeak, mas ainda não sabe como? Relaxa, aqui vamos te explicar tudo nos mínimos detalhes!



## Conectando o bot ao seu TeamSpeak

Para conectar seu bot de voz ao seu servidor TeamSpeak 3, você precisa acessá-lo pelo painel de controle. Depois, vá em **Servidor** no menu à esquerda, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Agora você pode selecionar um TeamSpeak em **Servidor**, caso ele também tenha sido contratado na sua conta. Se ele estiver hospedado externamente, você pode escolher **Servidor TeamSpeak Personalizado**.

Depois, é só inserir os dados abaixo, salvar e o bot de voz vai se conectar ao seu servidor TeamSpeak 3. Veja um exemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Conectando o bot ao seu Discord

Para conectar seu bot de voz ao Discord, vá em **Servidor** e selecione **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Você precisa inserir o **Token do Bot do Discord** e o **ID do Cliente do Bot do Discord**. Depois disso, o bot de voz vai se conectar ao seu servidor Discord.


## Como conseguir o Token do Bot do Discord e o Client ID

Como seu servidor Discord não tem um endereço IP ou porta direta, tem alguns passos que você precisa fazer antes de usar seu bot no Discord.


### Criando uma Aplicação no Discord

A primeira coisa é criar uma aplicação no Discord. Seu bot vai ser vinculado a essa aplicação e vai agir com o nome dela. Para criar, acesse [o Portal de Desenvolvedores do Discord](https://discord.com/developers/applications/).

Agora, crie uma nova aplicação clicando em **New Application** e dê um nome, como no exemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Depois, crie a aplicação clicando em **Create**. Anote o ID da aplicação para os próximos passos:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurando o Bot e Pegando o Token

Ao criar a aplicação, um bot é criado automaticamente. Você pode pegar o token clicando em **Reset Token**. Anote esse token, pois ele é importante:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Não compartilhe o token do bot com ninguém para que ele funcione sem problemas e não cause riscos de segurança. O token é como uma chave secreta.
:::

Na mesma página, desça um pouco e ative as opções **Presence Intent**, **Server Members Intent** e **Message Content Intent**, depois salve as alterações:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Convidando o Bot para seu Discord

Para convidar o bot, insira o Client ID anotado no link abaixo, substituindo no lugar certo, e abra esse link no navegador para adicionar o bot ao seu servidor Discord. Deve ficar assim:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Configurando o Painel do Bot

Agora, coloque o token e o Client ID que você anotou nos campos do painel de controle da ZAP-Hosting e clique em **Salvar** no final da página:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Depois, é só iniciar o bot. Ele deve se conectar ao seu servidor Discord em cerca de 10 segundos.


## Conclusão

O bot de voz é um produto super útil e divertido para muita gente. Você pode usar tanto em um servidor TeamSpeak quanto no Discord. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: fivem-serverbanner
title: "FiveM: Configure seu próprio banner de servidor"
description: "Descubra como melhorar a aparência do seu servidor FiveM com um banner personalizado para um visual único e profissional → Saiba mais agora"
sidebar_label: Configurar banner do servidor
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Um banner personalizado para servidor é uma forma simples, mas super eficaz, de fazer seu servidor FiveM se destacar. Ele dá ao seu servidor um visual único na lista de servidores e adiciona um toque profissional quando os jogadores se conectam.

Seja usando uma screenshot personalizada ou uma arte criada, configurar um banner ajuda sua comunidade a reconhecer seu servidor de cara e causa uma ótima primeira impressão.

<InlineVoucher />

## Configuração

Para configurar um banner personalizado para seu servidor FiveM, você primeiro precisa de uma imagem adequada. Recomendamos tirar uma screenshot dentro do jogo que represente bem seu servidor. Você pode criar uma screenshot rapidamente pressionando a tecla **F8** enquanto joga e usando o comando `screenshot`.

Depois de ter sua screenshot, faça o upload em um serviço de hospedagem de imagens que forneça um **link direto** para o arquivo da imagem (por exemplo, terminando em `.jpg` ou `.png`). Certifique-se de que a imagem esteja acessível via uma URL direta.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview)

Para adicionar o banner, abra seu dashboard do txAdmin e vá para as configurações de configuração do seu servidor. Procure o campo **URL do banner do servidor** e cole o link direto da sua imagem lá. Salve as alterações. Seu banner personalizado agora aparecerá nos detalhes do servidor quando os jogadores visualizarem seu servidor na lista.

```
# Defina uma URL opcional para o banner de informações do servidor e de conexão.
# O tamanho não importa, qualquer imagem no tamanho de banner serve.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Substitua as URLs de exemplo pelo link direto da sua imagem enviada. Salve o arquivo no Editor CFG e reinicie seu servidor para aplicar as mudanças.

## Conclusão

Seu banner personalizado agora aparecerá na lista de servidores e na tela de conexão, deixando seu servidor com um visual mais único e profissional. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
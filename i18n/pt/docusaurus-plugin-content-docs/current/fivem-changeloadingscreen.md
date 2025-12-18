---
id: fivem-changeloadingscreen
title: "FiveM: Instalação de Tela de Carregamento Personalizada"
description: "Descubra como personalizar sua tela de carregamento do FiveM para uma experiência única para os jogadores e melhore o visual do seu servidor → Saiba mais agora"
sidebar_label: Instalar Tela de Carregamento Personalizada
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Quer usar sua própria tela de carregamento personalizada em vez da tela padrão do FiveM? Aqui vamos explicar como fazer isso e quais passos você precisa seguir!

<InlineVoucher />



## Preparação

Para instalar sua própria tela de carregamento, primeiro você precisa encontrar um recurso adequado. Você pode encontrar uma grande seleção de recursos no site oficial do [Cfx.re](https://forum.cfx.re/c/releases/7). Depois, baixe o recurso e descompacte-o no seu computador.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Instalação

A instalação da tela de carregamento é feita via FTP. Para isso, conecte-se ao seu servidor de jogos via FTP. Se você ainda não sabe como usar FTP, dê uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md).

Uma vez conectado via FTP, navegue até a pasta de recursos. Dependendo do framework que você instalou, você encontrará sua pasta de recursos na seguinte estrutura de pastas: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Faça o upload da pasta do recurso que você baixou e descompactou anteriormente no seu computador para esse local.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Agora que o recurso da tela de carregamento foi enviado com sucesso, ele ainda precisa ser adicionado ao arquivo de configuração do servidor `server.cfg`. Para isso, faça login na interface do txAdmin e abra o Editor CFG.

Então, adicione seu recurso à configuração. Você pode fazer isso com o comando `start nomedorecurso`. Neste exemplo, seria `start loadingscreen`. Salve suas alterações e reinicie o servidor em seguida.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusão

Se você seguiu todos os passos, deverá ver sua nova tela de carregamento após o próximo reinício do seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
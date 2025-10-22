---
id: empyrion-becomeadmin
title: "Empyrion: Torne-se um Admin"
description: "Aprenda como atribuir permissões de administrador para controle total do servidor e gerenciar as funções do jogo de forma eficaz → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Localize seu Steam64ID

Primeiro, você precisa localizar seu Steam64ID.  
Você pode usar a seguinte ferramenta: [SteamID Lookup](https://steamid.io/lookup).  
O ID será inserido depois no arquivo de configuração.

Aqui está um exemplo de como você pode obter seu steamid inserindo o link do seu perfil:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Configure o adminconfig

O arquivo "**adminconfig.yaml**" que deve ser editado está localizado no diretório "**Saves**".  
Para abrir esse diretório, siga as instruções do [Acesso via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Os valores padrão são os seguintes:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Agora, insira o Steam64ID selecionado anteriormente após "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Com "**Permission**" você define o rank que será dado ao usuário.  
Os ranks são atribuídos da seguinte forma:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderador
9 | admin


## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para mais dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
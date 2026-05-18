---
id: arma-reforger-mods
title: "Arma Reforger: Instale Mods via o Workshop"
description: "Aprenda como instalar e ativar mods do Arma Reforger Workshop no seu servidor → Saiba mais agora"
sidebar_label: Instalar Mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mods são super importantes para expandir a experiência de jogo em **Arma Reforger**. Pelo **Arma Reforger Workshop**, jogadores e criadores publicam missões personalizadas, mudanças na jogabilidade, mapas e conteúdo extra que podem ser usados nos servidores.

Instalar mods permite que donos de servidor personalizem a jogabilidade, introduzam novas mecânicas ou ofereçam missões únicas para a comunidade. Depois de instalados, os jogadores que entrarem no servidor vão baixar automaticamente os mods necessários antes de conectar.


<InlineVoucher />

## Encontrando Mods

Primeiro, você precisa do **ID do Workshop** do mod que quer instalar. Abra o **Arma Reforger Workshop** e navegue até o mod desejado. Cada entrada no workshop tem um identificador único que o servidor usa para baixar o mod automaticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Configuração

Para instalar mods do workshop no seu servidor, abra seu **painel de controle do servidor de jogos** e vá até **Configurações**. Encontre o campo de configuração chamado **Workshop-Mods**. Nesse campo, insira o **ID do Workshop** do mod que quer instalar. Exemplo de configuração com um único mod:

```
1234567890
```
Se quiser instalar vários mods, insira cada ID do Workshop separando-os por **vírgula**. Exemplo de configuração com múltiplos mods:

```
1234567890,9876543210,1357924680
```
Depois de inserir os IDs dos mods desejados, **salve as configurações** e reinicie o servidor. Durante a inicialização, o servidor vai baixar automaticamente os mods listados do Arma Reforger Workshop e carregá-los.



## Conclusão

Parabéns! Você instalou com sucesso os **mods do Arma Reforger Workshop** no seu servidor. Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
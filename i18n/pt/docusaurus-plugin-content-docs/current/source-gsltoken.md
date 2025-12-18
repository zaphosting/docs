---
id: source-gsltoken
title: Usando tokens de login para servidor de jogos
description: "Descubra como os tokens GSL protegem servidores de jogos Steam vinculando bans às contas, garantindo um aluguel de servidores mais seguro e em conformidade → Saiba mais agora"
sidebar_label: Token GSL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ O que é um token GSL?

Gameserver Login Tokens (GSLTs) é um procedimento que a Steam implementou como medida de segurança. Para rodar servidores de jogos de certos jogos Steam (principalmente jogos Source) é necessário gerar um token.

<InlineVoucher />

## ❓ Qual é o propósito de um token GSL?

No passado, a Valve fez algumas mudanças nas regras para o aluguel de servidores de jogos. Nem todos os operadores de servidores seguiram essas regras. Como consequência, os endereços IP dos servidores foram banidos.

Porém, esse método não era eficaz, pois podia ser facilmente contornado com um novo endereço IP e também causava um grande problema para os provedores de servidores. Isso porque, ao banir o endereço IP, outros clientes também eram afetados.

Por isso, esse sistema foi implementado, que em vez disso bane o token e bloqueia a Conta Steam vinculada para futuras operações de servidor de jogos.

## ➕ Criar token

Para criar um token de login para servidor de jogos, você precisa estar logado no site da Steam. O token pode ser criado aqui: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Quando chegar lá, será pedido o App ID e um memo (qualquer nome que você queira usar como nota). O App ID depende do jogo. A seguir você encontra os App IDs mais importantes:

|              Jogo               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

O token GSL pode ser definido na interface, nas configurações.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Depois que essa etapa for concluída e o servidor reiniciado, ele também aparecerá na lista pública de servidores.

## ⁉ Perguntas frequentes

**Quais são os pré-requisitos para um token GSL?**

A Conta Steam não pode ter restrições como banimento da comunidade. Além disso, um número de telefone válido precisa estar registrado na Conta Steam.

**Posso usar um token GSL para vários servidores?**

É necessário um token individual para cada servidor de jogos.

**Existe algo que possa fazer meu token GSL ser banido?**

Especialmente em servidores CS:GO, existem alguns plugins que não são permitidos. Uma lista oficial não foi publicada. Porém, isso inclui plugins que alteram inventários de jogadores (skins de armas), ranks ou similares.

**O que acontece se meu token GSL for banido?**

Se um token for banido, a conta e todos os tokens associados também são banidos. Isso significa que o servidor de jogos não estará mais acessível publicamente. Além disso, a conta não poderá mais ser usada para operar servidores de jogos no futuro. No entanto, a Conta Steam ainda pode ser usada para jogar. Não são esperadas outras punições nesse sentido.

<InlineVoucher />
---
id: ark-serverlisting
title: "ARK: Problemas de listagem de servidores com jogos Steam usando Steamworks"
description: "Descubra por que jogos populares enfrentam problemas na listagem de servidores devido aos limites do Steamworks e como isso afeta sua experiência multiplayer → Saiba mais agora"
sidebar_label: Problemas de Listagem de Servidores
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Infelizmente, muitos jogos populares como ARK ou Valheim têm grandes problemas para listar todos os servidores na lista de servidores dentro do jogo.

Isso acontece porque esses jogos usam o software "Steamworks" para essa listagem.

O Steamworks pode listar no máximo 4880 servidores. Se um jogo tiver mais do que esse número de servidores ativos, apenas uma pequena parte dos servidores ativos será listada para o jogador.

É bem aleatório se o jogador 1 vê o servidor Y ou não.  
Também acontece do jogador 1 ver o servidor Y, mas o jogador 2 não. Já o jogador 3 vê ele de novo, mas não vê outro servidor que o jogador 1 vê.

Para descartar um problema com o provedor do servidor, você pode buscar o servidor em "Steam" - "Visualizar" - "Servidor" usando o IP e a porta. Se ele for encontrado lá, a conexão entre o jogador e o servidor está perfeita. Isso porque a consulta é feita diretamente pelo jogador.

Um bom exemplo para validar o problema é que jogadores de ARK que abrem o jogo via Steam têm dificuldade para encontrar servidores. Se abrirem o ARK pela Epic Games, os servidores aparecem normalmente. Aqui não é usado o Steamworks.

Vários desenvolvedores de jogos já comentaram sobre esse problema. Por exemplo, Garry Newman do Garrysmod achou que o problema estava relacionado ao provedor de servidores OVH. Mas não era isso. O problema está presente na ZAP-Hosting e em qualquer outro provedor, pois é diretamente com o Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Fonte: https://x.com/garrynewman/status/1334446218437681152?s=20

Ou até mesmo o Rust, que escreveu em seu blog:

```
Nem tudo são flores quando você tem um aumento repentino de popularidade.  
Você começa a ver rachaduras na base, o que para nós ficou mais evidente no navegador de servidores, que nunca foi feito para lidar com uma quantidade tão grande de servidores.  
Sem entrar em detalhes técnicos, isso resultou em muitos servidores não aparecendo para os usuários e causando muita frustração para os donos dos servidores.  
Estamos trabalhando e explorando soluções, então por favor, tenham paciência com a gente.
```

Fonte: https://rust.facepunch.com/blog/

Vamos continuar acompanhando o problema e avisar por aqui assim que surgir uma solução.

<InlineVoucher />
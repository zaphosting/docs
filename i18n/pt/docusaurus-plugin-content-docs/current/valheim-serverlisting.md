---
id: valheim-serverlisting
title: "Valheim: Problemas na listagem de servidores com jogos Steam usando Steamworks"
description: "Descubra por que jogos populares têm dificuldades para listar todos os servidores ativos devido aos limites do Steamworks e como isso afeta sua experiência multiplayer → Saiba mais agora"
sidebar_label: Problemas na Listagem de Servidores
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Infelizmente, muitos jogos populares como ARK ou Valheim enfrentam grandes problemas para listar todos os servidores na lista de servidores dentro do jogo.

Isso acontece porque esses jogos usam o software "Steamworks" para essa listagem.

O Steamworks pode listar no máximo 4880 servidores. Se um jogo tiver mais do que esse número de servidores ativos, apenas uma pequena parte dos servidores ativos será listada para o jogador.

É bem aleatório se o jogador 1 vê o servidor Y ou não.  
Também acontece do jogador 1 ver o servidor Y, mas o jogador 2 não. Já o jogador 3 vê o servidor Y, mas não vê outro servidor que o jogador 1 vê.

Para descartar um problema com o provedor do servidor, você pode buscar o servidor em "Steam" - "Exibir" - "Servidor" usando o endereço IP e a porta. Se ele for encontrado lá, a conexão entre o jogador e o servidor está perfeita. Isso porque a consulta é feita diretamente pelo jogador.

Um bom exemplo para validar o problema é que jogadores de ARK que abrem o jogo via Steam têm dificuldade para encontrar servidores. Se abrirem o ARK pela Epic Games, os servidores aparecem normalmente. Nesse caso, o Steamworks não é usado.

Vários desenvolvedores de jogos também comentaram sobre esse problema. Por exemplo, Garry Newman, do Garrysmod, achava que o problema estava relacionado ao provedor de servidores OVH. Mas não era isso. O problema acontece com a ZAP-Hosting e qualquer outro provedor de servidores, pois está diretamente no Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/mWWpmZzJ6ZXX59W/preview)

Fonte: https://x.com/garrynewman/status/1334446218437681152?s=20

Ou até mesmo Rust, como eles escrevem no blog:

```
Nem tudo são flores quando você tem um aumento repentino de popularidade.  
Começam a aparecer falhas na base, o que para nós ficou mais evidente é que o navegador de servidores nunca foi feito para lidar com uma quantidade tão grande de servidores.  
Sem entrar em detalhes técnicos, isso resultou em muitos servidores não aparecendo para os usuários e causando muita frustração para os donos dos servidores.  
Estamos trabalhando e explorando soluções, então pedimos paciência.
```

Fonte: https://rust.facepunch.com/blog/

Vamos continuar acompanhando o problema e avisar por aqui assim que surgir uma solução.

<InlineVoucher />
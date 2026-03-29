---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Configurar as Configurações de Spawn"
description: "Aprenda como configurar o comportamento de spawn no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Configurações de Spawn
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de spawn no **Over the Top WWI** controlam como e quando os jogadores retornam ao campo de batalha. Essas configurações impactam diretamente o ritmo, a justiça e o fluxo geral da partida.

Ajustando os tempos de spawn, períodos de graça e o comportamento de respawn, você pode criar uma jogabilidade mais rápida ou cenários de combate mais táticos e desafiadores.

<InlineVoucher />

## Configuração

As configurações de spawn são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` define quanto tempo os jogadores podem spawnar sem penalidades ou restrições no início
- `AttackerRespawnTime` define o tempo de respawn para o time atacante
- `DefenderRespawnTime` define o tempo de respawn para o time defensor

- `WaveSpawning` ativa ou desativa o spawn em ondas

- `WaveLegnth` define quanto tempo dura uma onda de spawn
- `WaveBuildUpTime` controla quanto tempo leva para uma onda se formar completamente

Ajustar esses valores permite controlar se os jogadores spawnam individualmente ou em ondas coordenadas, e quão rápido eles podem voltar ao campo de batalha.

Depois de modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. O novo comportamento de spawn será aplicado automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as configurações de spawn no seu **servidor Over the Top WWI**. Esses ajustes permitem que você afine o ritmo da jogabilidade e melhore a experiência geral dos jogadores.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
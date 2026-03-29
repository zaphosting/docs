---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Configurar Bots"
description: "Aprenda a configurar as opções de bots no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Bots podem ser usados em um servidor **Over the Top WWI** para preencher vagas, simular batalhas em larga escala e manter a atividade mesmo com poucos jogadores. Ajustando as configurações dos bots, você controla a dificuldade, comportamento e a intensidade geral das partidas.

Isso permite criar desde pequenos confrontos controlados até grandes batalhas caóticas com muitas unidades controladas por IA.

<InlineVoucher />

## Configuração

As configurações dos bots ficam no arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` define a quantidade de bots no time atacante
- `DefenderBots` define a quantidade de bots no time defensor
- `AutoAssignBots` distribui bots automaticamente entre os times
- `0` → Desativado
- `1` → Ativado

- `BotCallinMulti` controla com que frequência bots são spawnados ou reforçados
- `SubBotForPlayer` substitui bots por jogadores reais quando eles entram
- `1` → Ativado
- `0` → Desativado

### Configuração avançada de bots

Você pode personalizar ainda mais o comportamento dos bots com parâmetros adicionais:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Esses valores controlam a frequência com que certos tipos de unidades são escolhidos quando bots são spawnados. Aumentar um valor faz com que mais bots daquele tipo apareçam nas partidas.

### Configurações de onda e escala

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` controla a duração de uma onda de bots
- `WaveBuildUpTime` define quanto tempo leva para a onda se formar completamente
- `AutoAssignBotsScaleMulti` escala a quantidade de bots dependendo do número de jogadores

Depois de modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações dos bots serão aplicadas durante o jogo.

## Conclusão

Parabéns! Você configurou com sucesso os bots no seu **servidor Over the Top WWI**. Ajustar essas configurações permite controlar a intensidade das partidas, melhorar a experiência dos jogadores e manter seu servidor sempre ativo.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
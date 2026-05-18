---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Configurar o Clima"
description: "Aprenda como configurar as opções de clima no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Clima
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de clima no **Over the Top WWI** impactam diretamente a jogabilidade, visibilidade e a atmosfera. Ajustando esses valores, você pode criar condições claras para combates equilibrados ou introduzir ambientes desafiadores como neblina, chuva ou tempestades.

Configurações personalizadas de clima permitem moldar a experiência geral e tornar as partidas mais dinâmicas ou imersivas.

<InlineVoucher />

## Configuração

As configurações de clima são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` ativa ou desativa mudanças dinâmicas no clima

- `0` → Desativado
- `1` → Ativado

- `CurrentWeather` define o tipo de clima atual

- `0` → Céu limpo
- `1` → Chuva
- `2` → Neblina
- `3` → Neve
- Adicione `+3` para versões mais intensas

- `CloudCoverage` controla quanto do céu está coberto por nuvens

- Valores menores resultam em céus mais claros
- Valores maiores aumentam a densidade das nuvens

- `TimeToChangeWeather` define com que frequência o clima muda, em segundos

- `TimeToChangeClouds` controla a frequência de atualização das condições das nuvens

Configurações adicionais do ambiente:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` controla a intensidade do vento que afeta a jogabilidade
- `WindDirection` define a direção do vento
- `ChanceOfLightningOccuring` define a probabilidade de ocorrer um raio
- `LightningTimer` controla a frequência com que os relâmpagos aparecem
- `CanLightningKill` determina se os relâmpagos podem causar dano aos jogadores

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de clima serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as opções de clima no seu **servidor Over the Top WWI**. Ajustar esses valores permite criar ambientes dinâmicos e melhorar a experiência de jogo para seus players.

Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
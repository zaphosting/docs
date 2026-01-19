---
id: hytale-change-day-night-duration
title: "Hytale: Alterar Duração do Dia/Noite"
description: "Descubra como teleportar entre Mundos em um servidor Hytale → Saiba mais agora"
sidebar_label: Alterar Duração do Dia/Noite
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O ciclo de dia e noite em um servidor Hytale define quanto tempo duram as fases de dia e noite dentro de um mundo. Ajustando a duração desses ciclos, os donos do servidor podem influenciar o ritmo do gameplay, a atmosfera e a dificuldade.

Noites mais curtas podem criar um ambiente mais tranquilo, enquanto noites mais longas aumentam o desafio e a tensão. Personalizar o comprimento do dia e da noite permite que você adapte o mundo ao estilo de jogo desejado no seu servidor.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

<InlineVoucher />

## Configuração

Para alterar a duração do dia e da noite, a configuração deve ser ajustada diretamente no arquivo `config.json` do mundo, que fica em:

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Se as entradas de configuração para a duração do dia e da noite ainda não existirem, elas devem ser adicionadas manualmente. Navegue pelo arquivo até encontrar a seguinte linha:

```
"GameplayConfig":
```

Logo abaixo dessa linha, insira as configurações de duração do dia e da noite:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Esses valores definem o comprimento do dia e da noite em segundos. Por exemplo, um valor de `1800` para o dia resulta em uma fase diurna mais longa, enquanto o valor `1000` para a noite controla quanto tempo a noite dura antes do ciclo reiniciar. Após fazer as alterações, salve o arquivo `config.json` e reinicie o servidor.

## Conclusão

Depois de completar essa configuração, você terá controle total sobre quanto tempo o dia e a noite duram em cada mundo do seu servidor Hytale. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />
---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Configure Hora e Ambiente"
description: "Aprenda como ajustar a hora do dia e as configurações ambientais no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Hora & Ambiente
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de hora e ambiente em **Over the Top WWI** influenciam a visibilidade, a atmosfera e as condições gerais de jogo. Ajustando esses valores, você pode criar batalhas em plena luz do dia, cenários mais escuros ou ambientes sazonais variados.

Essas configurações permitem personalizar o visual e a sensação do seu servidor, aumentando a imersão para seus jogadores.

<InlineVoucher />

## Configuração

As configurações de hora e ambiente são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` define a hora dentro do jogo
- `Season` controla a estação atual

- `0` → Padrão
- `1` → Primavera
- `2` → Verão
- `3` → Outono
- `4` → Inverno

- `TemperatureinCelcius` ajusta a temperatura ambiental
- Isso pode influenciar a atmosfera e os efeitos ambientais

Essas configurações permitem criar diferentes cenários, como batalhas no início da manhã, combates noturnos ou ambientes sazonais.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de ambiente serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso a hora e as configurações ambientais no seu **servidor Over the Top WWI**. Isso permite personalizar a atmosfera e criar experiências de jogo únicas para seus jogadores.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
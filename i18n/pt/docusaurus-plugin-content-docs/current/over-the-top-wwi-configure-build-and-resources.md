---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Configure Pontos de Construção e Recursos"
description: "Aprenda a configurar pontos de construção, canhões e limites de recursos no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Pontos de Construção & Recursos
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os pontos de construção e as configurações de recursos em **Over the Top WWI** controlam quantas estruturas, defesas e equipamentos os jogadores podem implantar durante uma partida. Esses valores afetam diretamente o equilíbrio do gameplay, especialmente em modos onde construção e fortificações são essenciais.

Ajustando essas configurações, você pode criar um gameplay mais defensivo com fortificações extensas ou limitar os recursos para partidas mais rápidas e agressivas.

<InlineVoucher />

## Configuração

As configurações de construção e recursos são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` e `DefenderBuildPoints` definem quantos pontos de construção cada time tem disponível

- `AttackerCannonPoints` e `DefenderCannonPoints` controlam quantos canhões ou unidades de artilharia podem ser implantados

- `SapperBPRegenAmount` define quantos pontos de construção são regenerados ao longo do tempo

- `SapperCannonPRegenAmount` controla a velocidade de regeneração dos pontos de canhão

- `SapperPropBPRegenTime` e `CannonPropPRegenTime` definem o tempo em segundos entre cada tick de regeneração

Ajuste esses valores para controlar quantas estruturas e defesas os jogadores podem criar e com que rapidez os recursos são renovados durante o gameplay.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações de recursos atualizadas serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso os pontos de construção e recursos no seu **servidor Over the Top WWI**. Isso permite controlar as fortificações, equilibrar o gameplay e moldar a experiência geral da batalha.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
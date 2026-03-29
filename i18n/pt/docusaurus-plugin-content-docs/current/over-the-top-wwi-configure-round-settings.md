---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Configurar as Configurações de Rodada"
description: "Aprenda a configurar a duração da rodada e o fluxo da partida no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Configurações de Rodada
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de rodada no **Over the Top WWI** definem quanto tempo as partidas duram e como o gameplay progride. Ajustar esses valores permite controlar o ritmo da partida, a duração da rodada e o fluxo geral da sessão.

Isso é especialmente importante para equilibrar partidas rápidas versus batalhas mais longas e estratégicas.

<InlineVoucher />

## Configuração

As configurações de rodada são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` define quantas rodadas são jogadas por partida
- `MaxMapTime` define a duração máxima do mapa em minutos
- `FinalRecapTimer2` controla quanto tempo o resumo final da rodada é exibido

- `PersistentMatch` determina se o tempo e a pontuação continuam entre as rodadas

  - `0` → Desativado
  - `1` → Ativado

Ajuste esses valores para criar partidas mais curtas com rotações rápidas ou sessões mais longas com gameplay estendido.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações de rodada atualizadas serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as configurações de rodada no seu **servidor Over the Top WWI**. Isso permite controlar a duração das partidas e melhorar o fluxo do gameplay no seu servidor.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
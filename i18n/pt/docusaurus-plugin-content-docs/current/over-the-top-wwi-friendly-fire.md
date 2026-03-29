---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Configurar Friendly Fire"
description: "Aprenda como ativar ou ajustar as configurações de friendly fire no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Friendly fire determina se os jogadores podem causar dano aos próprios colegas de equipe durante o jogo. Ajustar essas configurações permite que você controle o quão realista ou tolerante o combate deve ser no seu **servidor de jogos Over the Top WWI**.

Ativar o friendly fire pode aumentar o realismo e a jogabilidade tática, enquanto desativar ou reduzir pode criar uma experiência mais casual e acessível.

<InlineVoucher />

## Configuração

As configurações de friendly fire são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` ativa ou desativa o dano corpo a corpo contra colegas de equipe.
- `EnableFriendlyRangeFire` ativa ou desativa o dano à distância contra colegas de equipe.
- `FriendlyFireAtRoundStart` define um atraso em segundos antes do friendly fire ficar ativo.
- `FriendlyFirePercent` controla quanto dano corpo a corpo é aplicado aos colegas de equipe.
- `RangeFriendlyFirePercent` controla quanto dano à distância é aplicado aos colegas de equipe.
- `ExplosionFf` ativa ou desativa o dano por explosão aos colegas de equipe.
- `FriendlyFireReflectPercent` reflete uma porcentagem do dano de volta ao atacante em vez do colega de equipe.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de friendly fire serão aplicadas imediatamente.

## Conclusão

Parabéns! Você configurou com sucesso as opções de friendly fire no seu **servidor Over the Top WWI**. Ajustar esses valores permite equilibrar realismo e experiência de jogo para a sua comunidade.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Configurar Sistema de Reviver"
description: "Aprenda como configurar a mecânica de reviver no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Sistema de Reviver
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema de reviver em **Over the Top WWI** determina como os jogadores podem voltar à luta após serem derrubados. Ajustar essas configurações permite controlar o quão tolerante ou punitivo o combate será.

Um sistema de reviver mais rápido ou confiável pode tornar o gameplay mais acessível, enquanto configurações mais rígidas aumentam o realismo e as consequências dos erros.

<InlineVoucher />

## Configuração

O sistema de reviver é configurado dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` define quanto tempo leva para reviver um jogador
- `ReviveChance` determina a chance de sucesso do reviver
- `ReviveMaxDamage` define o dano máximo que um jogador pode ter e ainda assim ser revivido

Ajuste esses valores para controlar com que frequência os revives são bem-sucedidos e quanto tempo o processo leva.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de reviver serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso o sistema de reviver no seu **servidor Over the Top WWI**. Isso permite que você ajuste a dificuldade do combate e melhore a experiência geral de jogo.

Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
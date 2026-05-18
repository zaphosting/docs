---
id: hytale-pvp-management
title: "Hytale: Gerenciamento de PvP"
description: "Gerencie e configure o combate jogador contra jogador (PvP) no seu servidor de Hytale → Saiba mais agora"
sidebar_label: Gerenciamento de PvP
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O gerenciamento de PvP em um servidor de Hytale controla se os jogadores podem se atacar ou lutar entre si dentro de um mundo. Ajustando as configurações de PvP, os donos do servidor podem definir se o combate entre jogadores está totalmente ativado, completamente desativado ou restrito a situações específicas.

<InlineVoucher />

## Configuração

O comportamento do PvP é definido para cada mundo e configurado através do arquivo de configuração do servidor:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Essa configuração determina como o servidor lida com o dano entre jogadores e se o PvP é permitido dentro do mundo ativo. Alterações nas configurações de PvP se aplicam globalmente ao mundo afetado e exigem reinício do servidor para entrarem em vigor.

O exemplo a seguir mostra uma configuração onde o PvP está desativado para um mundo:

```
"WorldConfig": {
  "PvP": false
}
```

Com essa configuração aplicada, os jogadores não poderão mais se causar dano dentro daquele mundo, criando efetivamente um ambiente focado em PvE.

Para ativar o PvP e permitir o combate entre jogadores, a configuração pode ser definida assim:

```
"WorldConfig": {
  "PvP": true
}
```

## Conclusão

Depois de configurado, você terá uma visão clara de como o PvP é gerenciado e poderá ajustar facilmente a configuração para suportar jogabilidade cooperativa, ambientes competitivos ou uma combinação dos dois. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
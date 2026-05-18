---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Otimize o Desempenho do Servidor"
description: "Aprenda como otimizar o desempenho e o comportamento do servidor no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Configurações de Desempenho
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de desempenho no **Over the Top WWI** influenciam o quão suave seu servidor roda, especialmente com muitos jogadores ou uso intenso de IA. Uma configuração correta pode melhorar a estabilidade, reduzir lag e garantir uma experiência de jogo melhor para todo mundo.

Ajustando esses valores, você consegue equilibrar a simulação visual, os cálculos da IA e a carga do servidor.

<InlineVoucher />

## Configuração

As configurações de desempenho são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Encontre e abra o arquivo `ServerConfiguration.ini`. Dentro dele, localize os seguintes parâmetros:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` define o perfil de desempenho do servidor

  - `0` → Padrão
  - `1` → Otimização para maior número de jogadores
  - `2` → Otimização para número muito alto de jogadores

- `NavCalcsPerFrame` controla quantos cálculos de navegação são processados por frame
- `NavMeshFrames` define com que frequência as malhas de navegação são atualizadas
- `NavMeshAutoSeed` influencia como os caminhos de navegação da IA são gerados
- `ResetIfNoPlayers` reinicia automaticamente o servidor quando não há jogadores conectados

  - `0` → Desativado
  - `1` → Ativado

Ajustar essas configurações pode ajudar a melhorar o desempenho do servidor, especialmente ao rodar muitos bots ou hospedar batalhas grandes.

Depois de modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de desempenho serão aplicadas automaticamente.

## Conclusão

Parabéns! Você otimizou com sucesso as configurações de desempenho no seu **servidor Over the Top WWI**. Ajustar esses valores corretamente ajuda a manter a estabilidade e garante uma jogabilidade suave mesmo com carga pesada.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
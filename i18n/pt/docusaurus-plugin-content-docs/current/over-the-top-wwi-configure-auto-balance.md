---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Configurar Balanceamento Automático de Equipes"
description: "Aprenda a configurar o balanceamento automático de equipes no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Balanceamento Automático de Equipes
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O balanceamento de equipes é essencial para partidas justas e divertidas em **Over the Top WWI**. Sem um balanceamento adequado, um time pode ganhar uma vantagem significativa, resultando em um gameplay desequilibrado e uma experiência ruim para os jogadores.

O sistema de balanceamento automático ajuda a manter a justiça redistribuindo os jogadores entre as equipes automaticamente quando certas condições são atendidas.

<InlineVoucher />

## Configuração

O balanceamento automático de equipes é configurado dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` ativa ou desativa o balanceamento automático de equipes

- `0` → Desativado
- `1` → Ativado

- `TeamPercentsAutoBalance` define a distribuição desejada das equipes. Exemplo: `50` = tamanhos iguais de equipes
- `AutoBalanceThreshold` define o quanto de desequilíbrio é permitido antes do balanceamento ser acionado
- `MinAutoBalanceCount` define o número mínimo de jogadores necessários para que o balanceamento automático entre em ação
- `LimitTeamSelection` restringe os jogadores de escolherem equipes manualmente

- `0` → Sem restrição
- `1–3` → Limita a seleção de equipe dependendo do valor

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. O sistema de balanceamento automático então gerenciará a distribuição das equipes automaticamente durante as partidas.

## Conclusão

Parabéns! Você configurou com sucesso o balanceamento automático de equipes no seu **servidor Over the Top WWI**. Isso ajuda a garantir partidas justas e melhora a experiência geral para todos os jogadores.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
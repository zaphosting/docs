---
id: unturned-whitelist
title: "Unturned: Ative e edite a whitelist no servidor"
description: "Descubra como proteger seu servidor de jogos Unturned ativando e gerenciando a whitelist para um acesso controlado dos jogadores → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Ativar whitelist

A whitelist no Unturned permite proteger seu servidor, permitindo que apenas jogadores selecionados que estão na lista possam se conectar ao servidor. Ativar a whitelist é feito no jogo via comando. Isso requer **permissões de dono**. Se você não sabe o que é isso e como atribuí-las, confira o seguinte guia: [Torne-se admin](unturned-becomeadmin.md)

Se você seguiu o guia e se tornou admin com sucesso, agora pode ativar a whitelist no seu servidor. Para isso, abra o chat/console no jogo no seu servidor. Lá, você deve executar o seguinte comando:

```
/Whitelisted
```

A whitelist deve estar ativa agora e, consequentemente, só permitirá que jogadores que estão na lista entrem no servidor. Adicionar e remover jogadores é possível usando os seguintes comandos.

## Gerenciar whitelist

**Adicionar jogador à whitelist:**

```
Permit [SteamID]/[Tag]
```

**Remover jogador da whitelist:**

```
Unpermit [SteamID]
```

**Mostrar todos os jogadores permitidos:**

```
Permits
```

<InlineVoucher />
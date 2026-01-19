---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Informações sobre como colocar seu servidor Don't Starve Together na whitelist na ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que limita quem pode entrar no seu servidor. No Don't Starve Together, isso é implementado como uma allowlist baseada nos IDs de usuário da Klei. A configuração usual é um arquivo `whitelist.txt` junto com `whitelist_slots` no `cluster.ini`.

<InlineVoucher />


## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e localize a pasta do cluster, geralmente algo como `DoNotStarveTogether/Cluster_1/` ou um caminho específico do provedor que contenha o `cluster.ini`. Abra o `cluster.ini` e na seção `[NETWORK]` defina `whitelist_slots`.

Para fazer o servidor aceitar somente quem está na whitelist, defina `whitelist_slots` igual ao valor de `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Na mesma pasta do cluster, crie ou edite o arquivo `whitelist.txt`. Adicione um ID Klei por linha no formato KU_.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Salve os arquivos e reinicie o servidor. A allowlist é lida na inicialização.

## Gerenciando Jogadores na Whitelist

Para adicionar um jogador, acrescente o ID KU_ dele no `whitelist.txt`, salve e reinicie.

Para remover um jogador, apague o ID KU_ dele do `whitelist.txt`, salve e reinicie.

Mantenha o número de IDs no `whitelist.txt` pelo menos igual ao valor de `whitelist_slots` para evitar problemas de entrada quando as vagas reservadas na allowlist forem maiores que o número de usuários listados.

## Verificando o Funcionamento da Whitelist

Após o restart, tente entrar com uma conta que não esteja no `whitelist.txt`. Se `whitelist_slots` for igual a `max_players`, a entrada deve ser negada. Depois, entre com um ID KU_ listado para confirmar o acesso.

Se o servidor ainda permitir jogadores não listados, confirme que você editou a pasta do cluster ativa e que a seção `[NETWORK]` contém a linha `whitelist_slots`.

## Conclusão

Se todos os passos acima foram seguidos corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e verifique os arquivos ou a saída de comandos para confirmar que a alteração foi aplicada.

<InlineVoucher />
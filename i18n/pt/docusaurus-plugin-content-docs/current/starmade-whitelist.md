---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Informações sobre como colocar seu servidor StarMade na whitelist da ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que limita quem pode entrar no seu servidor. StarMade tem uma whitelist integrada controlada no `server.cfg` e preenchida através do `whitelist.txt`.

<InlineVoucher />

## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e abra o `server.cfg`. Ative a autenticação e a whitelist.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Salve o arquivo. Depois abra ou crie o `whitelist.txt` no mesmo diretório do servidor. Adicione os jogadores no formato usado pelo StarMade, uma entrada por linha.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Reinicie o servidor para carregar a whitelist atualizada.

## Gerenciando Jogadores na Whitelist

Para adicionar um jogador, acrescente uma nova linha no `whitelist.txt` usando o mesmo formato, salve e reinicie. Para remover um jogador, apague a linha dele do `whitelist.txt`, salve e reinicie.

Se os nomes contiverem caracteres especiais, use exatamente o nome do jogo como aparece no login para evitar erros.

## Verificando o Funcionamento da Whitelist

Após o reinício, tente conectar com uma conta que não esteja no `whitelist.txt`. O acesso deve ser negado. Depois conecte com um nome listado.

Se jogadores listados não conseguirem entrar, confirme que a autenticação do StarMade está ativada e obrigatória, caso contrário os nomes podem não bater direito.

## Conclusão

Se todos os passos acima foram seguidos corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e verifique o arquivo ou a saída de comandos para confirmar que a alteração foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
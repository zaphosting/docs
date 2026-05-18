---
id: humanitz-whitelist
title: "HumanitZ: Gerenciamento da Whitelist"
description: "Aprenda a gerenciar a whitelist e controlar o acesso ao seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

A whitelist permite que você controle exatamente quem pode entrar no seu servidor HumanitZ. Quando ativada, somente jogadores cujos IDs Steam estejam listados no arquivo de jogadores permitidos poderão se conectar.

<InlineVoucher />

## Configuração

A funcionalidade da whitelist é controlada dentro do arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de gerenciamento do seu servidor, na seção **Configs**. Para ativar o modo whitelist, localize e defina o seguinte parâmetro:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Ativa o modo whitelist. Apenas jogadores listados podem entrar.
- `OnlyAllowedPlayers=0` – Desativa o modo whitelist. Todos os jogadores podem entrar.

Após ativar o modo whitelist, você deve criar o arquivo da whitelist manualmente.

Conecte-se ao seu servidor via [FTP](gameserver-ftpaccess.md) usando seu cliente FTP preferido. Uma vez conectado, navegue até o diretório principal do servidor e crie um novo arquivo chamado `F_MVPAccess.txt`. Dentro desse arquivo, insira um **ID Steam único por linha** para cada jogador que você deseja permitir.

```
76561198000000001
76561198000000002
```

Salve o arquivo após adicionar os IDs Steam.

## Monitoramento da Atividade dos Jogadores

O HumanitZ fornece arquivos adicionais para acompanhar as conexões dos jogadores. O arquivo `F_ConnectedPlayers.txt` mostra os jogadores atualmente conectados e o `PlayerConnectedLog.txt` registra todas as conexões e desconexões, incluindo o nome Steam e o ID Steam único com timestamps.

Esses arquivos são úteis para identificar IDs Steam e monitorar a atividade do servidor. Após fazer qualquer alteração nos arquivos de whitelist ou banimento, salve os arquivos e reinicie o servidor para garantir que as mudanças sejam aplicadas corretamente.

## Conclusão

Parabéns! Ao ativar o modo whitelist e gerenciar os arquivos `F_MVPAccess.txt` e `F_BannedPlayers.txt`, você configurou com sucesso o controle de acesso no seu servidor HumanitZ.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂 

<InlineVoucher />
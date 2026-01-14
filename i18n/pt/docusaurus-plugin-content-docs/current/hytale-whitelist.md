---
id: hytale-whitelist
title: "Hytale: Configuração e Gerenciamento da Whitelist"
description: "Descubra como proteger seu servidor de jogos Hytale gerenciando o acesso dos jogadores com recursos de whitelist e garanta uma jogabilidade segura → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A whitelist é um recurso de segurança e controle de acesso que permite limitar quem pode entrar no seu servidor de jogos Hytale. Quando ativada, apenas os jogadores explicitamente listados na whitelist podem se conectar. Isso é especialmente útil para servidores privados, servidores comunitários, ambientes de desenvolvimento ou fases de teste onde o acesso deve ser restrito apenas a jogadores confiáveis.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Ativar whitelist

A whitelist pode ser ativada via console do servidor ou diretamente no jogo. Certifique-se de ter as permissões necessárias, como direitos de operador, antes de executar esses comandos.

Para ativar a whitelist, execute o seguinte comando:

```
/whitelist enable
```



Uma vez ativada, qualquer jogador que não estiver na whitelist será impedido de acessar o servidor ao tentar entrar. Para verificar se a whitelist está ativa, use:

```
/whitelist status
```

Esse comando retorna o estado atual da whitelist e ajuda a confirmar que a configuração foi aplicada corretamente.



## Desativar whitelist

Se quiser permitir que todos os jogadores entrem no servidor novamente, a whitelist pode ser desativada a qualquer momento. Use o comando abaixo para desativá-la:

```
/whitelist disable
```

Após desativar a whitelist, o servidor não restringirá mais o acesso com base nela e todos os jogadores poderão se conectar.



## Gerenciar whitelist

A whitelist pode ser gerenciada dinamicamente enquanto o servidor está rodando. Jogadores podem ser adicionados ou removidos a qualquer momento sem precisar reiniciar o servidor, usando comandos.



### Adicionar jogador à whitelist

Para liberar o acesso de um jogador específico ao servidor, adicione-o à whitelist com:

```
/whitelist add <playername>
```

O jogador especificado poderá entrar imediatamente no servidor, desde que a whitelist esteja ativada.



### Remover jogador da whitelist

Para revogar o acesso de um jogador, remova-o da whitelist:

```
/whitelist remove <playername>
```

Depois de removido, o jogador não poderá mais entrar enquanto a whitelist estiver ativa.



### Listar jogadores na whitelist

Para ver todos os jogadores que atualmente têm permissão para entrar no servidor, execute:

```
/whitelist list
```

Esse comando mostra a lista completa dos nomes dos jogadores na whitelist.



### Limpar whitelist

Se quiser remover todos os jogadores da whitelist de uma vez, você pode limpá-la completamente:

```
/whitelist clear
```

Isso apagará todas as entradas existentes na whitelist, mas não desativa a whitelist em si.



## Gerenciar whitelist via arquivo

Além dos comandos, a whitelist também pode ser gerenciada diretamente por um arquivo de configuração. Esse método é útil para mudanças em massa ou para preparar a whitelist antes de iniciar o servidor. O arquivo responsável por essa configuração se chama `whitelist.json` e fica localizado no diretório do servidor.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusão

Parabéns, você configurou com sucesso a whitelist para seu servidor de jogos Hytale. Seu servidor agora está restrito apenas a jogadores aprovados, ajudando a manter o controle, a privacidade e um ambiente multiplayer mais seguro.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
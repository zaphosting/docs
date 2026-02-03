---
id: hytale-become-invisible
title: "Hytale: Fique invisível"
description: "Descubra como ficar invisível em um servidor de Hytale → Saiba mais agora"
sidebar_label: Fique invisível
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Ficar invisível pode ser útil em servidores de Hytale para moderação, testes ou criação de conteúdo. Isso permite que administradores observem jogadores sem serem notados, verifiquem atividades suspeitas ou explorem áreas sem interferir no gameplay. Dependendo da configuração do servidor e das permissões disponíveis, a invisibilidade geralmente pode ser ativada por comandos dentro do jogo ou pelo console ao vivo.

<InlineVoucher />

## Requisitos

Para usar os recursos de invisibilidade, você precisa ter permissões suficientes no servidor. Na maioria dos casos, é necessário ter privilégios de operador ou acesso a comandos de moderação e gameplay. Se você não tiver as permissões necessárias, o comando será negado e a invisibilidade não poderá ser ativada. Para obter as permissões necessárias, siga nosso [Guia para se tornar admin](hytale-becomeadmin.md).

## Como ficar invisível

Para ficar invisível, abra o chat dentro do jogo e digite o comando de invisibilidade suportado pelo servidor. Execute o seguinte comando:

```
/hide <nome_do_jogador>
```

Assim que o comando for executado com sucesso, seu personagem não será mais visível para outros jogadores no mundo. Você ainda poderá se mover, interagir e monitorar atividades, dependendo das regras do servidor e da implementação da invisibilidade.

Além do comando básico de esconder, Hytale também oferece opções avançadas que permitem controlar quem pode ver um jogador. Por exemplo, você pode esconder um jogador apenas de um jogador específico, ou aplicar invisibilidade para todos no servidor.

Os seguintes comandos estão disponíveis:
- `/hide <nome_do_jogador>`  Torna o jogador especificado invisível.
- `/hide <nome_do_jogador> --target <nome_do_jogador>`  Torna o jogador especificado invisível apenas para o jogador alvo.
- `/hide all`  Torna todos os jogadores invisíveis.

## Desativando a invisibilidade

Para voltar à visibilidade normal, execute o comando correspondente novamente para desativar a invisibilidade. Após a confirmação do comando, os outros jogadores poderão ver seu personagem normalmente.

```
/hide show <nome_do_jogador>
```

Também existem comandos adicionais para remover a invisibilidade em cenários mais específicos, como restaurar a visibilidade apenas para certos jogadores alvo ou remover a invisibilidade de todos.

Os seguintes comandos estão disponíveis:
- `/hide show <nome_do_jogador>`  Remove a invisibilidade do jogador especificado.
- `/hide show <nome_do_jogador> --target <nome_do_jogador>`  Remove a invisibilidade do jogador especificado para o jogador alvo.
- `/hide showall`  Remove a invisibilidade de todos os jogadores.

## Conclusão

Ficar invisível em um servidor de Hytale é uma ferramenta útil para administradores e moderadores que precisam monitorar o gameplay de forma discreta. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
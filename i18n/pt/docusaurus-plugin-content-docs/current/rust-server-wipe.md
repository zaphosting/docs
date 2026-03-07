---
id: rust-server-wipe
title: "Rust: Wipe do Servidor - Mantenha Seu Servidor Equilibrado e Limpo"
description: "Saiba o que são wipes de servidor Rust, por que são necessários e como realizar um wipe no seu servidor Rust → Saiba mais agora"
sidebar_label: Wipe do Servidor
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

No **Rust**, um wipe do servidor reseta partes do mundo do jogo para criar um novo começo para todos os jogadores. Com o tempo, os mapas de Rust ficam cheios de grandes bases, recursos acumulados e grupos de jogadores estabelecidos. Isso pode afetar o equilíbrio e o desempenho do servidor.

Um wipe do servidor remove o progresso existente e restaura um ambiente limpo para que os jogadores possam começar do zero. Muitas comunidades de Rust fazem wipes regularmente para manter o gameplay justo e empolgante, especialmente quando novas atualizações ou mapas são lançados.

Dependendo do tipo de wipe, o **mapa**, os **blueprints dos jogadores** ou **ambos** podem ser resetados.

<InlineVoucher />



## O Que um Wipe de Servidor Faz

Um wipe de servidor Rust remove dados armazenados do mundo ou do progresso dos jogadores. Isso pode incluir:

- Estruturas e bases construídas pelos jogadores  
- Inventários e itens armazenados dos jogadores  
- Dados de exploração do mapa  
- Blueprints aprendidos (dependendo do tipo de wipe)

Após um wipe, o servidor se comporta como um mundo novo onde os jogadores precisam coletar recursos, reconstruir bases e reaprender o progresso.



## Tipos de Wipes em Rust

Rust suporta vários tipos de wipes, dependendo do que você quer resetar. Os seguintes tipos de wipes disponíveis serão explicados a seguir.

### Wipe do mapa

Um **wipe do mapa** remove todo o arquivo de salvamento do mundo. Todas as bases, estruturas e progresso no mapa são deletados. Quando o servidor reinicia, um novo mapa é gerado ou baixado. O progresso dos blueprints permanece inalterado, a menos que um wipe de blueprints também seja realizado.

### Wipe de blueprints

Um **wipe de blueprints** reseta todos os blueprints de crafting aprendidos. Os jogadores precisam pesquisar os itens novamente antes de poderem fabricá-los. Esse tipo de wipe afeta apenas o progresso e não reseta o mapa em si.

### Wipe completo

Um **wipe completo** reseta tanto o mapa quanto todos os blueprints dos jogadores. Isso cria um ambiente de servidor totalmente novo e é comumente usado para resets sazonais ou grandes atualizações.



## Por Que Wipes de Servidor São Importantes

Wipes de servidor ajudam a manter um ambiente saudável para o servidor Rust. Com o tempo, os servidores acumulam muitas estruturas, contêineres de armazenamento e entidades do mundo. Isso pode impactar negativamente o desempenho do servidor e o equilíbrio do gameplay. Wipes regulares trazem vários benefícios:

- Restaura o desempenho do servidor  
- Cria um novo começo para todos os jogadores  
- Evita que clãs dominantes controlem o mapa indefinidamente  
- Permite que servidores rodem novos mapas ou seeds de mapa

Muitas comunidades de Rust realizam wipes agendados semanalmente, quinzenalmente ou mensalmente, dependendo do estilo do servidor.



## Como Realizar um Wipe no Servidor

Para realizar um wipe no seu servidor Rust, acesse os arquivos do servidor via [acesso FTP](gameserver-ftpaccess.md). Em seguida, localize os arquivos de salvamento dentro do diretório do servidor Rust. Esses arquivos normalmente incluem:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Deletar arquivos específicos determina o tipo de wipe realizado. Deletar os arquivos `proceduralmap.*` realiza um **wipe do mapa**, removendo o mundo existente. Remover os arquivos `player.blueprints.*` realiza um **wipe de blueprints**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Remover ambos resultará em um **wipe completo**. Após deletar os arquivos desejados, reinicie o servidor. O servidor irá gerar automaticamente um novo mundo e permitirá que os jogadores comecem do zero.



## Conclusão

Parabéns! Agora você sabe como funcionam os wipes de servidor Rust e como realizá-los. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
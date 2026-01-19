---
id: hytale-world-management
title: "Hytale: Gerenciamento de Mundos"
description: "Descubra como proteger seu servidor de Hytale gerenciando o acesso dos jogadores com recursos de whitelist e proteja sua jogabilidade → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O gerenciamento de mundos em um servidor de Hytale envolve controlar o ambiente persistente do jogo onde os jogadores exploram, constroem e interagem. Um mundo consiste em todos os dados do terreno, estruturas, progresso dos jogadores e configurações que definem a experiência compartilhada. Poder criar, renomear, resetar ou organizar mundos é parte essencial para manter um servidor, seja para comunidades privadas ou públicas.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

## Criação de novo mundo

Criar um novo mundo dá ao seu servidor um ambiente fresco para gerar terreno, estruturas e progressão de jogo do zero. Usando o console ao vivo, mundos podem ser criados ou trocados emitindo os comandos relacionados ao mundo.  
Quando um novo nome de mundo é especificado, o servidor carrega um mundo existente com esse nome ou gera um novo caso não encontre dados correspondentes.

```
/world create <worldname>
```

Esse comando cria um novo mundo chamado `<worldname>`. Se não houver dados existentes para esse nome, o servidor gera um ambiente de mundo novo.



## Definir um mundo como padrão

Um mundo específico pode ser marcado como o mundo padrão para que ele seja carregado automaticamente quando o servidor iniciar. Definir um mundo padrão é útil quando existem múltiplos mundos e um deles deve sempre ser usado como ambiente principal.

Usando o console ao vivo, o mundo padrão pode ser atualizado sem precisar editar arquivos de configuração manualmente. Uma vez definido, o servidor priorizará esse mundo na próxima reinicialização.

```
/world setdefault <worldname>
```

Esse comando define o mundo chamado `mainworld` como o mundo padrão. Após reiniciar o servidor, esse mundo será carregado automaticamente.



## Remover mundo existente

Além de criar e carregar mundos, o console ao vivo também pode ser usado para remover mundos existentes do servidor. Isso é útil quando mundos desatualizados, não usados ou de teste não são mais necessários. Remover um mundo apaga seus dados associados do servidor. Essa ação é permanente e não pode ser desfeita, a menos que exista um backup.

```
/world remove <worldname>
```

Esse comando remove o mundo chamado `worldname` do servidor. Se o mundo estiver ativo, ele deve ser descarregado ou o servidor pode rejeitar o comando, dependendo da implementação.



## Conclusão

Gerenciar mundos pelo console ao vivo oferece uma forma rápida e flexível de controlar o ambiente ativo em um servidor de Hytale. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
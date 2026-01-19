---
id: hytale-permissions
title: "Hytale: Gerenciando Permissões de Usuário e Grupo"
description: "Gerencie as permissões de usuários e grupos no seu servidor de jogos Hytale → Saiba mais agora"
sidebar_label: Permissões
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Gerenciar permissões em um servidor de jogos Hytale permite controlar o que os jogadores podem ou não fazer. Isso inclui atribuir diferentes níveis de acesso para jogadores confiáveis, moderadores e administradores. Configurar as permissões corretamente é essencial para manter um ambiente de servidor equilibrado e seguro, onde os jogadores possam curtir o jogo sem exploits ou abusos indesejados.

O software do servidor de Hytale suporta níveis hierárquicos de permissão que determinam quais comandos e ações cada jogador pode executar. Eles podem ser gerenciados via console ao vivo ou através das configurações, dependendo da sua configuração do servidor.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

<InlineVoucher />



## Visão geral dos níveis de permissão

Permissões definem quais ações um jogador pode realizar no servidor. No nível mais básico, jogadores normais têm apenas permissões padrão de gameplay, como se mover, interagir com o mundo e conversar. Níveis de permissão mais altos, como operador ou administrador, concedem acesso a comandos do servidor que afetam o gameplay, outros jogadores, configuração do servidor e ferramentas de moderação.

O sistema de permissões consiste em dois componentes principais:

- **Permissões de usuário**, que se aplicam diretamente a um jogador específico
- **Permissões de grupo**, que permitem agrupar permissões e atribuí-las a vários jogadores de uma vez

Cada jogador é identificado internamente por um UUID, que é necessário para gerenciar permissões via comandos.



## Gerenciando permissões de usuário

Permissões de usuário permitem conceder ou revogar permissões específicas para um único jogador.

### Visualizar permissões de usuário

Para exibir todas as permissões atribuídas diretamente a um usuário. Esse comando mostra todas as permissões atualmente aplicadas ao usuário especificado.

```
/perm user list <uuid>
```



### Adicionar permissões a um usuário

Para conceder uma ou mais permissões diretamente a um usuário. As permissões especificadas serão adicionadas imediatamente e entram em vigor sem precisar reiniciar o servidor.

```
/perm user add <uuid> <permissions>
```



### Remover permissões de um usuário

Para revogar permissões de um usuário. Isso remove apenas as permissões especificadas, deixando as demais inalteradas.

```
/perm user remove <uuid> <permissions>
```



## Gerenciando atribuições de grupo de usuário

Além das permissões diretas, usuários podem herdar permissões através de grupos.

### Visualizar grupos de permissões do usuário

Esse comando mostra a quais grupos de permissão o usuário pertence atualmente.

```
/perm user group list <uuid>
```



### Adicionar um usuário a um grupo

Para atribuir um usuário a um grupo de permissões. Uma vez adicionado, o usuário herda todas as permissões definidas para aquele grupo.

```
/perm user group add <uuid> <group>
```



### Remover um usuário de um grupo

Para remover um usuário de um grupo de permissões. Após a remoção, o usuário não receberá mais permissões daquele grupo.

```
/perm user group remove <uuid> <group>
```



## Gerenciando permissões de grupo

Grupos permitem gerenciar permissões de forma centralizada e reutilizá-las para vários usuários.

### Visualizar permissões de grupo

Para exibir todas as permissões atribuídas a um grupo. Esse comando oferece uma visão geral de todas as permissões associadas ao grupo especificado.

```
/perm group list <group>
```



### Adicionar permissões a um grupo

Para adicionar uma ou mais permissões a um grupo. Todos os usuários atribuídos a esse grupo herdarão imediatamente as novas permissões.

```
/perm group add <group> <permissions>
```



### Remover permissões de um grupo

Remove apenas as permissões especificadas do grupo, sem afetar as demais permissões.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />


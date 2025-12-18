---
id: gameserver-databases-pma
title: 'Servidor de jogos: acesso ao PHPMyAdmin'
description: "Descubra como gerenciar bancos de dados MySQL de forma eficiente com phpMyAdmin nos servidores de jogos da ZAP-Hosting para um controle de banco de dados sem complicações → Saiba mais agora"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Com o phpMyAdmin, bancos de dados MySQL podem ser gerenciados rápida e facilmente via interface web. A ZAP-Hosting oferece bancos de dados MySQL inclusos nos produtos de servidor de jogos. Eles podem ser gerenciados tanto pelo phpMyAdmin quanto por programas externos de administração MySQL como Navicat ou HeidiSQL. Também oferecemos um guia para isso, que você encontra em [Acesso externo ao banco de dados](gameserver-database-external-access.md).

<InlineVoucher />

## Login no phpMyAdmin

Primeiro, vamos para a lista de bancos de dados criados para o servidor de jogos. Para isso, abrimos o item de menu "Databases" na barra lateral esquerda do servidor, na aba "Tools".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Nessa página, todos os bancos de dados desse servidor são listados. O login no phpMyAdmin é bem simples, pois é feito automaticamente pelo nosso sistema. Você só precisa clicar no botão azul "Manage".

:::info
Se o login não funcionar automaticamente, será necessário fazer o login manualmente com as credenciais correspondentes. As informações para isso podem ser encontradas na área marcada em vermelho neste exemplo.
:::


## Ferramentas de Tabela

Inicialmente, só é exibida a página inicial do phpMyAdmin. Para visualizar e editar as tabelas do banco de dados, é preciso abrir o banco de dados:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Agora, todas as tabelas do banco de dados e algumas ferramentas são listadas, com as quais você pode realizar ações específicas, por exemplo, tabelas podem ser excluídas clicando no botão vermelho "Delete".

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Para economizar tempo, ações podem ser feitas em várias tabelas ao mesmo tempo. Para isso, clique uma vez na caixa de seleção na extrema esquerda e repita até selecionar todas as tabelas desejadas. Se quiser aplicar a ação a todas as tabelas do banco, você pode usar o botão "Select All", que seleciona automaticamente todas as tabelas. Depois, escolha a ação desejada no menu suspenso e execute clicando em "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modificar conteúdo da tabela

Valores em uma tabela podem ser editados rápida e facilmente dando um duplo clique no campo desejado. Porém, é preciso garantir que a tabela esteja configurada para permitir edição. Isso pode ser identificado pelos três botões de ação que aparecem nesse caso.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Executar comandos SQL

Com o phpMyAdmin também é possível executar comandos SQL normais. Para isso, primeiro selecione o banco de dados e depois acesse a opção de menu "SQL" no topo da barra de menu.

Ao chegar na linha de comando, você pode digitar todos os comandos SQL desejados, que serão executados ao clicar em "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />
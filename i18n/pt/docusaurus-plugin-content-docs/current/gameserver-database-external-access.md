---
id: gameserver-database-external-access
title: 'Servidor de jogos: Acesso externo ao banco de dados'
description: "Descubra como gerenciar bancos de dados MySQL da ZAP-Hosting para servidores de jogos usando ferramentas como Navicat ou HeidiSQL → Saiba mais agora"
sidebar_label: Acesso externo ao banco de dados
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A ZAP-Hosting oferece bancos de dados MySQL inclusos nos produtos de servidor de jogos. Eles podem ser gerenciados internamente via phpMyAdmin ou externamente por ferramentas de administração MySQL como Navicat ou HeidiSQL.

As credenciais de usuário para acessar o banco de dados são necessárias para isso. Elas podem ser encontradas na administração do servidor de jogos, na seção de bancos de dados. Para isso, você precisa das informações sobre **servidor/IP**, **banco de dados**, **usuário**, **senha** e a porta padrão **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Preparação

Primeiro, precisamos de um software; neste exemplo, mostramos o [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) ou o [HeidiSQL](https://www.heidisql.com/download.php). Depois, o arquivo baixado deve ser executado e o procedimento de instalação seguido. Quando essa etapa estiver concluída, o programa pode ser iniciado e a conexão com o banco de dados configurada.

## HeidiSQL

Para estabelecer a conexão no HeidiSQL, criamos uma nova conexão clicando em "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

No campo Hostname / IP, inserimos o nome do seu banco de dados, no nosso exemplo "mysql-mariadb-5-101.zap-hosting.com". O nome de usuário e a senha também devem ser retirados dos dados, a porta permanece em 3306.

Depois disso, basta clicar em "Open".

## Navicat

Para estabelecer a conexão no Navicat, criamos uma nova conexão. Em **Connection**, selecionamos **MySQL**. Em seguida, uma nova janela pop-up abrirá onde as informações do banco de dados devem ser inseridas.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

O **Connection Name** é usado apenas para a visão geral dos bancos de dados e pode ser escolhido livremente. Todas as outras informações são retiradas da interface conforme descrito acima. Depois, clicamos em **OK** e a configuração está concluída. A conexão pode então ser estabelecida à esquerda na visão geral dos bancos de dados. Para isso, dê um duplo clique no seu banco de dados ou clique com o botão direito e escolha "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Depois disso, o banco de dados abrirá com todas as tabelas existentes. Lá você pode modificar ou gerenciar seu banco de dados de forma semelhante ao phpMyAdmin, tanto clicando quanto usando comandos SQL.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Conclusão

Você estabeleceu com sucesso uma conexão com seu banco de dados e agora pode gerenciá-lo. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂 

<InlineVoucher />
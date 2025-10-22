---
id: webspace-mybb
title: "Hospedagem de sites: Instale o software de fórum MyBB"
description: "Descubra como configurar e lançar seu próprio fórum MyBB para criar uma comunidade online engajada → Saiba mais agora"
sidebar_label: Instalar MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

MyBB, anteriormente MyBulletinBoard, é um software de fórum gratuito e open source desenvolvido pelo MyBB Group. Neste guia explicamos como instalar esse software de fórum no nosso produto de hospedagem de sites.

<InlineVoucher />

## Preparação

Antes de realizar a instalação do MyBB, algumas preparações precisam ser feitas. Isso inclui obter o software do fórum, configurar o banco de dados que será usado e o servidor de e-mail (endereço de e-mail).

**Software**

O software do fórum pode ser baixado no site oficial do MyBB. O download está disponível aqui: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

O download contém um arquivo compactado, que deve ser descompactado no seu computador local. Dentro dele você encontrará uma pasta chamada **Upload**. O conteúdo dela é necessário e deve ser enviado via **FTP ou Gerenciador de Arquivos**. Em **Sites & Domínios** na seção **Acesso FTP** você pode criar um usuário FTP.

Após abrir o gerenciador de arquivos no painel Plesk, navegue até o diretório **httpdocs** e envie os arquivos do software do fórum.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Banco de dados**

Em seguida, o banco de dados deve ser criado, que será usado para armazenar todas as informações do fórum. Para isso, clique novamente em **Sites & Domínios** e depois em **Bancos de Dados**. Clique em Adicionar Banco de Dados e crie um banco de dados:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Clique em **OK** e o banco de dados será criado.

**Servidor de e-mail (endereço de e-mail)**

Para registrar uma conta no fórum, é necessário um servidor de e-mail com um endereço de e-mail, para que as mensagens de registro possam ser enviadas aos usuários. Instruções para configurar esse endereço de e-mail podem ser encontradas aqui: [Enviando E-mails](webspace-plesk-sendmail.md)

## Instalação

Se todos os passos da preparação foram cumpridos, a instalação do MyBB pode começar. Para isso, o site deve ser acessado no navegador. A tela deve ser parecida com esta:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Aqui, precisamos configurar as 9 categorias durante a instalação. A configuração verifica se todos os pré-requisitos estão atendidos, configura o banco de dados e o software do fórum, entre outras coisas. Primeiro, devemos decidir se estatísticas anônimas serão enviadas para o MyBB ou não. Depois, é preciso aceitar os termos da licença.

Uma visão geral dos pré-requisitos do sistema será exibida. Isso inclui versão do PHP, memória, etc. A hospedagem de sites já deve estar configurada para atender a todos esses pré-requisitos por padrão.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Se algum pré-requisito não for atendido, entre em contato com o suporte. Caso contrário, clique em **Próximo** para continuar a instalação. Agora precisamos configurar o banco de dados, que já foi criado anteriormente. As informações do banco de dados criado devem ser preenchidas aqui:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

O banco de dados será configurado em seguida. Isso pode levar um momento. Depois disso, os dados e temas padrão serão implementados. Basta clicar em **Próximo**.

Depois, chegamos à configuração geral. Aqui você pode definir o nome do site, fórum, URL e mais:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Por fim, uma conta de administrador geral deve ser criada antes que a instalação possa ser concluída.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Se tudo foi feito e configurado com sucesso, você verá a seguinte mensagem e poderá acessar seu fórum:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />
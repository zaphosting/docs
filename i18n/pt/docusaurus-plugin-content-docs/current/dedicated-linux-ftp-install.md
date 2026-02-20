---
id: dedicated-linux-ftp-install
title: "Configure o ProFTPD em um Servidor Linux - Hospede um Serviço FTP Seguro"
description: "Descubra como configurar e gerenciar um servidor FTP seguro no Linux com o FileZilla Server para facilitar transferências de arquivos e acesso de usuários → Saiba mais agora"
sidebar_label: Instalar servidor FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **FTP (File Transfer Protocol)** é um protocolo de rede usado para transferir arquivos através de uma rede TCP/IP. O protocolo foi desenvolvido para permitir a troca fácil de arquivos entre sistemas. Com o **FileZilla Server** é possível configurar um servidor FTP assim em um sistema operacional Linux. O FileZilla Server é fácil de instalar e configurar, e oferece vários recursos como a possibilidade de criar contas de usuário, gerenciar direitos de acesso e transferir arquivos. Neste guia, vamos explorar o processo de instalação e configuração do serviço **FileZilla Server** em um servidor Linux.

## Como eu instalo o servidor FTP para adicionar um usuário?

Para adicionar um usuário FTP, primeiro você precisa instalar o servidor FTP. Para isso, conecte-se ao servidor uma vez via SSH (Putty).

Para instalar o servidor FTP agora, digite o seguinte comando **apt-get install proftpd**. Você deve confirmar a solicitação com um **Y** e pressionar Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Agora ainda precisamos ajustar a configuração. Para isso, digite o comando **nano /etc/proftpd/proftpd.conf** e confirme. Depois disso, o arquivo de configuração será aberto no editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Os seguintes parâmetros devem ser adicionados:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Agora o servidor FTP precisa ser reiniciado para que as alterações sejam aplicadas. Isso pode ser feito com o comando: **service proftpd restart**

## Como eu adiciono um usuário FTP?

Para criar um novo usuário FTP, primeiro precisamos criar um grupo FTP. Fazemos isso com o comando **addgroup ftpuser**. Vai ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Agora podemos adicionar nosso primeiro usuário FTP com os comandos: **adduser benutzerftp -shell /bin/false -home /var/www** e depois **adduser benutzerftp ftpuser**.

Agora será solicitado que você defina uma senha:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Depois precisamos confirmar que as informações estão corretas:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

O último passo é atribuir o novo usuário ao grupo via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Agora podemos conectar com as informações que configuramos:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)
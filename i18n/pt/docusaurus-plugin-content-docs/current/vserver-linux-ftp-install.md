---
id: vserver-linux-ftp-install
title: "VPS: Instalação de um servidor FTP"
description: "Descubra como configurar e gerenciar um servidor FTP seguro no Linux com FileZilla Server para transferir arquivos de forma eficiente → Saiba mais agora"
sidebar_label: Instalar servidor FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **FTP (File Transfer Protocol)** é um protocolo de rede usado para transferir arquivos através de uma rede TCP/IP. O protocolo foi desenvolvido para permitir a troca fácil de arquivos entre sistemas. Com o **FileZilla Server** é possível configurar um servidor FTP assim em um sistema operacional Linux. O FileZilla Server é fácil de instalar e configurar, e oferece vários recursos, como a possibilidade de criar contas de usuário, gerenciar direitos de acesso e transferir arquivos. Neste guia, vamos explorar o processo de instalação e configuração do serviço **FileZilla Server** em um servidor Linux.

<InlineVoucher />

## Instalação

Para adicionar um usuário FTP, primeiro você precisa instalar o servidor FTP. Para isso, conecte-se ao servidor uma vez via SSH (Putty).

Para instalar o servidor FTP agora, digite o seguinte comando **apt-get install proftpd**. Você deve confirmar a solicitação com um **Y** e pressionar Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Agora ainda precisamos ajustar a configuração. Para isso, digite o seguinte comando **nano /etc/proftpd/proftpd.conf** e confirme. Em seguida, o arquivo de configuração será aberto no editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

As seguintes entradas devem ser adicionadas:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Agora o servidor FTP precisa ser reiniciado para que as alterações sejam aplicadas. Isso pode ser feito com o comando: **service proftpd restart**

## Adicionar usuários

Para criar um novo usuário FTP, primeiro precisamos criar um grupo FTP. Fazemos isso com o comando **addgroup ftpuser**. Vai ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Agora podemos adicionar nosso primeiro usuário FTP com os comandos: **adduser benutzerftp -shell /bin/false -home /var/www** e depois **adduser benutzerftp ftpuser**.

Agora será solicitado que você defina uma senha:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Depois precisamos confirmar que as informações estão corretas:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

O último passo é atribuir o novo usuário ao grupo via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Agora podemos conectar com as informações que configuramos:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)

## Conclusão

Parabéns, você instalou e configurou o FTP com sucesso! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
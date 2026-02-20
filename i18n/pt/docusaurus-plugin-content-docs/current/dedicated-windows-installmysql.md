---
id: dedicated-windows-installmysql
title: "Configurar MySQL em um Servidor Windows - Implante e Gerencie Bancos de Dados Confiáveis"
description: "Aprenda a configurar e proteger seu próprio servidor de banco de dados MySQL em um Servidor Dedicado Windows para um gerenciamento de dados confiável → Saiba mais agora"
sidebar_label: Instalar MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Um servidor MySQL é necessário para várias aplicações e pode conter dados importantes, por exemplo, para um servidor de jogos ou um site. A seguir, explicamos como configurar seu próprio servidor de banco de dados MySQL no seu Servidor Dedicado Windows.

## Instalação

No começo, conecte-se via conexão de área de trabalho remota ao seu servidor e baixe a versão mais recente do MariaDB, que é usado para o servidor de banco de dados: [Download do MariaDB](https://mariadb.org/download/?t=mariadb).

Descompacte o arquivo baixado com WinRAR ou 7Zip e inicie o arquivo de instalação com um duplo clique:

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Depois, navegue pelo processo de instalação clicando em **Next** até que seja solicitado que você digite a senha root:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Lá você pode definir a senha mestre para o acesso ao seu servidor de banco de dados. Por favor, certifique-se de usar uma senha segura que ninguém mais conheça!

:::info
IMPORTANTE! Se você quiser acessar o banco de dados externamente via Navicat, HeidiSQL ou qualquer outra ferramenta, você deve ativar a opção **Enable access from remote machines for root user**! Por questões de segurança, isso geralmente não é recomendado.
:::

Depois, clique em **Next** até chegar ao final da instalação, onde você deve clicar em **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Seu servidor de banco de dados agora está online e pronto para uso!

## Configuração do acesso externo

Se você ativou "Enable access from remote machines for root user" durante a instalação, também deve liberar a porta MySQL **3306** no firewall do Windows. Para isso, abra o firewall e crie uma nova regra.

Você pode encontrar o guia de como liberar portas no firewall aqui:
[Redirecionamento de Portas (Firewall)](vserver-windows-port.md)

Agora você pode acessar seu servidor MySQL externamente!

## Conclusão

Parabéns, você instalou com sucesso o servidor MySQL. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂
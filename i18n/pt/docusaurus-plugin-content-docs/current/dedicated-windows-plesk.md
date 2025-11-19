---
id: dedicated-windows-plesk
title: "Servidor Dedicado: Instalação do Plesk"
description: "Descubra como gerenciar sites e servidores de forma eficiente com o Plesk, para iniciantes e experts → Saiba mais agora"
sidebar_label: Instalar Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Plesk é uma plataforma completa de hospedagem de sites e gerenciamento de servidores que permite aos usuários administrar sites, servidores, contas de e-mail e muito mais através de uma interface super amigável. É uma solução versátil, ideal tanto para iniciantes quanto para desenvolvedores web e administradores de sistema experientes.

## Estabeleça uma conexão com o servidor

Para instalar o Plesk no servidor, primeiro você precisa se conectar a ele. Como fazer isso está explicado em detalhes no nosso guia separado: [Acesso Inicial (RDP)](vserver-windows-userdp.md)

## Instalador do Plesk

Agora você precisa do Instalador do Plesk, que é necessário para a instalação. Você pode baixá-lo clicando em [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Esse instalador deve ser salvo em uma pasta; no nosso exemplo, usamos uma pasta chamada "Plesk" criada na área de trabalho. O caminho para esse arquivo será importante para os próximos passos.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Abra o Prompt de Comando

Agora é preciso abrir o console CMD para a instalação. Você pode fazer isso com a combinação de teclas [Windows] + [R] ou buscando por "command" no menu do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Instalação do Plesk

No console CMD, navegue até o diretório onde o instalador do Plesk foi salvo. No nosso exemplo, é a pasta "Plesk" na "Área de Trabalho".

Use o comando "*cd*" para acessar essa pasta no CMD.

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Já na pasta correta, o próximo passo é executar o comando do instalador. Isso vai rodar o plesk-installer.exe e instalar automaticamente a versão mais recente do Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
O processo de instalação pode levar de 30 a 60 minutos. Depois disso, o Plesk estará instalado e pronto para uso.
:::

## Conclusão

Parabéns, você instalou o Plesk com sucesso! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂
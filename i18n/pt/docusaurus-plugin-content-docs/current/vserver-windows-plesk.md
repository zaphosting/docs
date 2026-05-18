---
id: vserver-windows-plesk
title: "Configure o Plesk em um Servidor Windows - Gerencie Sites com um Painel de Controle Poderoso"
description: "Descubra como gerenciar sites e servidores de forma eficiente com a plataforma versátil do Plesk, ideal para iniciantes e experts → Saiba mais agora"
sidebar_label: Instalar Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Plesk é uma plataforma completa de hospedagem de sites e gerenciamento de servidores que permite aos usuários administrar sites, servidores, contas de e-mail e muito mais através de uma interface fácil de usar. É uma solução versátil, perfeita tanto para iniciantes quanto para desenvolvedores web e administradores de sistemas experientes.  
<InlineVoucher />


## Estabeleça uma conexão com o servidor

Para instalar o Plesk no servidor, você precisa primeiro se conectar a ele. Como fazer isso está explicado em detalhes no nosso guia separado: [Acesso Inicial (RDP)](vserver-windows-userdp.md)

## Instalador do Plesk

Agora você precisa do Instalador do Plesk, que é necessário para a instalação do Plesk. Ele pode ser baixado clicando em [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Esse instalador deve ser salvo em uma pasta; no nosso exemplo, usamos uma pasta "Plesk" criada na área de trabalho. O caminho para esse arquivo será importante para os próximos passos.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Abra o Prompt de Comando

Agora é preciso abrir o console CMD para a instalação.  
Isso pode ser feito com a combinação de teclas [Windows] + [R] ou buscando por "command" no menu do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Instalação do Plesk

No console CMD, navegue até o diretório onde o instalador do Plesk foi salvo. No nosso exemplo, foi a pasta "Plesk" na "Área de Trabalho".

Esse diretório é acessado no CMD com o comando "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Já no diretório correto, o último passo é executar o comando do instalador. Isso vai rodar o plesk-installer.exe e instalar automaticamente a versão mais recente do Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
O processo de instalação pode levar de 30 a 60 minutos. Após isso, o Plesk estará instalado e pronto para uso.
:::


## Conclusão

Parabéns, você instalou e configurou com sucesso o Plesk no seu VPS/servidor dedicado! Se tiver qualquer dúvida ou problema, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
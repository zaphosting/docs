---
id: dedicated-linux-cockpit
title: "Servidor Dedicado: Instalação do Cockpit"
description: "Descubra como gerenciar servidores Linux de forma eficiente com a interface web do Cockpit para monitoramento e administração → Saiba mais agora"
sidebar_label: Instalar Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Cockpit é uma interface web para gerenciar um ou mais servidores Linux (cluster). Desde simples saídas de logs até o gerenciamento de RAID, o Cockpit oferece muitos recursos.  
O Cockpit é ideal tanto para iniciantes quanto para usuários avançados que querem ver/gerenciar tudo que é importante em pouco tempo. Além disso, pode ser acessado de quase qualquer dispositivo.  
O site do projeto pode ser acessado em https://cockpit-project.org/. 

:::info
Este guia explica a instalação para Debian (a partir do Buster) / para Ubuntu (a partir do Bionic Beaver). A instalação também está disponível na página do projeto para Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux e Tumbleweed.   
:::

## Instalação

Primeiro, o servidor deve ser atualizado:
```
// Atualizar
sudo apt update; sudo apt upgrade -y
```
Depois, a instalação pode ser feita: 
```
// Instalação do Cockpit
sudo apt install cockpit -y
```
Quando a instalação estiver concluída, o painel do Cockpit pode ser acessado via IP:9090.  
O login é feito com os dados normais de login do servidor/usuário. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)
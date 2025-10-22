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

Cockpit é uma interface web para gerenciar um ou mais servidores Linux (cluster). Desde simples logs até o gerenciamento de RAID, o Cockpit oferece várias funcionalidades.  
O Cockpit é ideal tanto para iniciantes quanto para usuários avançados que querem visualizar/gerenciar tudo que é importante rapidamente. Além disso, pode ser acessado de quase qualquer dispositivo.  
O site oficial do projeto está disponível em https://cockpit-project.org/. 

:::info
Este guia explica a instalação para Debian (a partir do Buster) / Ubuntu (a partir do Bionic Beaver). A instalação também está disponível na página do projeto para Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux e Tumbleweed.   
:::

<InlineVoucher />

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
Após a instalação, o painel do Cockpit pode ser acessado via IP:9090.  
O login é feito com os dados normais de login do servidor/usuário. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)

<InlineVoucher />
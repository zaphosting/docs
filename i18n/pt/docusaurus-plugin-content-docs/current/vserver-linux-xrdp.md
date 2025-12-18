---
id: vserver-linux-xrdp
title: "VPS: Instalação do xRDP (Área de Trabalho Remota)"
description: "Descubra como configurar o acesso remoto à área de trabalho em servidores Ubuntu e Debian para facilitar o gerenciamento e controle → Saiba mais agora"
sidebar_label: Instalar xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No Linux, geralmente existe um console SSH padrão para gerenciar o servidor. Em alguns casos, pode ser mais fácil usar uma conexão de área de trabalho remota, semelhante ao Windows.  
Uma pós-instalação é possível para a maioria das distribuições Linux. Neste guia, isso é explicado para Ubuntu e Debian.  
<InlineVoucher />

:::info
Importante: Deve ser usado pelo menos o Ubuntu 18.04.X LTS (Bionic Beaver) ou Debian 10 (Buster) como sistema operacional. Versões mais recentes são recomendadas. 
:::

## Instalando o xRDP

Primeiro, o servidor deve ser atualizado: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Após a atualização, os pacotes necessários serão instalados: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Depois, o xRDP pode ser instalado: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Após a instalação, o status deve retornar "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Se o status estiver ok, ainda é necessário criar um usuário. Depois, o serviço xRDP precisa ser reiniciado: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Ao finalizar a configuração, você pode se conectar ao root ou aos dados do usuário respectivo do servidor via Área de Trabalho Remota.  
A porta padrão é: 3389

## Conexão

A conexão pode ser feita via qualquer ferramenta RDP, conectando com IP:PORTA.  
Ao conectar, será solicitado o login: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Após o login bem-sucedido, você verá a área de trabalho.  
No Ubuntu, a aparência é um pouco diferente do Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Conclusão

Parabéns, você instalou o XRDP com sucesso! Se tiver mais dúvidas ou problemas, entre em contato com nossa equipe de suporte, que está disponível para te ajudar todos os dias! 

<InlineVoucher />
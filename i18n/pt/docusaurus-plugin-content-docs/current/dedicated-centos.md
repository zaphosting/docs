---
id: dedicated-centos
title: "Servidor Dedicado: Instalação do CentOS"
description: "Descubra como instalar e configurar o CentOS no seu servidor dedicado para desempenho e segurança ideais → Saiba mais agora"
sidebar_label: Instalar CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional CentOS no seu servidor dedicado. Siga essas instruções com atenção para garantir que o sistema operacional seja configurado com sucesso e usado da melhor forma.

:::info

A estrutura deste guia é baseada no uso do sistema operacional CentOS 8.3. Instalações de versões anteriores ou mais recentes podem ter pequenas diferenças no processo.

:::



## Preparação

Para a instalação e configuração de um sistema operacional, é importante inicialmente montar o ISO correspondente do sistema. Existem várias formas possíveis de montar:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Próprio](dedicated-iso.md).



## Instalação

Quando o ISO estiver carregado com sucesso, o servidor entrará no processo de instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Teclado  
Escolha o layout de teclado que preferir

* Data & Hora  
Escolha seu fuso horário

* Senha do Root  
Defina uma senha para a conta root. Pode ser qualquer uma, mas lembre-se de usar uma senha forte e guardá-la em um lugar seguro.

* Destino da Instalação  
Selecione o SSD onde o CentOS será instalado

* Rede & Nome do Host  
Como há um problema de incompatibilidade, a rede ainda não pôde ser configurada, faremos isso no final.

Depois de configurar tudo do seu jeito, clique em 'Begin Installation'.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Após a instalação ser concluída, remova o arquivo ISO do seu servidor e clique em 'Reboot System'.



## Configuração

### Rede

Agora, vamos configurar o dispositivo de rede, o que exige atualizar alguns arquivos. Por favor, monte este arquivo ISO no seu servidor, via console remoto ou pelo próprio iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Depois que o arquivo ISO for montado com sucesso, precisamos montá-lo no sistema para ter acesso.

```mount /dev/sr0 /mnt```

O arquivo ISO agora está montado em `/mnt`

```rpm -i /mnt/be2net.rpm```

Em seguida, instale o pacote de atualização.

```modprobe be2net```

Nesta etapa, vamos rodar a atualização, isso pode levar alguns segundos.  
Você pode verificar com `ip a s` se existe um dispositivo de rede chamado `eno1`. Se sim, por favor reinicie o sistema.

Após o reboot, prossiga para configurar o dispositivo de rede.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Preencha o arquivo com os seguintes dados:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Para sair do nano, pressione `CTRL+X` e depois `Y`

Agora precisamos ativar o dispositivo de rede com `ifup eno1` 

:::info
Seu servidor dedicado deve estar com a conexão de internet funcionando agora.
:::





## Conclusão

Parabéns, você instalou com sucesso o sistema operacional CentOS no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂



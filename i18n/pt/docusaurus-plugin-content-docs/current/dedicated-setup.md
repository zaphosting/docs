---
id: dedicated-setup
title: "Servidor Dedicado: Configuração inicial"
description: "Descubra como configurar seu Servidor Dedicado ZAP com facilidade e acesse uma variedade de sistemas operacionais → Saiba mais agora"
sidebar_label: Configuração inicial
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você ainda é novo nessa área e está preocupado que talvez não consiga lidar com a configuração desse serviço ou que possa encontrar dificuldades ao fazer isso? Relaxa! Este guia e nosso assistente de configuração vão te acompanhar em todos os passos para a configuração inicial do seu Servidor Dedicado ZAP.

## Preparação

### Ativando o iLO
Para a configuração inicial, a interface de administração iLO precisa ser ativada primeiro. Esse processo pode levar um tempinho. Para mais informações e uso avançado da interface de administração iLO, recomendamos dar uma olhada no guia [iLO](dedicated-ilo.md).

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Assim que o iLO estiver ativado, o status do iLO deve aparecer como **Ativo**. A sessão do iLO é ativada por padrão por três horas e precisa ser reativada depois, caso queira acessar novamente. Agora você pode continuar com a seleção do ISO.

### Selecionando o ISO

O próximo passo é escolher um ISO para montar na configuração inicial. Para isso, clique no menu suspenso, selecione um arquivo ISO e clique no botão **Inserir**.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Oferecemos uma ampla variedade de arquivos ISO para os sistemas operacionais mais comuns, como Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux e Proxmox por padrão. Na tabela abaixo você encontra uma visão geral de todos os sistemas operacionais disponíveis e suas versões.

| ISO (Sistema Operacional) | Versões                                               |
| ------------------------- | ----------------------------------------------------- |
| Debian                   | 12, 11, 10.9, 9.13                                    |
| Ubuntu                   | 22.04.3, 22.04, 22.02, 18.04                          |
| FreeBSD                  | 13.0, 12.2, 11.4                                      |
| Windows                  | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE)|
| CentOS                   | 7.9, 8.3                                              |
| ArchLinux                | 2023                                                  |
| Proxmox                  | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1              |

Também é possível adicionar e montar seu próprio ISO personalizado. Para mais informações sobre como montar seu próprio arquivo ISO, recomendamos conferir o guia **[ISO Próprio](dedicated-iso.md)**.

## Instalação

### Montando e inicializando o ISO

Depois que o arquivo ISO for selecionado e inserido com sucesso, o sistema precisa ser reiniciado uma vez para aceitar a mudança e iniciar o boot usando o arquivo ISO. Para isso, basta clicar no botão **Reiniciar**. A reinicialização pode levar um tempinho para ser concluída.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Usando o iLO para instalar o sistema operacional

Agora a base para instalar o sistema operacional desejado está pronta. O sistema montou o ISO e iniciou a configuração. Abra a **interface de administração iLO** do seu servidor e clique diretamente em "Integrated Remote Console: **HTML 5**" para acessar a tela do seu servidor. Mais informações sobre como gerenciar o console na interface iLO você encontra no nosso guia [iLO](dedicated-ilo.md).

A instalação do sistema operacional será feita na console HTML. Também oferecemos guias para os sistemas operacionais mais comuns. Para saber mais sobre os próximos passos, confira os guias específicos:

- [Instalar Windows](dedicated-windows.md)
- [Instalar Debian](dedicated-linux-debian.md)
- [Instalar Ubuntu](dedicated-linux-ubuntu.md)
- [Instalar FreeBSD](dedicated-freebsd.md)
- [Instalar CentOS](dedicated-centos.md)
- [Instalar Proxmox](dedicated-proxmox.md)
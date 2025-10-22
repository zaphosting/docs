---
id: vserver-linux-ssh
title: "VPS: Acesso inicial com SSH"
description: "Explore clientes SSH populares para gerenciar servidores Linux via console e entenda como conectar com segurança usando Putty → Saiba mais agora"
sidebar_label: Acesso inicial (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Produtos de servidor Linux não incluem uma interface gráfica de gerenciamento por padrão, por isso a conexão e o gerenciamento são feitos via cliente SSH (console). Existe uma grande variedade de clientes SSH disponíveis. Abaixo está uma visão geral dos clientes SSH conhecidos / mais usados.

| Cliente SSH | Sistemas operacionais suportados | Código aberto |                           Download                           |
| :---------: | :------------------------------: | :-----------: | :----------------------------------------------------------: |
|    Putty    |        Windows, Linux             |      Sim      |               [Clique](https://www.putty.org/)               |
|    Kitty    |        Windows, Linux             |      Sim      |        [Clique](http://www.9bis.net/kitty/)                  |
|  MobaXterm  |        Windows, Linux             |      Sim      |           [Clique](https://mobaxterm.mobatek.net/)           |
|  SecureCRT  |     Windows, Linux, Mac           |      Não     | [Clique](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
|  mRemoteNG  |           Windows                 |      Sim      |           [Clique](https://mremoteng.org/download)           |


<InlineVoucher />

## Endereço IP & acesso

A seguir, é explicado como conectar usando o cliente SSH Putty. Na janela de configuração, o endereço IP do servidor e a porta SSH 22 são inseridos no campo **nome do host**. Depois, a conexão pode ser iniciada clicando no botão **Open**.

![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)

:::info
O login SSH via senha está desativado por padrão. Se quiser fazer login com senha, você precisa ativar essa opção primeiro em **Acesso & Segurança**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)

:::info
Ao conectar ao servidor pela primeira vez, uma mensagem de segurança do Putty aparece, informando que nenhuma chave do host foi armazenada no registro ainda. Você pode confirmar com **Yes** para não receber essa mensagem toda vez.
:::

Isso abre o console SSH e pede um **nome de usuário** e **senha**. O nome de usuário é "**root**". A senha pode ser encontrada na interface web em "**Acesso & Segurança**" ou pode ser configurada lá.

![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)

## Administração via SSH

Para usar o cliente SSH de forma ideal, é essencial conhecer os comandos básicos. A seguir, você encontra uma visão geral com todos os comandos relevantes e seus significados:

### Gerenciamento de contas

| Comando  |                Descrição                |            Sintaxe            |
| :------: | :-----------------------------------: | :---------------------------: |
| useradd  |          Criar um novo usuário         | useradd [opções] [usuário]    |
| usermod  |      Editar usuário existente          | usermod [opções] [usuário]    |
| userdel  |        Remover usuário existente       | userdel [opções] [usuário]    |
| passwd   | Alterar senha de um usuário existente  | passwd [opções]               |

### Gerenciamento do sistema

| Comando |                         Descrição                         | Sintaxe                                       |
| :-----: | :-------------------------------------------------------: | --------------------------------------------- |
|   top   | Visão geral da carga, processos e outras informações (semelhante ao Gerenciador de Tarefas do Windows) | top                                           |
|   df    |            Exibir uso dos discos (partições)             | df -h                                         |
|   du    |          Exibir consumo de disco (diretório)              | du -sh *                                      |
|  free   | Uso de memória do sistema, dividido em RAM e espaço SWAP  | free                                          |
|  kill   |  Encerra o processo com o ID de processo (PID) informado | kill [ID]                                     |
| killall |        Encerra todos os processos com o nome informado    | killall [nome]                                |
|   mv    |       Mover arquivos ou diretórios para outro local       | mv caminhoOrigem caminhoDestino                |
|  mkdir  |                    Criar um novo diretório                | mkdir nomeDoDiretório                          |
| service |    Iniciar, parar, reiniciar serviço e checar status      | service nomeDoServico start/stop/restart/status |
| reboot  |                      Reiniciar o sistema                   | reboot                                        |

### Gerenciamento de arquivos

| Comando | Descrição                         | Sintaxe                                   |
| ------- | -------------------------------- | ---------------------------------------- |
| ls      | Mostrar arquivos e pastas no diretório | ls                                       |
| cd      | Mudar de diretório               | cd [OPÇÃO] DIRETÓRIO                     |
| cp      | Copiar arquivos ou diretórios   | cp [OPÇÕES] ORIGEM DESTINO               |
| mv      | Mover arquivo ou diretório      | mv [OPÇÃO] ORIGEM DESTINO                 |
| mkdir   | Criar novo diretório            | mkdir [OPÇÃO] NOME_DO_DIRETÓRIO          |
| rmdir   | Remover diretório existente     | rmdir [OPÇÃO] DIRETÓRIO                   |
| find    | Navegar pelo sistema de arquivos | find [OPÇÕES] [DIRETÓRIO] [AÇÕES]        |
| grep    | Buscar em arquivos de texto     | grep [OPÇÕES] PADRÃO_DE_BUSCA [ARQUIVO(S)] |

### Administração de rede

| Comando  | Descrição                         | Sintaxe                                   |
| -------- | -------------------------------- | ---------------------------------------- |
| ip       | Consultar e configurar interfaces de rede | ip [OPÇÕES] OBJETO [COMANDO [ARGUMENTOS]] |
| netstat  | Consultar status das interfaces de rede | netstat [OPÇÕES]                          |
| nslookup | Consultar informações DNS         | nslookup                                 |
| ping     | Testar conexão de rede            | ping [OPÇÕES] DESTINO                     |

<InlineVoucher />
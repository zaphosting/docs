---
id: csgo-gotv
title: "CSGO: Informações sobre GOTV"
description: "Descubra como o GOTV permite transmissões ao vivo e gravações de replay para uma experiência de espectador melhorada em CS:GO e jogos similares → Saiba mais agora"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Foi arquivado pelos seguintes motivos:

Motivo: CS:GO não é mais oferecido ativamente e não está mais em desenvolvimento. CS2 é a sequência do CS:GO. Recomendamos a migração para CS2.
::::



## O que é GOTV?


O GOTV oferece a possibilidade de transmitir jogos ao vivo com um pequeno atraso. Isso significa que pessoas que não estão participando do jogo podem acompanhar o que está acontecendo no servidor. Essa tecnologia também é usada nos famosos torneios de Counter-Strike para que os espectadores possam assistir ao espetáculo. Além disso, as transmissões podem ser salvas automaticamente, para que você possa assisti-las novamente depois.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Como usar o GOTV?

Se a função estiver ativada no servidor, o acesso é possível via o endereço IP e a porta GOTV atribuída no servidor. Para conectar, você precisa do console dentro do jogo. Lá, você pode se conectar com o seguinte comando:

```
connect SERVERIP:27020
```


Demos gravadas manual e automaticamente são armazenadas no diretório principal (gxxxxx / csgo / csgo /) do servidor de jogos CS:GO. Elas podem ser baixadas via o acesso FTP fornecido. Se você ainda não sabe como acessar via FTP, encontrará instruções aqui: [Acesso via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Com a reprodução de demo dentro do jogo, a demo baixada pode ser selecionada via **Load** e iniciada pelo botão **Play**.



## Instalação do GOTV Master Server

Para ativar o GOTV master server, comandos faltantes precisam ser adicionados no **server.cfg**. São os seguintes comandos:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Os comandos acima são obrigatórios para que o GOTV master server seja ativado e acessível. Porém, existem outros comandos para configurações avançadas abaixo:

|            Comando            |                         Descrição                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Espectadores podem assumir como cameraman        |
| tv_allow_static_shots "0\|1" |    Usa câmeras de orientação fixa para filmagem    |
|     tv_autorecord "0\|1"     | Grava automaticamente todas as partidas como demos GOTV. Todas as partidas são gravadas automaticamente, o formato do arquivo demo é auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Tenta reconectar após um timeout de rede |
| tv_chattimelimit "segundos"  | Restringe os espectadores a escrever apenas a cada x segundos |
|       tv_debug "0\|1"        |             Exibe informações de debug do GOTV             |
|   tv_delaymapchange "0\|1"   | Atrasa a troca de mapa até que a transmissão esteja completa |
|      tv_maxclients "n"       |          Número máximo de clientes no servidor GOTV           |
|        tv_maxrate "n"        | Taxa máxima permitida de largura de banda para espectadores GOTV, 0 == ilimitado |
|        tv_msg "texto"         |           Envia uma mensagem para todos os espectadores           |
|        tv_name "nome"        | Nome do host GOTV. Define o nome do GOTV como aparece no navegador de servidores e na barra de status |
|       tv_nochat "0\|1"       |           Ativa/Desativa o chat do GOTV           |
|    tv_password "senha"    |       Protege a transmissão GOTV com uma senha        |
|     tv_record "nome_arquivo"     |             Inicia a gravação de uma demo GOTV             |
|           tv_stop            |                 Para a transmissão GOTV                  |
|        tv_stoprecord         |            Para a gravação de uma demo GOTV              |
|           tv_title           |           Define o nome da transmissão GOTV           |

<InlineVoucher />
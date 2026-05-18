---
id: csgo-gotv
title: "CS:GO: GOTV"
description: "Descubra como transmitir jogos ao vivo com atraso e gravação automática para espectadores e reviva partidas a qualquer momento → Saiba mais agora"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução


O GOTV oferece a possibilidade de transmitir jogos ao vivo com um pequeno atraso. Isso significa que pessoas de fora, que não estão participando do jogo, também podem acompanhar o que está acontecendo no servidor. Essa tecnologia é usada nos famosos torneios de Counter-Strike para que os espectadores possam assistir ao espetáculo. Além disso, as transmissões podem ser salvas automaticamente, para que você possa assisti-las novamente depois.

<InlineVoucher />



## Ativação

A ativação do serviço GOTV é feita via o arquivo de configuração **server.cfg**. Os comandos necessários precisam ser adicionados lá: 

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



## Configuração

Os comandos acima são obrigatórios para que o servidor master GOTV seja ativado e acessível. Porém, existem outros comandos para configurações avançadas abaixo:

|            Comando            |                         Descrição                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Espectadores podem assumir como cinegrafista        |
| tv_allow_static_shots "0\|1" |    Usa câmeras com orientação fixa para filmagem    |
|     tv_autorecord "0\|1"     | Grava automaticamente todas as partidas como demos GOTV. Todas as partidas são gravadas automaticamente, o formato do arquivo demo é auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Tenta reconectar após um timeout de rede |
| tv_chattimelimit "segundos"  | Restringe os espectadores a escrever apenas a cada x segundos |
|       tv_debug "0\|1"        |             Exibe informações de debug do GOTV             |
|   tv_delaymapchange "0\|1"   | Atrasa a troca de mapa até que a transmissão esteja completa |
|      tv_maxclients "n"       |          Número máximo de clientes no servidor GOTV          |
|        tv_maxrate "n"        | Largura de banda máxima permitida para espectadores GOTV, 0 == ilimitado |
|        tv_msg "texto"         |           Envia uma mensagem para todos os espectadores           |
|        tv_name "nome"        | Nome do host GOTV. Define o nome do GOTV como aparece no navegador de servidores e na barra de status |
|       tv_nochat "0\|1"       |           Ativa/Desativa o chat do GOTV           |
|    tv_password "senha"    |       Protege a transmissão GOTV com uma senha       |
|     tv_record "nome_arquivo"     |             Inicia a gravação de uma demo GOTV             |
|           tv_stop            |                 Para a transmissão GOTV                 |
|        tv_stoprecord         |            Para a gravação de uma demo GOTV             |
|           tv_title           |           Define o nome da transmissão GOTV           |



## Estabelecendo a conexão

Se a função estiver ativada no servidor, o acesso é possível via o endereço IP e a porta GOTV atribuída a ele no servidor. Para conectar, você precisa do console no jogo. Lá você pode se conectar com o seguinte comando:

```
connect SERVERIP:27020
```


Demos gravadas manual e automaticamente são armazenadas no diretório principal /gxxxxx/CS:GO/game/csgo) do servidor CS:GO. Elas podem ser baixadas via o acesso FTP fornecido. Se você ainda não sabe como acessar via FTP, encontrará instruções de como fazer isso aqui: [Acesso via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)



Na reprodução da demo pelo jogo, a demo baixada pode ser selecionada via **Load** e iniciada pelo botão **Play**.

<InlineVoucher />
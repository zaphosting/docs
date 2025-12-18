---
id: source-metamod-installation
title: Instale Source Mod e Meta Mod no servidor
description: "Descubra como turbinar seu servidor de jogos Source engine com Source- e Metamod para personalização avançada e administração → Saiba mais agora"
sidebar_label: Instalação
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que são SM e MM afinal?

Source- e Metamod são duas extensões do Half Life 2 que permitem personalizar ainda mais um servidor de jogos Source engine (ex: CS: S, CS: GO, DoD: S, TF2, etc.). Isso inclui, por exemplo, o uso de plugins e uma administração estendida do seu servidor.

<InlineVoucher />

## Instalação do SM / MM

### Baixe os arquivos

Primeiro, você precisa das extensões propriamente ditas. É importante sempre usar as versões mais recentes (**estáveis**) para garantir que continuem totalmente funcionais e compatíveis. As versões mais recentes podem ser baixadas nos sites abaixo:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Servidores de jogos Source engine na ZAP-Hosting geralmente rodam em sistema operacional Linux. Por isso, você precisa da versão Linux das extensões.
:::

### Descompacte os arquivos

Ao baixar as duas extensões, você receberá dois arquivos compactados (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) que precisam ser descompactados antes do upload. Você pode usar Winrar, 7zip ou programas similares para isso.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Após extrair, você terá as pastas addons e cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Faça o upload dos arquivos

Com os passos acima prontos, começa a instalação de verdade. Para isso, conecte-se ao servidor via FTP para enviar as pastas das extensões.

Os arquivos devem ser enviados para o diretório principal. O diretório principal fica na seguinte estrutura de pastas:

| Jogo | Pasta  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

A estrutura de pastas deve ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Verifique sua instalação SM / MM

Existem duas formas de conferir se as extensões foram instaladas corretamente:

1. Console do jogo
2. Console remoto (HLSW - RCON)

### Consulta de versão via comandos

Siga os passos abaixo para checar a versão no seu servidor:

1. Conecte-se ao servidor no jogo
2. Abra o console e digite o comando:

```
sm version
meta version
```

Você verá uma saída parecida com esta:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Consulta de versão via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Para checar a versão pelo seu servidor:

1. Insira o endereço IP no topo em IP / Porta
2. Vá em Configuração Rcon logo abaixo
3. Digite sua senha Rcon em Senha Rcon
4. Abra o console e digite o comando:

```
sm version
meta version
```

Você verá uma saída parecida com esta:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Baixe o HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />
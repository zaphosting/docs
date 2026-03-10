---
id: server-linux-arma3
title: "Configuração do Servidor Dedicado Arma 3 no Linux"
description: "Descubra como instalar e rodar o Servidor Dedicado Arma 3 no Linux para um aluguel de servidores e gerenciamento sem complicações → Saiba mais agora"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS/servidor dedicado Linux e quer instalar o serviço do Servidor Dedicado Arma 3 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS/servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu VPS/servidor dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece logando no usuário `steam` e indo para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários do Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Arma 3. Pode fazer configurações adicionais editando o arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **server.cfg** que fica na raiz do diretório.
```
nano /home/steam/arma3-server/server.cfg
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o executável **arma3server_x64** com o comando abaixo.

```
/home/steam/arma3-server/arma3server_x64
```

Você verá vários logs no terminal indicando que o servidor iniciou com sucesso.

Os jogadores poderão se conectar direto pelo **navegador de servidores do Arma 3** usando o endereço IP do seu servidor e a porta padrão **2302**.

## Conclusão

Parabéns, você instalou e configurou com sucesso o **servidor de jogos Arma 3** no seu VPS/servidor dedicado! Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
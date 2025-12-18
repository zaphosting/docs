---
id: dedicated-linux-avorion
title: "Servidor Dedicado: Configuração do Servidor Dedicado Avorion no Linux"
description: "Aprenda como instalar e configurar o servidor dedicado Avorion no seu VPS Linux para um aluguel de servidores de jogos sem complicações → Saiba mais agora"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Linux e quer instalar o serviço de servidor dedicado Avorion nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz do usuário `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Avorion. Você pode ajustar as configurações do servidor diretamente no arquivo **startserver.sh** que você copiou antes. Abra o arquivo com `nano /home/steam/Avorion-Server/startserver.sh` e configure os parâmetros do seu servidor.

Você também pode editar parâmetros e configurações específicas do mundo editando o arquivo **server.ini** que fica salvo em cada galaxy save. Ele estará na pasta raiz do seu usuário (que deve ser `steam`) e pode ser gerenciado com os comandos abaixo.
```
# Ver Saves Atuais
ls /home/steam/.avorion/galaxies

# Editar Configuração de Save
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo, onde recomendamos criar uma cópia do arquivo batch de exemplo.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Você pode editar o arquivo se quiser. Quando estiver pronto, rode o novo arquivo batch **startserver.sh** com o comando abaixo.
```
/home/steam/Avorion-Server/startserver.sh
```

Você verá logs aparecerem no seu terminal, indicando que o servidor está iniciando. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Quando estiver pronto, você verá `Server startup complete.` no console. Agora você pode se conectar diretamente ao seu servidor usando o navegador de servidores dentro do jogo, inserindo o endereço IP e a porta do servidor (padrão é 27000).

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Avorion no seu VPS! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como transformar seu servidor dedicado em um serviço. Isso traz vários benefícios como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar você todos os dias!
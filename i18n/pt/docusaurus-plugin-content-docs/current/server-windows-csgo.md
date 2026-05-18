---
id: server-windows-csgo
title: "Configuração de Servidor Dedicado CS:GO no Windows"
description: "Aprenda a configurar um servidor dedicado de CS:GO no seu servidor de forma rápida e eficiente → Saiba mais agora"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um VPS/servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um servidor dedicado de CS:GO? Então você está no lugar certo! A seguir, vamos explicar passo a passo como instalar esse serviço no seu servidor.

## Preparação

Para configurar um servidor de CS:GO, é necessário o SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta permite baixar rápida e facilmente as aplicações de VPS/servidor dedicado dos jogos populares da Steam. Você pode encontrar o SteamCMD no site oficial para desenvolvedores da Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Depois disso, faça o download. Ele conterá o arquivo **steamcmd.zip**, que deve ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deverá ver o **steamcmd.exe** como resultado. Execute-o e aguarde até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalar o servidor de CS:GO.

## Instalação

Após a instalação, você deve conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Use o usuário **anonymous**. Execute o comando: `login anonymous`

O próximo passo é a instalação. Use o comando `app_update 730`. O App ID **730** corresponde à aplicação do **Servidor Dedicado de CS:GO**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Tenha paciência enquanto o download é concluído, pois pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor precisam estar liberadas/redirecionadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Regras adicionais devem ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme mostrado abaixo e adicione as portas: 27015-27020 para os protocolos TCP/UDP.

## Configuração

Neste ponto, você já terminou a configuração básica do seu servidor de CS:GO. Pode fazer configurações adicionais editando diretamente o arquivo de inicialização. Vá até o diretório raiz. Dentro dele, navegue até a pasta cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você precisa gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto à Steam. Para gerar um GSLT, acesse http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo **4465480**, que corresponde ao novo CS:GO Standalone.

Depois de obter o token, inclua-o nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o seguinte comando de inicialização:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Você deverá ver logs aparecerem no prompt de comando indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores, procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor de CS:GO no seu VPS/servidor dedicado! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
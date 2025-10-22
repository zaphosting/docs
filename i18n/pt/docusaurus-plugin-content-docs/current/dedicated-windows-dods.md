---
id: dedicated-windows-dods
title: "Servidor Dedicado: Configuração do Servidor Dedicado Day of Defeat: Source no Windows"
description: "Descubra como configurar um servidor dedicado Day of Defeat: Source no seu VPS ou servidor de forma rápida e eficiente → Saiba mais agora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um VPS ou servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um Servidor Dedicado Day of Defeat: Source? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação

Para configurar um servidor Day of Defeat: Source, é necessário o SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta pode ser usada para baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você encontra o SteamCMD no site oficial para desenvolvedores da Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Depois disso, faça o download. Ele conterá o arquivo **steamcmd.zip**, que deve ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deverá ver o arquivo **steamcmd.exe** como resultado. Execute-o e aguarde até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalar o servidor Day of Defeat: Source.

## Instalação

Após a instalação, você deverá conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Isso é feito com o usuário **anonymous**. Execute o comando: `login anonymous`

O próximo passo é a instalação. Isso é feito com o comando `app_update 232290`. O App ID **232290** corresponde à aplicação **Servidor Dedicado Day of Defeat: Source**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Tenha paciência enquanto o download é concluído, pois pode levar um tempo para jogos maiores. Quando for bem-sucedido, uma mensagem de sucesso aparecerá confirmando isso.

Para tornar o servidor visível e acessível externamente, as portas usadas pelo servidor devem ser liberadas/encaminhadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Regras adicionais devem ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme descrito abaixo e adicione as portas: 27015-27020 para os protocolos TCP/UDP.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Day of Defeat: Source. Você pode fazer configurações adicionais editando diretamente o arquivo de inicialização. Vá até o diretório raiz. Dentro dele, navegue até a pasta cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você deve gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto à Steam. Para gerar um GSLT, visite http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo 232290, que corresponde ao Day of Defeat: Source.

Depois de obter o token, inclua-o nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o seguinte comando de inicialização:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Você deverá ver logs aparecerem no prompt de comando indicando que a inicialização foi bem-sucedida. Lembre-se que a primeira inicialização pode levar um tempo enquanto tudo é configurado. Alternativamente, você poderá se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Day of Defeat: Source no seu VPS! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
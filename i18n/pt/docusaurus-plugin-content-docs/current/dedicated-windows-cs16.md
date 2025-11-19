---
id: dedicated-windows-cs16
title: "Servidor Dedicado: Configuração do Servidor Dedicado Counter-Strike 1.6 no Windows"
description: "Aprenda como configurar um servidor dedicado de Counter-Strike 1.6 no seu VPS ou servidor dedicado de forma rápida e fácil → Saiba mais agora"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um VPS ou servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um servidor dedicado de Counter-Strike 1.6? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.



## Preparação

Para configurar um servidor de Counter-Strike 1.6, é necessário o SteamCMD. O SteamCMD é a **versão em linha de comando do cliente Steam**. Essa ferramenta pode ser usada para baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você pode encontrar o SteamCMD no site oficial para desenvolvedores da Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Em seguida, faça o download. Ele conterá o arquivo **steamcmd.zip**, que deve ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deverá ver o arquivo **steamcmd.exe** como resultado. Execute-o e aguarde até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor de Counter-Strike 1.6.



## Instalação

Após a instalação, você deverá conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Isso é feito com o usuário **anonymous**. Execute o seguinte comando: `login anonymous`

O próximo passo será a instalação. Isso é feito com o comando `app_update 90`. O ID do app **90** corresponde à aplicação do **Servidor Dedicado de Counter-Strike 1.6**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Tenha paciência enquanto o download é concluído, pois pode levar um tempo para jogos maiores. Quando for bem-sucedido, uma mensagem de sucesso aparecerá confirmando isso.

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor devem ser liberadas/redirecionadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Regras adicionais precisam ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme descrito abaixo e adicione para as seguintes portas: 27015-27020 para os protocolos TCP/UDP.



## Configuração

Neste ponto, você já terminou a configuração do seu servidor de Counter-Strike 1.6. Você pode fazer configurações adicionais do servidor editando diretamente o arquivo de inicialização. Vá até o seu diretório raiz. Dentro dele, navegue até o diretório cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você deve gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto à Steam. Para gerar um GSLT, visite http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo 90, que corresponde ao Counter-Strike 1.6.

Depois de obter o token, inclua-o nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`. 



## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o seguinte comando de inicialização:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Você deverá ver logs aparecerem no prompt de comando indicando que a inicialização foi bem-sucedida. Note que a primeira inicialização pode levar um tempo enquanto tudo é configurado. Alternativamente, você poderá se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:2456`.


## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor de Counter-Strike 1.6 no seu VPS! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂



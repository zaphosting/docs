---
id: dedicated-windows-valheim
title: "Servidor Dedicado: Configuração do Servidor Dedicado Valheim no Windows"
description: "Descubra como configurar um servidor dedicado Valheim no seu próprio servidor para uma jogatina multiplayer sem travas → Saiba mais agora"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um Servidor Dedicado Valheim? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Configuração do Servidor Dedicado Valheim no Windows VPS" description="Prefere entender vendo as coisas na prática? A gente te entende! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja porque está com pressa ou só quer absorver a informação do jeito mais legal possível!"/>



## Preparação
Para configurar um servidor Valheim, você vai precisar do SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta permite baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você encontra o SteamCMD no site oficial da Valve para desenvolvedores: https://developer.valvesoftware.com/wiki/SteamCMD. 

Depois disso, faça o download. Ele vai conter o arquivo **steamcmd.zip**, que precisa ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deve ver o arquivo **steamcmd.exe** como resultado. Execute ele e espere até o processo de instalação ser concluído.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Quando aparecer a mensagem **Loading Steam API.... OK**, o processo foi concluído com sucesso e você pode começar a instalar o servidor Valheim.



## Instalação

Após a instalação, você deve conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Use o usuário **anonymous**. Execute o comando: `login anonymous`

O próximo passo é a instalação. Use o comando `app_update 896660`. O App ID **896660** é o da aplicação **Servidor Dedicado Valheim**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::


Navegue até o diretório onde a instalação foi feita e vá para o subdiretório:  **../steamapps/common/Valheim dedicated Server/**

Lá, você precisa criar o arquivo de inicialização, que é necessário para rodar o software do servidor. Crie um arquivo com o nome: start_headless.bat

:::info
Certifique-se de que a opção Mostrar extensões de arquivo esteja ativada para garantir que a extensão correta seja usada.
:::

Abra o arquivo, adicione o seguinte conteúdo e salve as alterações:

```
@echo off
set SteamAppId-892970

echo "Iniciando servidor, APERTE CTRL-C para sair"

REM Dica: Faça uma cópia local deste script para evitar que ele seja sobrescrito pelo Steam.
REM OBS: A senha mínima deve ter 5 caracteres & a senha não pode estar no nome do servidor.
REM OBS: Você precisa garantir que as portas 2456-2458 estejam encaminhadas para seu servidor pelo roteador local e firewall.

valheim server -nographics -batchmode -name "Meu Servidor" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor precisam estar liberadas/encaminhadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Você precisa adicionar regras adicionais nas configurações. Clique nas regras de entrada e saída conforme mostrado abaixo e adicione as portas: 2456-2458 para os protocolos TCP/UDP.




## Configuração

A configuração básica já está pronta. Você pode fazer outras alterações no arquivo **start_headless_server.bat**. Lá, você pode mudar o nome do servidor, a senha do servidor, a senha de admin e várias outras opções. Para isso, navegue até o diretório:

```
../steamapps/common/Valheim dedicated Server/
```



## Jogar

No final da configuração, você pode iniciar o servidor executando o arquivo **start_headless_server.bat** que criou. Isso deve abrir o console do servidor e iniciar o processo de startup. Se tudo correr bem, o servidor aparecerá na lista de servidores após o início bem-sucedido.
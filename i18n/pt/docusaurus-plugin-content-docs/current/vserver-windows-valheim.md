---
id: vserver-windows-valheim
title: "VPS: Configuração do Servidor Dedicado Valheim no Windows"
description: "Descubra como configurar um servidor dedicado Valheim no seu VPS ou servidor dedicado de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um VPS ou servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um servidor dedicado Valheim? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Configuração do Servidor Dedicado Valheim no Windows VPS" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo para você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>
<InlineVoucher />

## Preparação
Para configurar um servidor Valheim, é necessário o SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta pode ser usada para baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você encontra o SteamCMD no site oficial para desenvolvedores da Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Depois disso, faça o download. Ele vai conter o arquivo **steamcmd.zip**, que deve ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deve ver o arquivo **steamcmd.exe** como resultado. Execute-o e aguarde até que o processo de instalação seja concluído.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalar o servidor Valheim.



## Instalação

Após a instalação, você deve conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Isso é feito com o usuário **anonymous**. Execute o seguinte comando: `login anonymous`

O próximo passo é a instalação. Isso é feito com o comando `app_update 896660`. O App ID **896660** representa a aplicação do **Servidor Dedicado Valheim**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Por favor, não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Navegue até o diretório onde você realizou a instalação e vá para o seguinte subdiretório:  **../steamapps/common/Valheim dedicated Server/**

Lá, você precisa criar o arquivo de inicialização, que é necessário para executar o software do servidor. Crie um arquivo com o seguinte nome: start_headless.bat

:::info
Certifique-se de que a opção Mostrar extensões de arquivo esteja ativada para garantir que a extensão correta seja usada.
:::

Abra o arquivo, adicione o seguinte conteúdo e salve as alterações:

```
@echo off
set SteamAppId-892970

echo "Iniciando servidor, PRESS CIRL-C para sair"

REM Dica: Faça uma cópia local deste script para evitar que ele seja sobrescrito pelo steam.
REM NOTA: A senha mínima deve ter 5 caracteres & a senha não pode estar no nome do servidor.
REM NOTA: Você precisa garantir que as portas 2456-2458 estejam encaminhadas para seu servidor através do seu roteador local e firewall.

valheim server -nographics -batchmode -name "Meu Servidor" -port 2456 -world "Dedicated" -password "segredo" -crossplay
```

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor devem estar habilitadas/encaminhadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Regras adicionais precisam ser adicionadas nas configurações. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para as seguintes portas: 2456-2458 para os protocolos TCP/UDP.




## Configuração

A configuração principal já está completa. Outras alterações podem ser feitas no arquivo **start_headless_server.bat**. Lá você pode mudar o nome do servidor, senha do servidor, senha de admin e várias outras opções. Para isso, navegue até o seguinte diretório:

```
../steamapps/common/Valheim dedicated Server/
```



## Jogar

No final da configuração, você pode iniciar o servidor executando o arquivo **start_headless_server.bat** que criou anteriormente. Isso deve abrir o console do servidor e iniciar o processo de inicialização. Se tudo correr como esperado, o servidor aparecerá na lista de servidores após o início bem-sucedido.


## Conclusão

Parabéns, você instalou e configurou com sucesso o Valheim no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
---
id: dedicated-windows-satisfactory
title: "Servidor Dedicado: Configuração do Servidor Dedicado Satisfactory no Windows"
description: "Aprenda como configurar um Servidor Dedicado Satisfactory no seu servidor para uma jogabilidade e gerenciamento sem complicações → Saiba mais agora"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um Servidor Dedicado Satisfactory? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Configuração do Servidor Dedicado Satisfactory no Windows VPS" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>

<InlineVoucher />

## Preparação

Para configurar um servidor Satisfactory, você vai precisar do SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta permite baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você pode baixar o SteamCMD no site oficial da Valve para desenvolvedores: https://developer.valvesoftware.com/wiki/SteamCMD. 

Depois disso, faça o download. Ele vai conter o arquivo **steamcmd.zip**, que precisa ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deve ver o arquivo **steamcmd.exe** como resultado. Execute-o e espere até o processo de instalação ser concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalar o servidor Satisfactory.



## Instalação

Após a instalação, você deve conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Use o usuário **anonymous**. Execute o comando: `login anonymous`

O próximo passo é a instalação. Use o comando `app_update 1690800`. O App ID **1690800** corresponde ao aplicativo do **Servidor Dedicado Satisfactory**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::



Navegue até o diretório onde você fez a instalação e vá para o subdiretório: **../steamapps/common/SatisfactoryDedicatedServer**

Lá, você precisa criar o arquivo de inicialização, que é necessário para executar o software do servidor. Crie um arquivo com o nome: server-start.bat

:::info
Certifique-se de que a opção Mostrar extensões de arquivo esteja ativada para garantir que a extensão correta seja usada.
:::

Abra o arquivo, adicione o seguinte conteúdo e salve as alterações:

```
Factoryserver.exe -log -unattended
```



Depois, execute o arquivo. Na primeira inicialização, uma janela pop-up deve aparecer informando que certos componentes são necessários para rodar o programa. O jogo precisa do Visual C++ Runtime. Clique em Sim e complete a instalação. 

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor precisam estar liberadas/redirecionadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Regras adicionais precisam ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme descrito abaixo e adicione para o protocolo UDP e a porta 15000.



## Configuração

A configuração principal já está pronta. Outras alterações podem ser feitas no arquivo de configuração **ServerSettings.ini**. Lá você pode mudar o nome do servidor, senha e outras opções. Navegue até o diretório:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jogar

No final da configuração, você pode iniciar o servidor executando o arquivo **server-start.bat** que criou anteriormente. Isso deve abrir o console do servidor e iniciar o processo de inicialização. Se tudo correr bem, o servidor aparecerá na lista de servidores após o início bem-sucedido.


<InlineVoucher />
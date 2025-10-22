---
id: vserver-windows-satisfactory
title: "VPS: Configuração do Servidor Dedicado Satisfactory no Windows"
description: "Descubra como configurar um Servidor Dedicado Satisfactory no seu VPS ou servidor dedicado de forma rápida e fácil → Saiba mais agora"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Tem um VPS ou servidor dedicado e quer instalar servidores de jogos nele? Por exemplo, um Servidor Dedicado Satisfactory? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Configuração do Servidor Dedicado Satisfactory no VPS Windows" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo para você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>
<InlineVoucher />

## Preparação

Para configurar um servidor Satisfactory, é necessário o SteamCMD. O SteamCMD é a **versão de linha de comando do cliente Steam**. Essa ferramenta permite baixar rápida e facilmente as aplicações de servidor dedicado dos jogos populares da Steam. Você pode encontrar o SteamCMD no site oficial para desenvolvedores da Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Depois disso, faça o download. Ele conterá o arquivo **steamcmd.zip**, que deve ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deverá ver o arquivo **steamcmd.exe** como resultado. Execute-o e aguarde até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalar o servidor Satisfactory.



## Instalação

Após a instalação, você deverá conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Isso é feito com o usuário **anonymous**. Execute o seguinte comando: `login anonymous`

O próximo passo é a instalação. Isso é feito com o comando `app_update 1690800`. O App ID **1690800** corresponde ao aplicativo do **Servidor Dedicado Satisfactory**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::



Navegue até o diretório onde você realizou a instalação e vá para o seguinte subdiretório: **../steamapps/common/SatisfactoryDedicatedServer**

Lá, você precisa criar o arquivo de inicialização, que é necessário para executar o software do servidor. Crie um arquivo com o seguinte nome: server-start.bat

:::info
Certifique-se de que a opção Mostrar extensões de arquivo esteja ativada para que a extensão correta seja usada.
:::

Abra o arquivo, adicione o seguinte conteúdo e salve as alterações:

```
Factoryserver.exe -log -unattended
```



Depois, execute o arquivo. Na primeira inicialização, uma janela pop-up deve aparecer informando que certos componentes são necessários para rodar o programa. O jogo requer o Visual C++ Runtime. Clique em Sim e complete a instalação.

Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor precisam ser liberadas/redirecionadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


Regras adicionais devem ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme descrito abaixo e adicione para o protocolo UDP e a porta 15000.



## Configuração

A configuração principal já está pronta. Outras alterações podem ser feitas no arquivo de configuração **ServerSettings.ini**. Lá você pode mudar o nome do servidor, senha do servidor e outras opções. Navegue até o seguinte diretório:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jogar

No final da configuração, você pode iniciar o servidor executando o arquivo **server-start.bat** que criou anteriormente. Isso deve abrir o console do servidor e iniciar o processo de inicialização. Se tudo correr como esperado, o servidor aparecerá na lista de servidores após o início bem-sucedido.



## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Satisfactory no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
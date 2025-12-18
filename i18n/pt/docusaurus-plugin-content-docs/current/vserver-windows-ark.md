---
id: vserver-windows-ark
title: "VPS: Configuração de Servidor Dedicado ARK Survival Evolved no Windows"
description: "Descubra como configurar um Servidor Dedicado ARK: Survival Evolved no seu VPS Windows de forma rápida e fácil → Saiba mais agora"
sidebar_label: Configuração Servidor Dedicado ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução
Tem um VPS Windows e quer instalar servidores de jogos nele? Por exemplo, um Servidor Dedicado ARK: Survival Evolved? Então você está no lugar certo! A seguir, vamos explicar passo a passo como você pode instalar esse serviço no seu servidor.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="Configuração do Servidor Dedicado ARK: Survival Evolved no VPS Windows" description="Prefere entender vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>

Conecte-se ao seu VPS via RDP para configurar seu Servidor Dedicado ARK: Survival Evolved. Caso não saiba como se conectar ao seu servidor via RDP, recomendamos dar uma olhada no [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Preparação

Para configurar um servidor ARK, você vai precisar do SteamCMD. O SteamCMD é a **versão em linha de comando do cliente Steam**. Essa ferramenta permite baixar rápida e facilmente os aplicativos de servidor dedicado dos jogos populares da Steam. Você pode encontrar o SteamCMD no site oficial da Valve para desenvolvedores: https://developer.valvesoftware.com/wiki/SteamCMD. 

Depois disso, faça o download. Ele vai conter o arquivo **steamcmd.zip**, que precisa ser descompactado primeiro. Recomendamos criar uma pasta separada para descompactar o arquivo. Você deve ver o arquivo **steamcmd.exe** como resultado. Execute-o e espere até o processo de instalação ser concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor ARK.



## Instalação

Após a instalação, você deve conseguir executar comandos na **linha de comando do Steam (steamcmd.exe)**. Lá, você precisa fazer login. Use o usuário **anonymous**. Execute o comando: `login anonymous`

O próximo passo é a instalação. Use o comando `app_update 376030`. O App ID **376030** é o aplicativo do **Servidor Dedicado ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::



Navegue até o diretório onde a instalação foi feita e vá para o seguinte subdiretório: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Lá, você precisa criar o arquivo de inicialização, que é necessário para executar o software do servidor. Crie um arquivo com o nome: start-ark.bat

:::info
Certifique-se de que a opção Mostrar extensões de arquivo esteja ativada para garantir que a extensão correta seja usada.
:::

Abra o arquivo, adicione o seguinte conteúdo e salve as alterações:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Para que o servidor fique visível e acessível externamente, as portas usadas pelo servidor precisam estar liberadas/redirecionadas no firewall. Para isso, abra as configurações do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Regras adicionais precisam ser adicionadas nas configurações. Clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:

- TCP entrada e saída: 27020
- UDP entrada e saída: 27015
- UDP entrada e saída: 7777-7778



## Configuração

A configuração básica já está pronta. Alterações adicionais podem ser feitas nos arquivos de configuração **DefaultGameUserSettings.ini** e **Gameusersettings.ini**. Neles, você pode mudar o nome do servidor, senha do servidor, senha do admin e várias outras opções. Para isso, navegue até os seguintes diretórios:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jogar

No final da configuração, você pode iniciar o servidor executando o arquivo **start-ark.bat** que criou anteriormente. Isso deve abrir o console do servidor e iniciar o processo de inicialização. Se tudo correr bem, o servidor aparecerá na lista de servidores após o início bem-sucedido.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor ARK Survival no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias! 

<InlineVoucher />
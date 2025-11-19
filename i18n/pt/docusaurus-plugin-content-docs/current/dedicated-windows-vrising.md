---
id: dedicated-windows-vrising
title: "Servidor Dedicado: Configuração do Servidor Dedicado V-Rising no Windows"
description: "Descubra como configurar um servidor dedicado V Rising no Windows para desempenho ideal no jogo e gerenciamento do servidor → Saiba mais agora"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Como configurar um Servidor Dedicado V RISING no Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>



## Informações Básicas: 
É necessário um servidor baseado no Windows Server 2016/2019 com pelo menos 4x CPU de 2.4 GHz (AMD/Intel) e no mínimo 4GB de RAM (DDR3/4) e 6GB de disco livre (SSD ou melhor, preferencialmente). O servidor deve rodar em arquitetura 64 bits.

## Passo 1 Crie uma pasta para o V-Rising

Primeiro, você precisa se conectar ao seu servidor usando o [Acesso Inicial (RDP)](vserver-windows-userdp.md). Depois de conectado, crie uma nova pasta no seu servidor onde os arquivos do V-Rising serão instalados.  
Neste exemplo, vamos criar uma nova pasta na área de trabalho.  
Isso pode ser feito clicando com o botão direito do mouse.  
Depois escolha "Novo -> Pasta".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Você pode nomear como quiser. No nosso exemplo, vamos chamar de "VRising".

## Passo 2 Baixe o SteamCMD para seu servidor Windows

Abra o navegador e acesse o [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Isso vai baixar o SteamCMD para Windows no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

O arquivo será baixado e deve estar na pasta de downloads. (A pasta de downloads pode variar)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Para facilitar, copie o arquivo steamcmd.zip para a pasta VRising que criamos na área de trabalho.  
Para isso, clique no arquivo e pressione "CTRL+C".  
Depois abra a pasta VRising na área de trabalho e pressione "CTRL+V".  
Agora você verá o arquivo dentro da pasta VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Clique com o botão direito no arquivo steamcmd.zip e escolha Extrair Tudo. Aceite a mensagem que aparecer clicando em Extrair.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Quando terminar, dê um duplo clique no arquivo steamcmd.exe.  
Uma nova janela vai abrir, instalando os arquivos do steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Passo 3 Baixe os arquivos do V Rising

Depois que os arquivos do steamcmd forem instalados, você verá isso na janela que abriu.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Agora você precisa especificar onde os arquivos serão baixados.  
Isso é feito com o comando "force_install_dir".  
No nosso exemplo, o comando completo é:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Depois, faça login como usuário anônimo.  
Para isso, digite "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Feito isso, finalmente podemos baixar os arquivos.  
Use o comando:  
app_update 1829350 validate

Os arquivos começarão a ser baixados, o que pode levar alguns minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Quando o processo terminar, você verá todos os arquivos no seu servidor dentro da pasta VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Passo 4 Inicie e configure o servidor V Rising

Você pode editar o arquivo start_server_example.bat para fazer algumas alterações.  
Para isso, clique com o botão direito no arquivo e escolha editar.  
Você pode ajustar o nome do servidor e o caminho onde o processo será salvo.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Mais alterações podem ser feitas nos arquivos de configuração, que ficam na pasta VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

No arquivo ServerHostSettings.json você pode fazer mudanças gerais, como definir as portas, descrição do servidor, intervalo de salvamento e, por exemplo, a senha do servidor de jogos.  
Eu alterei o nome do servidor para "ZAP-Hosting Test Server".

Para iniciar o servidor, dê um duplo clique no arquivo start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

O processo de inicialização pode levar um tempo.  
Se as portas estiverem corretamente liberadas, você poderá encontrar o servidor na lista de servidores.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Passo 5 Libere as portas no firewall

O servidor precisa estar acessível publicamente para jogar com os amigos. Para isso, as portas do servidor devem ser liberadas no firewall do Windows. As portas 9876 e 9877 precisam estar liberadas para os protocolos TCP E UDP.  
9876 é a porta do servidor de jogos e 9877 é a porta de consulta (Query Port).  
Como liberar portas no Windows: [Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

Depois de liberar as portas, o servidor estará acessível publicamente, desde que esteja iniciado.
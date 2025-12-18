---
id: vserver-windows-vrising
title: "VPS: Configuração de Servidor Dedicado Windows para V-Rising"
description: "Descubra como configurar um servidor dedicado Windows para V Rising com performance top para jogos e hospedagem sem stress → Saiba mais agora"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Como configurar um Servidor Dedicado Windows para V RISING!" description="Prefere entender vendo na prática? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo passo a passo. Seja na correria ou só curtindo aprender do jeito mais legal possível!"/>
<InlineVoucher />

## Informações Básicas: 
Você vai precisar de um servidor baseado em Windows Server 2016/2019 com pelo menos 4x CPU de 2.4 GHz (AMD/Intel) e no mínimo 4GB de RAM (DDR3/4) e 6GB de espaço livre em disco (SSD ou melhor, preferencialmente). O servidor precisa rodar em arquitetura 64 bits.

## Passo 1 Crie uma pasta para o V-Rising

Primeiro, conecte-se ao seu servidor usando o [Acesso Inicial (RDP)](vserver-windows-userdp.md). Depois de conectado, crie uma nova pasta no seu servidor onde os arquivos do V-Rising serão instalados.  
Neste exemplo, vamos criar uma nova pasta na área de trabalho.  
Para isso, clique com o botão direito do mouse.  
Depois escolha "Novo -> Pasta".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Você pode nomear como quiser. No nosso exemplo, vamos chamar de "VRising".

## Passo 2 Baixe o SteamCMD para seu servidor Windows

Abra o navegador e acesse o [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Isso vai baixar o SteamCMD para Windows no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

O arquivo será baixado e deve estar na pasta de downloads. (A pasta de downloads pode variar)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Para facilitar, copie o arquivo steamcmd.zip para a pasta VRising que criamos na área de trabalho.  
Para isso, clique no arquivo e pressione "CTRL+C".  
Depois abra a pasta VRising na área de trabalho e pressione "CTRL+V".  
Agora você verá o arquivo dentro da pasta VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Clique com o botão direito no arquivo steamcmd.zip e escolha Extrair Tudo. Confirme a mensagem que aparecer clicando em Extrair.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Quando terminar, dê um duplo clique no arquivo steamcmd.exe.  
Uma nova janela vai abrir, instalando os arquivos do steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Passo 3 Baixe os arquivos do V Rising

Depois que os arquivos do steamcmd forem instalados, você verá isso na janela que abriu.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Agora você precisa especificar onde os arquivos do jogo serão baixados.  
Use o comando "force_install_dir".  
No nosso exemplo, o comando completo é:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Depois, faça login como usuário anônimo.  
Digite "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Feito isso, finalmente baixe os arquivos com o comando:  
app_update 1829350 validate

Os arquivos vão começar a baixar, o que pode levar alguns minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Quando terminar, você verá todos os arquivos na pasta VRising no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Passo 4 Inicie e configure o servidor V Rising

Você pode editar o arquivo start_server_example.bat para fazer algumas alterações.  
Clique com o botão direito no arquivo e escolha editar.  
Você pode ajustar o nome do servidor e o caminho onde o processo deve salvar os dados.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Mais configurações podem ser feitas nos arquivos de configuração, que ficam na pasta VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

No arquivo ServerHostSettings.json você pode fazer mudanças gerais, como definir as portas, descrição do servidor, intervalo de salvamento e a senha do servidor de jogos, por exemplo.  
Eu alterei o nome do servidor para "ZAP-Hosting Test Server".

Para iniciar o servidor, dê um duplo clique no arquivo start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

O processo de inicialização pode demorar um pouco.  
Se as portas estiverem liberadas corretamente, você poderá encontrar o servidor na lista de servidores.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Passo 5 Libere as portas no firewall

O servidor precisa estar acessível publicamente para jogar com os amigos. Para isso, as portas do servidor devem estar liberadas no firewall do Windows.  
As portas 9876 e 9877 precisam estar liberadas para os protocolos TCP E UDP.  
9876 é a porta do servidor de jogos e 9877 é a porta de consulta (Query Port).  
Como liberar portas no Windows, veja o [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

Depois de liberar as portas, o servidor estará acessível publicamente, desde que esteja iniciado.

## Conclusão

Parabéns, você instalou e configurou o V-Rising no seu VPS com sucesso! Se tiver dúvidas ou problemas, nosso time de suporte está disponível todos os dias para te ajudar!

<InlineVoucher />
---
id: dedicated-windows-avorion
title: "Servidor Dedicado: Configuração do Servidor Dedicado Avorion no Windows"
description: "Descubra como configurar o Servidor Dedicado Avorion no seu VPS Windows para um aluguel de servidores sem complicações → Saiba mais agora"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço de servidor dedicado Avorion nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Como Configurar o Servidor Dedicado Avorion no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo de forma prática. Seja você apressado ou só curte aprender do jeito mais legal possível!"/>


## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente vários arquivos da Steam Workshop e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamar de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora você vai descompactar o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Avorion na próxima seção.

## Instalação

Após a instalação, você deve conseguir executar comandos dentro do prompt do **steamcmd.exe** que abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo: 
```
force_install_dir C:\Avorion-Server
```
:::

Agora execute o comando `app_update 565060` que vai iniciar o download. O App ID **565060** é o aplicativo **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório onde os arquivos do servidor foram baixados. Aqui, faça uma cópia do arquivo **server.bat** e renomeie essa cópia para **startserver.bat** ou algo parecido. Você vai usar esse novo arquivo `.bat` para iniciar o servidor e para permitir a edição das opções de configuração do servidor na próxima seção. Recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado usa. Você pode fazer isso via comandos Powershell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que você execute o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Agora copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Avorion fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária se abrir a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor Avorion. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 27000
- UDP entrada e saída: 27000, 27003, 27020, 27021

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor. Para isso, selecione seu personagem no menu principal, vá até a aba **Encontrar Jogos** e clique em **Adicionar Servidor**. Insira o IP do seu servidor junto com a Porta (15636 por padrão) e a senha do servidor (se tiver, senão deixe em branco).

Recomendamos que você configure as opções do seu servidor primeiro na seção a seguir antes de acessar o servidor.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Avorion. Você pode configurar as opções do servidor diretamente pelo arquivo **startserver.bat** que copiou antes. Abra o arquivo com um editor de texto como o notepad e ajuste os parâmetros do seu servidor.

Se quiser editar parâmetros e configurações específicas do mundo, você precisará acessar os saves da galáxia e editar o arquivo de configuração **server.ini**. Ele fica armazenado no AppData do Windows, acessível pelo seguinte caminho:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Você pode acessar esse caminho facilmente pressionando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%userprofile%/AppData/Roaming/Avorion/galaxies`. É só clicar em **OK** e você será levado direto para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório base do seu servidor Avorion e execute o **startserver.bat** que você criou antes para começar o processo de inicialização. Isso vai abrir o console do servidor em um prompt de comando e iniciar o processo. Agora você poderá se conectar diretamente ao seu servidor usando o navegador de servidores dentro do jogo, inserindo o IP do servidor e a Porta (padrão 27000).

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Avorion no seu VPS! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!
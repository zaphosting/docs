---
id: dedicated-windows-palworld
title: "Servidor Dedicado: Configuração do Servidor Dedicado Palworld no Windows"
description: "Descubra como configurar um Servidor Dedicado Palworld no seu VPS ou servidor Windows de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS ou servidor dedicado Windows e quer instalar o serviço de Servidor Dedicado Palworld nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Como Configurar o Servidor Dedicado Palworld no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo para você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>



## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora descompacte o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer outro programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Palworld na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que você abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo: 
```
force_install_dir C:\Palworld-Server
```
:::

Agora execute o comando `app_update 2394010` que iniciará o download. O App ID **2394010** é o aplicativo **Palworld**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório de download onde todos os arquivos do servidor foram baixados. Lá, você pode usar o **PalServer.exe** para iniciar o servidor. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você deve alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado está usando. Você pode fazer isso via comandos Powershell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que você execute o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Palworld fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor Palworld. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 8211
- UDP entrada e saída: 8211

Use nosso guia [Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, o que significa que você poderá se conectar a ele pelo endereço IP do seu servidor. Você pode fazer isso indo no navegador de lista de servidores e digitando seu IP e porta na busca embaixo. Você deve buscar por: `[seu_endereço_ip]:8211`

Recomendamos que você configure as opções do servidor primeiro na seção a seguir antes de acessar seu servidor.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Palworld. Você pode fazer configurações adicionais através de um arquivo de configuração que fica dentro do diretório do seu servidor.

Primeiro, navegue até o seguinte diretório:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Você encontrará o arquivo de configuração **PalWorldSettings.ini**. Através desse arquivo, você pode configurar uma grande variedade de parâmetros para seu servidor. Veja nosso [Guia de Configuração do Servidor](palworld-configuration.md) para conferir todas as opções disponíveis e o que cada uma faz.

:::note
Se você não encontrar esse arquivo, por favor inicie seu servidor pelo menos **uma vez** para que ele seja gerado automaticamente. Alternativamente, você pode copiar e usar as configurações padrão do caminho `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Ativar o Modo Xbox

Os servidores dedicados Palworld agora têm a opção de funcionar como servidor dedicado da Microsoft Store/Xbox para permitir que jogadores de Xbox e PC da Microsoft Store joguem juntos no mesmo servidor.

:::note
Cross-play entre as versões Steam e Microsoft Store/Xbox ainda não é possível. Seu servidor pode ser configurado para funcionar para Steam ou para Microsoft Store/Xbox.
:::

Navegue até o seguinte diretório e abra o arquivo **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Dentro desse arquivo, adicione o seguinte trecho para ativar o modo Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Salve o arquivo e na próxima vez que iniciar o servidor ele estará no modo Xbox.

:::info
Nos consoles Xbox, você não pode se conectar diretamente via endereço IP, então se planeja jogar no Xbox, terá que tornar seu servidor dedicado público.

Você pode fazer isso criando um novo arquivo `StartServer.bat` no diretório raiz e colocando dentro: `PalServer.exe -publiclobby`. A flag especial `-publiclobby` ativa o modo Servidor Comunitário, tornando-o acessível na lista de servidores.

Também recomendamos definir um nome de servidor fácil de encontrar, veja nosso guia [Configuração do Servidor](palworld-configuration.md) para saber como fazer isso.
:::

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Pode ser que você precise instalar o [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) se ainda não tiver no seu servidor dedicado Windows.

Vá até o diretório base do seu servidor Palworld e execute o **PalServer.exe** para iniciar o processo. Isso abrirá o console do servidor em um prompt de comando e começará a inicialização. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você poderá se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:8211`.

Você instalou com sucesso o Palworld no seu servidor dedicado Windows.
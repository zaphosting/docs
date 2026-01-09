---
id: dedicated-windows-conan
title: "Servidor Dedicado: Configuração do Servidor Dedicado Conan Exiles no Windows"
description: "Descubra como configurar um Servidor Dedicado Conan Exiles em um Servidor Dedicado Windows para uma jogabilidade suave e gerenciamento do servidor → Saiba mais agora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um Servidor Dedicado Windows e quer instalar o serviço de servidor dedicado do Conan Exiles nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

:::note Ferramenta de Lançamento do Servidor
Como alternativa ao uso do SteamCMD, os desenvolvedores do Conan Exiles mantêm uma ferramenta útil de lançamento de servidor que pode ser usada no Windows para facilitar o lançamento do servidor.

Recomendamos a leitura do [Post Oficial no Fórum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) se você quiser usar essa opção.
:::

Assim que acessar seu servidor, será necessário configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora você deve descompactar o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer outro programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Conan Exiles na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que você abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir seu diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo:
```
force_install_dir C:\Conan-Server
```
:::

Agora execute o comando `app_update 443030` que iniciará o download. O App ID **443030** é o aplicativo do **Conan Exiles**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório de download onde todos os arquivos do servidor foram baixados. Lá, você pode usar o **StartServer.bat** para iniciar o servidor. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você deve alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado está usando. Você pode fazer isso diretamente via comandos Powershell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que você execute o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Em seguida, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Conan Exiles fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor Conan Exiles. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 7777, 25575
- UDP entrada e saída: 7777, 7778, 27015

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de mais ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, o que significa que você poderá se conectar a ele pelo endereço IP do seu servidor. Recomendamos que você configure as configurações do servidor primeiro na seção a seguir antes de acessar seu servidor.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Conan Exiles. Você pode fazer configurações adicionais do servidor através de um arquivo de configuração que fica dentro do diretório do seu servidor.

Primeiro, navegue até o seguinte diretório:
```
../Conan-Server/Engine/Config/Windows
```

Você encontrará o arquivo de configuração **WindowsServerEngine.ini**. Através desse arquivo, você pode ajustar uma grande variedade de opções de configuração adicionando parâmetros específicos.

Como exemplo, para adicionar um nome de servidor, senha e senha de admin, você adicionaria o seguinte no arquivo:
```
[OnlineSubsystem]
ServerName=[seu_nome_do_servidor]
ServerPassword=[sua_senha]

[ServerSettings]
AdminPassword=[sua_senha_admin]
```

Recomendamos dar uma olhada na [Wiki do Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para uma lista completa das opções disponíveis.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório base do seu servidor Conan Exiles e execute o **StartServer.bat** que você criou anteriormente para começar o processo de inicialização. Isso abrirá o console do servidor em um prompt de comando e iniciará o processo. Agora você poderá se conectar diretamente ao seu servidor usando o navegador de servidores dentro do jogo, inserindo o IP e a porta do servidor (padrão é 7777).

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Conan Exiles no seu servidor dedicado! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para ajudar você todos os dias!
---
id: vserver-windows-conan
title: "VPS: Configuração do Servidor Dedicado Conan Exiles no Windows"
description: "Descubra como configurar um servidor dedicado de Conan Exiles no seu VPS Windows de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço de servidor dedicado de Conan Exiles nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

:::note Ferramenta de Lançamento do Servidor
Como alternativa ao uso do SteamCMD, os desenvolvedores de Conan Exiles mantêm uma ferramenta útil de lançamento de servidor que pode ser usada no Windows para facilitar o lançamento do servidor.

Recomendamos a leitura do [Post Oficial no Fórum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) caso queira usar essa opção.
:::

Assim que acessar seu servidor, será necessário configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do Steam Workshop e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora descompacte o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer outro programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado de Conan Exiles na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para o seu servidor. Por exemplo:
```
force_install_dir C:\Conan-Server
```
:::

Agora execute o comando `app_update 443030` que iniciará o download. O App ID **443030** é o aplicativo **Conan Exiles**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório onde os arquivos do servidor foram baixados. Lá, você pode usar o **StartServer.bat** para iniciar o servidor. Porém, recomendamos configurar o redirecionamento de portas e ajustar seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você deve alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos Powershell, que é mais fácil, ou pela página do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que o Powershell esteja rodando em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Conan Exiles fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você deve criar novas regras para seu servidor Conan Exiles. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 7777, 25575
- UDP entrada e saída: 7777, 7778, 27015

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá conectar-se a ele pelo endereço IP do seu servidor. Recomendamos que você configure as opções do servidor antes de acessá-lo, conforme a próxima seção.

## Configuração

Neste ponto, você já finalizou a configuração inicial do seu servidor Conan Exiles. Você pode fazer configurações adicionais através de um arquivo de configuração que fica dentro do diretório do seu servidor.

Primeiro, navegue até o seguinte diretório:
```
../Conan-Server/Engine/Config/Windows
```

Lá você encontrará o arquivo de configuração **WindowsServerEngine.ini**. Através desse arquivo, você pode ajustar várias opções de configuração adicionando parâmetros específicos.

Por exemplo, para adicionar nome do servidor, senha e senha de admin, você adicionaria o seguinte no arquivo:
```
[OnlineSubsystem]
ServerName=[seu_nome_do_servidor]
ServerPassword=[sua_senha]

[ServerSettings]
AdminPassword=[sua_senha_admin]
```

Recomendamos dar uma olhada na [Wiki de Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para uma lista completa das opções disponíveis.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório base do seu servidor Conan Exiles e execute o **StartServer.bat** que você criou anteriormente para começar o processo de inicialização. Isso abrirá o console do servidor em um prompt de comando e iniciará o processo. Você poderá se conectar diretamente ao seu servidor usando o navegador de servidores dentro do jogo, inserindo o IP e a porta do servidor (padrão é 7777).

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Conan Exiles no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
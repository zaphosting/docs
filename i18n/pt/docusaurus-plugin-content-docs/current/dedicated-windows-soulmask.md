---
id: dedicated-windows-soulmask
title: "Servidor Dedicado: Configuração do Servidor Dedicado Soulmask no Windows"
description: "Descubra como instalar o servidor dedicado Soulmask no seu VPS Windows ou servidor dedicado de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows ou servidor dedicado e quer instalar o serviço de servidor dedicado Soulmask nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via Área de Trabalho Remota (RDP). Use nosso guia [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

Depois de acessar seu servidor, será necessário configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora você deve descompactar o arquivo clicando com o botão direito e usando a funcionalidade de descompactar do Windows, ou qualquer outro programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja totalmente concluído.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Soulmask na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que você abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir seu diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo:
```
force_install_dir C:\Soulmask-Server
```
:::

Agora execute o comando `app_update 3017310` que iniciará o download. O App ID **3017310** é o aplicativo **Soulmask**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode levar um tempo, mas vale a pena ter paciência! :)
:::

Quando o download for concluído, vá até o diretório onde os arquivos do servidor foram baixados. Lá, você pode usar o **StartServer.bat** para iniciar o servidor. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionando portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você deve alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado está usando. Você pode fazer isso diretamente via comandos PowerShell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Abra a busca do Windows e procure por **PowerShell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que você execute o PowerShell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Soulmask fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall do Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você deve criar novas regras para seu servidor Soulmask. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 8777, 27015
- UDP entrada e saída: 8777, 27015

Use nosso guia [Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de mais ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor. Para isso, vá no menu Multiplayer, escolha Conexão Direta por IP e insira o endereço IP e a porta usada, que por padrão é 3724, ou a que você configurou.

Recomendamos que você configure as opções do servidor primeiro, conforme a próxima seção, antes de acessar seu servidor.

## Configuração

Neste ponto, você já finalizou a configuração do seu servidor Soulmask. Você pode fazer configurações adicionais ajustando os parâmetros dentro do arquivo **StartServer.bat** que está na raiz do diretório e também no arquivo **GameUserSettings.ini** localizado em `../WS/Saved/Config/WindowsServer`.

Confira nosso guia [Configuração do Servidor](soulmask-configuration.md) para ver todos os parâmetros e opções de configuração disponíveis para seu servidor Soulmask.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até a raiz do diretório e execute o **StartServer.bat** para começar o processo de inicialização. Isso abrirá o console do servidor em um prompt de comando e iniciará o processo.

:::tip
Se seu servidor não iniciar e o prompt de comando simplesmente fechar, vá até o diretório `../WS/Saved/Logs` e confira o log mais recente para diagnosticar o problema.

Existe um problema comum relacionado ao serviço online Steam que falha ao iniciar nos binários do servidor dedicado Windows devido a empacotamento incorreto. Se o erro for relacionado ao Steam, vá até a raiz do diretório e mova os seguintes arquivos para a pasta `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Depois tente iniciar o servidor novamente, ele deve abrir o prompt de comando e iniciar normalmente.
:::

Agora você poderá se conectar diretamente ao seu servidor via IP, inserindo o endereço IP do seu servidor e a porta 8777 no menu multiplayer do jogo.

Se quiser que seu servidor apareça na lista de servidores, confira nosso guia [Configuração do Servidor](soulmask-configuration.md) e adicione o parâmetro `-SteamServerName` apropriado no seu arquivo **StartServer.bat**. Salve o arquivo e execute o batch novamente.

Você instalou com sucesso o Soulmask no seu Servidor Dedicado Windows.

<InlineVoucher />
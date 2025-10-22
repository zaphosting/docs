---
id: dedicated-windows-mythofempires
title: "Servidor Dedicado: Configuração do Servidor Dedicado Myth of Empires no Windows"
description: "Descubra como configurar um servidor dedicado Myth of Empires no seu VPS Windows de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Configuração Servidor MOE Dedicado
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Windows e quer instalar um servidor dedicado MOE nele? Você está no lugar certo. Neste guia vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Como Configurar o Servidor Myth Of Empires no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo para você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>

<InlineVoucher />

## Preparação
Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora você deve descompactar o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado MOE na próxima seção.

## Instalação

Após a instalação, você deve conseguir executar comandos dentro do prompt do **steamcmd.exe** que você abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir seu diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo:
```
force_install_dir C:\MOE-Server
```
:::

Agora execute o comando `app_update 1794810` que iniciará o download. O App ID **1794810** é o aplicativo **MOE**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Por favor, não interrompa o processo antes de ser concluído para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório de download onde todos os arquivos do servidor foram baixados.

### Acessando o PrivateServerTool

Diferente das instalações típicas do SteamCMD, o MOE exige que você pegue uma pasta da instalação local do jogo Steam para poder rodar o servidor no Windows.

Abra o Steam no seu sistema, clique com o botão direito no jogo **Myth of Empires** e selecione **Procurar arquivos locais** enquanto passa o mouse sobre a seção **Gerenciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Na pasta raiz que abrir, encontre a pasta **PrivateServerTool**. Essa é a pasta que você terá que copiar para o seu servidor. Você pode fazer isso facilmente usando `CTRL+C` para copiar no seu PC local, e `CTRL+V` para colar no seu servidor Windows via RDP. Certifique-se de colar na pasta raiz do seu servidor dedicado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Agora, vá para a próxima seção para fazer o redirecionamento de portas e configurar seu servidor.

### Redirecionando portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você deve alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado usa. Você pode fazer isso via comandos Powershell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor MOE fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária se abrir a página básica do Firewall do Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você deve criar novas regras para seu servidor MOE. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 11888, 12888
- UDP entrada e saída: 11888, 12888

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de mais ajuda para fazer isso.

</TabItem>
</Tabs>

Vá para a próxima seção antes de acessar seu servidor para criar seu arquivo de configuração e o arquivo `.bat` de inicialização.

## Configuração

Agora você vai usar a ferramenta do servidor que está na pasta que você copiou antes dos arquivos do jogo, para criar seu arquivo de configuração e o arquivo `.bat` de start que você usará para iniciar seu servidor.

Navegue até o seguinte diretório (a pasta que você copiou antes):
```
../MOE/PrivateServerTool
```

Nessa pasta, execute o arquivo **PrivateServerTool.exe**. Usando essa ferramenta, configure as opções do servidor do jeito que quiser, incluindo mods, configurações do jogo e muito mais.

Recomendamos configurar pelo menos os parâmetros básicos como **Nome do Servidor** antes de continuar.

Quando estiver pronto, vá até a aba **Start Console** na ferramenta, e clique no botão **Save Config** seguido do botão **Start Server**. Isso vai gerar o arquivo `StartPrivateServer.bat` que você usará para iniciar seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Recomendamos criar um atalho para o arquivo `StartPrivateServer.bat` clicando com o botão direito e usando **Criar atalho**, para facilitar na hora de iniciar.

:::note
Pode ser que você precise editar o caminho para a pasta do jogo dentro do arquivo `StartPrivateServer.bat` gerado automaticamente. Basta abrir o arquivo com um editor como o notepad e garantir que o caminho no começo do arquivo corresponde ao caminho onde o servidor está.

Se o caminho estiver errado, você pode clicar duas vezes na barra de caminho no topo quando estiver na raiz da pasta do seu servidor MOE dedicado para copiar o caminho atual, e colar no local correto dentro do arquivo.
:::

## Iniciando & Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório do seu servidor Myth of Empires e execute o **StartPrivateServer.bat** (ou o atalho se você criou um) para começar o processo de inicialização. Isso vai abrir o console do servidor em um prompt de comando e iniciar o processo. Agora você poderá se conectar diretamente ao seu servidor indo até a aba **Custom Server** e procurando seu servidor na caixa de busca.

:::tip
Se estiver tendo problemas para conectar ao servidor, abra seu arquivo `StartPrivateServer.bat` com um editor como o notepad e verifique se os dois parâmetros de IP correspondem ao IP do seu servidor Windows. Isso deve ser preenchido automaticamente pela ferramenta usada, mas é um ótimo passo para troubleshooting.
:::

Você instalou com sucesso o Myth of Empires no seu Servidor Dedicado Windows.

<InlineVoucher />
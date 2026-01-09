---
id: dedicated-windows-enshrouded
title: "Servidor Dedicado: Configuração do Servidor Dedicado Enshrouded no Windows"
description: "Descubra como configurar um Servidor Dedicado Enshrouded no seu VPS Windows ou servidor dedicado de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Windows ou servidor dedicado e quer instalar o serviço de Servidor Dedicado Enshrouded nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Como Configurar Servidor Dedicado Enshrouded no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>



## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente vários arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamar de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora você vai descompactar o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Enshrouded na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que você abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir seu diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo: 
```
force_install_dir C:\Enshrouded-Server
```
:::

Agora execute o comando `app_update 2278520` que vai iniciar o download. O App ID **2278520** é o aplicativo **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório onde os arquivos do servidor foram baixados. Lá, você pode usar o **enshrouded_server.exe** para iniciar o servidor. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas que o processo do servidor dedicado usa. Você pode fazer isso via comandos Powershell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e **Executar como Administrador** para que as permissões estejam liberadas e tudo funcione certinho.

:::info
Garanta que você rode o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Agora copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Enshrouded fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor Enshrouded. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 15636-15637
- UDP entrada e saída: 15636-15637

Use nosso guia [Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de mais ajuda para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor. Para isso, selecione seu personagem no menu principal, vá até a aba **Find Games** e clique em **Add Server**. Lá, insira o IP do seu servidor junto com a Porta (15636 por padrão) e a senha do servidor (se tiver, senão deixe em branco).

:::tip
Confira nosso guia [Configuração do Servidor](enshrouded-configuration.md) se quiser ativar uma senha para seu servidor e ajustar outras configurações.
:::

Recomendamos que você configure seu servidor primeiro na seção a seguir antes de acessá-lo.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Enshrouded. Você pode fazer configurações adicionais através de um arquivo de configuração que fica dentro do diretório do seu servidor.

Primeiro, navegue até o seguinte diretório:
```
..EnshroudedServer/ (diretório raiz)
```

Você vai encontrar o arquivo de configuração **enshrouded_server.json**. Por meio desse arquivo, é possível configurar alguns parâmetros do seu servidor. Veja nosso guia [Configuração do Servidor](enshrouded-configuration.md) para conferir todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório base do seu servidor Enshrouded e execute o **enshrouded_server.exe** para começar o processo de inicialização. Isso vai abrir o console do servidor em um prompt de comando e iniciar o processo. Você poderá se conectar diretamente ao seu servidor indo até a aba **Find Games**, clicando em **Add Server** e inserindo o IP e a Porta do servidor (padrão 15636).

Você instalou com sucesso o Enshrouded no seu Servidor Dedicado Windows.
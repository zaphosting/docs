---
id: vserver-windows-enshrouded
title: "VPS: Configuração do Servidor Dedicado Enshrouded no Windows"
description: "Descubra como configurar um Servidor Dedicado Enshrouded no seu VPS Windows para gameplay e controle sem complicações → Saiba mais agora"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Windows e quer instalar o serviço de Servidor Dedicado Enshrouded nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Como Configurar o Servidor Dedicado Enshrouded no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja na correria ou só querendo aprender de um jeito mais legal!"/>
<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente vários arquivos do workshop Steam e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamar de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora descompacte o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer programa como .7zip ou Winrar. Isso deve gerar um arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado Enshrouded na próxima seção.

## Instalação

Após a instalação, você deve conseguir executar comandos dentro do prompt do **steamcmd.exe** que abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo:
```
force_install_dir C:\Enshrouded-Server
```
:::

Agora execute o comando `app_update 2278520` que iniciará o download. O App ID **2278520** é o aplicativo **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório onde os arquivos do servidor foram baixados. Lá, você pode usar o **enshrouded_server.exe** para iniciar o servidor. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

### Redirecionamento de portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos Powershell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas e tudo funcione.

:::info
Garanta que o Powershell esteja rodando em modo Administrador, senão as configurações podem não ser aplicadas direito.
:::

Depois, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Enshrouded fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez precise clicar em **Configurações Avançadas** para abrir a janela correta se abrir a página básica do Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você precisa criar novas regras para seu servidor Enshrouded. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 15636-15637
- UDP entrada e saída: 15636-15637

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda extra para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor. Para isso, selecione seu personagem no menu principal, vá até a aba **Encontrar Jogos** e clique em **Adicionar Servidor**. Insira o IP do seu servidor junto com a Porta (15636 por padrão) e a senha do servidor (se tiver, senão deixe em branco).

:::tip
Confira nosso [Guia de Configuração do Servidor](enshrouded-configuration.md) se quiser ativar senha no servidor e ajustar outras configurações.
:::

Recomendamos que você configure seu servidor primeiro na próxima seção antes de acessá-lo.

## Configuração

Nesta etapa, você já terminou a configuração inicial do seu servidor Enshrouded. Pode fazer configurações adicionais através de um arquivo de configuração que fica dentro da pasta do servidor.

Primeiro, navegue até o seguinte diretório:
```
..EnshroudedServer/ (diretório raiz)
```

Lá você vai encontrar o arquivo de configuração **enshrouded_server.json**. Com ele, dá para ajustar vários parâmetros do seu servidor. Veja nosso [Guia de Configuração do Servidor](enshrouded-configuration.md) para conhecer todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até a pasta base do seu servidor Enshrouded e execute o **enshrouded_server.exe** para começar o processo de inicialização. Isso vai abrir o console do servidor em um prompt de comando e iniciar o servidor. Você poderá se conectar diretamente ao seu servidor indo na aba **Encontrar Jogos**, clicando em **Adicionar Servidor** e inserindo o IP e a Porta do servidor (padrão 15636).

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Enshrouded no seu VPS! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
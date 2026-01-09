---
id: vserver-windows-foundry
title: "VPS: Configuração do Foundry Dedicated Server no Windows"
description: "Descubra como configurar um Foundry Dedicated Server no seu VPS Windows para um aluguel de servidores sem complicações → Saiba mais agora"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço Foundry Dedicated Server nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Como Configurar Foundry Dedicated Server no VPS Windows!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo. Seja na correria ou só pra absorver o conteúdo de um jeito mais legal!"/>
<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente vários arquivos do Steam Workshop e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamar de `steamcmd`. Vá até a pasta Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora descompacte o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer programa como .7zip ou Winrar. Isso deve gerar o arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do Foundry dedicated server na próxima seção.

## Instalação

Após a instalação, você deve conseguir executar comandos dentro do prompt do **steamcmd.exe** que abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo:
```
force_install_dir C:\Foundry-Server
```
:::

Agora execute o comando `app_update 2915550` que vai iniciar o download. O App ID **2915550** é o aplicativo **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

Quando terminar, vá até o diretório de download, onde todos os arquivos do servidor foram baixados. Lá, você pode usar o **FoundryDedicatedServerLauncher.exe** para iniciar o servidor. Porém, recomendamos configurar o redirecionamento de portas e ajustar seu servidor antes.

### Redirecionamento de portas no seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas e tudo funcione.

:::info
Certifique-se de rodar o PowerShell em modo Administrador, senão as configurações podem não aplicar direito.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Foundry fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela correta, caso abra a página básica do Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você precisa criar novas regras para seu servidor Foundry. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 3724, 27015
- UDP entrada e saída: 3724, 27015

Use nosso [Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda extra para isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor. Para isso, vá no menu Multiplayer, escolha IP Direct Connect e digite seu endereço IP e a porta usada, que por padrão é 3724, conforme configurado.

Recomendamos que você configure as opções do servidor antes de acessar, conforme a próxima seção.

## Configuração

Neste ponto, você já finalizou a configuração inicial do seu servidor Foundry. Pode fazer configurações adicionais via arquivo de configuração. Volte para a pasta do jogo e crie um arquivo **app.cfg** (se ainda não existir) na raiz do diretório. Ele deve ficar na mesma pasta do executável **FoundryDedicatedServerLauncher.exe**.

Agora abra o arquivo **app.cfg** com o bloco de notas ou editor que preferir e comece a adicionar as opções de configuração que quiser ajustar. Basta criar uma linha nova para cada parâmetro, com um sinal de igual e o valor que deseja definir.

Por exemplo, aqui estão três opções configuradas:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Confira nosso [Configuração do Servidor](foundry-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até a pasta raiz e execute o **FoundryDedicatedServerLauncher.exe** para começar o processo de inicialização. Isso vai abrir o console do servidor em um prompt de comando e iniciar o servidor.

Você poderá se conectar diretamente ao seu servidor via IP indo em **Multiplayer->IP Direct Connect** e digitando o endereço IP do seu servidor e a porta 3724, que é a padrão e a que você configurou no redirecionamento.

Se quiser que seu servidor apareça na lista pública, confira nosso [Configuração do Servidor](foundry-configuration.md) e adicione os parâmetros `server_name` e `server_is_public` no arquivo de configuração. Salve o arquivo e execute o servidor novamente.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Foundry no seu VPS! Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
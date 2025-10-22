---
id: dedicated-windows-arksurvivalascended
title: "Servidor Dedicado: Configuração do Servidor Dedicado ARK Survival Ascended no Windows"
description: "Descubra como configurar um Servidor Dedicado ARK: Survival Ascended no seu VPS Windows ou servidor dedicado de forma rápida e fácil → Saiba mais agora"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Windows ou servidor dedicado e quer instalar o serviço de servidor dedicado ARK: Survival Ascended nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="Configuração do Servidor Dedicado ARK: Survival Ascended no VPS Windows" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo de forma clara. Seja você apressado ou só curte aprender do jeito mais envolvente possível!"/>

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

Depois de acessar seu servidor, será necessário configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos do Steam Workshop e servidores dedicados. Baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou diretamente [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crie uma nova pasta em algum lugar no seu servidor, neste exemplo vamos chamá-la de `steamcmd`. Vá até a sua pasta de Downloads, encontre o arquivo **steamcmd.zip** que você acabou de baixar e coloque-o dentro da pasta `steamcmd`. Agora descompacte o arquivo clicando com o botão direito e usando a função de descompactar do Windows, ou qualquer outro programa como .7zip ou Winrar. Isso deve resultar no arquivo **steamcmd.exe** descompactado.

Basta executar o **steamcmd.exe** e aguardar até que o processo de instalação seja concluído.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Assim que a mensagem **Loading Steam API.... OK** aparecer, o processo foi concluído com sucesso e você pode começar a instalação do servidor dedicado ARK: Survival Ascended na próxima seção.

## Instalação

Após a instalação, você deverá conseguir executar comandos dentro do prompt do **steamcmd.exe** que abriu antes. Você precisa fazer login antes de poder fazer qualquer coisa, usando o usuário **anonymous**, com o comando: `login anonymous`

Depois de logado, você pode começar a baixar os arquivos.

:::tip
Opcional: Você pode definir o diretório de instalação preferido usando o comando `force_install_dir [caminho]`, substituindo `[caminho]` pelo caminho que deseja usar para seu servidor. Por exemplo: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Agora execute o comando `app_update 2430930` que iniciará o download. O App ID **2430930** é o aplicativo do **Servidor Dedicado ARK: Survival Ascended**.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Por favor, não interrompa o processo antes de terminar para evitar erros. Pode demorar um pouco, mas vale a pena ter paciência! :)
:::

### Criando o Arquivo de Inicialização

Quando o download for concluído com sucesso, navegue até o diretório onde você fez a instalação e vá para o seguinte subdiretório:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Neste subdiretório, você precisará criar seu arquivo de inicialização, que é necessário para iniciar o servidor dedicado. Crie um arquivo com o nome: `start-ark.bat`. Você pode criar um documento de texto primeiro e depois renomeá-lo para a extensão `.bat`.

:::info
Certifique-se de que a opção "Exibir extensões de arquivo" esteja ativada no seu Explorador de Arquivos para garantir que a extensão correta seja usada.
:::

Abra o arquivo com um editor de texto (como Notepad++) e adicione o seguinte conteúdo:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Neste comando, substitua `[server_name]`, `[admin_password]` e `[max_players]` pelos valores que desejar.

Se quiser configurar uma senha para que jogadores comuns possam entrar, adicione `?ServerPassword=[join_password]` ao comando acima. Ficaria assim:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Garanta que você configurou as variáveis e salvou as alterações antes de fechar o arquivo.

Seu servidor agora estará acessível localmente via `127.0.0.1:7777` assim que você executar o arquivo de inicialização e o servidor estiver online. Porém, você ainda precisa adicionar regras de encaminhamento de porta no Firewall do Windows para que seu servidor fique acessível publicamente, o que será explicado na próxima seção.

### Encaminhamento de Portas do seu servidor

Para garantir que seu servidor seja acessível publicamente, você deve configurar as regras de encaminhamento de porta para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos Powershell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas e tudo funcione.

:::info
Certifique-se de executar o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Agora copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Esses comandos criarão automaticamente as regras de firewall necessárias para que seu servidor Ark: Survival Ascended fique acessível publicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela correta, caso abra a página básica do Firewall.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você deve criar novas regras para seu servidor Ark: Survival Ascended. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione as seguintes portas e protocolos:
- TCP entrada e saída: 27020
- UDP entrada e saída: 27015
- UDP entrada e saída: 7777-7778

Use nosso [Guia de Encaminhamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda extra para fazer isso.

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá conectar-se a ele pelo endereço IP do seu servidor. Para isso, abra o console dentro do Ark: Survival Ascended e execute `open [seu_endereço_ip]:7777`.

Recomendamos que você configure as opções do seu servidor primeiro, conforme a próxima seção, antes de acessar o servidor.

## Configuração

Neste ponto, você já finalizou a configuração do seu servidor dedicado Ark: Survival Ascended. Você pode fazer configurações adicionais através de dois arquivos encontrados no diretório do seu servidor.

Primeiro, navegue até os seguintes diretórios:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Você encontrará os arquivos de configuração **DefaultGameUserSettings.ini** e **Gameusersettings.ini**. Neles, você pode editar várias variáveis e opções relacionadas ao seu servidor.

:::warning[SUPORTE CROSSPLAY]
Desde 18 de novembro de 2023, donos de servidores precisam instalar manualmente a lista de revogação de certificados, que pode ser obtida em https://dev.epicgames.com/ (ou diretamente em http://crl.r2m02.amazontrust.com/r2m02.crl). O arquivo r2m02.crl baixado deve ser instalado (clique com o botão direito no arquivo) selecionando "Colocar todos os certificados no repositório a seguir" e escolhendo "Autoridades de Certificação Raiz Confiáveis". Pode ser necessário reiniciar o sistema.

Se antes de 18 de novembro de 2023 os donos de servidores instalaram o arquivo de certificado r2m02.cer e o servidor não aparece, esse certificado deve ser removido do sistema para que os servidores voltem a ser visíveis. Para remover o certificado revogado, execute (Windows + R) certmgr.msc e procure por Amazon RSA 2048 M02 em Autoridades de Certificação Raiz Confiáveis. O mesmo deve ser feito executando certlm.msc. Por fim, pode ser necessário reiniciar o sistema.
:::

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Porém, para que ele inicie com sucesso, você precisa instalar o [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) no seu VPS Windows.

:::info
Você deve instalar o [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) no seu VPS Windows antes de tentar iniciar o servidor, caso ainda não tenha, pois é uma dependência. Seu servidor pode não iniciar sem ele.
:::

Com isso instalado no VPS, você pode iniciar o servidor executando o arquivo **start-ark.bat** que criou anteriormente.

Isso abrirá o console do servidor em um prompt de comando e iniciará o processo. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você pode conectar-se diretamente abrindo o console dentro do jogo e executando `open [seu_endereço_ip]:7777`.

Você instalou com sucesso o Ark: Survival Ascended no seu servidor dedicado Windows.

<InlineVoucher />
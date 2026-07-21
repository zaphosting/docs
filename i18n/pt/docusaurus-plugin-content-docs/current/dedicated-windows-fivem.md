---
id: dedicated-windows-fivem
title: "Configuração do Servidor Dedicado FiveM"
description: "Descubra como configurar e rodar seu próprio Servidor Dedicado FiveM com txAdmin para uma jogatina multiplayer sem complicações → Saiba mais agora"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um servidor dedicado e quer instalar e operar seu próprio serviço de Servidor Dedicado FiveM com txAdmin? Você está no lugar certo! A seguir, explicaremos todos os passos necessários para instalar, configurar e o que você precisa considerar.

:::warning Sistema operacional selecionado e instalado
Pressupõe-se que você já tenha selecionado e instalado um sistema operacional para seu VPS/Servidor Dedicado. Se ainda não completou essa etapa, primeiro siga os passos do guia [Configuração inicial](dedicated-setup.md) para servidores dedicados.
:::

## Preparação

Para configurar um servidor FiveM, algumas etapas de preparação são necessárias e devem ser feitas antes do início da configuração real do Servidor Dedicado FiveM.

### Configurar banco de dados

Se você quiser usar e instalar recursos que exigem banco de dados, precisará de um **servidor de banco de dados** adicional. Existem várias formas de configurar esse servidor. No nosso guia [Instalar MySQL](dedicated-windows-installmysql.md), mostramos como instalar seu próprio **servidor de banco de dados** no seu **servidor dedicado**.

### Baixar o software do servidor FiveM

O próximo passo é baixar o software do servidor FiveM. Para isso, acesse o site [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) do FiveM por meio de um dos navegadores instalados de sua preferência e baixe a versão mais recente do servidor FiveM.

Descompacte o arquivo baixado na pasta Downloads e mova os arquivos do servidor FiveM preferencialmente para um diretório separado. Neste exemplo, o software do servidor está em uma pasta chamada **FiveM** na área de trabalho.

:::warning Ferramenta de descompactação necessária
Para descompactar o software do servidor FiveM baixado, é necessária uma ferramenta de descompactação para o arquivo compactado. Neste exemplo, usamos o [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### Criar chave de licença do servidor FiveM

Todo servidor FiveM precisa de sua própria chave de licença, que é gerenciada pelo novo [Portal Cfx.re](http://portal.cfx.re/). A chave de licença está vinculada à sua conta Cfx.re. Faça login no site, navegue até a categoria **Server** e clique no botão **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Configuração

Agora você pode começar a instalação do Servidor FiveM e do txAdmin. Para iniciar esta etapa, abra novamente o diretório do seu Servidor FiveM e execute o aplicativo `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

Assim que o aplicativo do servidor for executado, o console do servidor e o txAdmin serão abertos. Na interface do txAdmin, você deve vincular sua **conta Cfx.re** ao txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### Configuração do txAdmin

Durante a configuração do txAdmin, seu próprio servidor FiveM será instalado e configurado em cinco etapas. Siga as instruções na interface do txAdmin e defina primeiro um **nome do servidor**. Depois, selecione o **tipo de servidor** desejado. Este exemplo mostra a instalação de um servidor FiveM com QBCore pré-instalado.

Selecione a opção **Popular Recipes** na etapa **Deployment Type** e depois o **QBCore Framework Template**. Confirme o **Data Directory** desejado e inicie o **Recipe Deployer** para concluir a instalação.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante o Recipe Deployer, as últimas informações necessárias devem ser adicionadas antes que o servidor possa ser iniciado. Insira sua chave de licença FiveM criada anteriormente no campo **License Key**. Depois, clique em **Show/Hide Database Options (Advanced)** e informe os dados de login do seu servidor de banco de dados. Neste caso, é necessário apenas a senha previamente definida para o usuário **root**. Todas as outras configurações podem permanecer inalteradas. Verifique suas informações e clique em **Run Recipe** para iniciar o processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### Configuração do firewall

Para garantir que seu servidor esteja acessível ao público, você deve alterar as regras de encaminhamento de portas para as portas usadas pelo processo do VPS/Servidor Dedicado. Você pode fazer isso diretamente via comandos Powershell, que é mais fácil, ou normalmente pela página do Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Certifique-se de clicar com o botão direito e selecionar **Executar como Administrador** para que as permissões estejam disponíveis e tudo funcione corretamente.

:::info
Garanta que você execute o Powershell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Em seguida, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Esses comandos criarão automaticamente as regras de firewall necessárias para que seu servidor FiveM fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser necessário clicar em **Configurações Avançadas** para abrir a janela necessária, caso você abra a página base do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Você deve criar novas regras para seu servidor FiveM. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione-as para os seguintes protocolos e portas:
- TCP entrada e saída: 30120
- UDP entrada e saída: 30120

Use nosso guia [Encaminhamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda adicional para fazer isso.

</TabItem>
</Tabs>

## Conclusão

Você instalou e configurou com sucesso um serviço de Servidor Dedicado FiveM no seu VPS/Servidor Dedicado. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂
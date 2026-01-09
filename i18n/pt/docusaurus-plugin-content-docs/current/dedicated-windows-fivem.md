---
id: dedicated-windows-fivem
title: "Servidor Dedicado: Configuração do Servidor Dedicado FiveM"
description: "Descubra como configurar e rodar seu próprio Servidor Dedicado FiveM com txAdmin para uma jogatina multiplayer sem stress → Saiba mais agora"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introdução

Você tem um servidor dedicado e quer instalar e operar seu próprio serviço de Servidor Dedicado FiveM com txAdmin? Você está no lugar certo! A seguir, vamos explicar todos os passos necessários para instalar e configurar, além do que você precisa ficar ligado. 



:::warning  Sistema operacional selecionado e instalado
Pressupõe-se que você já tenha selecionado e instalado um sistema operacional para seu servidor dedicado. Se ainda não fez isso, primeiro siga os passos do guia [Configuração Inicial](dedicated-setup.md) para servidores dedicados.
:::



## Preparação

Para configurar um servidor FiveM, alguns passos de preparação são necessários e devem ser feitos antes de começar a instalação do Servidor Dedicado FiveM.



### Configurar banco de dados

Se você quiser usar e instalar recursos que precisam de banco de dados, vai precisar de um **servidor de banco de dados** adicional. Existem várias formas de configurar esse servidor. No nosso guia [Instalar MySQL](dedicated-windows-installmysql.md), mostramos como instalar seu próprio **servidor de banco de dados** no seu **servidor dedicado**.



### Baixar o software do Servidor FiveM

O próximo passo é baixar o software do servidor FiveM. Para isso, acesse o site [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) do FiveM pelo navegador de internet que preferir e baixe a versão mais recente do servidor FiveM. 

Descompacte o arquivo baixado na pasta Downloads e mova os arquivos do servidor FiveM preferencialmente para uma pasta separada. Neste exemplo, o software do servidor está em uma pasta chamada **FiveM** na área de trabalho. 

:::warning Ferramenta de descompactação necessária
Para descompactar o software do Servidor FiveM baixado, é preciso uma ferramenta de descompactação para o arquivo compactado. Neste exemplo, usamos o [7Zip](https://7-zip.com/). 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Criar chave de licença do Servidor FiveM

Todo servidor FiveM precisa da sua própria chave de licença, que é gerenciada pelo novo [Portal Cfx.re](http://portal.cfx.re/). A chave de licença fica vinculada à sua conta Cfx.re. Faça login no site, vá na categoria **Server** e clique no botão **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuração

Agora você pode começar a instalar o Servidor FiveM e o txAdmin. Para isso, abra novamente a pasta do Servidor FiveM e execute o aplicativo `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Quando o aplicativo do servidor for executado, o console do servidor e o txAdmin vão abrir. Na interface do txAdmin, você deve vincular sua **conta Cfx.re** com o txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuração do txAdmin

Durante a configuração do txAdmin, seu próprio servidor FiveM será instalado e configurado em cinco passos. Siga as instruções na interface do txAdmin e defina primeiro um **nome para o servidor**. Depois, selecione o **tipo de servidor** desejado. Este exemplo mostra a instalação de um servidor FiveM com QBCore pré-instalado.

Selecione a opção **Popular Recipes** na etapa **Deployment Type** e depois o **QBCore Framework Template**. Confirme o **Diretório de Dados** desejado e inicie o **Recipe Deployer** para concluir a instalação.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante o Recipe Deployer, as últimas informações necessárias devem ser adicionadas antes do servidor poder ser iniciado de vez. Insira sua chave de licença FiveM criada anteriormente no campo **License Key**. Depois clique em **Show/Hide Database Options (Advanced)** e informe os dados de login do seu servidor de banco de dados. Neste caso, só é necessário a senha definida para o usuário **root**. Todas as outras configurações podem ficar como estão. Confira seus dados e clique em **Run Recipe** para iniciar o processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuração do firewall
Para garantir que seu servidor fique acessível ao público, você precisa alterar as regras de encaminhamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos Powershell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas e tudo funcione.

:::info
Garanta que o Powershell esteja rodando em modo Administrador, senão as configurações podem não ser aplicadas direito.
:::

Depois, copie e cole os seguintes comandos no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor FiveM fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela necessária se abrir a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor FiveM. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 30120
- UDP entrada e saída: 30120

Use nosso guia [Encaminhamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda extra para fazer isso.

</TabItem>
</Tabs>

## Conclusão

Você instalou e configurou com sucesso um serviço de Servidor Dedicado FiveM no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂




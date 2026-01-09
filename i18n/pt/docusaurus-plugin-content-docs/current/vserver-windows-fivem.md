---
id: vserver-windows-fivem
title: "VPS: Configuração de Servidor Dedicado FiveM"
description: "Descubra como instalar e configurar seu próprio Servidor Dedicado FiveM em um VPS para uma jogatina multiplayer sem travas → Saiba mais agora"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introdução

Você tem um VPS e quer instalar e rodar seu próprio serviço de Servidor Dedicado FiveM com txAdmin? Você está no lugar certo! A seguir, vamos explicar todos os passos necessários para instalar e configurar, além do que você precisa ficar ligado. 


## Preparação

Para montar um servidor FiveM, alguns passos de preparação são necessários e devem ser feitos antes de começar a configuração do Servidor Dedicado FiveM.



### Configurar banco de dados

Se você quiser usar e instalar recursos que precisam de banco de dados, vai precisar de um **servidor de banco de dados** extra. Existem várias formas de configurar esse servidor. No nosso [Guia de Instalação do MySQL](vserver-windows-installmysql.md), mostramos como instalar seu próprio **servidor de banco de dados** no seu **VPS**.



### Baixar o software do servidor FiveM

O próximo passo é baixar o software do servidor FiveM. Para isso, acesse o site da [Lista de Builds do Servidor](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) do FiveM pelo navegador que preferir e baixe a build mais recente do servidor FiveM. 

Descompacte o arquivo baixado na pasta Downloads e mova os arquivos do servidor FiveM para uma pasta separada. Neste exemplo, o software do servidor está numa pasta chamada **FiveM** na área de trabalho. 

:::warning Ferramenta de descompactação necessária
Para descompactar o software do Servidor FiveM baixado, você vai precisar de uma ferramenta para arquivos compactados. Neste exemplo, usamos o [7Zip](https://7-zip.com/). 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Criar chave de licença do servidor FiveM

Todo servidor FiveM precisa da sua própria chave de licença, que é gerenciada pelo novo [Portal Cfx.re](http://portal.cfx.re/). A chave de licença fica vinculada à sua conta Cfx.re. Faça login no site, vá na categoria **Servidor** e clique no botão **Gerar Chave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuração

Agora você pode começar a instalar o Servidor FiveM e o txAdmin. Para isso, abra novamente a pasta do seu Servidor FiveM e execute o aplicativo `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Quando o aplicativo do servidor rodar, o console do servidor e o txAdmin vão abrir. Na interface do txAdmin, você precisa vincular sua **conta Cfx.re** com o txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configuração do txAdmin

Durante a configuração do txAdmin, seu próprio servidor FiveM será instalado e configurado em cinco passos. Siga as instruções na interface do txAdmin e defina primeiro um **nome para o servidor**. Depois, escolha o **tipo de servidor** desejado. Este exemplo mostra a instalação de um servidor FiveM com QBCore pré-instalado.

Selecione a opção **Receitas Populares** no passo **Tipo de Implantação** e depois o **Template do Framework QBCore**. Confirme o **Diretório de Dados** desejado e inicie o **Implantador de Receitas** para finalizar a instalação.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante o Implantador de Receitas, as últimas informações necessárias devem ser adicionadas antes do servidor poder ser iniciado. Insira sua chave de licença FiveM criada anteriormente no campo **License Key**. Depois clique em **Mostrar/Ocultar Opções de Banco de Dados (Avançado)** e informe os dados de login do seu servidor de banco de dados. Neste caso, só é necessário a senha definida para o usuário **root**. As outras configurações podem ficar como estão. Confira os dados e clique em **Executar Receita** para iniciar o processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configuração do firewall
Para garantir que seu servidor fique acessível para o público, você precisa alterar as regras de encaminhamento de porta para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos do Powershell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **Powershell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam liberadas e tudo funcione certinho.

:::info
Tenha certeza de rodar o Powershell em modo Administrador, senão as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os comandos abaixo no prompt do Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para seu servidor FiveM ficar acessível para o público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez você precise clicar em **Configurações Avançadas** para abrir a janela necessária, caso abra a página básica do Firewall do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor FiveM. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 30120
- UDP entrada e saída: 30120

Se precisar de ajuda, confira nosso [Guia de Encaminhamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusão

Você instalou e configurou com sucesso um serviço de Servidor Dedicado FiveM no seu VPS. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂


<InlineVoucher />
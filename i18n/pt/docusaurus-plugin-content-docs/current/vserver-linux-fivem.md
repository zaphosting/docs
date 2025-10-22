---
id: vserver-linux-fivem
title: "VPS: Configuração de Servidor Dedicado FiveM Linux (Interface GS/TS3)"
description: "Descubra como configurar e operar seu próprio Servidor Dedicado FiveM com txAdmin para uma jogatina multiplayer sem complicações → Saiba mais agora"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introdução
Você tem um VPS e quer instalar e operar seu próprio serviço de Servidor Dedicado FiveM com txAdmin? Você está no lugar certo! A seguir, vamos explicar todos os passos necessários para instalar e configurar, além do que você precisa ficar ligado.



## Preparação

Para configurar um servidor FiveM, alguns passos de preparação são necessários e devem ser feitos antes de começar a instalação do Servidor Dedicado FiveM.


### Configurar banco de dados

Para nossa opção de interface GS/TS3, já fornecemos nossos próprios bancos de dados incluídos. Porém, se preferir configurar seu próprio servidor de banco de dados e banco, recomendamos dar uma olhada no [guia de Instalação de banco de dados](vserver-linux-databases.md). 

:::warning
Se você usar seu próprio banco de dados, será necessário substituir as informações de banco predefinidas pelas suas durante a configuração do txAdmin. 
:::



### Instalar interface GS/TS3
Com a interface amigável GS/TS3, você pode instalar seu Servidor Dedicado FiveM com apenas alguns cliques. Não é preciso conhecimento prévio para essa instalação. A configuração de todos os pacotes necessários, arquivos do servidor e a instalação em si são totalmente automatizadas, economizando seu tempo e esforço.

:::warning
A funcionalidade da interface GS/TS3 pode ser usada nos seguintes sistemas operacionais:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Já estamos trabalhando para disponibilizar outros sistemas operacionais e versões mais recentes em breve.
:::

Se você ainda não conhece a interface GS/TS3, recomendamos dar uma olhada no nosso [guia da Interface GS/TS3](dedicated-linux-gs-interface.md). 

Com a interface GS/TS3 instalada, abra o serviço do servidor de jogos recém-criado. Lá, agora é preciso selecionar o jogo. Para isso, vá até a página **Games**. Clique nos jogos disponíveis, busque por txAdmin e clique no botão de instalar. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Criar chave de licença do servidor FiveM

Todo servidor FiveM precisa da sua própria chave de licença, que é gerenciada pelo novo [Portal Cfx.re](http://portal.cfx.re/). A chave de licença fica vinculada à sua conta Cfx.re. Faça login no site, navegue até a categoria **Server** e clique no botão **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuração

Agora você pode começar a configurar o servidor FiveM e o txAdmin. Para isso, abra o dashboard do seu servidor de jogos. Você vai encontrar o link e os dados de login para a instância do txAdmin na seção txAdmin. Abra e faça login lá. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuração do txAdmin

Durante a configuração do txAdmin, seu próprio servidor FiveM é instalado e configurado em cinco passos. Siga as instruções na interface do txAdmin e defina primeiro um **nome do servidor**. Depois, selecione o **tipo de servidor** desejado. Este exemplo mostra a instalação de um servidor FiveM com QBCore pré-instalado.

Selecione a opção **Popular Recipes** na etapa **Deployment Type** e depois o **QBCore Framework Template**. Confirme o **Diretório de Dados** desejado e inicie o **Recipe Deployer** para concluir a instalação.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuração do firewall

Ao instalar o servidor FiveM via interface GS/TS3, todo o redirecionamento de portas necessário é configurado **automaticamente** no firewall. Caso tenha algum problema, você também pode configurar o redirecionamento manualmente via SSH com o seguinte comando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusão

Você instalou e configurou com sucesso um serviço de Servidor Dedicado FiveM no seu VPS. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂


<InlineVoucher />
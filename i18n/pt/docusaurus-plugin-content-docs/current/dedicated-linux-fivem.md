---
id: dedicated-linux-fivem
title: "Servidor Dedicado: Configuração do Servidor Dedicado FiveM Linux (Interface GS/TS3)"
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
Pressupõe-se que você já tenha selecionado e instalado um sistema operacional para seu servidor dedicado. Se ainda não fez isso, primeiro siga os passos do guia [Configuração inicial](dedicated-setup.md) para servidores dedicados.
:::



## Preparação

Para configurar um servidor FiveM, alguns passos de preparação são necessários e devem ser feitos antes de começar a instalação do Servidor Dedicado FiveM.


### Configurar banco de dados

Para nossa opção de interface GS/TS3, já fornecemos nossos próprios bancos de dados incluídos. Porém, se preferir configurar seu próprio servidor de banco de dados e banco, recomendamos dar uma olhada no guia [Instalar banco de dados](dedicated-linux-databases.md). 

:::warning
Se você usar seu próprio banco de dados, precisará substituir as informações de banco predefinidas pelas suas durante a configuração do txAdmin. 
:::



###  Instalar interface GS/TS3
Com a interface amigável GS/TS3, você instala seu Servidor Dedicado FiveM com poucos cliques. Não precisa de conhecimento prévio para essa instalação. A configuração de todos os pacotes necessários, arquivos do servidor e a instalação em si são totalmente automatizadas, economizando seu tempo e esforço.

:::warning
A funcionalidade da interface GS/TS3 pode ser usada nos seguintes sistemas operacionais:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Já estamos trabalhando para disponibilizar outros sistemas operacionais e versões mais recentes em breve.
:::

Se ainda não conhece a interface GS/TS3, recomendamos dar uma olhada no nosso guia [Interface GS/TS3](dedicated-linux-gs-interface.md). 

Após instalar a interface GS/TS3, abra o serviço de servidor de jogos recém-criado. Lá, agora é preciso selecionar o jogo. Para isso, vá até a página **Jogos**. Clique nos jogos disponíveis, busque por txAdmin e clique no botão de instalar. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Criar chave de licença do Servidor FiveM

Todo servidor FiveM precisa da sua própria chave de licença, que é gerenciada pelo novo [Portal Cfx.re](http://portal.cfx.re/). A chave de licença está vinculada à sua conta Cfx.re. Faça login no site, vá até a categoria **Servidor** e clique no botão **Gerar Chave**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuração

Agora você pode começar a configurar o servidor FiveM e o txAdmin. Para isso, abra o dashboard do seu servidor de jogos. Você vai encontrar o link e os dados de login para a instância do txAdmin na seção txAdmin. Abra e faça login lá. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configuração do txAdmin

Durante a configuração do txAdmin, seu próprio servidor FiveM é instalado e configurado em cinco passos. Siga as instruções na interface do txAdmin e defina primeiro um **nome do servidor**. Depois, selecione o **tipo de servidor** desejado. Este exemplo mostra a instalação de um servidor FiveM com QBCore pré-instalado.

Selecione a opção **Receitas Populares** no passo **Tipo de Implantação** e depois o **Template do Framework QBCore**. Confirme o **Diretório de Dados** desejado e inicie o **Implantador de Receitas** para concluir a instalação.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configuração do firewall

Ao instalar o servidor FiveM via interface GS/TS3, todo o redirecionamento de portas necessário é configurado **automaticamente** no firewall. Se tiver algum problema, você também pode configurar o redirecionamento manualmente via SSH com o comando abaixo: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusão

Você instalou e configurou com sucesso um serviço de Servidor Dedicado FiveM no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂




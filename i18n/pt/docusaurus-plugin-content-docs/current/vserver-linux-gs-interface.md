---
id: vserver-linux-gs-interface
title: "VPS: Interface Gameserver/TS3"
description: "Descubra como configurar facilmente servidores de jogos e de voz em VPS Linux sem conhecimento prévio usando uma interface automatizada → Saiba mais agora"
sidebar_label: Interface GS/TS3
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Se os produtos de servidor de jogos não forem do seu gosto ou não atenderem às suas expectativas, ou se você precisar do seu serviço de outras formas, usar um VPS geralmente é uma opção melhor. No entanto, você frequentemente enfrenta o desafio de que nem todos os serviços são automatizados ou pré-instalados. Configurar serviços como servidores de jogos, servidores Teamspeak 3 e bots de música precisa ser feito por conta própria.

Para resolver esse problema, desenvolvemos uma solução prática para nosso VPS ou servidor dedicado baseado em Linux. A chamada interface Gameserver/Teamspeak 3 Server (Interface GS/TS3)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Configure um servidor de jogos usando VPS Linux SEM EXPERIÊNCIA!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>

<InlineVoucher />

## Caso de uso

Com a interface GS/TS3 super amigável, você pode instalar Teamspeak 3 ou outros serviços selecionados de servidor de jogos no seu VPS ou servidor dedicado baseado em Linux com apenas alguns cliques. Não é necessário conhecimento prévio para essa instalação. A configuração de todos os pacotes necessários, arquivos do servidor e a instalação em si são totalmente automatizadas, economizando seu tempo e esforço.

:::warning
A funcionalidade da interface GS/TS3 pode ser usada com os seguintes sistemas operacionais:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Já estamos trabalhando para disponibilizar outros sistemas operacionais e versões mais recentes em breve.
:::



## Serviços / jogos disponíveis

A interface GS/TS3 suporta a configuração de servidores de jogos, servidores de voz e bots de música. A maioria dos jogos que oferecemos para nossos produtos de servidor de jogos também está disponível na opção da interface GS/TS3. Isso vale para todos os jogos que operamos ativamente no Linux. Todos os jogos que rodam em sistemas operacionais Windows infelizmente não podem ser instalados. Nesses casos, só é possível a instalação manual, desde que o jogo suporte uma versão de servidor Linux.

| Serviços    | Suportado |
| ----------- | ---- |
| Servidor de jogos  | ✔️    |
| Servidor de voz | ✔️    |
| Musicbot (Sinuxbot)   | ✔️    |



## Instalação e configuração

Para instalar a interface GS/TS3, você precisa navegar até o painel de navegação **Configurações** na administração do seu produto e clicar no subitem **Gameserver / TS3**. 

Na primeira vez que acessar a interface GS/TS3, você será levado ao assistente de configuração super intuitivo. Para configurar a interface e vinculá-la ao seu servidor, é necessário primeiro criar uma chave SSH. Essa chave é necessária para que o site estabeleça uma conexão segura com o servidor. Isso possibilita configurar, gerenciar e controlar serviços como servidores de jogos e servidores Teamspeak 3 diretamente pela interface.

Lá, a chave SSH deve ser criada. Para isso, clique no botão **Gerar chave SSH** e depois adicione a chave clicando no botão **Adicionar chave**. 


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Depois de clicar em **Adicionar chave**, a chave SSH é armazenada no seu servidor. A interface GS/TS3 pode então ser adicionada ao seu servidor.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Nota:** Se a chave SSH não for reconhecida imediatamente, reiniciar o servidor e atualizar a página pode resolver.
:::

Durante a instalação, você pode acompanhar o progresso atual. Lembre-se que a instalação e configuração da interface e seus pacotes podem levar um tempo. Normalmente, isso pode levar de 5 a 15 minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Atenção**: Por favor, não continue o processo até que a interface esteja completamente instalada. Você pode reconhecer a instalação bem-sucedida pelo fato de a barra de progresso desaparecer e aparecer "Instalado" em vez de "Faltando" para cada pacote necessário.
:::



### Criar servidor de jogos

Desde que a criação e instalação da interface GS/TS3 tenha sido concluída com sucesso, você pode começar a configurar os serviços. A instalação de um servidor de jogos é feita pelo botão **Instalar servidor de jogos** na categoria **Servidor de jogos**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



No próximo passo, você pode escolher o endereço IP do servidor de jogos desejado (caso seu servidor tenha mais de um IP). Também pode especificar a porta desejada, o número de slots e o boost de RAM individualmente.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Confirme que todos os detalhes estão corretos e atendem às suas necessidades. Assim que fizer todas as configurações, clique em "Instalar servidor de jogos agora" para iniciar o processo de instalação. O servidor de jogos será configurado conforme suas especificações e logo você poderá começar a jogar. Agora você pode visualizar e acessar seu servidor de jogos recém-criado na lista.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Você está agora na administração do seu servidor de jogos. Lá, pode selecionar e instalar o jogo desejado para seu servidor de jogos no painel de navegação **Configurações** em **Jogos**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Aqui você encontra uma lista de todos os jogos que pode instalar no seu servidor. Neste exemplo, será instalado um servidor com o jogo (pacote) Minecraft: Paperspigot. Selecione seu jogo desejado e clique no botão verde para iniciar a instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Será exibida uma visão geral com todas as condições necessárias. Se todas as condições forem atendidas, você pode confirmar o processo com o botão **Aceitar e instalar**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

A configuração do jogo pode levar algum tempo dependendo do jogo. O progresso é mostrado na exibição de status. Depois disso, você pode iniciar seu servidor de jogos e conectar-se a ele no jogo!



### Criar servidor de voz

A instalação de um **Servidor de voz (Teamspeak 3 Server)** é semelhante à instalação de um servidor de jogos. Você deve primeiro clicar novamente em "Gameserver / TS3". Nesta seção, você encontrará a opção **Instalar servidor de voz**, que pode clicar para iniciar o processo de instalação do servidor Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

No próximo passo, você pode especificar as configurações desejadas para seu servidor Teamspeak 3, como endereço IP, porta e número de slots disponíveis. Depois de inserir todas as informações necessárias, você pode concluir a instalação clicando em **Instalar servidor de voz agora**.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Confirme que todas as informações estão corretas e atendem às suas necessidades. Assim que fizer todas as configurações, clique em **Instalar servidor Teamspeak 3/5 agora** para iniciar o processo de instalação. Agora você pode visualizar e clicar no servidor Teamspeak 3 instalado na **Visão geral do servidor de voz**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Atenção**: Esta é a instância na qual o servidor Teamspeak 3 será instalado posteriormente.
:::

Você está agora na interface da instância do seu servidor Teamspeak 3 instalado. Pode iniciar a instância clicando no botão **Iniciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Agora você pode clicar no item de menu **Servidores Virtuais**. Todos os servidores Teamspeak 3 instalados na sua instância são listados claramente nessa área. Para acessar a interface do respectivo servidor Teamspeak 3, basta clicar no símbolo do "olho".

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

Na interface do servidor Teamspeak 3, você encontrará todas as informações e opções de configuração necessárias para personalizar e gerenciar seu servidor individualmente. Por exemplo, na aba "Chave de autorização" você pode criar um token que concede direitos de admin no seu servidor. Isso te dá controle total sobre a administração de usuários e acesso ao servidor.

No menu "Configurações" você tem mais opções para personalizar seu servidor. Aqui você pode, por exemplo, mudar o nome do servidor, definir uma senha para restringir o acesso ou armazenar uma mensagem de boas-vindas personalizada que os usuários recebem ao entrar no servidor.

:::caution Informação sobre licenças Teamspeak
Por padrão, não há licença instalada no servidor Teamspeak 3. Isso significa que você só pode usar um servidor Teamspeak 3 com capacidade para 32 slots. Porém, se quiser ativar mais capacidade ou funções adicionais para seu servidor Teamspeak 3, pode comprar uma licença correspondente diretamente da Teamspeak.
:::


## Conclusão

Parabéns, você instalou e configurou com sucesso nossa interface GS/TS3! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias! 

<InlineVoucher />
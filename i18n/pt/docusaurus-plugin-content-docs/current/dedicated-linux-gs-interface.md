---
id: dedicated-linux-gs-interface
title: "Servidor Dedicado: Interface Gameserver/TS3"
description: "Descubra como configurar facilmente servidores de jogos, servidores de voz e bots de música em VPS Linux ou servidores dedicados → Saiba mais agora"
sidebar_label: Interface GS/TS3
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Se os produtos de servidor de jogos não forem do seu gosto ou não atenderem às suas expectativas, ou se você precisar do seu serviço de outras formas, usar um VPS ou servidor dedicado geralmente é uma opção melhor. No entanto, você frequentemente enfrenta o desafio de que nem todos os serviços são automatizados ou pré-instalados. Configurar serviços como servidores de jogos, servidores Teamspeak 3 e bots de música precisa ser feito de forma independente.

Para resolver esse problema, desenvolvemos uma solução prática para nosso VPS ou servidor dedicado baseado em Linux. A chamada interface Gameserver/Teamspeak 3 Server (Interface GS/TS3)!

<InlineVoucher />

## Caso de uso

Com a interface GS/TS3 super amigável, você pode instalar Teamspeak 3 ou outros serviços selecionados de servidor de jogos no seu VPS ou servidor dedicado baseado em Linux com apenas alguns cliques. Nenhum conhecimento prévio é necessário para essa instalação. A configuração de todos os pacotes necessários, arquivos do servidor e a instalação propriamente dita são totalmente automatizadas, economizando seu tempo e esforço.

:::warning
O recurso da interface GS/TS3 pode ser usado com os seguintes sistemas operacionais:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Já estamos trabalhando para disponibilizar outros sistemas operacionais e versões mais recentes em breve.
:::



## Serviços & jogos disponíveis

A interface GS/TS3 suporta a configuração de servidores de jogos, servidores de voz e bots de música. A maioria dos jogos que oferecemos para nossos produtos de servidor de jogos também está disponível na opção da interface GS/TS3. Isso vale para todos os jogos que operamos ativamente sob Linux. Todos os jogos que rodam em sistemas operacionais Windows infelizmente não podem ser instalados. Nesses casos, só é possível uma instalação manual, desde que o jogo suporte uma versão de servidor Linux.

| Serviços    | Suportado |
| ----------- | ---------------- |
| Servidor de jogos  | ✔️                |
| Servidor de voz | ✔️                |
| Bot de música (Sinusbot)  | ✔️                |



## Instalação e configuração

Para instalar a interface GS/TS3, você precisa navegar até o painel de navegação **Configurações** na administração do seu produto e clicar no subitem **Gameserver / TS3**. 

Na primeira vez que acessar a interface GS/TS3, você será redirecionado para o assistente de configuração super amigável. Para configurar a interface e vinculá-la ao servidor, você deve selecionar um sistema operacional suportado e fornecer os dados de login do usuário root. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



Uma vez que o servidor e o site tenham sido vinculados com sucesso, a interface GS/TS3 pode ser criada. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Atenção**: Por favor, não continue o processo até que a interface esteja completamente instalada. Você pode reconhecer a instalação bem-sucedida pelo fato de a barra de progresso ter desaparecido e "Instalado" estar exibido em vez de "Faltando" para cada pacote necessário.
:::



### Criar Servidor de jogos

Desde que a criação e instalação da interface GS/TS3 tenha sido concluída com sucesso, você pode começar a configurar os serviços. A instalação de um servidor de jogos é feita via o botão **Instalar servidor de jogos** na categoria **Servidor de jogos**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



No próximo passo, você pode selecionar o endereço IP do servidor de jogos desejado (caso seu servidor tenha mais de um IP). Também pode especificar a porta desejada, o número de slots e o boost de RAM individualmente.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Certifique-se de que todos os detalhes estão corretos e atendem aos seus pré-requisitos. Assim que fizer todas as configurações, clique em "Instalar servidor de jogos agora" para iniciar o processo de instalação. O servidor de jogos será configurado conforme suas especificações e você poderá começar a jogar em breve. Agora você pode visualizar e acessar seu servidor de jogos recém-criado na lista.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



Você está agora na administração do seu servidor de jogos. Lá você pode selecionar e instalar o jogo desejado para seu servidor de jogos no painel de navegação **Configurações** em **Jogos**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Aqui você encontrará uma lista de todos os jogos que pode instalar no seu servidor. Neste exemplo, será instalado um servidor com o jogo (pacote) Minecraft: Paperspigot. Selecione seu jogo desejado e clique no botão verde para iniciar a instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Uma visão geral com todas as condições necessárias será exibida. Se todas as condições forem atendidas, você pode confirmar o processo com o botão **Aceitar e Instalar**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

A configuração do jogo pode levar algum tempo dependendo do jogo. O progresso é mostrado no status. Depois disso, você pode iniciar seu servidor de jogos e conectar-se a ele no jogo!



### Criar Servidor de voz

A instalação de um **Servidor de voz (Teamspeak 3 Server)** é semelhante à instalação de um servidor de jogos. Você deve primeiro clicar novamente em "Gameserver / TS3". Nesta seção, você encontrará a opção **Instalar servidor de voz**, que pode clicar para iniciar o processo de instalação do servidor Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

No próximo passo, você pode especificar as configurações desejadas para seu servidor Teamspeak 3, como endereço IP, porta e número de slots disponíveis. Depois de inserir todas as informações necessárias, você pode concluir a instalação clicando em **Instalar servidor de voz agora**.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Certifique-se de que todas as informações estão corretas e atendem aos seus pré-requisitos. Assim que fizer todas as configurações, clique em **Instalar Teamspeak 3/5 Server agora** para iniciar o processo de instalação. Agora você pode visualizar e clicar no servidor Teamspeak 3 instalado na **Visão geral do Servidor de voz**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Atenção**: Esta é a instância na qual o servidor Teamspeak 3 será instalado posteriormente.
:::

Você está agora na interface da instância do seu servidor Teamspeak 3 instalado. Agora você pode iniciar a instância clicando no botão **Iniciar**.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


Agora você pode clicar no item de menu **Servidores Virtuais**. Todos os servidores Teamspeak 3 instalados na sua instância são listados claramente nessa área. Para acessar a interface do respectivo servidor Teamspeak 3, basta clicar no símbolo do "olho".

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

Na interface do servidor Teamspeak 3, você encontrará todas as informações e opções de configuração necessárias para personalizar e gerenciar seu servidor individualmente. Por exemplo, na aba "Chave de autorização" você pode criar um token que te dá direitos de admin no seu servidor. Isso te dá controle total sobre a administração de usuários e acesso ao servidor.

No item de menu "Configurações" você tem mais opções para personalizar seu servidor. Aqui você pode, por exemplo, mudar o nome do seu servidor, definir uma senha para restringir o acesso ou armazenar uma mensagem de boas-vindas pessoal que os usuários recebem ao entrar no servidor.

:::caution Informação sobre licenças Teamspeak
Não há licença instalada no servidor Teamspeak 3 por padrão. Isso significa que você só pode usar um servidor Teamspeak 3 com capacidade para 32 slots. No entanto, se quiser ativar mais capacidade ou funções adicionais para seu servidor Teamspeak 3, você pode comprar uma licença correspondente diretamente da Teamspeak.
:::





## Conclusão
Parabéns, você instalou e configurou com sucesso nossa interface GS/TS3! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />
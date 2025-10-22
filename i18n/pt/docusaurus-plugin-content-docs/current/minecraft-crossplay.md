---
id: minecraft-crossplay
title: "Minecraft: Configurando crossplay entre as edições Java & Bedrock do Minecraft"
description: "Descubra como ativar o crossplay perfeito entre Minecraft Java e Bedrock com os plugins GeyserMC e Floodgate para uma experiência multiplayer top → Saiba mais agora"
sidebar_label: Crossplay Java & Bedrock
services:
  - gameserver-minecraft
---

## Introdução

Tradicionalmente, jogar junto entre as edições Minecraft Java e Bedrock não era possível, já que ambas são plataformas totalmente separadas. Felizmente, hoje em dia você pode fazer o crossplay rolar usando plugins específicos para servidores Java que permitem que jogadores da edição Bedrock entrem. Neste guia, vamos explorar o processo de instalação e configuração do plugin GeyserMC junto com o Floodgate para tornar o crossplay entre as duas plataformas simples e funcional.

## Preparação

Para configurar o crossplay, você precisa ter um servidor de jogos Minecraft rodando um dos softwares de servidor Java compatíveis. Recomendamos usar Paper, Spigot ou Bukkit, que são as opções mais populares.

Você deve ter um servidor de jogos Minecraft pronto com um desses jogos instalado e ativado. Se precisar de ajuda com isso, confira nosso [guia de troca de jogos](gameserver-gameswitch.md).

## Instalação

Para começar a instalação, acesse o dashboard do painel de controle do seu servidor de jogos e vá para a seção **Configurações->Plugins**. Nessa página, localize o menu suspenso **GeyserMC** e selecione-o. Use o botão de instalar para adicionar o plugin automaticamente ao seu servidor e aguarde até a barra de progresso completar.

Também recomendamos instalar o plugin **Floodgate**, que fica na mesma seção, pois ele traz vários benefícios como:
- Permitir que jogadores da edição Bedrock entrem sem precisar de conta Java.
- Possibilidade de ver skins da edição Bedrock na edição Java.
- Vários benefícios para desenvolvedores.

:::note
O plugin Floodgate é opcional, mas recomendamos muito porque facilita demais o crossplay para jogadores Bedrock.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Com os plugins instalados no seu servidor, siga para a próxima seção para configurar as opções.

## Configurando os Plugins

Na mesma seção **Plugins** do painel web, clique no ícone azul de configurações ao lado do plugin GeyserMC, que vai te levar direto para a área certa em **Configurações**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Aqui você pode personalizar o nome do servidor e as linhas do MOTD que serão exibidas especificamente para jogadores da edição Bedrock.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Descendo até o final da página, você também verá as portas atribuídas ao seu servidor.

- A **Porta do Jogo** é a porta principal do servidor, usada para conectar com clientes da edição Java normalmente.
- A **Porta 5** é a porta usada pelo plugin GeyserMC. Use essa para conectar com clientes da edição Bedrock.

Na hora de conectar, certifique-se de usar a porta correta de acordo com a edição do Minecraft que você está usando.

:::tip
Para clientes com a opção de configuração **IP Próprio**, é possível solicitar uma porta personalizada para ajustar a porta do jeito que você quiser. Você pode [contatar o suporte](https://zap-hosting.com/en/customer/support/) via ticket para pedir isso.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Conectando & Solução de Problemas

Com o plugin configurado, reinicie seu servidor para garantir que as novas configurações entrem em vigor. Depois, tente conectar ao servidor pelas duas edições para garantir que tudo está funcionando.

Lembre-se de usar as portas certas: **Porta 5** para jogadores Bedrock e **Porta do Jogo** para jogadores Java, que você encontra na aba **Configurações**. Também dá para ver essas portas passando o mouse no ícone de informação no dashboard do painel web.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Se tudo der certo, agora você pode fazer crossplay e conectar fácil de qualquer uma das edições.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Se estiver com problemas para conectar, tente os passos abaixo para resolver os erros mais comuns.

#### Cliente desatualizado - Servidor desatualizado

Esse erro indica que as versões do jogo no servidor e no cliente estão diferentes. Se for na edição Java, basta mudar para a versão correta pelo launcher.

No Bedrock não é tão simples mudar a versão do jogo. Então, se estiver com esse problema no cliente Bedrock, atualize o app e o servidor para as versões mais recentes.

Também recomendamos usar os plugins ViaVersion e ViaBackwards, que ampliam as versões do jogo que o servidor aceita, permitindo que usuários com versões mais antigas ou mais novas ainda consigam conectar. Para isso, vá na seção **Plugins** no painel web, no menu suspenso **Todos os Plugins**, localize **ViaVersion** e **ViaBackwards**. Use o ícone verde para instalar no seu servidor.

:::note
Se tiver problemas para instalar o plugin pelo painel web, pode ser que ele não tenha uma versão estável mais recente. Nesses casos, recomendamos baixar manualmente uma versão beta do plugin no site oficial e enviar via FTP. Saiba mais lendo nosso [guia de acesso FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Depois de instalar os plugins, tente conectar de novo — agora deve funcionar com mais versões do jogo.

#### Não consegue entrar no mundo

O motivo mais comum é usar a porta errada ao adicionar o servidor no cliente. Use a porta que está em **Porta 5** na seção **Configurações** do painel web para clientes Bedrock. Para clientes Java, use a **Porta do Jogo**.

Se o problema continuar, confira o arquivo de configuração do plugin GeyserMC para garantir que as portas estão corretas. Vá na seção **Configs** do painel web e abra o arquivo `plugins/Geyser-[seu_tipo_de_servidor]/config.yml` clicando no botão azul de editar.

Nesse arquivo, localize os parâmetros `port` nas seções `bedrock` e `remote`. Confirme que a porta bedrock está igual à **Porta 5** da seção **Configurações** e que a porta remote está em **25565** ou na **Porta do Jogo**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusão

Parabéns, você instalou e configurou com sucesso o plugin GeyserMC no seu servidor de jogos Minecraft, liberando o crossplay entre as edições Java e Bedrock! Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂
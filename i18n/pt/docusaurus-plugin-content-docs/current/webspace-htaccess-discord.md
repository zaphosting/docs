---
id: webspace-htaccess-discord
title: "Hospedagem de sites: Configure redirecionamento do Discord via domínio"
description: "Descubra como redirecionar seu domínio para uma URL específica usando configuração do servidor web para um redirecionamento tranquilo → Saiba mais agora"
sidebar_label: Redirecionamento Discord
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Domínios não podem ser redirecionados diretamente para uma URL específica por padrão, apenas para o endereço principal de um servidor ou site. Porém, para apontar para uma URL específica, você pode configurar um redirecionamento via servidor web em combinação com um arquivo `.htaccess`. Isso redireciona automaticamente a chamada do domínio para a URL de destino desejada.

<InlineVoucher />

## Preparação

Para realizar esse redirecionamento, assume-se que você já tenha seu próprio domínio (TLD) e um pacote de hospedagem de sites. Conecte o domínio ao seu pacote de hospedagem de sites. Se você não souber exatamente como fazer isso, pode usar nossa opção fácil de usar [EasyDNS](domain-easydns.md).

:::warning Mudanças no DNS levam tempo

Alterações nas configurações de DNS podem levar até **24 horas** para serem totalmente adotadas e efetivas mundialmente. Em alguns casos, a implementação pode ser mais rápida, mas atrasos são normais devido ao cache em diferentes servidores.

:::

Assim que o domínio apontar com sucesso para a hospedagem de sites e puder ser acessado, você pode começar a configurar o redirecionamento do Discord.

## Configuração

Um arquivo `.htaccess` deve ser criado e configurado para configurar o redirecionamento. Para isso, navegue até o gerenciador de arquivos no Plesk para o seu domínio. Uma vez lá, clique no símbolo de mais para criar uma nova pasta chamada `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Navegue até a pasta `discord` e crie um novo arquivo lá com o nome `.htaccess`. Agora abra o arquivo recém-criado com o editor de texto. A regra para o redirecionamento será adicionada agora. Copie e cole o seguinte conteúdo:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Para que a regra e o redirecionamento funcionem para o seu domínio, você deve alterar o nome do domínio. Para isso, substitua o domínio de exemplo `example-example.de` pelo seu próprio e salve o arquivo. Também substitua a URL do convite do Discord pela do seu servidor.

Agora você deve conseguir acessar o redirecionamento com seu domínio e o caminho definido para o Discord. A estrutura ficaria assim no nosso exemplo: `beispiel-example.de/discord`.

## Conclusão

Se você seguiu todos os passos, deve ter configurado com sucesso o redirecionamento do domínio para o seu servidor Discord. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
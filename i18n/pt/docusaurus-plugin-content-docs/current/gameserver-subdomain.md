---
id: gameserver-subdomain
title: 'Servidor de jogos: Subdomínio ZAP'
description: "Descubra como configurar e gerenciar subdomínios para seu servidor de jogos para melhor acessibilidade e personalização → Saiba mais agora"
sidebar_label: Subdomínio do Servidor de Jogos
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Nossos servidores de jogos agora vêm com a possibilidade de configurar subdomínios para seu servidor de forma fácil e rápida. Neste guia, você vai aprender como usar a funcionalidade de Subdomínio DNS para seu servidor, gerando um subdomínio ZAP Cloud ou configurando seu próprio domínio para uso.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="Domínio ZAP Cloud para Servidores de Jogos" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo para você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Disponibilidade

A funcionalidade de Subdomínio está disponível para clientes novos e já existentes. Clientes novos terão um subdomínio `xxx`**.zap.cloud** configurado automaticamente durante o processo de instalação. Clientes existentes precisarão ativar isso manualmente na seção **Configurações->Configurações DNS** no painel web do servidor de jogos. O uso dessa seção será explicado na próxima parte.

Nem todos os jogos são suportados no momento, mas já está ativo em vários jogos populares como FiveM, Minecraft e mais! A longo prazo, queremos expandir essa funcionalidade para o máximo de jogos possível. Infelizmente, alguns jogos tornam isso tecnicamente inviável, e nesses casos você verá o endereço IP normalmente no painel web.

:::tip
Se o jogo que você instalou não for suportado atualmente, fique à vontade para entrar em [contato com nosso time de Suporte](https://zap-hosting.com/en/customer/support/) e vamos ver se conseguimos adicionar :)
:::

## Gerenciando Subdomínios (DNS)

Gerenciar a funcionalidade de subdomínio no seu servidor de jogos é simples. Vá para a seção **Configurações->Configurações DNS** para começar.

Nessa página, você poderá realizar várias tarefas relacionadas ao subdomínio gratuito ZAP Cloud, assim como usar seus próprios domínios configurados na sua conta ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Atualmente, você pode ter no máximo 3 subdomínios ativos por produto (sem contar o subdomínio ZAP Cloud gerado aleatoriamente).
:::

### Subdomínio ZAP Cloud Aleatório

Para gerar um subdomínio ZAP Cloud aleatório, use o botão **Resolver subdomínios** encontrado nessa página de configurações.

:::info
Clientes existentes também devem usar esse botão para gerar um subdomínio ZAP Cloud aleatório pela primeira vez.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Subdomínio ZAP Cloud Personalizado

Você pode criar seu próprio subdomínio ZAP Cloud para atender suas necessidades, basta digitar o subdomínio que deseja usar e selecionar **.zap.cloud** no menu suspenso (opção padrão).

:::note
Se receber um erro, pode ser que o subdomínio já esteja em uso e/ou você tenha digitado uma palavra ou caractere proibido para proteger nossos clientes.
:::

Agora use o botão **Criar entrada** e você deverá ver o subdomínio aparecer na lista. Pode levar alguns minutos até que ele esteja totalmente funcional.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Domínio Próprio

:::info
Para usar seu próprio domínio para criar um subdomínio, certifique-se de que ele está associado à sua conta ZAP-Hosting, seja [comprando-o no nosso site](https://zap-hosting.com/en/shop/product/domain/) ou transferindo o domínio de outro provedor para sua conta.
:::

Criar um subdomínio com seu domínio próprio segue os mesmos passos do subdomínio ZAP Cloud personalizado. Digite o subdomínio que deseja usar e selecione seu domínio no menu suspenso.

:::note
Se receber um erro, pode ser que o subdomínio já esteja em uso e/ou você tenha digitado uma palavra ou caractere proibido para proteger nossos clientes.
:::

Agora use o botão **Criar entrada** e você deverá ver o subdomínio aparecer na lista. Pode levar alguns minutos até que ele esteja totalmente funcional.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Solução de Problemas

### Subdomínio ZAP Cloud

Se estiver tendo problemas com os subdomínios ZAP Cloud, você pode tentar resolver sozinho indo para a seção **Configurações->Configurações DNS** como explicado antes, e usar o botão **Resolver subdomínios** no final da página.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Espere alguns minutos antes de verificar novamente se estão funcionando corretamente.

### Domínio Próprio

Se você não vê seu domínio próprio no menu suspenso ao tentar criar um subdomínio, provavelmente ele não está associado à sua conta ZAP-Hosting.

Certifique-se de que o domínio está ativo na sua conta ZAP-Hosting, o que pode envolver transferi-lo de outros provedores.

Se ainda tiver problemas com qualquer parte da funcionalidade de subdomínio, entre em contato com nosso time de Suporte [abrindo um ticket no nosso site](https://zap-hosting.com/en/customer/support/) e teremos prazer em ajudar.

<InlineVoucher />
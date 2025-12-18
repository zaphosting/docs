---
id: scp-newroles
title: "SCP Secret Laboratory: Adicionando novos cargos no servidor"
description: "Aprenda a criar e personalizar cargos no servidor com permissões específicas para uma gestão remota eficaz → Saiba mais agora"
sidebar_label: Adicionar novos cargos
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Veja a Configuração
Novos cargos são adicionados no arquivo "config_remoteadmin.txt".  
Você pode encontrar esse arquivo de configuração clicando em "Configs" na interface do seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Aqui você pode buscar pela Config acima e clicar no "olho" à direita para abrir.

## Copiar cargos existentes
Com a Config aberta, você pode procurar por essas entradas:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Esses são exemplos de cargos já cadastrados.  
Vamos inserir uma nova entrada logo abaixo.  
Para isso, copiamos o bloco de um dos cargos acima e colamos essa parte logo abaixo do último cargo.  
No nosso exemplo, copiamos o cargo "Moderator" e colamos abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Adicionar cargo próprio
Agora podemos editar o bloco recém-inserido do cargo já existente e colocar os valores que quisermos.  
No nosso exemplo, usamos o nome "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Feito isso, ainda precisamos adicionar o cargo na lista de cargos disponíveis.  
Isso fica um pouco mais abaixo na mesma Config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Então, inserimos nosso cargo logo abaixo do cargo "moderator".  
:::info
ATENÇÃO: Fique de olho nos espaços antes e depois do "-"!
:::

## Permissões
Na parte mais embaixo do arquivo "config_remoteadmin.txt" podemos ajustar as permissões para cada cargo.  
Se quisermos atribuir uma permissão ao nosso cargo, basta colocar o nome dele entre colchetes.  
Como mostrado neste exemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />
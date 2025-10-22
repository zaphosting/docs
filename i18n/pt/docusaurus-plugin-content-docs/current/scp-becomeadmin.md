---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Torne-se admin no seu próprio servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciar funções de forma eficaz no seu servidor de jogos → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

:::info
Desde as atualizações recentes do SCP, o login por senha não funciona mais. Por favor, use o seguinte guia para adicionar suas funções diretamente pelo steamid. 
:::


## Configuração do Remote Admin Config

### Preparação

Primeiro, você precisa localizar seu Steam64ID.  
Você pode usar a seguinte ferramenta: [SteamID Lookup](https://steamid.io/lookup).  
O ID será inserido depois no arquivo de configuração.

Aqui você encontra um exemplo de como obter seu steamid inserindo o link do seu perfil:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Adicionar Admins

Agora o arquivo de configuração deve ser aberto e editado.  
Ele está localizado em "**Configs**" dentro de "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Lá, o arquivo "**config_remoteadmin.txt**" pode ser aberto, onde as linhas necessárias serão reescritas.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

As funções são criadas e atribuídas ali.  
No trecho, "**SomeSteamId64**" que aparece antes de "**@steam: owner**" deve ser substituído pelo seu SteamID64, que você viu anteriormente no "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Isso pode ser feito para cada usuário adicional que deve receber permissões.  
No nosso exemplo, definimos permissões para três usuários, um deles recebe "**owner**" e os outros dois recebem "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Adicionar Mais Funções para Ignorar a Senha

Se você tem várias funções que quer que ignorem a senha do remote admin, basta ajustar a seguinte linha no arquivo:  
"**config_remoteadmin.txt**"

Encontre exatamente a seguinte seção:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Para adicionar mais funções, escreva as funções desejadas separadas por vírgula.  
Por exemplo, para adicionar admin e moderator para ignorar a senha:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Para abrir o console do remote admin dentro do jogo, uma vez logado no servidor, use a tecla "**M**". Se o servidor estiver rodando, será necessário reiniciá-lo para que as alterações tenham efeito. Se o servidor estiver offline, basta ligá-lo e depois verificar o Remote Admin Console dentro do jogo.
:::


## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
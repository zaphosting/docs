---
id: spaceengineers-becomeadmin
title: "Space Engineers: Torne-se admin do servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento fácil dentro do jogo → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro do game. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

Para gerenciar bem seu próprio servidor de jogos dentro do jogo, é importante ter o rank de Admin.

### SteamID64 pelo site

Primeiro, abra o perfil no Steam e clique com o botão direito em qualquer lugar do perfil.  
Lá você pode copiar a URL Steam do perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Depois disso, você pode inserir a URL nos seguintes sites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Inserir SteamID na Config

Agora acesse sua interface e o servidor.  
Vá até a aba **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Depois abra o arquivo **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Depois disso, pressione **STR + F** e procure por *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Agora escreva isso:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
O resultado deve ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Agora é só **Salvar** o arquivo de Config e pronto!

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: fivem-mastodon
title: "FiveM: Configurando um feed de atividades usando Mastodon"
description: "Descubra como integrar um feed de atividades do Mastodon no seu servidor para atualizações em tempo real e maior engajamento da comunidade → Saiba mais agora"
sidebar_label: Configurar Feed de Atividades
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Um feed de atividades ajuda a manter os jogadores informados diretamente dentro do seu servidor FiveM. Ao conectar uma conta Mastodon, atualizações do servidor, anúncios e mensagens curtas podem ser exibidos em tempo real, sem que os jogadores precisem checar plataformas externas.

Essa integração cria um canal de comunicação claro entre o servidor e sua comunidade, garantindo que informações importantes estejam sempre visíveis em um único lugar centralizado.

## Preparação

Antes de configurar o feed de atividades, é necessário ter uma conta Mastodon. Essa conta será usada para publicar atualizações que depois aparecerão no servidor.

Se ainda não tiver uma conta, registre-se em uma instância do [Mastodon](https://joinmastodon.org/) de sua preferência. Após o registro, certifique-se de que o perfil está acessível e pronto para postar atualizações, pois essas postagens serão exibidas no feed de atividades.



## Configuração

Abra seu perfil Mastodon e copie seu nome de usuário completo.  
O nome de usuário geralmente segue este formato:

```
username@instance.domain
```

Neste exemplo, o nome de usuário é `zaphosting@mstdn.instance`. Em seguida, abra a seção **Configs** do seu servidor FiveM e edite o arquivo `server.cfg`. Vá até o final do arquivo e adicione a seguinte linha:

```
sets activitypubFeed username
```

Substitua `username` pelo seu próprio nome de usuário Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Salve o arquivo e reinicie o servidor. Após o reinício, pode levar até 20 minutos para que o feed de atividades fique disponível. Uma vez ativo, uma nova aba **Feed** aparecerá ao abrir o servidor, mostrando as postagens da conta Mastodon vinculada.



## Conclusão

Com o feed de atividades configurado, atualizações e anúncios do servidor são exibidos diretamente para os jogadores de forma clara e acessível. Essa configuração melhora a transparência, fortalece a interação da comunidade e oferece um método eficiente para compartilhar notícias e informações sem depender de links ou plataformas externas.



Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
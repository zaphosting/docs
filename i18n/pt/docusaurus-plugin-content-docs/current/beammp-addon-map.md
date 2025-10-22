---
id: beammp-addon-map
title: "BeamMP: Instalar Addon de Mapa"
description: "Descubra como turbinar seu servidor BeamMP com addons de mapas customizados para uma jogabilidade multiplayer top → Saiba mais agora"
sidebar_label: Instalar Addon de Mapa
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

BeamNG.Drive tem suporte nativo para mods e uma comunidade gigante que permite expandir e melhorar a jogabilidade com seus amigos. Como o BeamMP é basicamente uma modificação multiplayer, a maioria dos addons de mapas deve ser compatível com seu servidor BeamMP. Neste guia, vamos mostrar como instalar e ativar um addon de mapa customizado no seu servidor BeamMP.

<InlineVoucher />

## Preparação

Para instalar um addon de mapa no seu servidor BeamMP, você precisa se conectar a ele via FTP. Se não estiver familiarizado com isso, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md).

Antes de seguir com a instalação, você também precisa encontrar os addons de mapas que deseja instalar no seu servidor. Recomendamos navegar pelo [Fórum oficial do BeamNG.Drive](https://www.beamng.com/resources/categories/terrains-levels-maps.9/), que tem uma biblioteca enorme de mods e addons de mapas feitos pela comunidade.

:::tip
Como o BeamMP é uma modificação multiplayer para BeamNG.Drive, a maioria dos addons de mapas deve funcionar no seu servidor BeamMP. Mas pode rolar de alguns mapas específicos não funcionarem direito, então é bom testar cada mapa.
:::

## Instalação

Pra começar, certifique-se de que você baixou o addon de mapa que quer adicionar ao seu servidor. Ele deve estar em formato `.zip`.

### Selecionando o Nome do Mapa

Antes de continuar, é importante garantir que o nome do mapa está correto. O arquivo `.zip` que você baixou geralmente já tem o nome certo, mas nem sempre, então vale a pena conferir.

Pra isso, abra o arquivo `.zip` baixado. Dentro dele, localize e abra a pasta `levels`, que contém o mapa em si.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Você precisa copiar o nome exato da pasta do addon de mapa que está nessa pasta. Faça isso clicando com o botão direito, selecionando `Propriedades` e copiando o texto destacado com `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Configurando o Mapa

Agora que você já sabe o nome do mapa, precisa ajustar o arquivo de configuração para definir qual mapa estará ativo.

#### Desativando a substituição de configuração

Primeiro, desative a seleção padrão de mapa nas configurações, porque ela sobrescreveria suas alterações.

Isso é fácil: vá na seção **Configurações** no painel web do seu servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Lá, desative a opção "Map".

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Depois, salve as configurações lá embaixo na página.

#### Alterando o mapa na configuração

Pra mudar o mapa na config, vá na seção **Configs** no seu painel web.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Abra o arquivo de configuração `ServerConfig.toml` e procure a linha:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Agora, substitua o valor por `Map = "/levels/[seu_nome_do_mapa]/info.json"`, usando o nome do mapa que você copiou antes, e salve a config.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
Em casos raros, o mapa pode ter um formato diferente. Se o mapa não funcionar depois de seguir tudo, talvez você precise usar este caminho em vez de `Map = "/levels/[seu_nome_do_mapa]/info.json"`: `Map = "/levels/[seu_nome_do_mapa]/[seu_nome_do_mapa].mis"`
:::

:::tip
A qualquer momento, você pode usar os mapas padrão do jogo só ativando a opção nas configurações de novo e escolhendo um deles:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Enviando o Mapa

Por último, você precisa enviar o arquivo `.zip` do mapa que baixou para o seu servidor BeamMP via FTP. Se precisar de ajuda, use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md).

No seu cliente FTP, navegue até o caminho:
```
../beammp/Resources/Client
```

É só arrastar e soltar o arquivo `.zip` do addon de mapa nessa pasta para enviar pro servidor. Com o arquivo de configuração editado e os arquivos do mapa enviados, seu addon de mapa já deve estar pronto pra usar.

## Conclusão

Depois de seguir todos os passos, reinicie seu servidor BeamMP. Você instalou com sucesso um addon de mapa no seu servidor de jogos BeamMP. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todo dia pra te ajudar! 🙂

<InlineVoucher />
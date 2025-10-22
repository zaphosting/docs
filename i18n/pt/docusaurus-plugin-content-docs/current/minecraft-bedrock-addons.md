---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Instalar Addons"
description: "Descubra como turbinar seu servidor de jogos Minecraft Bedrock com addons para expandir a jogabilidade e personalizar seu mundo → Saiba mais agora"
sidebar_label: Instalar Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução
Minecraft Bedrock Edition tem suporte nativo para mods e uma comunidade gigante, o que permite expandir e melhorar a jogabilidade com seus amigos. Neste guia, vamos mostrar como instalar e ativar um addon no seu servidor de jogos Minecraft Bedrock.

<InlineVoucher />

## Preparação

Para instalar um mapa addon no seu servidor de jogos Minecraft: Bedrock, você precisa se conectar via FTP. Se não estiver familiarizado com isso, recomendamos dar uma olhada no guia de [acesso FTP](gameserver-ftpaccess.md).

Antes de continuar com a instalação, você também precisa encontrar os addons que deseja instalar no seu servidor. Recomendamos navegar pelo [CurseForge](https://www.curseforge.com/minecraft-bedrock), que oferece uma biblioteca enorme de addons e pacotes de recursos criados pela comunidade.

## Instalação

Existem duas formas de instalar um addon no Minecraft Bedrock. Você pode instalar os addons em um mundo novo, que é o jeito mais fácil, ou pode instalar em um mundo já existente, que é mais complicado.

## Usando um Mundo Novo (fácil)

Para criar um mundo novo com addons, basta abrir o arquivo `.mcaddon` ou `.mcpack` que você baixou.
Isso vai abrir o Minecraft Bedrock e importar o addon para o jogo.

### Criar Mundo

Para criar um mundo e instalar os addons nele, clique em `Jogar` e depois em `Criar novo mundo`.
Você pode escolher todas as configurações normais do mundo que quiser:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Instalar Addons

Antes de clicar em `Criar`, navegue até `Pacotes de recursos` ou `Pacotes de comportamento`.
Lá, clique em `Ativar` ao lado do nome do addon:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Alguns addons têm tanto pacote de recursos quanto pacote de comportamento, então você precisa ativar os dois. Depois de ativar todos os addons desejados, clique em `Criar`.

Para exportar o mundo e fazer upload para seu servidor, você pode usar o guia [Importar Mundo Próprio](minecraft-bedrock-add-world.md).

## Usando um Mundo Existente (difícil)

Instalar o addon em um mundo já existente é mais complicado, mas tem a vantagem de poder jogar com o addon e manter o progresso que você já fez.

### Instalando o 7-zip

Para instalar o addon em um mundo Minecraft existente, você precisa instalar o 7-zip para abrir o arquivo do addon.
O processo é bem simples, basta visitar a [página de download do 7-zip](https://www.7-zip.org/) para pegar a versão mais recente do instalador:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Depois de baixar, abra o arquivo e clique em **Instalar**.

### Extraindo o Addon

Assim que baixar o addon desejado, você pode extrair ele com o 7-zip clicando com o botão direito no arquivo `.mcaddon`, passando o mouse em `7-zip` e clicando em `Extrair para NOME_DA_PASTA`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Se o addon tiver tanto pacote de recursos quanto pacote de comportamento, você precisa fazer o mesmo para o conteúdo da pasta, pois eles também são arquivos `.mcpack`:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

A diferença entre pacotes de recursos e pacotes de comportamento está no nome da pasta. Pastas de Pacote de Recursos têm `RP` no nome, pacotes de comportamento têm `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Pacote de Recursos" default>

### Enviando o Pacote de Recursos

Para enviar o pacote de recursos, navegue até esta pasta no seu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Depois, arraste e solte a pasta RP no cliente FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Certifique-se de enviar a pasta correta que contém diretamente o pacote de recursos, não apenas uma subpasta.
O conteúdo da pasta que você está enviando deve parecer com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Ativando o Pacote de Recursos

Para ativar o pacote de recursos, abra o arquivo `manifest.json` dentro da pasta RP. Depois, navegue até a pasta do mundo no seu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Lá, abra o arquivo `world_resource_packs.json`.
Se nunca instalou addons antes, você precisa criar esse arquivo. Cole o texto abaixo nele:

```
[
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  }
]
```

Substitua os valores de `pack_id` e `version` pelos valores do arquivo manifest.json que você abriu antes:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Se quiser instalar mais de um pacote, pode adicionar vários valores.
É importante ter uma vírgula `,` separando os valores, mas não deve ter vírgula no último:

```
[
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  },
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  },
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Pacote de Comportamento">

### Enviando o Pacote de Comportamento

Para enviar o pacote de comportamento, navegue até esta pasta no seu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Depois, arraste e solte a pasta BP no cliente FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Certifique-se de enviar a pasta correta que contém diretamente o pacote de comportamento, não apenas uma subpasta.
O conteúdo da pasta que você está enviando deve parecer com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Ativando o Pacote de Comportamento

Para ativar o pacote de comportamento, abra o arquivo `manifest.json` dentro da pasta BP. Depois, navegue até a pasta do mundo no seu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Lá, abra o arquivo `world_behavior_packs.json`.
Se nunca instalou addons antes, você precisa criar esse arquivo. Cole o texto abaixo nele:

```
[
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  }
]
```

Substitua os valores de `pack_id` e `version` pelos valores do arquivo manifest.json que você abriu antes:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Se quiser instalar mais de um pacote, pode adicionar vários valores.
É importante ter a vírgula `,` separando os valores, mas não deve ter vírgula no último:

```
[
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  },
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  },
  {
    "pack_id" : "UUID AQUI",
    "version" : [versão, número, aqui]
  }
]
```
:::
</TabItem>
</Tabs>

### Verifique as alterações

Inicie seu servidor, conecte-se a ele e verifique se os addons foram instalados corretamente. Teste as novas funcionalidades ou recursos para garantir que tudo está funcionando como esperado. Se algo não sair como planejado, revise os passos, confirme se os arquivos foram enviados corretamente e procure por erros no console do servidor.

## Conclusão

Instalar addons no seu servidor de jogos Minecraft Bedrock é uma ótima forma de expandir a experiência de jogo e adicionar conteúdo novo. Com este guia, você pode instalar addons facilmente e personalizar seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: valheim-plugins-bepinex
title: "Valheim: Instalando plugins no servidor (BepInEx)"
description: "Descubra como turbinar seu gameplay em Valheim com plugins BepInEx e desbloqueie novas possibilidades de modding → Saiba mais agora"
sidebar_label: Instalar plugins (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introdução
BepInEx é um framework open-source super popular para plugins e mods que permite aos jogadores adicionar mods em vários jogos que tradicionalmente não suportam modding oficial. Neste guia, vamos mostrar como você pode instalar plugins via BepInEx no Valheim.

<InlineVoucher />

## Versão do Jogo BepInEx

Para usar plugins compatíveis com **BepInEx** no Valheim, você precisa primeiro instalar a versão do jogo **Valheim Plus** no seu servidor. Também temos uma versão standalone chamada **Valheim BepInEx**, mas recomendamos instalar o Valheim Plus pois ele já vem com tudo incluso. Isso pode ser feito facilmente usando a funcionalidade de troca de jogo do nosso servidor de jogos, saiba mais lendo nosso [Guia de Troca de Jogo](gameserver-gameswitch.md).

:::info
O Valheim Plus também precisa estar instalado localmente no seu PC. Aqui você encontra o download do Valheim Plus: [Download Valheim Plus](https://www.nexusmods.com/valheim/mods/4).
:::

## Enviando Plugins

Comece encontrando mods que sejam compatíveis com BepInEx e que você queira adicionar ao seu servidor. Normalmente, você pode ver informações sobre a compatibilidade do plugin na página de download dele.

:::important
Os plugins usados precisam ser compatíveis com **BepInEx**, caso contrário não vão funcionar!
:::

Quando tiver um mod pronto, conecte-se ao seu servidor de jogos via FTP. Leia nosso [Acesso via FTP](gameserver-ftpaccess.md) para aprender como fazer isso.

Com seu cliente FTP pronto, navegue até o seguinte diretório:
```
../valheim-linux-plus/BepInEx/plugins
```

Dentro dessa pasta, você deve colocar os mods que baixou. Normalmente, esses arquivos têm a extensão `.dll`.

:::note
O servidor deve estar parado antes de adicionar ou editar mods, caso contrário as alterações podem não ser aplicadas.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Iniciando o Servidor

Depois de enviar os plugins que você queria, basta iniciar seu servidor novamente.

:::info
Alguns plugins podem precisar ser instalados também no cliente, ou seja, no seu PC. Confira as informações no site do plugin para saber se isso é necessário.
:::

Você instalou com sucesso novos plugins BepInEx no seu servidor de jogos Valheim!

## Plugins Populares

Ainda procurando os plugins perfeitos para seu servidor?

Dê uma olhada na nossa lista cuidadosamente selecionada dos plugins mais populares e recomendados para melhorar seu gameplay e dar aquele toque final no seu servidor. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={items} />

<InlineVoucher />
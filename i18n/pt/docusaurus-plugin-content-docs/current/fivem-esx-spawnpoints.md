---
id: fivem-esx-spawnpoints
title: "FiveM: Gerencie e personalize spawnpoints com ESX"
description: "Descubra como personalizar e expandir os pontos de spawn no framework ESX para uma experiência de jogo melhorada → Saiba mais agora"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer mudar os spawnpoints padrão ou adicionar outros? O gerenciamento dos spawnpoints no **framework ESX** é definido no `es_extended`. A seguir, vamos explicar como você pode personalizá-los.

<InlineVoucher />

## Configuração

Os pontos de spawn são ajustados através do arquivo de configuração `main.lua` do `es_extended` (../es_extended/shared/config/). Esse arquivo pode ser editado via FTP. Se você ainda não sabe usar FTP, recomendamos dar uma olhada no [guia de acesso FTP](gameserver-ftpaccess.md).

A configuração padrão dos spawnpoints é a seguinte:

```
Config.DefaultSpawns = { -- Se quiser mais posições de spawn e selecioná-las aleatoriamente, descomente o código comentado ou adicione mais locais
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Suponhamos que você queira adicionar mais pontos de spawn, então você teria que adicionar outro registro no arquivo de configuração:

```
Config.DefaultSpawns = { -- Se quiser mais posições de spawn e selecioná-las aleatoriamente, descomente o código comentado ou adicione mais locais
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NOVO SPAWN
}
```

:::info Determinar coordenadas
Você vai precisar de um recurso adequado para obter as coordenadas atuais. Existem vários disponíveis na internet, escolha o que você achar melhor. :)
:::

## Conclusão

Você alterou com sucesso os spawnpoints existentes ou adicionou novos seguindo esse método. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
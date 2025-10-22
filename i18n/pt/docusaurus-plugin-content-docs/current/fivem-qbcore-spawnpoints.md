---
id: fivem-qbcore-spawnpoints
title: "FiveM: Gerencie e personalize spawnpoints com QbCore"
description: "Descubra como personalizar e adicionar pontos de spawn no framework QBCore para uma experiência de jogo melhorada → Saiba mais agora"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer mudar os spawnpoints padrão ou adicionar outros? O gerenciamento dos spawnpoints no **framework QBCore** é feito através do recurso `qb-spawn`. A seguir, vamos explicar como você pode personalizá-los.

<InlineVoucher />

## Configuração

Os pontos de spawn são ajustados pelo arquivo de configuração `config.lua` do recurso `qb-spawn`. Esse arquivo pode ser editado via FTP. Se você ainda não sabe usar FTP, recomendamos dar uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md).

A configuração padrão dos spawnpoints é a seguinte:

```
QB.Spawns = {
    ["legion"] = { -- Índice da tabela
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Onde o jogador vai spawnar
        location = "legion", -- assim o javascript sabe qual você escolheu
        label = "Legion Square", -- O que o jogador vê no menu
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Suponha que você queira adicionar mais pontos de spawn, então você precisaria adicionar outro registro no arquivo de configuração:

```
["new_spawn_name"] = { -- Precisa ser único
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordenadas onde o jogador vai spawnar
    location = "new_spawn_name", -- Precisa ser único
    label = "New spawn name", -- Esse é o nome que vai aparecer no menu de seleção.
},
```

:::info Determinando coordenadas
Você vai precisar de um recurso adequado para obter as coordenadas atuais. Existem vários disponíveis na internet, escolha o que melhor se encaixa para você. :)
:::

O resultado final ficaria assim:

```
    QB.Spawns = {
    
        ["legion"] = { -- Índice da tabela
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Onde o jogador vai spawnar
            location = "legion", -- assim o javascript sabe qual você escolheu
            label = "Legion Square", -- O que o jogador vê no menu
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Precisa ser único
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordenadas onde o jogador vai spawnar
        location = "new_spawn_name", -- Precisa ser único
        label = "New spawn name", -- Esse é o nome que vai aparecer no menu de seleção.
         },
    }
```




## Conclusão

Você conseguiu alterar os spawnpoints existentes ou adicionar novos seguindo esse método. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: dst-create-cave
title: "Don't Starve Together: Criando cavernas em servidores"
description: "Descubra como configurar servidores master e slave para cavernas em Don't Starve Together para melhorar a experiência de jogo → Saiba mais agora"
sidebar_label: Criar Cavernas
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparação para Cavernas

Para usar cavernas no Don't Starve Together, são necessários dois servidores pedidos através da gente. Um servidor será o "master", usado para o mundo superior, e o segundo será o "slave", usado exclusivamente para as cavernas. Qual servidor será o "master" e qual será o "slave" é decidido pelas configurações dos arquivos server.ini e cluster.ini.

Ambas as configs podem ser vistas na interface em "**Configs**" e editadas lá.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Apenas a parte "**[SHARD]**" é editada em ambos os arquivos .ini

## Master

O master é o servidor do Mundo Superior, esse servidor deve estar configurado como master nas configs.

### server.ini

:::info
**IMPORTANTE** o "**MASTERIP**" significa o endereço IP do servidor master, se esse IP for 123.123.123.123 então deve ser inserido "bind_ip = 123.123.123.123" ali.

"**MASTERIP**" não é um valor estático que pode ser colocado diretamente no server.ini em "bind_ip = ".
:::

Por padrão, "**[SHARD]**" só tem "is_master = true" no server.ini, os seguintes comandos devem ser adicionados lá:

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Por padrão, "**[SHARD]**" no cluster.ini contém apenas "is_master = true", onde os seguintes comandos devem ser adicionados:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

O slave é o servidor das cavernas, onde os dados do master devem ser inseridos nas configs.

### server.ini

:::info
**IMPORTANTE** o "**SLAVEIP**" significa o endereço IP do servidor slave, se esse IP for 123.123.123.123 então deve ser inserido "bind_ip = 123.123.123.123" ali.

"**SLAVEIP**" não é um valor estático que pode ser colocado diretamente no server.ini em "bind_ip = ".

"**MASTERIP**" não é um valor estático que pode ser colocado diretamente no server.ini em "master_ip = ".
:::

Por padrão, "**[SHARD]**" no server.ini contém apenas "is_master = true", os seguintes comandos devem ser adicionados lá:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Por padrão, "**[SHARD]**" no cluster.ini contém apenas "is_master = true", onde os seguintes comandos devem ser adicionados:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Gerar Novo Mundo

Se todas as configs estiverem corretas, um novo mundo deve ser gerado para o servidor slave. Um novo arquivo é necessário para que as cavernas sejam criadas corretamente.

Use o [Guia de Acesso via FTP](gameserver-ftpaccess.md) para navegar até o servidor slave no diretório: */starve/Save/Cluster_1/Master/*  
Agora crie um novo arquivo chamado "*worldgenoverride.lua*" nesse diretório.  
Esse arquivo deve ser preenchido com o seguinte conteúdo:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Depois disso, segure a tecla "**TAB**" no servidor para abrir o status do servidor. Ali você pode clicar nos 3 pontinhos no canto superior esquerdo e regenerar o mundo uma vez com o parâmetro sobrescrito clicando em "**Regenerate World**".

Assim que o mundo for recarregado, está tudo pronto e você pode jogar com cavernas no seu servidor.

<InlineVoucher />
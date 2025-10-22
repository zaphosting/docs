---
id: fivem-esx-changerespawnpoint
title: "FiveM: Definir ponto de respawn"
description: "Descubra como atualizar os pontos de respawn da ambulância no ESX para personalizar o gameplay e melhorar a gestão do servidor → Saiba mais agora"
sidebar_label: Alterar Ponto de Respawn 
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guia Arquivado
Este documento foi arquivado. Documentos são arquivados quando não são mais relevantes, estão incorretos ou desatualizados. Foi arquivado pelos seguintes motivos:

**Motivo**: O método apresentado é para uma versão antiga do ESX. Essa abordagem não pode ser usada na versão atual do ESX, pois a estrutura mudou. 
::::



:::info
O ESX deve estar instalado
:::

<InlineVoucher />

📔 Preparativos

Para encontrar as coordenadas, precisamos de um script Coords como este:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Instale-o assim: [Instalar recursos](fivem-installresources.md)
Após instalar o script, pressione no jogo */coords*
Isso vai mostrar as coordenadas.

📑 Editar Config

Quando tivermos as coordenadas, vamos para a aba Config

Aqui pressione **CTRL + F** e procure por **ambulance**
Então abriremos esse arquivo.
Role para baixo até encontrar **Config_RespawnPoint**.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Agora vamos editar e substituir as coordenadas.
Depois disso, é só clicar em Salvar e pronto.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Após reiniciar o servidor, as alterações entrarão em vigor.
:::

<InlineVoucher />

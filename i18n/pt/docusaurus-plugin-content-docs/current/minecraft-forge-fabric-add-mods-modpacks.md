---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Instalar Mods / Modpacks"
description: "Descubra como baixar e instalar mods e modpacks de Minecraft para turbinar seu servidor → Saiba mais agora"
sidebar_label: Instalar Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introdução

Você vai aprender como baixar e instalar um Mod / Modpack no seu servidor de jogos Minecraft.

<InlineVoucher />

## Preparação

- Um servidor de jogos ([você pode pegar um aqui](https://zap-hosting.com/en/gameserver-hosting/))
- Um cliente FTP (ex: WinSCP, FileZilla)
- Conecte-se ao seu servidor via FTP: ([Acesso via FTP](gameserver-ftpaccess.md))



## Encontrando e baixando mods ou modpacks

Existem vários lugares na internet para encontrar mods / modpacks. A maior plataforma para mods e modpacks é o CurseForge. Quase 99% de todos os mods / modpacks para Minecraft estão lá e podem ser baixados com poucos cliques. Este guia vai focar no uso do CurseForge. Você pode buscar mods [aqui](https://www.curseforge.com/minecraft/mc-mods) e modpacks [aqui](https://curseforge.com/minecraft/modpacks).

:::note
Mods só funcionam com uma versão específica do modloader. Você precisa conferir na página do mod qual versão é necessária. Se for instalar vários mods, certifique-se que todos usam a mesma versão. Além disso, mods Forge não são compatíveis com mods Fabric, e vice-versa.
:::

Vá para a página do mod / modpack que escolheu e clique na aba "Files".

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


Encontre a versão que quer e clique nela para ir para a seção "File Details".

:::tip
Você pode filtrar por versão e modloader usando o menu suspenso no topo da aba "Files" selecionada.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Para Mods" default>
Na seção "File Details", clique no botão "Download". Salve esse arquivo em algum lugar, você vai precisar dele depois.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="Para Modpacks">
Na seção "File Details", desça até ver "Additional Files" e clique nos três pontos, selecione "Download file". Salve esse arquivo em algum lugar, você vai precisar dele depois.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## Passo 2 - Extraindo arquivos dos downloads (só para modpacks)

Encontre o arquivo baixado no seu PC, clique com o botão direito e selecione "Extrair Tudo...". Escolha uma pasta para os arquivos extraídos. Lembre-se dela!

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extrair o arquivo versão alemã](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Sua pasta descompactada deve conter as pastas mods, config e defaultconfig. Pode ter mais pastas além dessas.

:::note
Alguns modpacks exigem passos extras, como o AllOfFabric6. No caso do AllOfFabric6, você precisa rodar "startserver.bat" (Windows) ou "startserver.sh" (Linux / MacOS) para gerar as pastas citadas. O script baixa as pastas pra você. Mas na maioria dos casos as pastas já estarão lá sem precisar de nada. Se não tiver script na pasta descompactada, faça uma busca rápida na internet para saber como pegar os arquivos do servidor para seu modpack.
:::


## Passo 3 - Instalando a versão correta do servidor

No webinterface da Zap-Hosting, selecione seu servidor de jogos e vá em "Games" na seção de configurações.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

Expanda a seção "Available Games" e procure pelo seu modloader (Forge para mods / modpacks Forge, Fabric para mods / modpacks Fabric). Clique no botão verde de download.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


Clique no menu suspenso em "Game version" e selecione a versão do Minecraft que corresponde à versão correta para seu mod/modpack. Para Forge, você pode usar a versão mais recente ou a recomendada. Tente a mais recente primeiro e se seu servidor não funcionar direito, volte e tente a recomendada. Clique em "Accept and Install".

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
Se não souber qual versão do Minecraft precisa, volte para a página "File Details" no CurseForge. Ao lado do ícone do controle do jogo você vê a versão.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

Quando a instalação do jogo terminar, você verá um botão azul ao lado do nome do seu jogo (ex: Forge, Fabric). Clique nesse botão para ativar o jogo.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![ativar o jogo versão alemã](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Passo 4 - Conectando e enviando mods / modpack via FTP

Conecte-se ao seu servidor usando o cliente FTP que escolheu. Certifique-se que seu servidor está parado.

### Enviando um mod

Quando estiver conectado, navegue até a pasta do seu jogo (ex: minecraft-forge, minecraft-fabric). Abra a pasta mods e simplesmente arraste e solte os arquivos do mod que você baixou para dentro dela.
![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

Quando o upload terminar, você pode iniciar seu servidor.

### Enviando um modpack

Quando estiver conectado, navegue até a pasta do seu jogo (ex: minecraft-forge, minecraft-fabric). Delete as pastas world, mods, config e defaultconfig no seu servidor. Agora envie todas as pastas da pasta descompactada que você baixou antes, exceto as pastas jre e libraries. Selecione todas as pastas e arraste para o diretório do seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

Quando o upload terminar, você pode iniciar seu servidor.



## Mods Populares

Ainda procurando os mods perfeitos para seu servidor? Navegue pela nossa lista cuidadosamente selecionada dos mods mais populares e recomendados para turbinar sua jogatina e dar aquele toque final no seu servidor. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={mods} />

## Modpacks Populares

Ainda procurando os modpacks perfeitos para seu servidor? Navegue pela nossa lista cuidadosamente selecionada dos modpacks mais populares e recomendados para turbinar sua jogatina e dar aquele toque final no seu servidor. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={modpacks} />

<InlineVoucher />
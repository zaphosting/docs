---
id: rimworldtogether-mods
title: "RimWorld Together: Instalando mods"
description: "Descubra como turbinar seu servidor RimWorld Together com mods populares para uma jogatina online cooperativa sem travas → Saiba mais agora"
sidebar_label: Instalar Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introdução

RimWorld Together é um mod multiplayer open-source super popular, totalmente mantido pela comunidade RimWorld, que permite jogar CO-OP online no RimWorld. Neste guia, vamos te mostrar como instalar mods no seu servidor RimWorld Together.

<InlineVoucher />

## Pegando Mods

Você pode instalar uma variedade enorme de mods diferentes do RimWorld no seu servidor RimWorld Together.

Os mods são divididos em três tipos:
- **Mods Obrigatórios**: São essenciais, ou seja, o cliente precisa ter esses mods para conseguir se conectar.
- **Mods Opcionais**: Não são obrigatórios, o cliente pode se conectar mesmo sem eles.
- **Mods Proibidos**: Esses mods são banidos, o servidor vai recusar a conexão do cliente na hora.

Você vai ver esses três tipos na próxima seção sobre como enviar os mods, já que eles ficam separados em três pastas diferentes.

### Arquivos Core & DLCs

RimWorld Together facilita o download dos Arquivos Core & DLCs. Eles são tratados exatamente como qualquer outro mod.

Você pode baixar o Core e os DLCs direto do [Repositório RimWorld Together no GitHub](https://github.com/RimworldTogether/RimWorld-Together), baixando especificamente a pasta **Extras.zip**.

### Outros Mods

Você encontra uma tonelada de mods do RimWorld só dando um Google por aí. A gente recomenda muito usar a [Steam Workshop do RimWorld](https://steamcommunity.com/app/294100/workshop/) por ser super popular e ter uma quantidade gigante de mods.

Quando você assina mods direto pela Steam Workshop, eles baixam pelo seu cliente Steam na pasta: `../steamapps/workshop/content/294100`.

:::tip
Se você não tem RimWorld no Steam, ainda dá pra baixar os arquivos da Steam Workshop usando o SteamCMD. Primeiro, baixe o [SteamCMD no site oficial da Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou direto [aqui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Rode o **steamcmd.exe** e espere a instalação terminar. Quando estiver pronto, digite `login anonymous` no console.

Agora você pode baixar mods rodando `workshop_download_item 294100 [workshop_id]`, trocando `[workshop_id]` pelo ID do mod na Steam Workshop. Você acha o ID no final da URL, tipo: `/?id=3230195082`.

Os mods baixados via SteamCMD vão para a pasta: `../steamapps/workshop/content/294100`.
:::

Depois de baixar os mods, siga para a próxima seção que explica como enviar eles pro seu servidor de jogos.

:::note
Tem alguns mods que com certeza não funcionam com RimWorld Together. Você pode ver a lista dos [mods incompatíveis confirmados aqui](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Além disso, pode ter outros mods que não funcionam direito com RimWorld Together, então talvez você precise testar e pesquisar um pouco pra garantir que tudo roda liso.
:::

## Enviando Mods

Agora que você já tem os mods prontos, conecte no seu servidor de jogos via FTP. Dá uma olhada no nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) pra aprender como fazer isso.

Com seu cliente FTP aberto, navegue até o seguinte diretório:
```
../rimworld-together/Mods
```

Lá dentro, você vai ver três pastas separadas para os diferentes tipos de mods. Isso tem tudo a ver com o que falamos lá no começo da seção anterior sobre os tipos de mods. Se ainda não leu, vale a pena voltar pra entender direitinho onde colocar cada mod.

Com isso em mente, acesse as pastas dos mods que você baixou e envie uma por uma para a pasta certa no seu servidor de jogos.

:::note
O servidor precisa estar parado antes de adicionar ou editar mods, senão as mudanças podem não ser salvas.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Iniciando o Servidor

Depois de enviar os mods que você quer, é só ligar seu servidor de novo. Na próxima vez que ele iniciar, todos os mods que você adicionou já vão estar ativos.

Parabéns, você instalou novos mods no seu servidor RimWorld Together!

## Mods Populares

Ainda procurando os mods perfeitos pro seu servidor? Dá uma olhada na nossa lista selecionada com os mods mais populares e recomendados pra melhorar sua jogatina e dar aquele toque final no seu servidor. Se inspire e ache exatamente o que seu projeto precisa.

<SearchableItemList items={items} />

<InlineVoucher />
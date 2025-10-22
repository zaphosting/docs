---
id: rimworldtogether-configuration
title: "RimWorld Together: Configuração do Servidor"
description: "Explore as configurações do servidor RimWorld Together para personalizar o gameplay e gerenciar o acesso para uma experiência multiplayer sob medida → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os servidores RimWorld Together vêm com uma variedade de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Atualmente, a única forma de editar esses arquivos é acessando seu servidor via FTP. Se você não está familiarizado com o uso de FTP, recomendamos dar uma olhada no [guia Acesso via FTP](gameserver-ftpaccess.md).

:::note
O servidor deve estar parado antes de qualquer configuração ser editada; editar um arquivo de configuração e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Com seu cliente FTP pronto, navegue até o seguinte diretório:
```
../rimworld-together/Core
```

Essa pasta contém uma variedade de arquivos de configuração `.json` para o seu servidor RimWorld Together.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Opções de Configuração do Servidor

Nas seções abaixo, apresentamos informações sobre como ajustar algumas opções populares e comuns de configuração para o seu servidor RimWorld Together. Você pode aprender mais sobre cada um dos arquivos lendo o [guia oficial do RimWorld Together](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) que cobre as opções de configuração.

:::tip
Não recomendamos alterar as configurações de Porta ou IP encontradas no arquivo **ServerConfig.json**, pois elas são configuradas automaticamente pelo servidor de jogos. Alterar esses valores pode quebrar seu servidor de jogos!
:::

#### Lista Branca do Servidor

Ativar ou desativar a lista branca do servidor é simples. Abra o arquivo de configuração **Whitelist.json** e defina o parâmetro `UseWhitelist` como true.

Agora ajuste o parâmetro `WhitelistedUsers`, adicionando os nomes de usuário do jogo das pessoas que você deseja incluir na lista. Quem não estiver nessa lista não poderá se conectar.

#### Configurações de Gameplay

Você pode ajustar uma ampla gama de parâmetros de dificuldade para seus servidores RimWorld Together através do arquivo **DifficultyValues.json**.

Também é possível ajustar as configurações de Savegame pelo arquivo **WorldConfig.json**. Recomendamos que você não edite esse arquivo quando estiver muito avançado na sua jogatina, pois isso pode estragar a experiência.

<InlineVoucher />
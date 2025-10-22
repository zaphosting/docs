---
id: spaceengineers-addmods
title: "Space Engineers: Instalação de mods"
description: "Descubra como configurar e adicionar mods com segurança no seu servidor de jogos Space Engineers para uma experiência de jogo personalizada → Saiba mais agora"
sidebar_label: Instalar mods
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Preparação

Para poder adicionar mods em um servidor, um arquivo de configuração precisa ser editado. Para evitar problemas na aplicação das mudanças, certifique-se de que seu servidor esteja desligado antes!

Para que a configuração correta seja processada no decorrer, o nome do savegame precisa ser descoberto antes. Se as configurações não foram ajustadas, o padrão é "zap001". Mas para garantir, confira isso como descrito agora:

Para acessar as configurações do seu servidor, abra o item "Configurações" na lista à esquerda, na aba "Configurações"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

O nome do savegame pode ser visto ou alterado no primeiro campo desta página. Agora memorize esse nome para que o arquivo de configuração correto possa ser editado depois.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

A instalação do **Notepad++** também é pré-requisito para este guia, para que os passos possam ser feitos exatamente da mesma forma!

## Escolher Mods

Muitos mods podem ser encontrados na oficina do Space Engineers. A oficina está disponível [aqui](https://steamcommunity.com/workshop/about/?appid=244850).

Depois de encontrar um mod interessante, clique nele para ver todos os detalhes. Se gostar do mod, agora você deve salvar o ID do mod. O ID do mod geralmente está em negrito na lateral ou no topo da barra de URL:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Abrir Arquivos de Configuração

Existem duas formas de editar os arquivos do servidor. Uma é via [Acesso via FTP](gameserver-ftpaccess.md) e outra pelo Editor de Config no próprio painel web.

Neste caso, a configuração será editada manualmente via FTP para evitar erros de sintaxe. Como exatamente a conexão via FTP é feita está detalhado no guia linkado acima.

Assim que a conexão via FTP estiver estabelecida, navegue até o seguinte diretório:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Esta pasta lista todos os savegames já criados no servidor. Para editar as configs do savegame desejado, abra a pasta correspondente. No nosso exemplo, seria a pasta "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Agora o arquivo sandbox deve ser editado dentro dessa pasta. Essa é a config que deve ser aberta, como mostrado na imagem!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Adicionar Mods

Já existe uma área para mods na config, que fica no final do arquivo. Selecione essa parte com o mouse e apague. Depois, adicione o seguinte conteúdo:

`<Mods></Mods>`

Assim que inserir esse conteúdo, posicione o cursor entre "&gt;" & "&lt;" e pressione ENTER uma vez. Isso vai ajustar a sintaxe automaticamente para continuarmos.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

No próximo passo, adicionamos o primeiro mod. Para isso, usamos um "ModItem", que representa um mod. Copie o conteúdo abaixo e cole na config como mostrado no GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Aqui, 12345 deve ser substituído pelo ID do mod que você escolheu!
:::

Como mostrado no GIF, basta repetir os mesmos passos para adicionar mais mods. Depois de adicionar todos os mods desejados, salve a config com **CTRL+S** e feche o arquivo. Então, inicie o servidor normalmente e os mods serão instalados automaticamente.

<InlineVoucher />
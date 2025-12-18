---
id: soulmask-server-savegames
title: "Soulmask: Gerenciando Savegames do Soulmask"
description: "Descubra como gerenciar e fazer backup dos seus Savegames do Soulmask localmente e no seu servidor para um gameplay seguro → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus Savegames do Soulmask no seu servidor de jogos, incluindo fazer backup dos seus savegames locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um Cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para baixar.

Você terá que se conectar ao seu servidor via Cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão com seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava um jogo multiplayer localmente no seu dispositivo. Eles ficam dentro do AppData local do Windows, especificamente no caminho:
```
../AppData/Local/WS/[seu_steamid]/AutoGames
```

:::tip
Você pode acessar esse caminho direto apertando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%userprofile%/appdata/local/WS/`. É só clicar em **OK** e abrir a pasta com seu SteamID para chegar na pasta AutoGames.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

Nesse local, você vai ver todos os seus Savegames locais. Cada pasta é nomeada com o código de convite do servidor, facilitando identificar o mundo certo.

### Acessando Savegame via FTP

Fazer backup do seu Savegame no servidor é fácil. Depois de se conectar ao seu servidor de jogos via Cliente FTP, vá para o seguinte caminho:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Lá você vai encontrar a pasta principal `Level01_Main`, que é onde fica o save do servidor dedicado. É só clicar com o botão direito na pasta e usar o botão **Download** para salvar localmente no seu dispositivo.

:::note
No momento, servidores dedicados de Soulmask suportam apenas um save por vez, que fica na pasta principal `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Backup Automático

Também oferecemos uma opção para fazer backup automático do seu Savegame (e do arquivo de configuração) direto pelo nosso painel de controle. É só acessar o painel do seu servidor de jogos e ir em **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes sobre backups, confira nosso guia dedicado de [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu Savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via Cliente FTP e certifique-se de desligar o servidor.

:::note
No momento, servidores dedicados de Soulmask suportam apenas um save por vez, que fica na pasta principal `Level01_Main`.
:::

Quando estiver pronto, vá para o seguinte caminho:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Agora arraste e solte o arquivo **world.db** do save que você quer enviar, substituindo o arquivo existente. Lembre-se de baixar o arquivo atual do servidor se quiser mantê-lo, senão ele será perdido ao substituir.

Você também pode enviar seu arquivo de configurações de gameplay, indo para o seguinte caminho:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Arraste e solte o arquivo **GameXishu.json** do save que deseja enviar, substituindo o arquivo existente. Novamente, baixe o arquivo atual se quiser manter antes de substituir.

:::tip
Se o save que você está usando tiver um nome diferente para o arquivo **GameXishu.json**, por exemplo `GameXishu_2.json`, renomeie o arquivo de volta para `GameXishu.json` para que seja reconhecido pelo servidor dedicado.
:::

Agora é só ligar o servidor de novo, e seu save deve carregar normalmente no servidor.

<InlineVoucher />
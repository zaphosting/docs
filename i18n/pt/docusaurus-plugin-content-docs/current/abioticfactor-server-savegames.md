---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Gerenciando Savegames do Abiotic Factor"
description: "Descubra como gerenciar e fazer backup dos seus saves do Abiotic Factor localmente e no seu servidor para um gameplay seguro → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Neste guia, vamos explorar como gerenciar seus saves do Abiotic Factor no seu servidor de jogos, incluindo fazer backup dos seus saves locais e do servidor, além de como enviá-los para o seu servidor.

<InlineVoucher />

## Preparação

Para acessar os arquivos do seu servidor, você vai precisar de um cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para download.

Você deve se conectar ao seu servidor via cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos. Use nosso [Acesso via FTP](gameserver-ftpaccess.md) para mais ajuda na conexão com seu servidor.

## Backup do Savegame

### Savegame Local

Savegames locais são aqueles que você criou enquanto hospedava uma partida multiplayer localmente no seu dispositivo. Eles ficam dentro do AppData local do Windows, no seguinte caminho:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[seu_steamid]/Worlds
```

:::tip
Você pode acessar esse caminho direto apertando `CTRL` + `R` ao mesmo tempo e digitando o seguinte caminho na caixa de execução: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Só clicar em **OK** e você será levado para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Não esqueça de navegar até a pasta do seu Steam ID e depois para a pasta `Worlds`. Lá você vai encontrar todos os seus saves locais.

### Acessando Savegame via FTP

Fazer backup do seu savegame no servidor é fácil. Depois de se conectar ao seu servidor de jogos via cliente FTP, vá para o seguinte caminho:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Lá você vai encontrar seus saves. Clique com o botão direito na pasta e use o botão **Download** para salvar localmente no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Backup Automático

Também oferecemos uma opção para fazer backup automático do seu savegame (e do arquivo de configuração) direto pelo nosso painel de controle. É só ir na interface web do seu servidor de jogos e acessar **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Você recebe 10GB de armazenamento gratuito para backups. Para mais detalhes, confira nosso guia dedicado de [Backups](gameserver-backups.md).

## Enviando Savegame

Assim como fazer backup, enviar seu savegame é simples. Primeiro, conecte-se ao seu servidor de jogos via cliente FTP. Depois, vá para o seguinte caminho:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Atualmente, servidores dedicados de Abiotic Factor não suportam troca entre savegames, então você deve enviar o conteúdo da sua pasta de savegame para a pasta principal `world`.
:::

Agora abra a pasta do savegame que você quer enviar. Arraste e solte todo o conteúdo interno da sua pasta de savegame para a pasta principal `world` no servidor. Isso vai enviar seu savegame para o servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Se a pasta principal `world` do savegame estiver faltando, tente desligar e ligar o servidor. Se não funcionar, use o botão **Revalidar arquivos Steam** no dashboard principal do servidor para restaurar os arquivos padrão.
:::

## Ativando Savegame

Diferente do usual, onde você precisa editar um arquivo de configuração para ativar seu savegame, aqui não precisa, pois servidores dedicados de Abiotic Factor ainda não suportam troca de savegames.

Basta reiniciar seu servidor e, no próximo lançamento, ele vai carregar o conteúdo do savegame que você enviou para a pasta principal `world`.

<InlineVoucher />
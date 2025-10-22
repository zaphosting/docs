---
id: satisfactory-addmods
title: "Satisfactory: Instalar Mods"
description: "Descubra como gerenciar e instalar mods com segurança em servidores de Satisfactory enquanto protege seu savegame → Saiba mais agora"
sidebar_label: Instalar Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**IMPORTANTE**

Mods atualmente não estão funcionando!
:::

:::info
**CUIDADO**

Mods **não são oficialmente** suportados pelos desenvolvedores, mas são tolerados!

No pior cenário, a instalação de mods pode corromper o savegame, torná-lo temporariamente injogável após uma atualização ou até destruí-lo!

Um backup deve ser criado **sempre antes** de instalar mods e backups também devem ser feitos regularmente, por precaução!
:::

<InlineVoucher />

## Instalar Satisfactory Modificado no servidor

Para conseguir instalar mods no seu servidor, primeiro você precisa pedir um Servidor Modificado de Satisfactory: https://zap-hosting.com/en/satisfactory-server-hosting/
Se você já alugou um servidor de Satisfactory, o jogo pode ser trocado a qualquer momento graças ao sistema em nuvem, como descrito em [Troca de Jogo](gameserver-gameswitch.md).

## Instalar Mod-Manager

A ferramenta "SatisfactoryModManager" facilita muito a administração e instalação de mods, podendo ser feita com poucos cliques.
A ferramenta está disponível para Windows e Linux e pode ser baixada aqui: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Todas as versões estão listadas na página linkada; normalmente, a versão mais recente deve ser usada, ou seja, a primeira entrada do topo.
A ferramenta pode ser baixada em "Assets". Dependendo do sistema operacional (Windows ou Linux), clique no arquivo correspondente, que iniciará o download automaticamente ou, dependendo do seu navegador ou configurações, você precisará confirmar.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Quando o download terminar, execute o arquivo e instale o mod manager no seu PC, escolhendo as opções que preferir durante a instalação.

## Instalar Mods

Os mesmos mods devem ser instalados 1:1 no cliente (por todos os jogadores!) e no servidor para que a conexão funcione e não ocorram crashes.
No primeiro passo, os mods são compilados e instalados no cliente para depois serem transferidos para o servidor.

:::info
**AVISO**

Nem todos os mods são compatíveis com multiplayer!

Se o mod for compatível com multiplayer, isso geralmente é mencionado na descrição do mod.

Nota: Mesmo que o mod declare ser compatível com multiplayer, isso não é garantia!
:::

### Cliente

Os mods são salvos em perfis para que, por exemplo, outros mods possam ser testados em um mundo de teste e você possa voltar aos mods normais com um clique.
Então, primeiro selecione um perfil ou crie um novo, como mostrado na imagem.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Primeiro, defina o filtro para "Compatible" para que só apareçam mods que são compatíveis com a versão atual.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Agora os mods podem ser instalados simplesmente clicando no ícone de download, desde que tenha certeza que o mod é compatível com multiplayer, como explicado acima.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Servidor

Depois que todos os mods desejados forem instalados no cliente e confirmado que são compatíveis com multiplayer, os mods podem ser instalados no servidor.
Para evitar problemas na transferência das alterações, certifique-se de que seu servidor esteja desligado antes!

Agora conecte-se ao seu servidor via FTP para poder enviar os mods na próxima etapa.
Explicamos tudo sobre a conexão FTP em [Acesso via FTP](gameserver-ftpaccess.md).
Após conectar, abra o caminho da pasta: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Agora você precisa abrir a pasta local do Satisfactory no seu PC.
Os passos variam um pouco entre Steam e Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Se você instalou o Satisfactory via Steam, pode abrir a pasta diretamente pelo cliente Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
A Epic Games não tem um botão para abrir a pasta de instalação, então ela deve ser aberta manualmente.
Para isso, abra o Explorador de Arquivos do Windows e navegue até a pasta onde você instalou a Epic Games.
Normalmente o caminho correto é: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Os mods instalados no cliente pelo mod manager agora devem ser enviados via FTP.
Para acessar os mods, abra as pastas na sequência: `FactoryGame -> Mods`.

Agora selecione todas as pastas **exceto a pasta SML** segurando CTRL e clicando nas pastas.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

As pastas selecionadas devem ser arrastadas e soltas na pasta de mods aberta no FTP.

## Iniciar servidor

Depois que os mods forem enviados, o servidor pode ser iniciado normalmente pelo painel web. O servidor deve estar pronto para conexão, e você pode aprender mais no guia [Conectar ao Servidor](satisfactory-connect.md).

<InlineVoucher />
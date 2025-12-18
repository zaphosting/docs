---
id: satisfactory-switchexperimental
title: "Satisfactory: Versão Experimental"
description: "Descubra os benefícios e riscos de usar a versão experimental do Satisfactory para acessar grandes atualizações antes e turbinar sua experiência de jogo → Saiba mais agora"
sidebar_label: Versão Experimental
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que é a versão experimental?
Satisfactory tem duas versões: a versão regular e a versão experimental. A versão regular é mais confiável, estável e menos propensa a bugs, pois é uma versão mais finalizada. Já a versão experimental dá acesso às grandes atualizações primeiro, antes de serem lançadas na versão regular, por isso tem mais chances de bugs e atualizações muito mais frequentes, mas o benefício de testar as novidades antes de todo mundo!

:::info
Nota: Independente da versão que você escolher, tanto seu servidor de jogos quanto seu cliente do jogo precisam estar na mesma versão para conseguir se conectar.
:::

<InlineVoucher />

## Como mudar para a versão experimental?
No nosso sistema de servidor de jogos, é super simples trocar a versão do servidor pelo nosso site. Antes de começar, recomendamos que você faça backup dos seus saves do Satisfactory, pois trocar a versão do jogo apaga todos os arquivos.

### Fazendo backup dos saves
Fazer backup do seu servidor de jogos ou dos saves é moleza. Vá até a página do produto Satisfactory e entre na aba `Ferramentas -> Backups`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Nessa página você pode fazer várias funções, incluindo backups automáticos, que explicamos melhor em [Backups](gameserver-backups.md). Aqui vamos focar no backup manual.

No topo da página, é só clicar no ícone verde de + e aceitar o prompt para fazer backup do servidor de jogos inteiro no seu armazenamento de backup da ZAP.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Seu backup foi criado e pode ser acessado via FTP, explicado em [Acesso via FTP](gameserver-ftpaccess.md).

Alternativamente, você pode baixar os arquivos de savegame direto na seção `Savegame Manager` no webinterface. Você encontra isso em [Savegame Manager](satisfactory-savegame.md).

### Trocando para o servidor de jogos experimental
Primeiro, vá para a página do seu produto Satisfactory e entre na aba `Configurações -> Jogos`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Você verá a seção `Jogos instalados` que mostra os jogos que você já instalou. Se você já tiver trocado entre as versões antes, ela vai estar aí e você pode pular para o passo final para ativar o jogo.

Depois, desça a página e clique no menu suspenso `Jogos disponíveis` e pesquise por "Satisfactory" na caixa de texto.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Clique no botão verde de download e confirme a instalação no prompt que aparecer. O download da versão do servidor especificada vai começar.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>O download pode levar alguns minutos. Espere terminar antes de continuar para o passo final.

Agora as duas versões vão aparecer em `Jogos instalados` para facilitar a troca depois.

Por fim, você precisa ativar o jogo na seção `Jogos instalados`. Clique no ícone azul de ativar jogo.

:::info
Atenção: Todos os dados do jogo serão apagados durante a reinstalação, então volte alguns passos e faça backup se ainda não fez.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Se quiser voltar para a versão regular, siga os mesmos passos, mas escolha o servidor de jogos Satisfactory regular na hora da seleção!

## Como mudar o cliente do jogo para experimental
:::info
Nota: Independente da versão que você escolher, tanto seu servidor de jogos quanto seu cliente do jogo precisam estar na mesma versão para conseguir se conectar.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Primeiro abra seu Steam e vá para sua biblioteca de jogos. Procure por "Satisfactory", clique com o botão direito e selecione o menu de propriedades.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

No novo menu, vá para a seção `Betas` e selecione `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

É isso, agora é só esperar o Steam atualizar o jogo para a versão selecionada e aí você pode iniciar o jogo e curtir seu servidor!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
No Epic Games, mudar para experimental é ainda mais fácil. Basta ir na sua biblioteca e encontrar o jogo "Satisfactory Experimental". As duas versões do jogo no launcher Epic Games aparecem separadas na biblioteca.

É isso, agora é só esperar o Epic Games baixar e instalar o jogo e aí você pode iniciar o jogo e curtir seu servidor!

</TabItem>
</Tabs>

<InlineVoucher />
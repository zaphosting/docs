---
id: minecraft-faultyworld
title: "Minecraft: Remova chunks corrompidos do mundo"
description: "Descubra como corrigir erros de chunks no Minecraft e restaurar uma jogabilidade suave removendo seções corrompidas do mundo → Saiba mais agora"
sidebar_label: Mundo Corrompido (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Seu mundo está parcialmente sobrecarregado ou com bugs e isso limita a jogabilidade, impedindo você de jogar direito? Isso pode acontecer se houver muitos itens em certas áreas do seu mundo ou se ele contiver chunks corrompidos. Um Erro de Chunk é um bug relativamente comum no Minecraft que ocorre quando um chunk carrega de forma incorreta.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Preparação

Existem várias ferramentas que podem ser usadas para modificar mundos do Minecraft. Uma das mais comuns é o [MCA Selector](https://github.com/Querz/mcaselector), que será usado neste guia. Para isso, baixe o arquivo `MCA_Selector_Setup.exe`.

Além disso, você precisa dos arquivos do seu mundo no seu computador. O mundo pode ser baixado via FTP. Se você não está familiarizado com o uso de FTP, recomendamos que dê uma olhada no nosso [guia de Acesso via FTP](gameserver-ftpaccess.md). Baixe o diretório `world` da pasta do servidor de jogos.

## Carregar mundo

Depois de baixar a ferramenta e o mundo, você pode importar o mundo para a ferramenta. Para isso, clique na navegação da ferramenta em `File -> Open World`. Em seguida, você deverá ver seu mundo como no nosso exemplo.

:::info
Dependendo das coordenadas, pode ser necessário dar zoom out com o mouse para encontrar a área relevante.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Remover chunk(s)

Você pode selecionar caixas individuais (chunks) com um clique do mouse. Procure e selecione os chunks que estão problemáticos para você e que devem ser deletados. Depois clique em `Selection -> Delete selected Chunks` na navegação.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

Como resultado, os chunks selecionados foram deletados e agora você pode enviar o mundo de volta para o seu servidor via FTP.

## Conclusão

Parabéns, você removeu com sucesso os chunks corrompidos e deve conseguir jogar nesse mundo normalmente novamente. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
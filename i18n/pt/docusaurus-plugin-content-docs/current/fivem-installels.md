---
id: fivem-installels
title: "FiveM: Instalando ELS no seu servidor"
description: "Descubra como configurar e ativar o ELS-FiveM com carmods para uma jogabilidade aprimorada no seu servidor → Saiba mais agora"
sidebar_label: Instalar ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conecte-se ao FTP

Para poder instalar o recurso, o [Acesso via FTP](gameserver-ftpaccess.md) precisa estar configurado.

## Preparação

Primeiro, baixe a versão mais recente do [ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest), que pode ser encontrada em "Assets".

Depois de baixar o ELS, descompacte o arquivo e abra a pasta "ELS-FiveM".

## Configuração

Agora vamos configurar o ELS-FiveM fazendo uma cópia do arquivo `vcf.default.lua` e renomeando para `vcf.lua`.

:::info
Nota: O arquivo antigo `vcf.default.lua` não deve ser deletado.
:::

Outras configurações também podem ser ajustadas no arquivo "config.lua", mas vamos deixar como padrão.

## Upload do Recurso

Você pode instalar o ELS-FiveM enviando os arquivos via arrastar & soltar na pasta "resources".

Depois de enviar, abra o server.cfg na pasta server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Entre as entradas de inicialização restantes para recursos, agora pode ser adicionada a entrada para o ELS-FiveM.

Depois disso, o servidor pode ser reiniciado e o ELS-FiveM estará disponível no jogo!

## Configuração dos Carmods

Para adicionar novos carmods ao ELS-FiveM, primeiro precisamos do ELS-Config, que você geralmente encontra na pasta do carmod baixado. Normalmente ele se chama `autoname.xml`, no nosso caso é `scpdvic.xml`.

Envie esses arquivos para a pasta "vcf" dentro da nossa pasta ELS-FiveM via FTP.

Agora que o arquivo foi enviado, abra o arquivo 'vcf.lua' na pasta ELS-FiveM.

:::info
Certifique-se de que a linha anterior sempre termine com uma vírgula.
:::

Pronto! Nosso Carmod deve estar habilitado para ELS e funcionando após reiniciar o servidor.

<InlineVoucher />
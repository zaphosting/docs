---
id: fivem-esx-changejobgarages
title: "FiveM: Garagens de Trabalho - Adicionando Carros"
description: "Descubra como personalizar e expandir as garagens de trabalho com carros adicionais para melhorar sua experiência de jogo → Saiba mais agora"
sidebar_label: Adicionar Carros na Garagem de Trabalho
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer mudar ou expandir os carros disponíveis nas suas garagens de trabalho? Abaixo explicamos como fazer isso e quais passos você precisa seguir!

<InlineVoucher />



## Configuração

Carros adicionais são adicionados às garagens de trabalho via FTP. Para isso, conecte-se ao seu servidor de jogos via FTP. Se você ainda não sabe como usar FTP, dê uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md).

Depois de conectado via FTP, navegue até a pasta do recurso ESX e abra a pasta esx_addons. A estrutura da pasta deve ser assim: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Agora selecione, por exemplo, o trabalho Ambulância ou Polícia e abra o arquivo de configuração `config.lua` dentro dos recursos.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



No arquivo de configuração, a seção `Config.AuthorizedVehicles` precisa ser ajustada. Você pode procurá-la usando a função de busca e então ajustar ou expandir conforme desejar:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Certifique-se de que há uma vírgula no final da linha anterior ao adicionar novos veículos, caso contrário podem ocorrer problemas.
:::



## Conclusão

Se você seguiu todos os passos, agora deve ter personalizado ou expandido com sucesso a garagem dos seus trabalhos. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
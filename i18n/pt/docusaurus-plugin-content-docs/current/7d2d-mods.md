---
id: 7d2d-mods
title: "7 Days to Die: Instalação de mods"
description: "Descubra como personalizar seu servidor com mods populares e melhorar a jogabilidade para uma experiência única → Saiba mais agora"
sidebar_label: Instalar mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Com mods, você tem a possibilidade de personalizar ainda mais seu servidor. A seguir, vamos explicar onde encontrar os mods de servidor mais populares e como configurá-los. Com a introdução do Alpha 17 Experimental, foi criado o conceito de modlets. Modlets são mods menores que não sobrescrevem os arquivos XML originais, mas são carregados a partir da pasta de mods.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Preparação

A primeira coisa que você precisa fazer é baixar os mods que deseja instalar no seu servidor. Você pode encontrar uma grande seleção de mods em [7daystodiemods.com](https://7daystodiemods.com/). Lá você vai encontrar mais de 1000 mods, e novos são adicionados regularmente. Depois de baixar um mod, ele deve conter a seguinte estrutura de arquivos:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Instalação

Depois de baixar os mods desejados, você pode começar a instalação propriamente dita. A configuração dos mods é feita via FTP. Você vai precisar de um cliente FTP para conseguir enviar os arquivos para o seu servidor. Se você não sabe o que é FTP e como funciona, dê uma olhada neste guia: [Acesso via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

No diretório ``/gXXXXX4/7dtd-linux-exp/`` você precisa criar uma pasta chamada **Mods**. Para isso, clique com o botão direito e selecione **Criar diretório**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Depois, os arquivos do mod devem ser enviados para a pasta mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

Pronto! A instalação do mod já está concluída. Na próxima vez que você iniciar o servidor, os mods devem ser carregados automaticamente.

<InlineVoucher />
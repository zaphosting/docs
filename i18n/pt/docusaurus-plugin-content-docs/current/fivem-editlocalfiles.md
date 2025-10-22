---
id: fivem-editlocalfiles
title: "FiveM: Arquivos Locales (Variáveis de idioma)"
description: "Aprenda como personalizar e adicionar idiomas ao seu recurso para uma experiência personalizada → Saiba mais agora"
sidebar_label: Arquivos Locales (Idioma)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Quer mudar as variáveis de idioma de um recurso ou adicionar mais idiomas que ainda não existem? Os arquivos locales permitem que você ajuste as variáveis de idioma do recurso que desejar.

<InlineVoucher />



## Encontrar Arquivos Locales

Os arquivos locales devem ser editados usando um cliente FTP. Se você é novo no uso de FTP, recomendamos ler primeiro o [guia de acesso FTP](gameserver-ftpaccess.md). Depois de conectado, navegue até o diretório do recurso ESX do recurso que deseja editar. Abra o diretório locales dentro do diretório do recurso.

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Dentro do diretório locales você encontrará todos os arquivos de idioma que existem para esse recurso. A partir daqui, você pode editar um arquivo existente ou copiar um arquivo com um novo nome para um novo idioma, que você poderá editar.

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Editar Arquivo Locales

Agora você pode ajustar o conteúdo das variáveis de idioma individuais no arquivo locale aberto. O conteúdo das variáveis de idioma está depois do sinal de igual, dentro das aspas. Ajuste o conteúdo como preferir e salve as alterações no final.

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Definir Locale (Idioma)

O idioma usado pode ser definido via o arquivo de configuração `config.lua` no diretório do recurso. Para isso, ajuste o valor de `Config.Locale = GetConvar('esx:locale', 'en')`.

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusão

Parabéns, se você seguiu todos os passos, editou com sucesso o arquivo locale do seu recurso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
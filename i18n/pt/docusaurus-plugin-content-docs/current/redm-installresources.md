---
id: redm-installresources
title: "RedM: Instalação de recursos"
description: "Descubra como turbinar seu servidor RedM com recursos populares para projetos maiores, como servidores de roleplay → Saiba mais agora"
sidebar_label: Instalar recursos
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Recursos podem ser usados para expandir seu servidor RedM com funcionalidades extras. Isso é especialmente interessante se você planeja iniciar projetos maiores, como um servidor de roleplay ou algo parecido. Algo assim não rola sem esses recursos adicionais.

RedM e sua comunidade oferecem uma grande variedade de recursos. Uma visão geral dos recursos mais populares pode ser encontrada no Fórum Cfx.re: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Preparação

A instalação dos recursos é feita via FTP. Você vai precisar de um cliente FTP para enviar os arquivos para seu servidor. Se você não está familiarizado com FTP, recomendamos dar uma olhada no [guia de acesso FTP](gameserver-ftpaccess.md).

Os recursos baixados geralmente vêm em formato compactado. Isso significa que você precisa descompactar os arquivos usando um programa como 7Zip, WinRAR ou WinZip. A pasta do recurso descompactado deve conter pelo menos os seguintes arquivos: `__resource.lua` ou `fxmanifest.lua` junto com os arquivos de script associados.

:::info
Se esses arquivos não estiverem presentes, pode ser que eles estejam dentro de um subdiretório dentro do recurso.
:::

## Instalação

### Enviando arquivos

Agora você deve enviar os arquivos descompactados como uma pasta individual (se ainda não estiver assim). Sua pasta deve ser enviada para o diretório `resource` do servidor. A estrutura do diretório geralmente é assim: `/gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Alguns recursos funcionam com banco de dados e por isso já vêm com arquivos SQL que precisam ser importados para o banco. Se for o caso, confira nosso [guia de importação de arquivos SQL](redm-sql-file-import.md) para aprender como fazer isso.

### Ativação

Para garantir que o recurso instalado seja carregado na inicialização do servidor, você precisa ativá-lo no arquivo `server.cfg` do seu servidor. A ativação é feita com o comando `start [nome do recurso]`.

Por exemplo, se você enviou o recurso na pasta chamada `eup-ui`, o comando start no config deve ser assim:
```
start eup-ui
```

Você pode acessar seu arquivo `server.cfg` pelo Editor CFG na interface do txAdmin.

:::info
Fique atento para que o nome da pasta criada seja exatamente igual ao que está no comando start, incluindo maiúsculas e minúsculas.
:::



## Conclusão
Por fim, reinicie seu servidor. O recurso instalado deve ser carregado na próxima vez que o servidor iniciar completamente. Você instalou com sucesso um recurso no seu servidor de jogos RedM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
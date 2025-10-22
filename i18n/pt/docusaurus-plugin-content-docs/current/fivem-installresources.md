---
id: fivem-installresources
title: "FiveM: Instalação de recursos"
description: "Descubra como turbinar seu servidor FiveM com recursos populares para projetos maiores, como servidores de roleplay → Saiba mais agora"
sidebar_label: Instalar recursos
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introdução

Recursos podem ser usados para expandir seu servidor FiveM com funcionalidades extras. Isso é especialmente interessante se você planeja começar projetos maiores, como um servidor de roleplay ou algo parecido. Algo assim não rola sem esses recursos adicionais.

O FiveM e sua comunidade oferecem uma grande variedade de recursos. Uma visão geral dos recursos mais populares pode ser encontrada no Fórum Cfx.re: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Preparação

A instalação dos recursos é feita via FTP. Você vai precisar de um cliente FTP para enviar os arquivos para seu servidor. Se você não está familiarizado com FTP, recomendamos dar uma olhada no guia de [acesso FTP](gameserver-ftpaccess.md).

Os recursos baixados geralmente vêm em formato compactado. Isso significa que você precisa descompactar os arquivos usando um programa como 7Zip, Winrar ou WinZip. A pasta do recurso descompactado deve conter pelo menos os seguintes arquivos: `__resource.lua` ou `fxmanifest.lua`, além dos arquivos de script associados.

:::info
Se esses arquivos não estiverem presentes, pode ser que eles estejam dentro de um subdiretório dentro do recurso.
:::

## Instalação

### Enviando arquivos

Agora você deve enviar os arquivos descompactados como uma pasta individual (se ainda não estiver assim). Sua pasta deve ser enviada para o diretório `resource` do servidor. A estrutura de diretórios normalmente é: `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Alguns recursos funcionam com banco de dados e por isso já trazem arquivos SQL que precisam ser importados para o banco. Se for o caso, confira nosso guia de [Importação de Arquivos SQL](fivem-sql-file-import.md) para aprender como fazer isso.

### Ativação

Para garantir que o recurso instalado seja carregado na inicialização do servidor, você precisa ativá-lo no arquivo `server.cfg` do seu servidor. A ativação é feita com o comando `start [nome do recurso]`.

Por exemplo, se você enviou o recurso com a pasta chamada `eup-ui`, o comando start no config deve ser assim:
```
start eup-ui
```

Você pode acessar seu arquivo `server.cfg` pelo Editor CFG na interface do txAdmin.

:::info
Fique atento para que o nome da pasta criada seja exatamente igual ao que está no comando start, incluindo maiúsculas e minúsculas.
:::


## Recursos Populares

Ainda procurando os recursos perfeitos para seu servidor? Navegue pela nossa lista cuidadosamente selecionada dos recursos mais populares e recomendados para melhorar sua jogabilidade e dar aquele toque final que seu servidor merece. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={items} />


## Conclusão
Por fim, você pode reiniciar seu servidor. O recurso instalado deve ser carregado na próxima vez que seu servidor iniciar completamente. Você instalou com sucesso um recurso no seu servidor de jogos FiveM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
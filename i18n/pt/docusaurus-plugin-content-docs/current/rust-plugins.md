---
id: rust-plugins
title: "Rust: Instalação de plugins"
description: "Descubra como turbinar seu servidor de jogos Rust com plugins populares para personalização e gameplay melhorada → Saiba mais agora"
sidebar_label: Instalar Plugins 
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introdução

Plugins permitem que você expanda e personalize ainda mais seu servidor. A seguir, vamos explicar onde encontrar os plugins mais usados e como configurá-los.

<InlineVoucher />


## Preparação

Primeiro, você precisa baixar os plugins que quer instalar no servidor. Uma grande seleção de plugins está disponível em [umod.org (antigo OXIDE)](https://umod.org/plugins). Durante o download, você receberá um arquivo `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Instalação

Depois de baixar os plugins desejados, você pode seguir para a instalação. Isso é feito via **FTP**, então você vai precisar de um cliente FTP para enviar os arquivos para seu servidor. Se ainda não conhece FTP e como funciona, confira nosso [guia de acesso FTP](gameserver-ftpaccess.md).

Você vai encontrar o diretório correto para os plugins em: `/gXXXXXX/rust-oxide/oxide/plugins`. Basta enviar os arquivos `.cs` dos plugins baixados para essa pasta. Depois do upload, deve ficar parecido com isso:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Não precisa fazer mais nada. Isso já completa a instalação. Depois, você pode conferir no console ao vivo se o plugin foi compilado e carregado com sucesso. A saída deve ser parecida com esta:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Plugins Populares

Ainda procurando os plugins perfeitos para seu servidor?

Dê uma olhada na nossa lista cuidadosamente selecionada dos plugins mais populares e recomendados para melhorar sua gameplay e dar aquele toque final que seu servidor merece. Inspire-se e encontre exatamente as adições que combinam com seu projeto.

<SearchableItemList items={items} />


## Conclusão

Se você seguiu todos os passos, seu plugin já deve estar instalado com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
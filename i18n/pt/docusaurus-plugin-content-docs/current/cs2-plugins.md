---
id: cs2-plugins
title: "CS2: Instalação de plugins"
description: "Explore o cenário em evolução dos plugins e projetos da comunidade para CS2 e melhore sua experiência em Counter-Strike → Saiba mais agora"
sidebar_label: Instalar plugins
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Introdução

Counter-Strike 2 continua a longa tradição de personalização de servidores guiada pela comunidade. Plugins permitem que donos de servidor de jogos estendam a jogabilidade, adicionem recursos de qualidade de vida, implementem regras personalizadas ou criem modos de jogo totalmente novos.

Com a transição para Source 2, o ecossistema de plugins mudou bastante. Para CS2, o **CounterStrikeSharp** se estabeleceu como o principal framework ativo para desenvolvimento de plugins do lado do servidor.

<InlineVoucher />



## Instalando Metamod:Source

O Metamod precisa ser instalado primeiro, pois o CounterStrikeSharp depende dele. Após baixar o [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), extraia o arquivo. Dentro do arquivo, você encontrará um diretório `addons`. Esse diretório deve ser enviado diretamente para o diretório do jogo CS2 via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Depois de copiar os arquivos, localize o arquivo `gameinfo.gi` dentro de `/game/csgo/`. Abra esse arquivo com um editor de texto. Dentro do arquivo, encontre a linha que contém `Game_LowViolence csgo_lv`. Logo abaixo dessa linha, adicione a seguinte entrada:

```
Game csgo/addons/metamod
```

<Button label="Baixar Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Instalando CounterStrikeSharp

Depois de confirmar que o Metamod está rodando, o CounterStrikeSharp pode ser instalado. O CounterStrikeSharp é distribuído pelo seu repositório oficial no GitHub e fornecido como um pacote pré-compilado. Baixe a versão do CounterStrikeSharp que inclui o runtime. Extraia o arquivo e copie o diretório `addons` incluído para o mesmo diretório do jogo CS2 via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Não mescle ou renomeie diretórios manualmente. A estrutura fornecida pelo arquivo deve permanecer intacta. Após enviar os arquivos, reinicie o servidor novamente. Durante a inicialização, o CounterStrikeSharp será carregado automaticamente pelo Metamod. Para verificar a instalação, abra o console do servidor e execute:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Baixar CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Instalando Plugins

Plugins para CounterStrikeSharp são fornecidos como arquivos `.dll` compilados. Esses arquivos devem ser colocados no diretório `plugins` dentro do caminho de instalação do CounterStrikeSharp.

Após copiar um plugin para esse diretório e reiniciar o servidor, o CounterStrikeSharp carrega automaticamente todos os plugins disponíveis. Se algum plugin falhar ao carregar, verifique os logs do servidor para mensagens de erro relacionadas ao CounterStrikeSharp ou ao próprio plugin.




## Plugins Populares

<SearchableItemList items={items} />



## Conclusão

Se você seguiu todos os passos, deve ter instalado com sucesso o Metamod/CounterStrikeSharp e os plugins desejados. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂




<InlineVoucher />
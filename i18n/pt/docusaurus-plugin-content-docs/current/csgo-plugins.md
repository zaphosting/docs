---
id: csgo-plugins
title: "CS:GO: Instalação de plugins"
description: "Explore o cenário em evolução dos plugins e projetos da comunidade de CS:GO para turbinar sua experiência no Counter-Strike → Saiba mais agora"
sidebar_label: Instalar plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introdução

CS:GO continua a longa tradição de personalização de servidores guiada pela comunidade. Plugins permitem que donos de servidor de jogos estendam a jogabilidade, adicionem recursos que facilitam a vida, implementem regras customizadas ou criem modos de jogo totalmente novos.

Com a transição para o Source 2, o ecossistema de plugins mudou bastante. Para CS:GO, o **CounterStrikeSharp** se firmou como o principal framework ativo e mantido para desenvolvimento de plugins do lado do servidor.



<InlineVoucher />



## Instalando Metamod:Source

O Metamod precisa ser instalado primeiro, pois o CounterStrikeSharp depende dele. Após baixar o [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), extraia o arquivo. Dentro do pacote, você vai encontrar um diretório `addons`. Esse diretório deve ser enviado diretamente para a pasta do jogo CS:GO via [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Depois de copiar os arquivos, localize o arquivo `gameinfo.gi` dentro de `/game/csgo/`. Abra esse arquivo com um editor de texto. Dentro dele, encontre a linha que contém `Game_LowViolence csgo_lv`. Logo abaixo dessa linha, adicione a seguinte entrada:

```
Game csgo/addons/metamod
```

<Button label="Baixar Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Instalando CounterStrikeSharp

Assim que confirmar que o Metamod está rodando, você pode instalar o CounterStrikeSharp. Ele é distribuído pelo repositório oficial no GitHub e disponibilizado como um pacote pré-compilado. Baixe a versão do CounterStrikeSharp que inclui o runtime. Extraia o arquivo e copie o diretório `addons` para a mesma pasta do jogo CS:GO via [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Não faça merge ou renomeie diretórios manualmente. A estrutura fornecida pelo pacote deve permanecer intacta. Após enviar os arquivos, reinicie o servidor. Durante a inicialização, o CounterStrikeSharp será carregado automaticamente pelo Metamod. Para verificar a instalação, abra o console do servidor e rode:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Baixar CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Instalando Plugins

Plugins para CounterStrikeSharp são fornecidos como arquivos `.dll` compilados. Esses arquivos devem ser colocados na pasta `plugins` dentro do caminho de instalação do CounterStrikeSharp.

Depois de copiar um plugin para essa pasta e reiniciar o servidor, o CounterStrikeSharp carrega automaticamente todos os plugins disponíveis. Se algum plugin não carregar, verifique os logs do servidor para mensagens de erro relacionadas ao CounterStrikeSharp ou ao plugin em questão.




## Plugins Populares

<SearchableItemList items={items} />



## Conclusão

Se você seguiu todos os passos, deve ter instalado com sucesso o Metamod/CounterStrikeSharp e os plugins desejados. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂




<InlineVoucher />
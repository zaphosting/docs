---
id: hl2-plugins
title: "Half-Life 2: Instale plugins no seu próprio servidor"
description: "Descubra como personalizar e melhorar seu servidor de jogos com Sourcemod e Metamod para melhor gerenciamento e recursos → Saiba mais agora"
sidebar_label: Instalar Plugins
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/hl2-plugins.json';


## Introdução

Conheça como instalar Sourcemod e Metamod e como usar plugins no seu servidor. Ambas as extensões permitem personalizar jogos como CS:S, CS:GO, DoD:S ou TF2 e expandir significativamente as opções de gerenciamento do servidor.

Com Sourcemod e Metamod, você pode adicionar plugins, ativar recursos especiais e ajustar seu servidor exatamente do jeito que você curte.

<InlineVoucher />



## Instalação do Sourcemod / Metamod

### Preparação

As extensões necessárias podem ser baixadas em [Sourcemod](https://sourcemod.net/) e [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Sempre use as versões **estáveis** mais recentes para garantir total funcionalidade e compatibilidade.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Você vai precisar dos pacotes Linux **Sourcemod** e **Metamod**. Baixe-os nas fontes indicadas. Após o download, você terá dois arquivos compactados. Extraia-os no seu computador para obter um diretório addons contendo as pastas `sourcemod` e `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Instalação

Com os passos acima concluídos, você pode seguir para a instalação. Faça o upload dos arquivos para seu servidor via FTP usando um cliente FTP. Se você não está familiarizado com FTP e como ele funciona, confira o seguinte guia: [Acesso via FTP](gameserver-ftpaccess.md)

Depois, envie a pasta **addons** para o diretório principal do seu servidor. A estrutura da pasta deve ficar assim:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

A configuração do **Sourcemod** e **Metamod** está agora completa. Você pode conectar ao seu servidor no jogo e usar o comando ``sm version`` no console para verificar se o Sourcemod e Metamod foram instalados com sucesso. A saída deve ser parecida com esta:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Se a mensagem **Unknown command** aparecer, algo deu errado durante a instalação.



## Instalação de plugins

### Preparação

Depois que Sourcemod e Metamod estiverem instalados e funcionando corretamente, você pode começar a adicionar plugins. Baixe os plugins que deseja instalar no seu servidor em [Sourcemod](https://sourcemod.net/), onde você encontrará uma coleção grande e crescente publicada ao longo dos anos. Para cada plugin, certifique-se de obter o arquivo .smx correspondente.

### Instalação

Depois de baixar os plugins desejados, você pode prosseguir com a instalação. Isso é feito via FTP enviando os arquivos dos plugins para o diretório:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Plugins populares
Ainda procurando os plugins perfeitos para o seu servidor? Navegue pela nossa lista cuidadosamente selecionada dos plugins mais populares e altamente recomendados para melhorar sua jogabilidade e dar aquele toque final que seu servidor merece. Inspire-se e encontre exatamente as adições que combinam com seu projeto.
<SearchableItemList items={items} />


## Conclusão

Se você seguiu todos os passos, deve ter instalado com sucesso o Sourcemod/Metamod e os plugins desejados. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
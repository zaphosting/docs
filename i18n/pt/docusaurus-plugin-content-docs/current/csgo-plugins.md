---
id: csgo-plugins
title: "CS:GO: Instalação de plugins"
description: "Aprenda como instalar plugins Sourcemod no seu servidor de jogos CS:GO e expanda a jogabilidade com recursos personalizados → Saiba mais agora"
sidebar_label: Instalar plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introdução

CS:GO continua a longa tradição de personalização de servidores guiada pela comunidade. Plugins permitem que donos de servidores expandam a jogabilidade, adicionem recursos que facilitam a vida, implementem regras personalizadas ou criem modos de jogo totalmente novos.

Para servidores de CS:GO, o **Sourcemod** é o framework mais usado para plugins do lado do servidor. O Sourcemod funciona junto com o **Metamod:Source**, que atua como a camada base que permite que os plugins se conectem ao motor do jogo. Instalando ambos os componentes, administradores de servidores podem gerenciar plugins facilmente e ampliar a funcionalidade do servidor.

<InlineVoucher />



## Instalando Metamod:Source

O Metamod:Source deve ser instalado primeiro, pois o Sourcemod depende dele. Comece baixando a versão mais recente do Metamod:Source no site oficial. Extraia o arquivo baixado no seu computador.

Dentro do arquivo você vai encontrar um diretório `addons`. Faça o upload desse diretório para o seu servidor de jogos CS:GO usando [FTP](gameserver-ftpaccess.md) para que ele se mescle com o diretório do jogo existente `../csgo/`.


Depois de enviar os arquivos, reinicie seu servidor. Para verificar se o Metamod está rodando corretamente, abra o console do servidor e execute o seguinte comando:

```
meta version
```


Se o Metamod estiver instalado corretamente, o console vai mostrar a versão instalada e informações adicionais.

<Button label="Baixar Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Instalando Sourcemod

Depois que o Metamod:Source estiver instalado, você pode instalar o Sourcemod. Baixe a versão estável mais recente do Sourcemod no site oficial e extraia o arquivo. Faça o upload das pastas `addons` e `cfg` para o seu servidor de jogos CS:GO usando [FTP](gameserver-ftpaccess.md). Os diretórios devem ser colocados dentro do diretório do jogo CS:GO `../csgo/`. Após enviar os arquivos, reinicie o servidor. O Sourcemod será carregado automaticamente pelo Metamod.

Para confirmar que o Sourcemod está funcionando, abra o console do servidor e rode:

```
sm version
```


Se a instalação foi bem-sucedida, o servidor vai retornar a versão atual do Sourcemod e informações da build.

<Button label="Baixar Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Instalando Plugins

Plugins para Sourcemod geralmente são distribuídos como arquivos `.smx`. Esses arquivos compilados devem ser enviados para o diretório `plugins` dentro da instalação do Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


Depois de enviar o arquivo do plugin, reinicie o servidor ou recarregue o plugin diretamente pelo console do servidor usando o comando:

```
sm plugins load <pluginname>
```


Se um plugin não carregar corretamente, confira os logs do servidor que ficam no diretório `logs` do Sourcemod para possíveis mensagens de erro.

Alguns plugins também podem incluir arquivos de configuração adicionais. Esses arquivos geralmente ficam dentro de:

```
../csgo/addons/sourcemod/configs/
```


Sempre siga as instruções de instalação fornecidas pelo desenvolvedor do plugin para garantir que tudo funcione certinho.



## Plugins Populares

<SearchableItemList items={items} />



## Conclusão

Se você seguiu todos os passos, deve ter instalado com sucesso o Metamod:Source, Sourcemod e os plugins desejados no seu servidor de jogos CS:GO. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
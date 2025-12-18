---
id: factorio-mods
title: "Factorio: Instalando Mods/DLCs no seu servidor de jogos Factorio"
description: "Descubra como turbinar seu gameplay de Factorio ativando DLCs e adicionando mods para uma experiência personalizada → Saiba mais agora"
sidebar_label: Instalar Mods/DLCs
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introdução

Factorio tem suporte nativo para mods, permitindo que você adicione facilmente uma grande variedade de mods ao seu jogo e servidor, além dos DLCs comprados. Neste guia, vamos cobrir o processo de ativar DLCs e instalar mods no seu cliente e servidor de jogos Factorio.

<InlineVoucher />

## Preparação

Você pode acessar o site oficial de [mods do Factorio](https://mods.factorio.com/) para navegar pelos mods. Nesse site, você encontra uma enorme biblioteca de mods gratuitos feitos pela comunidade em várias categorias.

:::tip
Garanta que os mods que você baixar sejam compatíveis com a versão do seu servidor de jogos Factorio.
:::

## Ativando DLCs

Com a atualização Factorio 2.0, foi lançado o primeiro DLC chamado Space Age. Para isso, uma nova opção de configuração foi adicionada no painel da interface web para você ativar ou desativar o DLC.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Ativar DLC Space Age do Factorio" description="Quer entender melhor vendo na prática? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo. Seja se você está com pressa ou prefere absorver a informação de forma mais divertida!"/>

Vá até o painel da interface web do seu produto e acesse a seção **Configurações**. Role a página até encontrar a opção **Space Age DLC**, que já vem ativada por padrão.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Ative ou desative a função e use o botão verde **Salvar** no final da página. Pronto, você ativou com sucesso um DLC do Factorio.

## Adicionando & Enviando Mods

Com os mods que você escolheu baixados, agora é hora de enviá-los para o seu servidor de jogos Factorio via FTP. Use nosso guia de [Acesso FTP](gameserver-ftpaccess.md) para te ajudar a conectar ao servidor.

:::note
O servidor deve estar parado antes de adicionar ou editar mods, senão as alterações podem ser desfeitas.
:::

Quando estiver pronto, navegue até o seguinte diretório e envie seus mods baixados, que devem estar no formato `.zip`.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Na hora de moddar, os mods precisam estar sincronizados entre o cliente e o servidor. O Factorio facilita isso: quando você entrar no servidor pela primeira vez após ajustar os mods, seu jogo vai pedir para sincronizar os mods automaticamente.
:::

Por fim, reinicie seu servidor para ativar e instalar os mods automaticamente no seu servidor de jogos Factorio. Se aparecer algum erro, tipo o servidor desligando sozinho, confira a seção **Informações->Registro de Eventos** no painel da interface web para ver os erros. Provavelmente é um problema de versão incompatível.

## Mods Populares

Ainda procurando os mods perfeitos para seu servidor? Dê uma olhada na nossa lista selecionada com os mods mais populares e recomendados para melhorar seu gameplay e dar aquele toque final no seu servidor. Inspire-se e encontre as adições que combinam com seu projeto.

<SearchableItemList items={items} />

## Conclusão

Parabéns, você instalou mods com sucesso no seu servidor de jogos Factorio. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
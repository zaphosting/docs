---
id: source-custom-content
title: Instalando conteúdo customizado e mods em servidores de jogos
description: "Descubra como o conteúdo customizado melhora a jogabilidade em jogos source como Counter-Strike e Garry's Mod com mapas, skins e sons → Saiba mais agora"
sidebar_label: Conteúdo Customizado
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que é conteúdo customizado?

Alguns jogos source, como Counter-Strike ou Garry's Mod, ficaram famosos pela variedade. Tudo isso foi possível graças ao suporte de plugins e **conteúdo customizado**. Vários modos de jogo foram desenvolvidos ao longo dos anos, como Zombie Mod, Hide and Seek, Minigames, Jailbreak e muito mais.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Esses servidores costumam usar mapas, skins de jogador e sons criados pela comunidade. Para que os jogadores possam usar ou visualizar o conteúdo customizado do servidor, o conteúdo precisa ser baixado do servidor primeiro. Nesse caso, existem duas opções:

- FastDL
- Steam Workshop

Dependendo do uso, uma opção é mais útil que a outra. Abaixo, um resumo das diferenças entre FastDL e Workshop:

|  Conteúdo Customizado  | FastDL | Steam Workshop |
| :--------------------: | :----: | :------------: |
|         Mapas          |   ✓    |       ✓        |
| Materiais/Modelos      |   ✓    |       ✗        |
|         Sons           |   ✓    |       ✗        |



## Configurando conteúdo customizado



### FastDL

A seguir, explicamos a configuração do servidor FastDL usando um dos nossos [produtos de Hospedagem de Sites](https://zap-hosting.com/en/shop/product/webspace/). Mas você também pode usar qualquer outra opção que ofereça um servidor web público. Para começar a configuração, abra o produto de hospedagem de sites e acesse a administração:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Lá, abra o gerenciador de arquivos e crie as seguintes pastas:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Depois, a hospedagem de sites precisa ser autorizada para que o download do conteúdo no jogo funcione corretamente:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
As permissões devem ser configuradas para todas as pastas!
:::

Agora o conteúdo customizado pode ser enviado. Para isso, os arquivos precisam estar disponíveis tanto no servidor quanto no FastDL (hospedagem de sites). No servidor de jogos, os arquivos são enviados descompactados e no FastDL eles devem ser enviados compactados em bzip2. Recomendamos usar o programa 7Zip para isso.

Por fim, o servidor FastDL precisa ser configurado no servidor de jogos. A configuração é feita via **server.cfg**. Para isso, os seguintes comandos devem ser adicionados ao arquivo:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Substitua a URL pela URL da sua hospedagem ZAP.
```

Após reiniciar e conectar ao servidor, o conteúdo correspondente deve ser baixado. Isso também pode ser conferido no console do jogo:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Agora explicamos a configuração do Steam Workshop. Primeiro, abra a página do Steam Workshop. Para isso, selecione o jogo correspondente no Steam e abra o workshop lá. Neste exemplo, usamos [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections). Uma vez lá, clique no menu Browse e selecione Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Clique com o botão direito em Collection e crie a coleção para o servidor de jogos:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

A coleção foi criada com sucesso, mas ainda está vazia por padrão. Então, reabra o workshop do jogo e selecione os itens que deseja adicionar:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Quando terminar de coletar, volte para a coleção, clique com o botão direito e selecione Copy Page URL. O ID da coleção é necessário e pode ser encontrado na URL, que pode ser assim:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Por fim, esse ID deve ser adicionado no Steam Workshop na administração do seu servidor de jogos:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />
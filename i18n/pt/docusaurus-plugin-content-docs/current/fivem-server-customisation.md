---
id: fivem-server-customisation
title: "FiveM: Personalize os detalhes do servidor"
description: "Descubra como personalizar o nome do seu servidor com cores e emojis para destacá-lo na lista de servidores → Saiba mais agora"
sidebar_label: Personalizar Detalhes do Servidor
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer personalizar seu servidor para mostrar informações customizadas na lista de servidores? Isso é super fácil! Neste guia, você vai aprender a configurar várias personalizações disponíveis para fazer seu servidor se destacar na lista!



<InlineVoucher />



## Nome Personalizado do Servidor

### Códigos de Cor

Tem uma variedade de cores que você pode adicionar ao nome do seu servidor. Elas podem ser definidas usando um prefixo para mudar a cor. A lista de cores disponíveis está na tabela abaixo.

:::info
Para usar cores no nome do seu servidor, você precisa ter uma [assinatura válida da Cfx.re](https://portal.cfx.re/subscriptions) que inclua esse benefício. Se você já tem, mas ainda não funciona, confira se configurou uma [Chave de Licença Própria](fivem-licensekey.md).
:::

Agora você pode mudar o nome do seu servidor abrindo o Editor CFG no txAdmin, procurando por `sv_hostname` e personalizando do jeito que quiser. Aqui vai um exemplo usando cores e o resultado:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Servidor Oficial da Comunidade ^0- ^1Eventos chegando ^8em breve^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Código | Cor        | Código Hex |
| ------ | ---------- | ---------- |
| ^0     | Branco     | #F0F0F0    |
| ^1     | Vermelho   | #F44336    |
| ^2     | Verde      | #4CAF50    |
| ^3     | Amarelo    | #FFEB3B    |
| ^4     | Azul       | #42A5F5    |
| ^5     | Azul Claro | #03A9F4    |
| ^6     | Roxo       | #9C27B0    |
| ^7     | Branco     | #F0F0F0    |
| ^8     | Laranja    | #FF5722    |
| ^9     | Cinza      | #9E9E9E    |

### Emojis

O FiveM também permite colocar emojis direto no nome do seu servidor. É só colocar qualquer emoji que quiser no parâmetro `sv_hostname` dentro da configuração do seu servidor que vai funcionar. Não precisa de assinatura Cfx.re para isso.



## Configurando Detalhes do Projeto

### Descrição do Servidor

Configurar uma descrição do servidor é útil para dar uma visão rápida e direta do seu servidor. Você pode facilmente definir uma descrição curta para seu servidor FiveM, que vai aparecer ao lado do nome na lista de servidores. Aqui vai um exemplo de como definir uma descrição e o resultado:

```
sets sv_projectDesc "Junte-se ao nosso Discord para ficar por dentro dos eventos! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Tags do Servidor

Definir tags no servidor ajuda a mostrar do que seu servidor se trata e permite que jogadores encontrem seu servidor ao filtrar por preferências. Depois de definir as tags, elas aparecem na página do seu servidor na lista e também são usadas para filtrar seu servidor. Aqui vai um exemplo de tags e o resultado:

```
sets tags "zap, zap-hosting, oficial, comunidade, zap-comunidade, servidor-zap-comunidade"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Outros Detalhes Diversos

Você também pode mudar alguns detalhes diversos do servidor do seu jeito.

#### Tipo de Jogo

Configurar o parâmetro gametype muda o que aparece na página do seu servidor na lista. Isso **não** altera o modo de jogo no servidor em si. Você pode mudar o gametype pelo painel web do seu servidor de jogos, ou definindo uma tag:

```
sets gametype "Freeroam"
```

#### Idioma

Por fim, você pode mudar o idioma do seu servidor que aparece na página do seu servidor na lista. Temos um [Guia de Idioma / localização (bandeira)](fivem-locale.md) para configurar a localização. Isso pode ser feito pelo painel web do seu servidor de jogos, ou definindo uma tag:

```
sets locale "en-GB"
```

Você pode ver uma lista completa de tags de localidade em [este recurso](https://github.com/TiagoDanin/Locale-Codes#locale-list) ou algo parecido.



## Conclusão

Se você seguiu todos os passos, seu servidor de jogos FiveM está personalizado com sucesso. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: redm-server-customisation
title: "RedM: Personalize os detalhes do servidor"
description: "Descubra como personalizar o nome do seu servidor com cores e emojis para fazê-lo se destacar na lista de servidores → Saiba mais agora"
sidebar_label: Personalizar Detalhes do Servidor
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer personalizar seu servidor para mostrar informações customizadas na lista de servidores? Isso é super fácil! Neste guia, você vai aprender como aplicar várias customizações disponíveis para fazer seu servidor se destacar na lista!



<InlineVoucher />



## Nome Personalizado do Servidor

### Códigos de Cor

Tem uma variedade de cores que você pode adicionar ao nome do seu servidor. Elas podem ser definidas usando um prefixo para mudar a cor. A lista de cores disponíveis está na tabela abaixo.

:::info
Para usar cores no nome do seu servidor, você precisa ter uma [assinatura válida do Cfx.re](https://portal.cfx.re/subscriptions) que inclua esse benefício. Se você já tem, mas ainda não funciona, confira se configurou uma [Chave de Licença Própria](redm-licensekey.md).
:::

Agora você pode mudar o nome do seu servidor usando um dos três métodos descritos na seção de acesso à configuração. Aqui vai um exemplo usando cores e o resultado que elas produzem:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Servidor Oficial da Comunidade ^0- ^1Eventos chegando ^8em breve^1!"
```

![](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)



| Código | Cor         | Código Hex |
| ------ | ----------- | ---------- |
| ^0     | Branco      | #F0F0F0    |
| ^1     | Vermelho    | #F44336    |
| ^2     | Verde       | #4CAF50    |
| ^3     | Amarelo     | #FFEB3B    |
| ^4     | Azul        | #42A5F5    |
| ^5     | Azul Claro  | #03A9F4    |
| ^6     | Roxo        | #9C27B0    |
| ^7     | Branco      | #F0F0F0    |
| ^8     | Laranja     | #FF5722    |
| ^9     | Cinza       | #9E9E9E    |

### Emojis

O RedM também permite colocar emojis direto no nome do seu servidor. É só colocar qualquer emoji que quiser no parâmetro `sv_hostname` dentro da configuração do servidor que vai funcionar. Para isso, não precisa de assinatura Cfx.re.



## Configurando Detalhes do Projeto

### Descrição do Servidor

Definir uma descrição para o servidor é útil para dar uma visão rápida e direta do que ele é. Você pode facilmente colocar uma descrição curta para seu servidor de jogos RedM, que vai aparecer ao lado do nome do servidor na lista. Aqui vai um exemplo de como definir uma descrição e o resultado:

```
sets sv_projectDesc "Junte-se ao nosso Discord para ficar por dentro dos eventos! discord.gg/zaphosting"
```

![](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

### Tags do Servidor

Definir tags no servidor ajuda a mostrar do que seu servidor trata, e permite que jogadores encontrem seu servidor ao filtrar por preferências. Depois de definir as tags, elas aparecem na página do seu servidor na lista e também são usadas para filtrar. Exemplo de tags e o resultado:

```
sets tags "zap, zap-hosting, oficial, comunidade, zap-comunidade, servidor-zap-comunidade"
```

![](https://github.com/zaphosting/docs/assets/42719082/33407e9f-9e28-4264-9b13-e946ed5b434a)

### Outros Detalhes Diversos

Você também pode mudar alguns detalhes variados do servidor do seu jeito.

#### Tipo de Jogo

Definir o parâmetro gametype muda o que aparece na página do seu servidor na lista. Isso **não** altera o modo de jogo no servidor em si. Dá para mudar o gametype pelo painel do seu servidor de jogos ou definindo uma tag:

```
sets gametype "Freeroam"
```

#### Idioma

Por fim, você pode mudar o idioma do seu servidor que aparece na lista. Temos um [Guia de Idioma / localização (bandeira)](redm-locale.md) para configurar a localização. Dá para fazer isso pelo painel do servidor ou definindo uma tag:

```
sets locale "en-GB"
```

Você pode ver uma lista completa de tags de localização neste [recurso](https://github.com/TiagoDanin/Locale-Codes#locale-list) ou algo parecido.



## Conclusão

Se você seguiu todos os passos, seu servidor de jogos RedM está personalizado com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
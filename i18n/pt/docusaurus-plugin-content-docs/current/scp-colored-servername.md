---
id: scp-colored-servername
title: "SCP Secret Laboratory: Nome do Servidor Colorido"
description: "Aprenda a personalizar o nome do seu servidor com texto colorido para melhor visibilidade e estilo → Saiba mais agora"
sidebar_label: Nome do Servidor Colorido
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Para mostrar seu servidor na lista pública de servidores, é necessário definir um ID do pastebin. Você pode encontrar nosso guia [ID do Pastebin](scp-pastebin.md).

O servidor deve estar desligado para que as alterações tenham efeito.
:::

<InlineVoucher />

Abra as configurações do seu servidor e verifique se o campo 'Nome do Servidor SCP' está vazio.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Quando tiver certeza de que não há nada preenchido, navegue até a aba 'Configs', que fica um menu abaixo das configurações.

Agora abra o config_gameplay.txt clicando no botão azul.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Nosso editor de Configurações está aberto, você pode modificar o Nome do seu Servidor com "server_name" usando [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) para aplicar várias cores diferentes.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

Neste exemplo, eu quero que "Green Text", "Blue Text" e "Red Text" apareçam nas cores correspondentes.

Para isso, é necessário usar a tag `<color="COLOR">Seu Texto</color>`. Você pode ver todas as cores disponíveis [aqui](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Também é possível alterar outros atributos, como o tamanho.
:::info
É importante lembrar que aspas " " são obrigatórias ao redor da cor dentro da tag, como no exemplo acima.
:::

Quando terminar sua personalização, salve as alterações.

:::info
Ligue seu servidor, e o nome do seu servidor agora aparecerá colorido.
:::

<InlineVoucher />
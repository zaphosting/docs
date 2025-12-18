---
id: eco-whitelist
title: "ECO: Ativar Whitelist"
description: "Descubra como proteger seu servidor gerenciando o acesso dos jogadores com o recurso de whitelist do ECO → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

A whitelist do ECO permite que você proteja seu servidor permitindo que apenas jogadores selecionados na lista se conectem ao servidor.

<InlineVoucher />

### Ativação (Config)

A ativação da whitelist é feita automaticamente. Ela fica ativa assim que pelo menos um jogador for adicionado à lista. Os jogadores devem ser adicionados no arquivo de configuração **Users.eco**.

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```

O campo **$values** contém os SteamIDs dos jogadores que devem ser adicionados à whitelist. Você pode encontrá-los abrindo seu perfil Steam e clicando com o botão direito em algum lugar do perfil. Lá você pode copiar a URL do perfil Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)

Depois, abra uma das seguintes páginas e cole a URL do seu perfil lá:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Isso vai te fornecer informações gerais, assim como o Steam ID da sua conta. Nesse caso, só precisamos do SteamID64. O SteamID64 será então inserido em **$values**. Vai ficar assim:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "outraSteamID"      
      ]
    }
```

### Ativação (Chat)

Alternativamente, também é possível adicionar mais jogadores à whitelist com permissões de administrador dentro do jogo. Adicionar jogadores à whitelist é feito via chat/console com o seguinte comando:

```
/whitelist [player]
```

## Gerenciar Whitelist

A gestão da whitelist só pode ser feita no arquivo de configuração **Users.eco**, pois não existe comando no servidor para remover um jogador da whitelist. Se quiser remover um jogador, basta removê-lo do arquivo de configuração. Também é necessário reiniciar o servidor para que a alteração tenha efeito.

<InlineVoucher />
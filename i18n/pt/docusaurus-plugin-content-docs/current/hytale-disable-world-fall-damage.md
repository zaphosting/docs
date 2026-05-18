---
id: hytale-disable-world-fall-damage
title: "Hytale: Desativar Dano por Queda no Mundo"
description: "Descubra como desativar o dano por queda no seu servidor de jogos Hytale → Saiba mais agora"
sidebar_label: Desativar Dano por Queda no Mundo
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Em um servidor de jogos Hytale, a gravidade e o dano por queda fazem parte da mecânica do mundo. Quando o dano por queda está ativado, os jogadores recebem dano ao cair de grandes alturas; quando está desativado, os jogadores podem cair livremente sem sofrer dano. Desativar o dano por queda pode ser útil para servidores criativos, projetos de construção, ambientes de teste ou qualquer cenário onde o dano por queda não deve afetar a experiência do jogador.

<InlineVoucher />



## Configuração

O dano por queda é controlado individualmente para cada mundo, usando o arquivo de configuração do mundo. Cada mundo no universo do servidor tem seu próprio `config.json`, e dentro desse arquivo há uma configuração que determina se o dano por queda é aplicado.

Para desativar o dano por queda, abra o `config.json` do mundo localizado na pasta correspondente em `universe/worlds/<nome_do_mundo>/config.json`. Encontre a configuração que controla o dano por queda, geralmente representada por uma flag booleana como `IsFallDamageEnabled`, e defina-a como `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Quando esse valor está definido como `false`, os jogadores não sofrerão mais dano ao cair. Se o dano por queda deve permanecer ativado, o valor deve ser definido como `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Após atualizar o arquivo, salve as alterações e **reinicie o servidor**. As mudanças na configuração só são aplicadas quando o servidor recarrega o mundo, então é necessário reiniciar para que a nova configuração tenha efeito.



## Conclusão

Configurando a flag de dano por queda no arquivo de configuração do mundo, você tem controle total sobre se os jogadores recebem dano ao cair. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Configure as Configurações de Dano"
description: "Aprenda como ajustar o dano e o comportamento de combate no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Configurações de Dano
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de dano em **Over the Top WWI** determinam o quão letal o combate é e como as armas se comportam durante o gameplay. Ajustar esses valores permite criar uma experiência mais realista ou um ambiente mais casual e tolerante.

Modificando os multiplicadores de dano e as mecânicas de combate, você pode influenciar significativamente a rapidez com que os jogadores são eliminados e como os confrontos acontecem.

<InlineVoucher />

## Configuração

As configurações de dano são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` controla o dano causado por armas de longo alcance

- `MeleeDamageMulti` define o dano dos ataques corpo a corpo

- `ShootingVelocityMulti` afeta a velocidade dos projéteis e pode influenciar a precisão e o registro de acertos

- `DragEffector` influencia a rapidez com que as balas perdem velocidade com a distância

- `WindEffector` determina a força com que o vento afeta a trajetória das balas

- `RandomEffectorr` adiciona aleatoriedade ao comportamento das balas, afetando a precisão

Ajustar esses valores permite criar um comportamento balístico mais realista ou simplificar as mecânicas de combate, dependendo do estilo do seu servidor.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de dano e combate serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as configurações de dano no seu **servidor Over the Top WWI**. Ajustando esses parâmetros, você pode afinar o comportamento do combate e criar uma experiência de jogo que combine com a sua comunidade.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
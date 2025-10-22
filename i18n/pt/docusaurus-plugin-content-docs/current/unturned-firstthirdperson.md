---
id: unturned-firstthirdperson
title: "Unturned: Defina a perspectiva 1ª/3ª pessoa para o servidor"
description: "Descubra como personalizar a perspectiva dos jogadores no seu servidor de Unturned entre primeira, terceira pessoa ou ambas para uma jogabilidade melhor → Saiba mais agora"
sidebar_label: 1ª/3ª Pessoa
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Perspectiva 1ª / 3ª pessoa

Unturned oferece a possibilidade de mudar a perspectiva no servidor. Você pode escolher entre a perspectiva em primeira ou terceira pessoa. O jogo é jogado em primeira pessoa por padrão. Porém, desde a versão 3.9.9.0, isso também pode ser alterado. A seguir explicamos como você pode mudar isso no seu servidor.



## Configuração

A alteração é feita no arquivo de configuração **Commands.dat**. Ele pode ser encontrado no **Webinterface em Configs**. Dependendo de como a visão deve ser configurada, o seguinte comando deve ser adicionado na config:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Perspectiva em 1ª pessoa (padrão):

Essa opção já está ativa por padrão, mesmo que o comando ainda não tenha sido adicionado na config. De qualquer forma, para completar, você pode adicionar esse comando sem problemas. O comando para essa opção seria assim:

```
perspective first
```



### Perspectiva em 3ª pessoa:

Caso a perspectiva em 3ª pessoa seja usada em vez da 1ª pessoa, isso também pode ser configurado. O comando para essa opção seria assim:

```
perspective third
```



### Ambas as perspectivas:

As duas variantes também podem ser usadas juntas. Nesse caso, basta ajustar o valor do comando. O comando para essa opção seria assim:

```
perspective both
```



Na próxima vez que você iniciar seu servidor, a opção desejada estará ativada!

<InlineVoucher />
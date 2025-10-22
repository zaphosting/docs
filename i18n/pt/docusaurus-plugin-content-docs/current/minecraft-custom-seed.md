---
id: minecraft-custom-seed
title: "Minecraft: Seed personalizada para o mundo"
description: "Descubra como criar mundos únicos no Minecraft definindo seeds personalizadas para novas aventuras e geração de mundo → Saiba mais agora"
sidebar_label: Seed personalizada para o mundo
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma seed no Minecraft é um código específico composto por números ou letras que determina como seu mundo de jogo será gerado. Ela molda o terreno, biomas, estruturas e recursos que você vai encontrar no seu mundo. Usar a mesma seed com a mesma versão do jogo e configurações sempre cria o mesmo layout de mundo, o que facilita compartilhar mundos únicos com outras pessoas.

Lembre-se que você não pode mudar a seed de um mundo já existente. A seed só afeta a geração de um novo mundo. Para usar uma seed diferente, você sempre precisa criar um novo mundo depois de configurá-la.

<InlineVoucher />

## Configuração

Para configurar uma seed personalizada, primeiro pare seu servidor para evitar conflitos de dados. Depois, abra o arquivo `server.properties`. Você pode encontrar esse arquivo de configuração no painel de administração do seu servidor, na seção **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Procure a linha que começa com `level-seed=`. Aqui você pode inserir o valor da seed que desejar. Por exemplo:

```
level-seed=12345
```

Substitua `12345` pelo seu próprio código de seed. Pode ser qualquer número ou texto que você quiser. Depois de definir sua seed personalizada, você precisa gerar um novo mundo para que ela tenha efeito.

A forma mais fácil de fazer isso é mudar o `level-name` nas **Configurações** para um nome novo e não usado, por exemplo `world1`. Isso garante que o Minecraft crie uma nova pasta de mundo com sua nova seed.

Se quiser saber mais sobre como recriar um mundo existente, você pode conferir nosso [guia Recriar Mundo](minecraft-worlds.md) para instruções detalhadas. Por fim, inicie seu servidor novamente. O Minecraft agora vai gerar um novo mundo usando sua seed personalizada.

## Conclusão

Com esses passos você configurou com sucesso uma nova seed para seu novo mundo. Reinicie seu servidor, explore seu mundo recém-gerado e curta sua aventura única no Minecraft. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
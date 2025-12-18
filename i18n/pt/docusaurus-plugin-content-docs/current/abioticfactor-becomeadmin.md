---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Torne-se admin"
description: "Descubra como conceder direitos de admin aos jogadores para controle total do servidor e melhor gerenciamento do gameplay → Saiba mais agora"
sidebar_label: Torne-se admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No **Abiotic Factor**, administradores do servidor precisam de permissões elevadas para gerenciar jogadores, executar comandos do servidor ou modificar configurações durante o gameplay.

<InlineVoucher />

## Configuração

A configuração é feita através do arquivo `admin.ini`. Para acessá-lo, abra a seção **Configs** na administração do servidor de jogos e localize o `admin.ini`. Por padrão, o arquivo deve conter a seguinte entrada, onde os administradores podem ser definidos. Substitua os valores `ExampleID` pelo **SteamID64** correspondente dos jogadores que você quer conceder direitos de admin.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Conclusão

Depois que as informações forem adicionadas corretamente e o servidor for reiniciado, o jogador especificado terá acesso total de admin no jogo. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />
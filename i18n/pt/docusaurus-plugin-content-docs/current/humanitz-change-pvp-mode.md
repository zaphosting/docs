---
id: humanitz-change-pvp-mode
title: "HumanitZ: Alterar o modo PvP"
description: "Aprenda como ativar ou desativar o PvP no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Alterar modo PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

O combate Player versus Player (PvP) é uma mecânica central em jogos de sobrevivência como HumanitZ. Ativar ou desativar o PvP muda a forma como os jogadores podem interagir em combate, se podem causar dano uns aos outros e se podem interagir com itens de propriedade dos jogadores, como veículos ou contêineres.

<InlineVoucher />

## Configuração

O modo PvP é controlado no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no seu painel de controle do servidor em **Configs**. Dentro do arquivo de configuração, localize o seguinte parâmetro:

```
;false/true=Off/On. This will also affect the ability to interact with player items such as cars and containers
PVP=true
```

- `PVP=true` – Ativa o combate Player versus Player  
- `PVP=false` – Desativa o combate Player versus Player

Para alterar o modo PvP, basta definir o valor como `true` (Ativado) ou `false` (Desativado), dependendo de como você quer que o PvP funcione no seu servidor.

Exemplo – PvP desativado:

```
PVP=false
```

Após editar o arquivo, salve as alterações e reinicie o servidor para que a nova configuração entre em vigor.

## Conclusão

Parabéns! Modificando o valor `PVP` no `GameServerSettings.ini`, você alterou com sucesso o modo PvP no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
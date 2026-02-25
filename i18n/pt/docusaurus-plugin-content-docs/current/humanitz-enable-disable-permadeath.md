---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Ativar/Desativar Permadeath"
description: "Aprenda como ativar ou desativar o permadeath no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Ativar/Desativar Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

O permadeath aumenta muito a dificuldade e a tensão do gameplay de sobrevivência no HumanitZ. Quando ativado, os jogadores perdem permanentemente seu personagem ao morrer e precisam criar um novo. Essa configuração é comum em servidores hardcore ou de sobrevivência de alto risco.

<InlineVoucher />

## Configuração

O permadeath é controlado no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize o seguinte parâmetro:

```
;Quando definido como true, o jogador que morrer perderá seu personagem e terá que criar um novo
PermaDeath=false
```

- `PermaDeath=true` – Ativa o permadeath. Os jogadores perdem permanentemente seu personagem ao morrer.  
- `PermaDeath=false` – Desativa o permadeath. Os jogadores podem respawnar com seu personagem existente.

Se quiser ativar o permadeath, altere o valor para:

```
PermaDeath=true
```

Depois de editar o arquivo, salve as alterações e reinicie o servidor para que a nova configuração entre em vigor.

## Conclusão

Parabéns! Modificando o valor `PermaDeath` no `GameServerSettings.ini`, você ativou ou desativou com sucesso o permadeath no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
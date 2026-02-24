---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Ativar/Desativar Notificações de Morte"
description: "Aprenda como ativar ou desativar notificações de morte dos jogadores no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Ativar/Desativar Notificações de Morte"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

As notificações de morte avisam os jogadores quando alguém no servidor morre. Embora isso seja útil para acompanhar a atividade, alguns servidores preferem uma experiência mais imersiva ou competitiva sem mensagens públicas de morte.

O HumanitZ permite que você ative ou desative as notificações de morte dos jogadores diretamente pelo arquivo de configuração do servidor.

<InlineVoucher />

## Configuração

As configurações das notificações de morte são controladas no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**.  
Dentro do arquivo de configuração, localize o seguinte parâmetro:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Desativa as notificações de morte para jogadores comuns. Os administradores ainda poderão vê-las.  
- `NoDeathFeedback=false` – Ativa as notificações de morte para todos os jogadores.

Se você quiser que as notificações de morte fiquem visíveis para todo mundo, defina o valor como:

```
NoDeathFeedback=false
```

Depois de editar o arquivo, salve as alterações e reinicie o servidor para que a nova configuração entre em vigor.

## Conclusão

Parabéns! Modificando o valor `NoDeathFeedback` no `GameServerSettings.ini`, você configurou com sucesso as notificações de morte no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂 

<InlineVoucher />
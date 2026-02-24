---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Ativar ou Desativar Chat de Voz"
description: "Aprenda como ativar ou desativar o chat de voz no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Ativar/Desativar Chat de Voz"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

A comunicação por voz pode mudar totalmente a vibe do seu servidor HumanitZ. Ativar o chat de voz permite que os jogadores conversem diretamente quando estão perto, aumentando a imersão e a cooperação. Desativar pode incentivar o uso de plataformas externas ou criar uma experiência de sobrevivência mais silenciosa e isolada.

No HumanitZ, o chat de voz é configurado direto no arquivo de configuração do servidor.

<InlineVoucher />

## Configuração

As configurações do chat de voz ficam no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo, procure o seguinte parâmetro:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

A configuração funciona assim:

- `Voip=true` ou `Voip=1` – Ativa o chat de voz  
- `Voip=false` ou `Voip=0` – Desativa o chat de voz  

Para mudar a configuração do chat de voz, é só alterar o valor conforme sua preferência. Depois de editar, salve as mudanças e reinicie o servidor para que a nova configuração entre em vigor.

## Conclusão

Parabéns! Modificando o valor `Voip` no `GameServerSettings.ini`, você ativou ou desativou o chat de voz no seu servidor HumanitZ com sucesso. Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
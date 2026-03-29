---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Configurar Chat de Voz"
description: "Aprenda como ativar e configurar o chat de voz no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Chat de Voz
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O chat de voz permite que os jogadores no seu **servidor de jogos Over the Top WWI** se comuniquem diretamente durante o gameplay. Isso pode melhorar a coordenação, o trabalho em equipe e a imersão geral, especialmente em cenários táticos.

Configurando as opções do chat de voz, você pode controlar se a comunicação é permitida, ajustar a qualidade e definir como o chat de voz funciona durante as partidas.

<InlineVoucher />

## Configuração

As configurações do chat de voz são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` ativa ou desativa o chat de voz no servidor  
- `VoipQuality` controla o nível de qualidade do áudio  
- `VoipDelay` adiciona um atraso em segundos antes que os jogadores possam usar o chat de voz após spawnar  

Ajuste esses valores conforme suas preferências e necessidades de desempenho do servidor. Configurações de qualidade mais baixa podem ser úteis para servidores com muitos jogadores ou largura de banda limitada.

Depois de modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações do chat de voz serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso o chat de voz no seu **servidor Over the Top WWI**. Isso permite que os jogadores se comuniquem de forma eficaz e melhora o trabalho em equipe durante as partidas.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
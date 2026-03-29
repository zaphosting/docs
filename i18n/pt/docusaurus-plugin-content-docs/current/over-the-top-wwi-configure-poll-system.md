---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Configurar Sistema de Votação"
description: "Aprenda a configurar as opções de votação e enquetes no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Sistema de Votação
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema de votação em **Over the Top WWI** permite que os jogadores votem em várias ações, como expulsar jogadores, mudar mapas ou modificar configurações de gameplay. Esse recurso melhora a interação da comunidade e reduz a necessidade de intervenção constante dos admins.

Configurando as opções de votação, você controla quais votos são permitidos e como eles funcionam durante o jogo.

<InlineVoucher />

## Configuração

O sistema de votação é configurado dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` define a porcentagem de votos necessária para a votação passar
- `EnableBanPlayerPoll` permite que jogadores votem para banir outros
- `EnableKickPlayerPoll` permite que jogadores votem para expulsar outros
- `EnableChangeMapsPoll` permite que jogadores votem para mudar mapas
- `EnableMutePlayerPoll` permite que jogadores votem para mutar outros
- `EnableCustomPoll` ativa opções de votação customizadas
- `ChangeMapImmediately` determina se a mudança de mapa aprovada é aplicada imediatamente

Modos de jogo permitidos para votação:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Essas configurações definem quais modos de jogo podem ser selecionados durante as votações.

- `1` → Ativado
- `0` → Desativado

Você pode desativar modos específicos para limitar as opções de votação e manter uma experiência de jogo consistente.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações atualizadas de votação serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso o sistema de votação no seu **servidor Over the Top WWI**. Isso permite que os jogadores participem das decisões e ajuda a automatizar a gestão do servidor.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
---
title: "Over the Top WWI: Mudar o Modo de Jogo"
description: "Aprenda como mudar o modo de jogo no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Mudar Modo de Jogo
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O modo de jogo em um servidor **Over the Top WWI** define como as partidas são jogadas e quais objetivos os jogadores devem cumprir. Modos de jogo diferentes podem mudar bastante o ritmo, a estratégia e a experiência geral de gameplay.

Ao ajustar o modo de jogo, você pode personalizar seu servidor para focar em batalhas em grande escala, jogabilidade defensiva ou cenários baseados em objetivos, dependendo das preferências da sua comunidade.

<InlineVoucher />

## Configuração

O modo de jogo é configurado dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre o seguinte parâmetro:

```
CurrentGameMode = 2
```

O valor determina qual modo de jogo está ativo no seu servidor. Valores disponíveis:

- `2` → Conquest
- `3` → Siege

O valor selecionado define as regras principais de gameplay para cada partida.

- **Conquest (2)** foca em capturar e manter objetivos pelo mapa, incentivando movimento constante e coordenação em equipe.
- **Siege (3)** é geralmente mais defensivo, onde um time ataca enquanto o outro defende posições estratégicas.

Escolher o modo certo depende do seu estilo de jogo preferido e da quantidade de jogadores.

Após modificar o valor no `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. O novo modo de jogo será aplicado na próxima partida ou rotação de mapa.

## Conclusão

Parabéns! Você mudou com sucesso o modo de jogo no seu **servidor Over the Top WWI**. Ao escolher o modo adequado, você pode moldar a experiência de gameplay e alinhar melhor com as preferências da sua comunidade.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Configurar Regras de Rotação de Mapas"
description: "Aprenda como configurar o comportamento da rotação de mapas no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Rotação de Mapas
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As regras de rotação de mapas no **Over the Top WWI** determinam como os mapas são selecionados e jogados com base na quantidade de jogadores. Isso ajuda a garantir que os mapas permaneçam equilibrados e adequados para o número de jogadores ativos.

Configurando essas opções, você evita que mapas grandes sejam jogados com poucos jogadores ou que mapas pequenos fiquem superlotados.

<InlineVoucher />

## Configuração

As regras de rotação de mapas são configuradas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro dele, encontre o seguinte parâmetro:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` ativa ou desativa a seleção automática de mapas baseada na quantidade de jogadores

  - `False` → Desativado
  - `True` → Ativado


Quando ativado, o servidor verifica a quantidade atual de jogadores e ajusta a seleção de mapas conforme necessário. Isso garante que os mapas sejam escolhidos dentro de uma faixa adequada, ajudando a manter o gameplay equilibrado.

O sistema usa limites internos para determinar se um mapa é apropriado, evitando situações onde mapas grandes ficam com poucos jogadores ou mapas pequenos ficam superlotados.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. O comportamento atualizado da rotação de mapas será aplicado automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as regras de rotação de mapas no seu **servidor Over the Top WWI**. Isso ajuda a garantir um gameplay equilibrado, combinando o tamanho do mapa com a quantidade de jogadores.

Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
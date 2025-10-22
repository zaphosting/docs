---
id: fivem-useprofiler
title: "FiveM: Usando o Profiler para identificar problemas no servidor"
description: "Descubra como analisar o desempenho do servidor e identificar problemas em recursos com o Profiler do FiveM para uma jogabilidade mais suave → Saiba mais agora"
sidebar_label: Usar Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução

O Profiler é uma ferramenta de jogo bem útil e fácil de usar para medir o desempenho do servidor. Ele pode ser usado para verificar códigos e threads que podem causar problemas de desempenho. Isso pode ser, por exemplo, causado por recursos mal desenvolvidos ou similares. O profiler está diretamente integrado ao software do servidor.

<InlineVoucher />

## Como usar o Profiler
O procedimento para usar o Profiler do FiveM é relativamente simples. Para isso, execute os comandos `profiler record 100` e `profiler view` no console ao vivo. Um perfil com 100 frames será criado, que pode ser acessado pelo link fornecido no console. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Identificando problemas
O profiler contém informações sobre as atividades individuais (ticks) que precisam ser analisadas mais de perto. Selecione uma área de tick e dê zoom nela. Com base no tick, você pode ver quais processos foram executados e quanto tempo levaram.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

Dessa forma, você também pode identificar quais recursos consomem muito tempo. Recursos que consomem mais de 6 ms no total podem causar possíveis problemas.
:::



## Conclusão

Parabéns, você criou com sucesso um perfil do FiveM que permite identificar possíveis problemas. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
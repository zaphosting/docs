---
id: gmod-ttt
title: "Garry's Mod: Configuração"
description: "Descubra como otimizar as configurações do seu servidor de jogos TTT para uma jogabilidade e gerenciamento de rounds melhores → Saiba mais agora"
sidebar_label: Configuração Garry's Mod TTT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## A Configuração do seu Servidor TTT

**Importante: Desligue seu servidor para todas as alterações.**

A configuração básica pode ser feita facilmente no nosso Webinterface, como por exemplo Nome do servidor, senha Rcon e senha do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Quando você tiver configurado o servidor como desejar, podemos prosseguir com a configuração das definições específicas do modo de jogo TTT. Você pode usar para isso nosso Webinterface, ou alterar o arquivo via ftp.

Você encontra o Editor de Configuração no nosso Webinterface na aba "Configs", abra lá o arquivo server.cfg.
No nosso Webinterface você encontra essa função em "Configs", onde abre o server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Lá você encontrará os valores para modificar a jogabilidade no seu servidor de jogos TTT, as variáveis importantes explicadas rapidamente:

<InlineVoucher />

## Rounds e Troca de Mapa

ttt_round_limit  
:::info  
Número máximo de rounds até que o mapa seja trocado. (Padrão: 6)  
:::

ttt_time_limit_minutes  
:::info  
Número máximo de minutos até que o mapa seja trocado ou uma votação seja iniciada (Padrão: 75)  
:::

ttt_postround_dm  
:::info  
Ativa dano após o fim do round. As mortes não são contabilizadas para pontuação, então é um mata-mata livre. (Padrão: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Permite que jogadores não traidores também prendam cadáveres. (Padrão: 1)  
:::

## Jogabilidade

ttt_traitor_pct  
:::info  
Porcentagem do total de jogadores que serão traidores. O número de jogadores será multiplicado por esse valor e arredondado para baixo. Se o resultado for menor que 1 ou maior que o número de jogadores, será ajustado para esses valores. (Padrão: 0.25)  
:::

ttt_traitor_max  
:::info  
Número máximo de traidores. (Padrão: 32)  
:::

ttt_detective_pct  
:::info  
Porcentagem do total de jogadores que serão detetives. (Padrão: 0.13)  
:::

ttt_detective_max  
:::info  
Número máximo de detetives. Pode ser usado para limitar ou desabilitar detetives. (Padrão: 32)  
:::

ttt_detective_min_players  
:::info  
Número mínimo de jogadores antes que os detetives entrem em jogo. (Padrão: 5)  
:::

ttt_detective_karma_min  
:::info  
Se o Karma de um jogador cair abaixo desse ponto, suas chances de ser selecionado como detetive diminuem. (Padrão: 600)  
:::

ttt_minimum_players  
:::info  
Número de jogadores que devem estar presentes antes do início do round. Isso é verificado antes da fase de preparação e antes do início do round real. (Padrão: 2)  
:::

## DNA

ttt_killer_dna_range  
:::info  
Alcance máximo dentro do qual uma amostra de DNA do assassino é plantada no cadáver da vítima. (Padrão: 300)  
:::

## Karma

ttt_karma  
:::info  
Ativa o sistema de karma. Os jogadores começam com uma certa quantidade de karma e perdem quando causam dano/matam "companheiros" (ex: inocente se forem inocentes, traidor se forem traidores). A quantidade perdida depende do karma da pessoa que você feriu ou matou. (Padrão: 1)  
:::

ttt_karma_strict  
:::info  
Se ativado, a penalidade de dano aumenta mais rápido conforme o karma diminui. Quando desativado, a penalidade de dano é muito baixa enquanto o karma fica acima de 800. (Padrão: 1)  
:::

ttt_karma_starting  
:::info  
Karma com que os jogadores começam. Se quiser que os jogadores possam "ganhar" um bônus de dano, pode definir isso para cerca de 850. Jogar rounds limpos permitirá que eles aumentem para 1000 e causem um pouco mais de dano que um jogador novo. (Padrão: 1000)  
:::

ttt_karma_max  
:::info  
Karma máximo que um jogador pode ter. Note que aumentar acima de 1000 não significa que jogadores com 1100 de karma terão bônus de dano. Apenas dá um "buffer" antes de receberem penalidade de dano. (Padrão: 1000)  
:::

ttt_karma_ratio  
:::info  
A proporção do dano usada para calcular quanto do karma da vítima é subtraído do atacante. (Padrão: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Todas as penalidades de karma são baseadas no dano causado. A penalidade por matar é uma quantidade extra de "dano" aplicada quando você mata alguém. Então, se for 100, e você acertar um headshot com um rifle, será penalizado como se tivesse causado 200 de dano. (Padrão: 15)  
:::

ttt_karma_round_increment  
:::info  
Quantidade base pela qual o karma de todos é "curado" no final de cada round. (Padrão: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Se um jogador não feriu ou matou um companheiro neste round, ele será "curado" com um bônus extra de 30 de karma. (Padrão: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Como o ttt_karma_ratio, mas para a recompensa de karma por causar dano a um traidor. Por padrão, causar dano a um traidor é recompensado com cerca de 1/4 da penalidade que você teria se fosse um inocente com karma cheio. (Padrão: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bônus de karma por matar um traidor. (Padrão: 40)  
:::

ttt_karma_low_autokick  
:::info  
Expulsa automaticamente jogadores que atingem um nível baixo de karma no final do round. (Padrão: 1)  
:::

ttt_karma_low_amount  
:::info  
Nível de karma no qual jogadores são expulsos no final do round. (Padrão: 300)  
:::

ttt_karma_low_ban  
:::info  
Se o autokick estiver ativado, também bane jogadores se isso estiver ativado. Sem efeito se o autokick estiver desativado. (Padrão: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Minutos para banir jogadores. (Padrão: 60)  
:::

ttt_karma_persist  
:::info  
Armazena o karma de um jogador em armazenamento persistente no final do round ou se ele desconectar. Ao reconectar, o karma será carregado. Isso significa que o karma persiste mesmo quando o mapa muda. (Padrão: 1)  
:::

ttt_karma_clean_half  
:::info  
Quando o Karma de um jogador está acima do nível inicial (significando que o karma máximo foi configurado para ser maior que isso), todos os aumentos de karma dele serão reduzidos com base em quão acima do nível inicial ele está. Ou seja, sobe mais devagar quanto mais alto estiver. (Padrão: 0.25)  
:::

Quando você tiver alterado todas as variáveis como desejar, o próximo passo é salvar suas alterações.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Depois disso, você já pode iniciar seu servidor!

<InlineVoucher />
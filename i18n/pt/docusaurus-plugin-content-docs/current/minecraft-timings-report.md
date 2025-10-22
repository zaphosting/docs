---
id: minecraft-timings-report
title: "Minecraft: Identifique problemas no servidor com o relatório de timings"
description: "Descubra como analisar problemas de desempenho do servidor usando relatórios de timings para identificar lags e otimizar seu servidor → Saiba mais agora"
sidebar_label: Relatório de Timings
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Explicação

### O que é um relatório de timings?

Relatórios de timings são bem parecidos com o gerenciador de tarefas do seu computador, que permite encontrar o problema, especialmente em casos de lag. Um relatório de timings registra todas as atividades do servidor e as exibe visualmente.

## Relatório de timings

## Criar relatório de timings

Dependendo do software do servidor, o relatório de timings é criado de forma diferente. Basicamente, você precisa iniciar a gravação primeiro com o seguinte comando (exceto para **Paper Spigot** (se as configurações não foram alteradas)

`/timings start`

Enquanto estiver gravando, use o servidor como sempre faz, para que os problemas possam ser registrados e analisados com mais detalhes depois. A duração da gravação deve ser de **mínimo 10 minutos** ou mais, se possível.

## Exportar relatório de timings

Para criar e exportar o relatório de Timings, você deve usar o seguinte comando:

`/timings paste`

Após alguns segundos, uma mensagem aparecerá informando que a exportação foi bem-sucedida. O Relatório de Timings pode ser aberto clicando no link.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Análise

### ↔️ Restringir valores

Depois que o relatório de Timings for exportado e aberto como descrito acima, uma janela parecida com esta deve aparecer:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Primeiro, dê uma olhada mais de perto no gráfico para poder verificar valores aproximados para os pontos individuais de gravação, passando o mouse sobre cada ponto.

Para obter os valores mais precisos possíveis, que indicam um possível problema no servidor, o período problemático deve ser restringido primeiro pelos sliders abaixo, como mostrado no gráfico:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Investigar valores do servidor

Existem 3 colunas no total. Como você pode ver na captura de tela abaixo, a caixa número 1 mostra quanto % de um tick (20 ticks é um segundo) o processo principal precisa. Entre outras coisas, você também pode ver quantas vezes esse processo foi executado durante a gravação.

Na caixa número 2, você vê valores mais precisos em milissegundos, mas lembre-se que o tempo nunca deve ser maior que 50ms. Se isso acontecer, causaria uma reação em cadeia e todos os processos seguintes iriam se acumular um pouco, o que eventualmente levaria a lags, já que o servidor só consegue processar as tarefas com atraso.

:::info
O **Full Server Tick** geralmente pode ser ignorado, já que os valores estão sempre na área vermelha, mas isso não é um grande problema.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

De qualquer forma, você sempre deve investigar mais de perto os valores destacados em cores.

Neste exemplo, damos uma olhada no processo para todas as entidades (animais, monstros, itens, etc.), já que os valores já aparecem em laranja. A partir disso, você pode concluir diretamente que há um problema com muitas entidades no servidor.  
Possivelmente há fazendas de mobs no servidor, ou muitas mobs novas estão sendo geradas. Se você tem problemas com muitas entidades, pode reduzir a taxa de spawn nas configurações ou instalar plugins que limitam o número de entidades e as removem automaticamente, se necessário.

Como descrito acima, a lista basicamente sempre mostra o processo principal. Clicando em um processo, podemos olhar mais de perto processos individuais para cada tipo de entidade e investigá-los. Preste atenção também nas colunas 2 e 3, como mencionado antes.

Você vai notar que **Minecraft::tickEntity - nms.EntitySkeleton** executou muitos processos. Novamente, fazendas de mobs podem ser o problema.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Outro processo com valores já em laranja são os blocos em espera. Blocos que ficam esperando podem ser particularmente ineficientes porque o servidor precisa checar o status de cada bloco esperando a cada tick. Como exemplo, isso pode ser areia, cascalho voando ou até lava e água.

Se muita água for usada, por exemplo, em uma fazenda grande, isso pode causar vários problemas. O problema também pode surgir se novos chunks forem gerados e fontes de água forem criadas nesses chunks em uma montanha. O servidor precisa calcular o status toda vez para que a água flua suavemente. Além disso, o servidor precisa criar e carregar os chunks, o que também é um processo bem pesado.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Todas as outras investigações podem ser feitas da mesma forma, já que os passos são exatamente os mesmos para qualquer outro processo. Se você ainda precisar de ajuda com a avaliação, estamos sempre disponíveis para você!

### Verificar plugins

Em alguns casos, problemas também são causados por plugins. Para determinar se um plugin pode ser a causa, você pode remover temporariamente os plugins instalados no servidor e verificar o estado atual do sistema novamente.

Se existir um problema com plugins, isso também pode ser investigado na seção "Plugins". Os valores também são listados em três colunas, que têm exatamente a mesma estrutura dos valores normais do servidor acima. A diferença é que não há mais um processo principal mostrado. Em vez disso, o próprio plugin é exibido. Porém, ainda podemos verificar todos os processos clicando neles e investigando os valores mais de perto.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />
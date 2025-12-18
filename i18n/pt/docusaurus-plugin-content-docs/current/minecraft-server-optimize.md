---
id: minecraft-server-optimize
title: "Minecraft: otimização de desempenho do servidor"
description: "Descubra como otimizar servidores de jogos Minecraft para melhor desempenho e jogabilidade mais suave com ajustes eficazes nas configurações → Saiba mais agora"
sidebar_label: Otimização do Servidor Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### O que exatamente acontece durante a otimização?

A otimização é um ponto importante para servidores de jogos Minecraft para que eles possam rodar de forma suave, e você definitivamente deve dedicar tempo suficiente para isso em um servidor público. Só com muito tempo e testes é possível alcançar o melhor resultado. Esta documentação, portanto, não precisa ser seguida à risca, mas sim serve como uma ajuda para ir na direção certa.

Na maioria dos casos, a otimização altera uma grande quantidade de configurações nos servidores, o que em alguns casos muda significativamente o comportamento do próprio servidor. Entre outras coisas, algumas configurações são reduzidas, o que alivia o servidor e pode assim fornecer mais desempenho. Porém, para que a experiência geral de jogo não seja muito afetada, você sempre deve encontrar o meio-termo ideal aqui.

## Vanilla

As opções para otimizar um servidor vanilla são infelizmente muito limitadas, pois há poucas opções de configuração disponíveis. Tentamos dar um pouco mais de potência ao servidor vanilla tomando as seguintes medidas:

### Visibilidade

Uma medida muito comum é reduzir o alcance de visão. O alcance padrão é de 10 chunks, mas muitos jogadores jogam com bem menos, como 6-8. Alguns exageram nos chunks e às vezes configuram para 32 chunks, por exemplo, o que significa que o servidor tem que carregar e processar todos esses chunks, o que consome muita performance.

Em um servidor vanilla, o alcance de visão pode ser ajustado no arquivo de configuração "server.properties", para isso o valor "view-distance" deve ser ajustado. Para não restringir demais a experiência de jogo, recomenda-se definir esse valor para 5-6, o que alivia o servidor em até 50%. Já temos uma entrada na nossa documentação sobre isso, que pode ser encontrada [aqui](minecraft-default-config.md).

### Compressão de Dados

No servidor há uma troca permanente entre o servidor e os jogadores conectados. Os movimentos dos próprios jogadores são transmitidos para o servidor, que então envia isso para todos os outros jogadores. Mas também ações dos jogadores ou eventos no mundo, como explosões, fazem parte dos dados que são transmitidos repetidamente.

Para tornar essa troca mais eficiente, o tamanho dos dados compactados pode ser dobrado, o que significa que o servidor só precisa fazer 50% do esforço para trocar os mesmos dados com os jogadores comparado antes. Para isso, o valor "network-compression-threshold" também deve ser ajustado no arquivo "server.properties". O valor deve ser definido para 512 aqui. Também temos uma entrada na nossa documentação sobre isso, que pode ser vista [aqui](minecraft-default-config.md).

## Forge

Semelhante ao Vanilla, as opções que podem ser feitas no próprio servidor são um pouco limitadas, pois só há arquivos de configuração pequenos disponíveis. Porém, é possível instalar mods adicionais, o que significa que o servidor pode ser um pouco aliviado.

### Pré-carregamento dos chunks

Uma possibilidade para aliviar o servidor é pré-carregar os chunks. O servidor então só precisa carregar os dados salvos dos chunks durante a operação com jogadores, e não criar e gerar todos os chunks. Esse processo é melhor deixar rodar durante a noite, iniciando à noite antes.

Um mod adicional deve ser instalado para isso. Um mod muito adequado pode ser instalado [aqui](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator). O mod pode então ser instalado normalmente no servidor conforme descrito nas nossas instruções.

Antes de reiniciar o servidor, você deve garantir que o "max-tick-time" no "server.properties" esteja definido como "-1". Caso contrário, o servidor pode travar. Também é recomendável que haja pelo menos 8-10 GB de RAM disponíveis, pois esse processo exige bastante RAM. Para isso, a RAM pode ser temporariamente aumentada durante a noite, e depois reduzida novamente após o processo ser concluído.

:::info
Note que o mod mencionado acima pode não ser compatível com a versão do Forge que você está usando e o processo pode ser diferente do descrito aqui se você usar outro mod.
:::

Assim que o servidor for iniciado com o mod, o console deve ser aberto. Recomendamos criar uma borda para o mundo com um raio de 16.000 blocos. Para isso, os seguintes comandos devem ser executados em sequência:

- worldborder center 0 0
- worldborder set 16000

:::info
Se necessário, substitua as coordenadas pelo seu próprio centro do mundo com o comando center para não "cortar" seu mundo (que pode já ter construções).
:::

Assim que a borda for definida, o pré-carregamento real pode começar. Para isso, execute o seguinte comando:

- pregen gen startWorldBorder

Agora todos os chunks dentro da borda são pré-carregados um após o outro. Esse processo pode levar até 8 horas dependendo do número de mods instalados. O progresso é sempre exibido no console por mensagens de info em intervalos regulares. Assim que o processo terminar, isso também será exibido no console!

:::info
O mod pode continuar instalado no servidor mesmo após esse processo. Ele continuará otimizando chunks durante a operação e também funcionará quando não houver jogador no servidor.
:::

### Visibilidade

Uma medida muito comum é reduzir o alcance de visão. O alcance padrão é de 10 chunks, mas muitos jogadores jogam com bem menos, como 6-8. Alguns exageram nos chunks e às vezes configuram para 32 chunks, por exemplo, o que significa que o servidor tem que carregar e processar todos esses chunks, o que consome muita performance.

A visibilidade de um servidor Forge pode ser ajustada no arquivo "server.properties", para isso o valor "view-distance" deve ser ajustado. Para não restringir demais a experiência de jogo, recomenda-se definir esse valor para 5-6, o que alivia o servidor em até 50%. Já temos uma entrada na nossa documentação sobre isso, que pode ser encontrada [aqui](minecraft-default-config.md).

### Compressão de Dados

No servidor há uma troca permanente entre o servidor e os jogadores conectados. Os movimentos dos próprios jogadores são transmitidos para o servidor, que então envia isso para todos os outros jogadores. Mas também ações dos jogadores ou eventos no mundo, como explosões, fazem parte dos dados que são transmitidos repetidamente.

Para tornar essa troca mais eficiente, o tamanho dos dados compactados pode ser dobrado, o que significa que o servidor só precisa fazer 50% do esforço para trocar os mesmos dados com os jogadores comparado antes. Para isso, o valor "network-compression-threshold" também deve ser ajustado no arquivo "server.properties". O valor deve ser definido para 512 aqui. Também temos uma entrada na nossa documentação sobre isso, que pode ser vista [aqui](minecraft-default-config.md).

## Bukkit

### Visibilidade

Uma medida muito comum é reduzir o alcance de visão. O alcance padrão é de 10 chunks, mas muitos jogadores jogam com bem menos, como 6-8. Alguns exageram nos chunks e às vezes configuram para 32 chunks, por exemplo, o que significa que o servidor tem que carregar e processar todos esses chunks, o que consome muita performance.

A visibilidade de um servidor Forge pode ser ajustada no arquivo "server.properties", para isso o valor "view-distance" deve ser ajustado. Para não restringir demais a experiência de jogo, recomenda-se definir esse valor para 5-6, o que alivia o servidor em até 50%. Já temos uma entrada na nossa documentação sobre isso, que pode ser encontrada [aqui](minecraft-default-config.md).

### Compressão de Dados

No servidor há uma troca permanente entre o servidor e os jogadores conectados. Os movimentos dos próprios jogadores são transmitidos para o servidor, que então envia isso para todos os outros jogadores. Mas também ações dos jogadores ou eventos no mundo, como explosões, fazem parte dos dados que são transmitidos repetidamente.

Para tornar essa troca mais eficiente, o tamanho dos dados compactados pode ser dobrado, o que significa que o servidor só precisa fazer 50% do esforço para trocar os mesmos dados com os jogadores comparado antes. Para isso, o valor "network-compression-threshold" também deve ser ajustado no arquivo "server.properties". O valor deve ser definido para 512 aqui. Também temos uma entrada na nossa documentação sobre isso, que pode ser vista [aqui](minecraft-default-config.md).

### Limites de Spawn

Nesta etapa, as taxas gerais de spawn de mobs no servidor são um pouco reduzidas. Não há quase nenhuma diferença perceptível em comparação com os valores normais. Ainda assim, pode acontecer em alguns lugares, como fazendas de mobs, que a fazenda não funcione como planejado.

Para ajustar as configurações, o arquivo "bukkit.yml" deve ser editado. Os seguintes valores devem ser ajustados no ponto "spawn-limits":
- monsters: 50 #Padrão: 70
- animals: 10 #Padrão: 15
- water-animals: 3 #Padrão: 5
- ambient: 4 #Padrão: 15

:::info
Você pode, claro, ajustar os valores como quiser, mas os valores acima são uma média muito boa.
:::

Para melhorar ainda mais o spawn, o valor "monster-spawns" no item "ticks-per" também deve ser alterado no arquivo "bukkit.yml":
- monster-spawns: 2 #Padrão: 1

Se houver um problema geral com monstros, por exemplo (como pode ser determinado no relatório de timing), o valor pode ser aumentado até 5. O comportamento do servidor deve ser observado com cada valor para encontrar o melhor para seu servidor.

### Processamento de Chunks

Minecraft trabalha com os chamados chunks. Um chunk é sempre formado por 16x16 blocos, que são unidos e representam visualmente o mundo para o cliente. O servidor, portanto, trabalha apenas com chunks e carrega os chunks necessários na RAM. Quanto mais chunks são carregados e processados permanentemente pelo servidor, mais potência o servidor precisa fornecer, o que em alguns casos derruba o servidor.

Servidores com configurações padrão nunca descarregam chunks carregados, o que significa que a RAM é muito usada em alguns pontos e uma quantidade enorme dela é necessária. Claro que o desempenho do servidor é muito reduzido aqui, pois mais e mais precisa ser processado.

Para garantir que o servidor carregue apenas os chunks que são realmente necessários, as seguintes opções no arquivo "bukkit.yml" em "chunk-gc" devem ser ajustadas:
- period-in-ticks: 300 #Padrão: 600
- load-threshold: 300 #Padrão: 0

A opção "period-in-ticks" determina em que intervalos em segundos os chunks devem ser descarregados. Se desejar, esse valor pode ser reduzido ainda mais, mas você deve observar que pode ocorrer um efeito indesejado: um loop.

No caso de um loop, o chunk seria descarregado, mas logo depois necessário novamente, o que significa que o servidor teria que investir desempenho e tempo para recarregar esse chunk. Isso se repetiria várias vezes, o que sobrecarregaria mais o servidor do que se os chunks permanecessem carregados por mais um minuto, por exemplo.

## Spigot

### Visibilidade

Uma medida muito comum é reduzir o alcance de visão. O alcance padrão é de 10 chunks, mas muitos jogadores jogam com bem menos, como 6-8. Alguns exageram nos chunks e às vezes configuram para 32 chunks, por exemplo, o que significa que o servidor tem que carregar e processar todos esses chunks, o que consome muita performance.

Em um servidor spigot, a visibilidade pode ser ajustada no arquivo "spigot.yml", para isso o valor "view-distance" deve ser ajustado. Para não restringir demais a experiência de jogo, recomenda-se definir esse valor para 5-6, o que alivia o servidor em até 50%.

:::info
Dependendo da sua preferência, o valor também pode ser definido para 4, o que ajuda muito contra lag em servidores de farm world que rodam na versão 1.13+.
:::

### Compressão de Dados

No servidor há uma troca permanente entre o servidor e os jogadores conectados. Os movimentos dos próprios jogadores são transmitidos para o servidor, que então envia isso para todos os outros jogadores. Mas também ações dos jogadores ou eventos no mundo, como explosões, fazem parte dos dados que são transmitidos repetidamente.

Para tornar essa troca mais eficiente, o tamanho dos dados compactados pode ser dobrado, o que significa que o servidor só precisa fazer 50% do esforço para trocar os mesmos dados com os jogadores comparado antes. Para isso, o valor "network-compression-threshold" também deve ser ajustado no arquivo "server.properties". O valor deve ser definido para 512 aqui. Também temos uma entrada na nossa documentação sobre isso, que pode ser vista [aqui](minecraft-default-config.md).

### Limites de Spawn

Nesta etapa, as taxas gerais de spawn de mobs no servidor são um pouco reduzidas. Não há quase nenhuma diferença perceptível em comparação com os valores normais. Ainda assim, pode acontecer em alguns lugares, como fazendas de mobs, que a fazenda não funcione como planejado.

Para ajustar as configurações, o arquivo "bukkit.yml" deve ser editado. Os seguintes valores devem ser ajustados no ponto "spawn-limits":
- monsters: 50 #Padrão: 70
- animals: 10 #Padrão: 15
- water-animals: 3 #Padrão: 5
- ambient: 4 #Padrão: 15

:::info
Você pode, claro, ajustar os valores como quiser, mas os valores acima são uma média muito boa.
:::

Para melhorar ainda mais o spawn, o valor "monster-spawns" no item "ticks-per" também deve ser alterado no arquivo "bukkit.yml":
- monster-spawns: 2 #Padrão: 1

Se houver um problema geral com monstros, por exemplo (como pode ser determinado no relatório de timing), o valor pode ser aumentado até 5. O comportamento do servidor deve ser observado com cada valor para encontrar o melhor para seu servidor.

### Processamento de Chunks

Minecraft trabalha com os chamados chunks. Um chunk é sempre formado por 16x16 blocos, que são unidos e representam visualmente o mundo para o cliente. O servidor, portanto, trabalha apenas com chunks e carrega os chunks necessários na RAM. Quanto mais chunks são carregados e processados permanentemente pelo servidor, mais potência o servidor precisa fornecer, o que em alguns casos derruba o servidor.

Servidores com configurações padrão nunca descarregam chunks carregados, o que significa que a RAM é muito usada em alguns pontos e uma quantidade enorme dela é necessária. Claro que o desempenho do servidor é muito reduzido aqui, pois mais e mais precisa ser processado.

Para garantir que o servidor carregue apenas os chunks que são realmente necessários, as seguintes opções no arquivo "bukkit.yml" em "chunk-gc" devem ser ajustadas:
- period-in-ticks: 300 #Padrão: 600
- load-threshold: 300 #Padrão: 0

A opção "period-in-ticks" determina em que intervalos em segundos os chunks devem ser descarregados. Se desejar, esse valor pode ser reduzido ainda mais, mas você deve observar que pode ocorrer um efeito indesejado: um loop.

No caso de um loop, o chunk seria descarregado, mas logo depois necessário novamente, o que significa que o servidor teria que investir desempenho e tempo para recarregar esse chunk. Isso se repetiria várias vezes, o que sobrecarregaria mais o servidor do que se os chunks permanecessem carregados por mais um minuto, por exemplo.

### Alcance de Spawn

Mobs sempre podem spawnar a partir dos jogadores em certos intervalos. Aqui estamos reduzindo essa taxa um pouco para evitar problemas com spawn de mobs. Essa configuração é muito importante, pois algumas configurações de spawn já foram ajustadas, como explicado acima.

Alteramos as seguintes configurações no arquivo "spigot.yml" em "world-settings":
- mob-spawn-range: 3 #Padrão: 4

### Alcance de Entidades

Aqui definimos quando as entidades — ou seja, animais e monstros — são ativadas. Isso significa que os animais podem se mover, por exemplo, ou monstros podem reconhecer jogadores. Basicamente isso está ativado para todos os mobs, mas em uma espécie de modo standby. No modo standby, os mobs podem continuar se movendo e reconhecer jogadores, mas, por exemplo, os mobs só podem se mover muito lentamente, o que significa que o servidor não precisa fornecer muita potência.

Aqui também as mudanças devem ser feitas no arquivo "spigot.yml" em "entity-activation-range". Recomendamos os seguintes valores:
- animals: 6 #Padrão: 32
- monsters: 16 #Padrão: 32
- misc: 2 #Padrão: 16
- water: 6 #Padrão: 6
- tick-inactive-villagers: true #Padrão: true

### Otimizações de Funis (Funnels)

Funis são uma parte muito importante do jogo em Minecraft. Mas para servidores, eles são um verdadeiro veneno! Para cada funil configurado, o servidor tem que checar 20 vezes por segundo se um item está pronto para ser pego. Mover os itens de funil para funil ou para uma caixa também consome trabalho valioso!

Para melhorar isso, aumentamos os intervalos de tempo em que o servidor deve realizar essas ações. Com os valores usados aqui, essa ação é realizada e checada a cada 3 segundos. As taxas de transferência não mudam. Porém, pode acontecer que relógios de redstone criados com funis não funcionem corretamente.

Para ajustar as configurações, os seguintes valores devem ser alterados no arquivo "spigot.yml":
- hopper-transfer: 24 #Padrão: 8
- hopper-check: 24 #Padrão: 8
- hopper-amount: 3 #Padrão: 1

### Colisões

Desde a versão 1.9 do Minecraft existem colisões, onde por exemplo não é mais possível que um jogador fique em cima do outro. Aqui determinamos quantas vezes as entidades podem colidir em geral. Especialmente em fazendas de mobs, onde muitos mobs se encontram em um espaço apertado, isso pode sobrecarregar o servidor.

Para adaptar a configuração, o seguinte valor deve ser ajustado em "spigot.yml":
- max-entity-collisions: 1 #Padrão: 8

Como colisões não têm efeito real nos mobs, a configuração pode ser reduzida aqui. Esse valor não é usado para jogadores, apenas para mobs!

### Raio de Merge

O raio de merge determina quais itens e XP são mesclados, o que significa que o servidor precisa processar menos entidades. Especialmente em servidores onde muitos itens ficam no chão, isso pode ter um efeito positivo para os jogadores se esse raio for aumentado. Aqui também vale a regra de encontrar um valor médio bom, senão ocorre um efeito de lag, pois o servidor tem que checar uma área maior, o que exige muita potência!

Para adaptar a configuração, os seguintes valores devem ser ajustados em "merge-radius" no arquivo "spigot.yml":
- item: 4.0 #Padrão: 2.5
- exp: 6.0 #Padrão: 3.0

:::info
Os valores aqui não devem ser configurados acima de 8, senão pode surgir o efeito de lag mencionado!
:::

## Paper Spigot

### Visibilidade

Uma medida muito comum é reduzir o alcance de visão. O alcance padrão é de 10 chunks, mas muitos jogadores jogam com bem menos, como 6-8. Alguns exageram nos chunks e às vezes configuram para 32 chunks, por exemplo, o que significa que o servidor tem que carregar e processar todos esses chunks, o que consome muita performance.

Em um servidor (paper) spigot, o alcance de visão pode ser ajustado no arquivo "spigot.yml", para isso o valor "view-distance" deve ser ajustado. Para não restringir demais a experiência de jogo, recomenda-se definir esse valor para 5-6, o que alivia o servidor em até 50%.

:::info
Dependendo da sua preferência, o valor também pode ser definido para 4, o que ajuda muito contra lag em servidores de farm world que rodam na versão 1.13+.
:::

### Compressão de Dados

No servidor há uma troca permanente entre o servidor e os jogadores conectados. Os movimentos dos próprios jogadores são transmitidos para o servidor, que então envia isso para todos os outros jogadores. Mas também ações dos jogadores ou eventos no mundo, como explosões, fazem parte dos dados que são transmitidos repetidamente.

Para tornar essa troca mais eficiente, o tamanho dos dados compactados pode ser dobrado, o que significa que o servidor só precisa fazer 50% do esforço para trocar os mesmos dados com os jogadores comparado antes. Para isso, o valor "network-compression-threshold" também deve ser ajustado no arquivo "server.properties". O valor deve ser definido para 512 aqui. Também temos uma entrada na nossa documentação sobre isso, que pode ser vista [aqui](minecraft-default-config.md).

### Limites de Spawn

Nesta etapa, as taxas gerais de spawn de mobs no servidor são um pouco reduzidas. Não há quase nenhuma diferença perceptível em comparação com os valores normais. Ainda assim, pode acontecer em alguns lugares, como fazendas de mobs, que a fazenda não funcione como planejado.

Para ajustar as configurações, o arquivo "bukkit.yml" deve ser editado. Os seguintes valores devem ser ajustados no ponto "spawn-limits":
- monsters: 50 #Padrão: 70
- animals: 10 #Padrão: 15
- water-animals: 3 #Padrão: 5
- ambient: 4 #Padrão: 15

:::info
Você pode, claro, ajustar os valores como quiser, mas os valores acima são uma média muito boa.
:::

Para melhorar ainda mais o spawn, o valor "monster-spawns" no item "ticks-per" também deve ser alterado no arquivo "bukkit.yml":
- monster-spawns: 2 #Padrão: 1

Se houver um problema geral com monstros, por exemplo (como pode ser determinado no relatório de timing), o valor pode ser aumentado até 5. O comportamento do servidor deve ser observado com cada valor para encontrar o melhor para seu servidor.

### Processamento de Chunks

Minecraft trabalha com os chamados chunks. Um chunk é sempre formado por 16x16 blocos, que são unidos e representam visualmente o mundo para o cliente. O servidor, portanto, trabalha apenas com chunks e carrega os chunks necessários na RAM. Quanto mais chunks são carregados e processados permanentemente pelo servidor, mais potência o servidor precisa fornecer, o que em alguns casos derruba o servidor.

Servidores com configurações padrão nunca descarregam chunks carregados, o que significa que a RAM é muito usada em alguns pontos e uma quantidade enorme dela é necessária. Claro que o desempenho do servidor é muito reduzido aqui, pois mais e mais precisa ser processado.

Para garantir que o servidor carregue apenas os chunks que são realmente necessários, as seguintes opções no arquivo "bukkit.yml" em "chunk-gc" devem ser ajustadas:
- period-in-ticks: 300 #Padrão: 600
- load-threshold: 300 #Padrão: 0

A opção "period-in-ticks" determina em que intervalos em segundos os chunks devem ser descarregados. Se desejar, esse valor pode ser reduzido ainda mais, mas você deve observar que pode ocorrer um efeito indesejado: um loop.

No caso de um loop, o chunk seria descarregado, mas logo depois necessário novamente, o que significa que o servidor teria que investir desempenho e tempo para recarregar esse chunk. Isso se repetiria várias vezes, o que sobrecarregaria mais o servidor do que se os chunks permanecessem carregados por mais um minuto, por exemplo.

### Alcance de Spawn

Mobs sempre podem spawnar a partir dos jogadores em certos intervalos. Aqui estamos reduzindo essa taxa um pouco para evitar problemas com spawn de mobs. Essa configuração é muito importante, pois algumas configurações de spawn já foram ajustadas, como explicado acima.

Alteramos as seguintes configurações no arquivo "spigot.yml" em "world-settings":
- mob-spawn-range: 3 #Padrão: 4

### Spawner de Mobs

Especialmente em servidores city build, spawners são usados muito frequentemente e às vezes em grande número. Spawners criam cada vez mais mobs no servidor, o que pode causar muitos problemas.

Essa opção ajusta um pouco o comportamento de spawn do spawner para que o servidor ative o spawner em intervalos curtos. Para isso, o seguinte valor em "paper.yml" deve ser ajustado:
- mob-spawner-tick-rate: 3 #Padrão: 1

:::info
O valor usado acima não muda muito o comportamento e não afeta realmente a jogabilidade.
:::

### Alcance de Entidades

Aqui definimos quando as entidades — ou seja, animais e monstros — são ativadas. Isso significa que os animais podem se mover, por exemplo, ou monstros podem reconhecer jogadores. Basicamente isso está ativado para todos os mobs, mas em uma espécie de modo standby. No modo standby, os mobs podem continuar se movendo e reconhecer jogadores, mas, por exemplo, os mobs só podem se mover muito lentamente, o que significa que o servidor não precisa fornecer muita potência.

Aqui também as mudanças devem ser feitas no arquivo "spigot.yml" em "entity-activation-range". Recomendamos os seguintes valores:
- animals: 6 #Padrão: 32
- monsters: 16 #Padrão: 32
- misc: 2 #Padrão: 16
- water: 6 #Padrão: 6
- tick-inactive-villagers: true #Padrão: true

### Otimização de Funis (Funnels)

Funis são uma parte muito importante do jogo em Minecraft. Mas para servidores, eles são um verdadeiro veneno! Para cada funil configurado, o servidor tem que checar 20 vezes por segundo se um item está pronto para ser pego. Mover os itens de funil para funil ou para uma caixa também consome trabalho valioso!

Para melhorar isso, aumentamos os intervalos de tempo em que o servidor deve realizar essas ações. Com os valores usados aqui, essa ação é realizada e checada a cada 3 segundos. As taxas de transferência não mudam. Porém, pode acontecer que relógios de redstone criados com funis não funcionem corretamente.

Para ajustar as configurações, os seguintes valores devem ser alterados no arquivo "spigot.yml":
- hopper-transfer: 24 #Padrão: 8
- hopper-check: 24 #Padrão: 8
- hopper-amount: 3 #Padrão: 1

:::info
Certifique-se de que o valor "use-hopper-check" esteja definido como "true" no arquivo "paper.yml"!
:::

### Colisões

Desde a versão 1.9 do Minecraft existem colisões, onde por exemplo não é mais possível que um jogador fique em cima do outro. Aqui determinamos quantas vezes as entidades podem colidir em geral. Especialmente em fazendas de mobs, onde muitos mobs se encontram em um espaço apertado, isso pode sobrecarregar o servidor.

Para adaptar a configuração, o seguinte valor deve ser ajustado em "spigot.yml":
- max-entity-collisions: 1 #Padrão: 8

Como colisões não têm efeito real nos mobs, a configuração pode ser reduzida aqui. Esse valor não é usado para jogadores, apenas para mobs!

### Raio de Merge

O raio de merge determina quais itens e XP são mesclados, o que significa que o servidor precisa processar menos entidades. Especialmente em servidores onde muitos itens ficam no chão, isso pode ter um efeito positivo para os jogadores se esse raio for aumentado. Aqui também vale a regra de encontrar um valor médio bom, senão ocorre um efeito de lag, pois o servidor tem que checar uma área maior, o que exige muita potência!

Para adaptar a configuração, os seguintes valores devem ser ajustados em "merge-radius" no arquivo "spigot.yml":
- item: 4.0 #Padrão: 2.5
- exp: 6.0 #Padrão: 3.0

:::info
Os valores aqui não devem ser configurados acima de 8, senão pode surgir o efeito de lag mencionado!
:::

### Explosões

No Paper Spigot, muitas partes dos servidores Minecraft foram reprogramadas para fazer o servidor rodar melhor. Isso também vale para explosões! Aqui, o software lida melhor com explosões, evitando lag pesado no servidor.

Para isso, o seguinte valor no arquivo "paper.yml" deve ser ajustado:
- optimize-explosions: true #Padrão: false

### Baús

Até mesmo com baús há um detalhe que pode ser otimizado! Se um gato está sentado no baú, ele não pode ser aberto. Para que o servidor verifique isso, ele precisa passar por todos os mobs em um certo raio e checar se algum está sentado no baú, o que é muito demorado e acontece toda vez que um baú é aberto!

A opção pode ser facilmente desativada com a seguinte alteração:
- disable-chest-cat-detection: true #Padrão: false

### Inventários

O inventário é muito usado, mas inventário não é só inventário. Por exemplo, um baú ou bancada de trabalho também é um inventário. Com essa mudança, você pode dar um respiro legal para o servidor sem que ninguém perceba! Basicamente, definimos o número de ticks após os quais o servidor deve atualizar cada inventário.

Para isso, o seguinte valor deve ser editado no arquivo "paper.yml":
- container-update-tick-rate: 3 #Padrão: 1

:::info
O valor não deve ser configurado acima de 5, senão o inventário pode ficar meio bugado! Em modos de jogo como SurvivalGames, onde todos os jogadores querem acessar os baús no meio e pegar os melhores itens, o valor não deve ser alterado e deve ficar em "1".
:::

### Atualizações de Luz

Aqui, o Paper Spigot também oferece uma opção alternativa para que as atualizações de luz no mundo sejam feitas melhor. Com esse método, as atualizações de luz não são feitas dentro de um tick, o que pode, dependendo da maior atualização, travar o servidor, mas fora do tick. Isso é chamado de async threads no Minecraft.

Para isso, a seguinte alteração também deve ser feita no arquivo "paper.yml":
- queue-light-updates: true #Padrão: false

### Salvando Dados dos Chunks

Assim que mudanças são feitas em um chunk, elas não são escritas diretamente no disco rígido, mas primeiro carregadas na RAM. Mesmo assim, todas as mudanças são salvas com frequência, o que pode causar lag extremo, especialmente quando o servidor quer salvar mudanças massivas.

Com essa mudança, reduzimos o número máximo de chunks que podem ser salvos em um processo de salvamento. Ao alterar essa opção, a RAM é usada mais em alguns pontos porque as mudanças permanecem mais tempo na RAM!

Alterações na seguinte configuração devem ser feitas no arquivo "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Padrão: 24

### Redstone

Redstone é muito usada, às vezes com circuitos extremamente grandes. Em servidores públicos, isso às vezes é o ponto mais fraco em quase 90% dos servidores, pois redstone pode causar lag massivo. Aqui usamos um processamento alternativo de Redstone do Paper Spigot, que torna a Redstone quase inofensiva e com a mesma funcionalidade do Vanilla!

Para isso, a seguinte configuração deve ser feita em "paper.yml":
- use-faster-eigencraft-redstone: true #Padrão: false

:::info
**Cuidado! Em algumas situações isso pode mudar muito o funcionamento da Redstone!**
:::

<InlineVoucher />
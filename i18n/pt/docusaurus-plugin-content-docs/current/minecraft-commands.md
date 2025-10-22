---
id: minecraft-commands
title: "Minecraft: Comandos Gerais do Servidor"
description: "Descubra como usar comandos do Minecraft para melhorar o gameplay e gerenciar funções de forma eficaz → Saiba mais agora"
sidebar_label: Comandos gerais
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### O que são comandos?

Comandos podem ser usados no Minecraft para executar funções adicionais ou especiais. O próprio Minecraft já contém mais de **100 comandos** sem nenhuma modificação, que podem ser usados para ativar, gerenciar ou realizar uma grande variedade de funções.

Neste artigo da nossa documentação, vamos abordar os comandos mais importantes, que são usados e necessários com muita frequência.  
Se um comando não estiver listado aqui, a [Minecraft-Wiki oficial](https://minecraft-de.gamepedia.com/) é super útil, pois cada parte (incluindo todos os comandos) é explicada em detalhes.

<InlineVoucher />

### Uso

Todo comando sempre começa com uma "/". Então, se você quiser usar um comando, precisa abrir o chat no jogo e digitar a "/" primeiro, depois pode escrever o comando em si. Ao pressionar a tecla TAB, uma prévia de todos os comandos disponíveis é exibida. Assim, os comandos podem ser completados rápida e facilmente de forma automática, como acontece nas buscas na internet.

:::info
Se você for executar comandos via console, a "/" não é necessária e deve ser removida!

Esse caractere é usado apenas para diferenciar entre uma mensagem normal no chat ou um comando no jogo.
:::

### Direitos / Permissões

Para poder usar comandos, são necessários os direitos apropriados. No Minecraft Vanilla ou Forge não existe um sistema real de permissões que possa ser usado por plugins como no Spigot. Aqui só pode ser usado o sistema de níveis dos direitos OP. Aqui você encontra um tutorial sobre o sistema de direitos OP:  [Permissões OP](minecraft-addop.md)

Se um sistema de permissões foi instalado e for desejado atribuir direitos a certos comandos do Minecraft, as permissões respectivas podem ser atribuídas conforme descrito abaixo.

:::info
A sintaxe das permissões para cada comando é sempre a mesma e pode ser ajustada conforme necessário.

Se quiser atribuir permissões para o comando Locate como exemplo, a permissão a ser configurada é: ``minecraft.command.locate``
:::



## Comandos

### /tp

Com o comando **/tp**, administradores podem se teletransportar para outros jogadores ou até teletransportar um jogador para um jogador alvo desejado.  
O comando também pode ser usado para teletransportar mobs ou para se teletransportar para uma localização ao inserir coordenadas, por exemplo. Mais detalhes abaixo.

**Exemplos:**

``/tp PlayerA``

Teletransporta quem executa o comando para outro jogador.

``/tp PlayerA PlayerB``

Teletransporta *PlayerA* para *PlayerB*. Não importa quem execute o comando, os jogadores especificados são teletransportados.  
Se quem executar o comando for *PlayerB*, *PlayerA* será teletransportado para ele mesmo.

``/tp -100 75 985``

Quem executar o comando será teletransportado para as coordenadas especificadas.  
Ao especificar um jogador antes das coordenadas (``/tp PlayerA -100 75 985``), o comando teletransporta o jogador especificado para lá, em vez de teletransportar quem executa.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teletransporta você para a próxima *vaca* num raio de 10 blocos.  
``@s`` também pode ser trocado por um jogador como *PlayerA*, que teletransportaria esse jogador.

### /locate

Com o comando **/locate** é possível obter as coordenadas da construção que você está procurando, como uma vila de aldeões.

**Exemplos:**

``/locate fortress``

Encontra e mostra a posição da próxima fortaleza do Nether quando você estiver no Nether.

``/locate village``

Encontra e mostra a posição da mesma forma que para fortalezas do Nether, mas neste caso para uma vila de aldeões.

### /worldborder

Com esse comando é possível criar uma borda do mundo dentro do mundo atual. Isso impede que jogadores explorem o mundo além do limite especificado por esse comando.

**Exemplos:**

``/worldborder center 0 0``

Define o ponto central do mundo nas coordenadas 0;0, a partir do qual o raio é calculado e definido.

``/worldborder set 16000``

Define o limite para 16.000x16.000 blocos. Ou seja, um raio de 8.000 blocos em cada direção.

### /effect

Permite dar efeitos normais de poção para jogadores (ou até entidades).  
Alguns efeitos só podem ser obtidos usando comandos, como o efeito de sorte, que ainda não tem função no jogo.

:::info
O comando mudou ao longo das versões e foi expandido e modificado.

Os exemplos dos comandos mostrados abaixo são da versão mais recente e podem parecer diferentes em versões antigas!
:::

**Exemplos:**

``/effect give PlayerA minecraft:speed``

Dá ao jogador *PlayerA* o efeito de velocidade **Speed 1**.

### /gamerule

Esse comando pode ser usado para alterar configurações especiais em um mundo ou ativar/desativar funções especiais.  
Por exemplo, como no exemplo abaixo, pode ser ativado que jogadores mantenham seu inventário em caso de morte.

**Exemplos:**

``/gamerule keepInventory true``

Configuração para o mundo que permite que jogadores mantenham seu inventário (incluindo experiência) em caso de morte.

``/gamerule mobGriefing false``

Define se monstros como Creepers podem causar dano ao mundo.

### /save-all

O servidor salva o mundo a cada 5 minutos e grava os dados no disco.  
Com esse comando o mundo é salvo imediatamente e a contagem regressiva para o salvamento automático é resetada para 5 minutos.

### /tps

Esse comando pode ser usado para checar o TPS (ticks por segundo) em Spigot e Paper Spigot.  
O TPS fornece informações sobre o desempenho do servidor. O máximo e melhor TPS que o servidor pode alcançar é 20.  
O TPS mostra os últimos 60 segundos, os dois valores seguintes são a média de 5 e 15 minutos.

### /ban

Esse comando pode ser usado para excluir um jogador do servidor, para que ele não possa mais entrar no servidor de forma alguma. A conta do jogador é banida com base no seu UUID.

:::info
Em servidores com modo online desativado, jogadores podem mudar seus nomes e recuperar o acesso. Nesse caso, um banimento por IP via plugins é a melhor solução.
:::

**Exemplos:**

``/ban PlayerA``

Nesse exemplo, o jogador *PlayerA* é banido do servidor.

``/ban @a``

Executando esse comando, todos os jogadores atuais no servidor são banidos. Administradores com privilégios OP não são afetados e permanecem no servidor.

### /pardon

Com esse comando é possível desbanir (como descrito acima) para que o jogador possa entrar novamente no servidor.

**Exemplos:**

``/pardon PlayerA``

O jogador *PlayerA* será removido da lista de banidos e poderá entrar no servidor novamente.

### /kick

Esse comando encerra a conexão entre o servidor e o jogador especificado. Isso força o jogador a sair do servidor, mas ele ainda pode reconectar.

**Exemplos:**

``/kick PlayerA``

Expulsa o jogador *PlayerA* do servidor com a mensagem "Kicked by an operator".

``/kick PlayerA Motivo``

Expulsa o jogador *PlayerA* do servidor com a mensagem "Motivo".

<InlineVoucher />
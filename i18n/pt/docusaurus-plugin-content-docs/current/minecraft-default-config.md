---
id: minecraft-default-config
title: "Minecraft: Configurações do Servidor"
description: "Descubra como otimizar as configurações do servidor de jogos Minecraft para performance e estabilidade, personalizando a experiência de jogo → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que posso configurar neste arquivo?

O Minecraft já vem com uma pequena configuração chamada *server.properties*. 
É nela que o servidor pode ser configurado de forma fundamental. Aqui explicamos o que cada item faz e o que deve ser considerado ao fazer alterações. Algumas configurações são tratadas com **cuidado**, pois podem impactar drasticamente a performance do servidor, o que pode levar, entre outras coisas, à instabilidade do servidor.

<InlineVoucher />

### view-distance

Com essa configuração, a *visibilidade máxima* pode ser definida pelo servidor. Independente do que foi configurado no cliente, o servidor nunca envia dados de chunk para o cliente além do especificado aqui. Você pode diminuir esse valor para proteger a performance do servidor. A experiência de jogo não é afetada mesmo com valor 5. Valores menores que 5 não são recomendados e, em casos raros, podem causar problemas.
**IMPORTANTE:** O valor não deve ser aumentado em hipótese alguma (a menos que seja absolutamente necessário) e deve ser tratado com cautela, pois pode causar sérios problemas de performance.

:::info
Essa configuração só é aplicada em servidores Vanilla ou Forge.

Para Bukkit, Spigot e Paper Spigot, o valor deve ser configurado no arquivo próprio deles.
:::

### max-build-height

Define até qual altura (coordenada Y) pode-se construir ou desmontar. Valores maiores que 256 **não são permitidos** e são ignorados pelo servidor. Essa configuração é útil para limitar a altura máxima.

### server-ip

Se você contratou múltiplos IPs para seu servidor dedicado ou VPS, pode especificar aqui qual IP será usado. Se tiver apenas um IP, pode deixar esse campo vazio — o mesmo vale para um servidor de jogos.

### level-seed

Por padrão, o gerador de mundo cria uma [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) aleatória, gerando um mundo totalmente randomizado. 
Aqui você pode definir sua própria seed com **letras ou números**, e o servidor criará o mundo correspondente. O limite máximo é de **32 caracteres**.

:::info
Existem alguns geradores de seed onde você pode configurar o mundo do seu jeito.

[Esse aqui](https://minecraft.tools/en/custom.php) é um dos melhores e faz quase tudo.
:::

### gamemode

Define o modo de jogo padrão no seu servidor. Esse modo é atribuído a todo jogador na primeira vez que entra no servidor e pode ser alterado a qualquer momento com o comando [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Se não souber os IDs dos modos de jogo, aqui está a lista:

| valor | Modo de Jogo |
|--|--|
| 0 | Sobrevivência |
| 1 | Criativo |
| 2 | Aventura |
| 3 | Espectador |

### server-port

Você pode definir uma porta fixa para seu servidor, pela qual ele será acessado junto com o IP. Se quiser rodar vários servidores no mesmo servidor dedicado ou VPS, cada um precisa de uma porta diferente. Normalmente essa opção pode ficar como está e só é necessária para redes BungeeCord.

### enable-command-block

Ativa os [command blocks](https://minecraft.fandom.com/wiki/Command_Block) no servidor. Se não precisar deles, deixe como *false*, pois existem formas de usar command blocks para causar danos ou travar o servidor.

### allow-nether

Liga ou desliga o Nether. Se desativado, o Nether não pode mais ser acessado via portal. Porém, ainda é possível acessar via plugins como o [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Permite executar comandos remotamente via RCON. É necessário definir uma senha e uma porta separada. Recomendamos desativar o RCON para evitar invasões.

### op-permission-level

Define o nível padrão de OP que será dado a um novo operador. Os níveis e a distribuição por jogador são explicados com mais detalhes [aqui](minecraft-addop.md).

### enable-query

O query fornece dados externos para serviços como sites, mostrando informações como número atual de jogadores ou lista detalhada dos jogadores online. Pode ser usado para exibir dados via PHP, por exemplo. Algumas listas de servidores usam essa função para listar o servidor corretamente.

### prevent-proxy-connections

Define se jogadores podem se conectar via VPN/proxy. VPNs são usadas para burlar bans de IP, então essa opção pode ser muito útil. Porém, às vezes bloqueia conexões normais por engano.

:::info
Para controle avançado de conexões VPN/proxy, vale a pena instalar um plugin.

Existem muitos plugins gratuitos, mas esse [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) (pago) nos convenceu mais e protege seu servidor contra ataques de bots.
:::

### generator-settings

Assim como no modo singleplayer, o servidor pode criar um mundo com configurações específicas. Similar a uma seed, o mundo é configurado antes e o servidor gera o mundo. A diferença é que ainda é um mundo aleatório, então não é igual a nenhum outro.

Um código de geração para um mapa plano ficaria assim:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Se quiser usar um pacote de texturas especial no servidor, pode colocar o **link direto para download** aqui. 
O pacote será baixado e ativado automaticamente após o jogador confirmar.

### player-idle-timeout

Jogadores ausentes podem ser expulsos automaticamente após o tempo especificado em segundos. Útil para servidores lotados, liberando espaço para jogadores ativos.

### level-name

Por padrão, o mundo se chama "world". Aqui você pode definir outro nome para o mundo. Se já existir um mundo com outro nome e você mudar aqui, um novo mundo com o nome definido será criado automaticamente. O mundo antigo permanece na pasta anterior.

### motd

Aqui você pode definir uma mensagem que aparece na lista de servidores, se adicionada. A mensagem não aparece na conexão direta, a menos que o cliente tenha mods especiais. Pode usar todas as cores e formatações que o Minecraft oferece.

:::info
O MOTD pode ser criado fácil e rápido com essa [ferramenta](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Define se o jogador sempre deve entrar no modo de jogo padrão ao entrar no servidor. Independente do modo que estava antes, o padrão será aplicado.

### hardcore

O modo hardcore faz com que jogadores sejam banidos ou colocados no modo espectador ao morrer. Se quiser usar, **deve criar um novo mundo**, pois o modo hardcore afeta a geração do mundo.

### white-list

Ativa a [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), permitindo acesso apenas a jogadores na lista. Os comandos para adicionar, remover e gerenciar a whitelist estão na página indicada.

### broadcast-console-to-ops

Define se operadores recebem notificações no chat quando comandos são executados no jogo.

### pvp

Ativa ou desativa o PVP no servidor. Se desativado, jogadores não podem se atacar diretamente. Porém, isso não impede truques como colocar lava para atacar.

### spawn-npcs

Define se aldeões aparecem nas vilas. Se desativado, não haverá aldeões no servidor. Útil para servidores econômicos que querem limitar comércio apenas entre jogadores.

### generate-structures

Afeta o gerador de mundo. Define se estruturas como vilas ou templos serão geradas.

### spawn-animals

Define se animais devem aparecer no servidor. Lista completa de animais [aqui](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Se ativado, o servidor envia dados anônimos para a Mojang para ajudar no desenvolvimento e otimização. Não afeta a performance do servidor.

### difficulty

Define a dificuldade geral do servidor. Mobs causam mais ou menos dano dependendo da dificuldade. Informações detalhadas e opções estão [aqui](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Define o tamanho a partir do qual os dados entre cliente e servidor são comprimidos. Com valor baixo como o padrão 256, dados são trocados cerca de 20 vezes por segundo. Valor 512 é recomendado para aliviar a performance do servidor sem efeitos negativos. Nunca configure acima de 1024.

**Essa configuração deve ser usada com cuidado, pois valores errados podem causar problemas sérios para jogadores e danos irreparáveis ao mundo.**

### level-type

Define o tipo de mundo que o gerador cria. Após mudar essa opção, **crie um novo mundo** para evitar cortes indesejados onde novos chunks serão gerados.

| Valor | Significado |
|--|--|
| DEFAULT | Mundo normal com montanhas, vales, vilas, etc |
| FLAT | Mundo totalmente plano, só com vilas |
| LARGEBIOMES | Igual ao normal, mas com biomas maiores |
| AMPLIFIED | Igual ao normal, mas com relevo muito acentuado |
| BUFFET | Mundo buffet, onde as configurações são definidas em *generator-settings* |

### spawn-monsters

Define se monstros devem aparecer no servidor. Lista completa de monstros [aqui](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Regula o tempo máximo de duração de um tick. O servidor divide tarefas em ticks. Se um tick durar mais que 60 segundos (padrão), o servidor para automaticamente.

Em servidores Forge, isso pode ser chato, pois mods exigem mais tempo. Nesse caso, defina o valor para *-1* para desativar a parada automática.

### max-players

Define o número máximo de slots e jogadores que podem estar no servidor.

### enforce-whitelist

Faz com que a whitelist aceite mudanças imediatamente. Normalmente, a whitelist precisa ser recarregada para ativar.

### online-mode

Define se jogadores sem conta premium podem acessar o servidor. Em servidores públicos, isso pode dar direitos indevidos, pois jogadores podem escolher nomes de operadores e o servidor só confere o nome.

Para evitar isso, instale urgentemente um plugin de senha em servidores com suporte a plugins, como Spigot.

### allow-flight

Ativa ou desativa o AntiCheat próprio do Minecraft relacionado a voar. Hack clients permitem que jogadores voem sem permissão.

:::info
Mas a gente sempre recomenda instalar um AntiCheat via plugin!
:::

### function-permission-level

Define o nível OP necessário para executar comandos. No nível 4, comandos podem parar o servidor, expulsar ou banir jogadores, por exemplo.

<InlineVoucher />
---
id: minecraft-bungeecord-config
title: "Minecraft: Configurações do Servidor Bungeecord"
description: "Entenda como otimizar e gerenciar as configurações da sua rede de servidores BungeeCord para melhor performance e experiência dos jogadores → Saiba mais agora"
sidebar_label: Propriedades do Servidor
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Pra que serve uma Configuração BungeeCord?

BungeeCord é a gestão de um conjunto de servidores conectados através de um servidor proxy (servidor BungeeCord). Para personalizar a rede desses servidores, o arquivo *config.yml* deve ser editado. Nesta página você vai aprender o significado exato de cada configuração e receber informações extras sobre o impacto nos sub-servidores como PaperSpigot e Bukkit.

<InlineVoucher />

## Configurações

### forge_support

O valor pode ser false ou true. Se você definir como true, os jogadores poderão entrar no servidor com um cliente Forge (ideal para modpacks). Se for false, o servidor negará essas conexões.

### player_limit

Esse valor indica quantos jogadores podem se conectar ao servidor ao mesmo tempo. Comparado ao valor *max_players* dos listeners, esse é o limite interno e absoluto do total de jogadores.

### permissions

Aqui você pode atribuir permissões específicas para diferentes grupos. Essas são **apenas permissões do BungeeCord**, não permissões do Spigot/Bukkit, por exemplo.  
A sintaxe e a indentação (2 espaços) são importantes:  
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Esse número indica o tempo máximo que o servidor pode ficar sem enviar sinais aos jogadores antes de desligar e cortar todas as conexões. Por padrão, está em 30000, que equivale a 30 segundos de resposta máxima.

### log_commands

O valor pode ser false ou true. Se true, uma mensagem será exibida no console sempre que um jogador executar um comando do BungeeCord. Se false, essa mensagem não aparecerá.

### network_compression_threshold

Define o tamanho dos pacotes enviados aos jogadores. Um valor menor que o padrão *256*, como 128, pode melhorar a conexão para usuários mais distantes. Porém, isso aumenta muito o uso da CPU, então mexa com cuidado.

### online_mode

O valor pode ser false ou true. Se true, só jogadores que compraram Minecraft podem acessar o servidor. Se false, jogadores com versões piratas (cracked) também poderão entrar, pois não haverá comunicação com o servidor da Mojang.  
**Importante:** Se quiser permitir jogadores cracked, use um plugin de autorização, senão outros podem se passar por você e ganhar privilégios de admin.

### disabled_commands

Aqui você lista comandos que devem ser desativados e não executáveis em toda a rede. Essa restrição vale para todos os jogadores.

### servers

Essa lista mostra todos os sub-servidores da sua rede. Se um servidor não estiver aqui, ele não será integrado ao seu sistema.  
Sintaxe e indentação (2 espaços) são importantes:  
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
O **motd** é a mensagem que aparece na sua lista de servidores quando você dá ping em um sub-servidor usando a função *forced_hosts*:  

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Em **address** você coloca o IP correspondente do sub-servidor. Se **restricted** for true, o jogador precisa da permissão *bungeecord.server.ServerName* para entrar no sub-servidor.

### listeners

Aqui ficam várias opções importantes para a conexão com o servidor BungeeCord. Você pode criar vários listeners para permitir conexões em diferentes IPs e portas. Um listener tem as seguintes configurações:  
* query_port - Define a porta do listener.  
* motd - Mensagem exibida na lista de servidores se o jogador entrar direto no servidor BungeeCord.  
* tab_list - Pode ser *GLOBAL_PING*, *GLOBAL* ou *SERVER*. GLOBAL_PING mostra todos os jogadores com seus pings na tablist. GLOBAL mostra todos os jogadores em todos os servidores, mas sem ping. SERVER mostra só os jogadores do mesmo sub-servidor. **Importante:** Não funciona nas versões 1.8 e anteriores.  
* query_enabled - false ou true. Se true, só permite conexões via UDP query durante o processo DNS. Se false, outras conexões são permitidas via redirecionamento.  
* proxy_protocol - false ou true. Se true, permite o protocolo HAProxy. Se false, nega.  
* forced_hosts - Permite conexões diretas a sub-servidores. Sintaxe: `Seu.Dominio.net: ServerName`  
* ping_passthrough - false ou true. Se true, ao dar ping no sub-servidor via *forced_hosts*, você verá o MOTD real do sub-servidor, não o do BungeeCord. Se false, retorna o MOTD definido em *servers*.  
* priorities - Lista em ordem decrescente para qual servidor os jogadores devem se conectar primeiro. Servidores offline ou indisponíveis são pulados.  
* bind_local_address - false ou true. Se true, o sistema tenta redirecionar o jogador para servidores que escutam no mesmo IP do BungeeCord. Se false, sub-servidores podem ter IPs diferentes. Relevante para redes com servidores em sistemas diferentes.  
* host - Define IP e porta do host. Se for 0.0.0.0, aceita todos os IPs e domínios que redirecionam para o host.  
* max_players - Número máximo de jogadores para esse listener.  
* tab_size - Número máximo de jogadores mostrados na tablist.  
* O valor pode ser false ou true. Se true, o jogador sempre conecta no servidor padrão (primeiro disponível em *priorities*). Se false, o jogador conecta no sub-servidor onde estava da última vez. **Importante:** Se ativar, conexões via *forced_hosts* também vão para o servidor padrão.

### ip_forward

false ou true. Se true, jogadores só podem acessar a rede via o servidor BungeeCord. Se false, podem conectar direto em um sub-servidor se souberem IP e porta.  
**Importante:** Se *online_mode* estiver true, ative essa função para fechar uma brecha de segurança.

### prevent_proxy_connections

false ou true. Se true, os endereços IP dos jogadores conectados são enviados ao servidor Mojang. Se false, o servidor bloqueia o encaminhamento de IP para a Mojang.  
Esse valor não afeta a experiência de jogo.

### groups

Aqui você pode atribuir um ou mais grupos a jogadores específicos. Eles receberão as permissões BungeeCord relacionadas definidas em *permissions*.  
Sintaxe e indentação (2 espaços) são importantes:  
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Define quanto tempo o jogador deve esperar até tentar se conectar novamente. Por padrão é 4000, ou seja, 4 segundos de espera máxima.

### stats

Aqui o BungeeCord insere um código gerado aleatoriamente. Recomendamos não alterar, pois ajuda a otimizar o BungeeCord e corrigir bugs. Os dados são enviados anonimamente e criptografados para os devs.

### connection_throttle_limit

Define quantas tentativas de conexão o jogador pode fazer antes de ter que esperar o tempo definido em *connection_throttle* para tentar de novo.

<InlineVoucher />
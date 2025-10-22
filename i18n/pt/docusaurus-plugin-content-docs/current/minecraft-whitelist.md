---
id: minecraft-whitelist
title: "Minecraft: Ativando e editando uma whitelist no servidor"
description: "Descubra como proteger seu servidor de jogos Minecraft gerenciando o acesso dos jogadores com a whitelist e garanta uma jogabilidade segura → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A **Whitelist do Minecraft** é uma opção para proteger seu servidor de jogos permitindo que apenas jogadores selecionados na lista possam se conectar. Por padrão, o Minecraft não oferece uma opção de senha para servidor como outros jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Como ativar a WHITELIST no seu servidor de jogos Minecraft" description="Prefere entender melhor vendo as coisas em ação? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja na correria ou querendo absorver a informação do jeito mais legal possível!"/>

<InlineVoucher />

## Ativar whitelist



### Ativação (Config)

Para ativar a whitelist, o valor do comando no arquivo **server.properties** deve ser configurado como **true**. É necessário reiniciar o servidor para que a alteração tenha efeito.

```
white-list=true
```



### Ativação (Chat)

Alternativamente, a whitelist também pode ser ativada dentro do jogo ou via console ao vivo:

```
/whitelist on			(Ativa a opção whitelist)
/whitelist off			(Desativa a opção whitelist)
```



Para ativar a whitelist pelo jogo, é preciso ter permissões de operador! Caso contrário, isso também pode ser feito pelo console ao vivo (interface). Lembre-se que os comandos devem ser executados sem o símbolo **/** no console.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Gerenciar Whitelist



### Adicionar / remover jogadores



**Chat**

Você pode adicionar ou remover jogadores da whitelist usando os seguintes comandos:

```
/whitelist add NomeDoJogador
/whitelist remove NomeDoJogador
```



**white-list.json**

Se o UUID do jogador for conhecido, ele também pode ser adicionado manualmente pelo arquivo **white-list.json**. Esse arquivo pode ser acessado e modificado via FTP. Veja as instruções para conectar via FTP aqui: [Acesso via FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jogador1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jogador2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jogador3"
  }
]
```



### Atualizar lista

Se você adicionar jogadores manualmente, será necessário recarregar a whitelist dentro do jogo. Isso também pode ser feito com um comando para evitar reiniciar o servidor:

```
 /whitelist reload
```



### Visualizar a lista

Se não quiser abrir o arquivo da whitelist via FTP toda hora, você pode listar todos os jogadores na whitelist com o comando:

```
/whitelist list
```


<InlineVoucher />
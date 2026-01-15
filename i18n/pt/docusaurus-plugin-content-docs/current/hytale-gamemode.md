---
id: hytale-gamemode
title: "Hytale: Configuração do Modo de Jogo"
description: "Descubra como proteger seu servidor de Hytale gerenciando o acesso dos jogadores com recursos de whitelist e proteja sua jogabilidade → Saiba mais agora"
sidebar_label: Modo de Jogo
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores de Hytale permitem que você configure as opções de jogabilidade, como o modo de jogo que define a experiência do jogador. Mudar o modo de jogo permite que você personalize seu servidor para um estilo de jogo específico ou preferência da comunidade.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Alterar modo de jogo

### Console ao vivo
O modo de jogo pode ser alterado enquanto o servidor está rodando usando o console ao vivo ou comandos dentro do jogo, desde que as permissões necessárias estejam disponíveis. Esse método permite que administradores mudem o modo de jogo sem editar arquivos de configuração.

Usar o comando no console atualiza o modo de jogo ativo imediatamente para a sessão do servidor. Dependendo da configuração do servidor, a mudança pode persistir até o próximo reinício ou voltar ao valor definido no arquivo de configuração.

```
/gamemode <gamemode> <playername>
```

O valor de `GameMode` determina qual modo de jogo será aplicado quando o servidor iniciar. Dependendo da experiência de jogo desejada, esse valor pode ser ajustado conforme necessário.

Valores comuns para o modo de jogo incluem:

- `Creative` para construção e criação de conteúdo sem restrições
- `Adventure` para jogabilidade estruturada com progressão e regras de interação definidas

Após alterar o valor do modo de jogo, o servidor deve ser reiniciado para que a nova configuração entre em vigor.



### Arquivo de configuração

O modo de jogo pode ser definido diretamente no arquivo de configuração do servidor.  
Esse método é recomendado quando você quer que o servidor sempre inicie com um modo de jogo específico ou ao preparar uma configuração nova do servidor.

O arquivo de configuração é acessível pelo seu painel de controle de hospedagem ou gerenciador de arquivos. Dentro desse arquivo, uma configuração controla o modo de jogo ativo usado quando o servidor inicia. Após modificar esse valor, o servidor deve ser reiniciado para que a alteração tenha efeito.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

O valor de `GameMode` determina qual modo de jogo será aplicado quando o servidor iniciar. Dependendo da experiência de jogo desejada, esse valor pode ser ajustado conforme necessário.

Valores comuns para o modo de jogo incluem:

- `Creative` para construção e criação de conteúdo sem restrições
- `Adventure` para jogabilidade estruturada com progressão e regras de interação definidas

Após alterar o valor do modo de jogo, o servidor deve ser reiniciado para que a nova configuração entre em vigor.



## Conclusão

Configurando o modo de jogo, seja pelo arquivo de configuração do servidor ou pelo console ao vivo, você pode controlar com precisão a experiência de jogo no seu servidor de Hytale. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
---
title: "Over the Top WWI: Configure Mensagens do Servidor"
description: "Aprenda como configurar mensagens automáticas no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Mensagens do Servidor
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mensagens automáticas no servidor são uma forma prática de comunicar informações importantes para os jogadores durante o gameplay. Essas mensagens podem ser usadas para compartilhar regras, divulgar seu servidor Discord ou fornecer dicas úteis.

Em um servidor **Over the Top WWI**, as mensagens podem ser exibidas em intervalos regulares, garantindo que todos os jogadores recebam informações importantes sem precisar de interação manual.

<InlineVoucher />

## Configuração

As mensagens do servidor são configuradas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
ShowServerTimedMessages = 1
AddServerMessage = Junte-se ao Discord oficial! discord.gg/example
AddServerMessage = Por favor, reporte bugs no nosso Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` ativa ou desativa as mensagens automáticas. Defina como `1` para ativar ou `0` para desativar.
- `AddServerMessage` define as mensagens que serão exibidas. Você pode adicionar várias linhas para rotacionar diferentes mensagens durante o jogo.
- `ServerMessagesTimer` define o intervalo entre as mensagens em segundos. Por exemplo, `120` exibirá uma mensagem a cada 2 minutos.

Você pode personalizar e ampliar suas mensagens adicionando linhas extras:

```
AddServerMessage = Bem-vindo ao servidor!
AddServerMessage = Siga as regras e respeite os outros jogadores.
AddServerMessage = Entre no nosso Discord para novidades.
```

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As mensagens aparecerão automaticamente no jogo no intervalo configurado.

## Conclusão

Parabéns! Você configurou com sucesso mensagens automáticas no seu **servidor Over the Top WWI**. Isso ajuda a manter os jogadores informados e melhora a comunicação geral no seu servidor.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Configurar as Configurações de Chat"
description: "Aprenda como configurar as opções de chat e comunicação no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Configurações de Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de chat no **Over the Top WWI** controlam como os jogadores se comunicam via texto durante o jogo. Ajustar essas configurações permite que você habilite a comunicação global, restrinja o uso do chat ou silencie completamente os jogadores, se necessário.

Uma configuração adequada do chat ajuda a manter a ordem no servidor e melhora a experiência geral dos jogadores.

<InlineVoucher />

## Configuração

As configurações de chat são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` ativa ou desativa a comunicação global no chat

- `0` → Desativado
- `1` → Ativado

- `ServerMuteAll` desativa o chat de todos os jogadores quando ativado

- `0` → Desativado
- `1` → Ativado

- `BannedWordsPathString` define o arquivo usado para filtrar palavras restritas. O arquivo contém uma lista de termos bloqueados que não serão permitidos no chat

Ajuste essas configurações para controlar como os jogadores se comunicam e para aplicar regras de moderação no chat do seu servidor.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações de chat atualizadas serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as opções de chat no seu **servidor Over the Top WWI**. Isso permite que você gerencie a comunicação dos jogadores e mantenha um ambiente controlado e divertido.

Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Configurar Banimentos e Moderação"
description: "Aprenda como configurar listas de banimento e as configurações de moderação no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Banimentos & Moderação
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As ferramentas de moderação no **Over the Top WWI** permitem que você controle o comportamento dos jogadores e mantenha um ambiente justo e divertido no seu servidor. Configurando listas de banimento e as opções de moderação, você pode restringir acessos, gerenciar penalidades e fornecer instruções claras para os jogadores.

Essas configurações são especialmente úteis para servidores comunitários que precisam de moderação ativa.

<InlineVoucher />

## Configuração

As configurações de banimento e moderação são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` define o arquivo que contém os jogadores banidos permanentemente  
- `TempBanPathstring` define o arquivo que contém os jogadores banidos temporariamente  

- `CustomUnBanString` permite definir uma mensagem personalizada que informa aos jogadores como solicitar o desbanimento. Exemplo: link do Discord ou site

### Uso do arquivo de banimento

Os arquivos de banimento ficam localizados no diretório do seu servidor e contêm os identificadores dos jogadores.

Cada jogador banido deve estar listado em uma nova linha dentro do arquivo:

```
SteamID1
SteamID2
SteamID3
```

Esses arquivos são lidos automaticamente pelo servidor para bloquear o acesso dos jogadores listados. Ajustar essas configurações permite definir como os banimentos são aplicados e como os jogadores podem recorrer deles.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As configurações de moderação atualizadas serão aplicadas automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso as opções de banimento e moderação no seu **servidor Over the Top WWI**. Isso permite que você gerencie o comportamento dos jogadores de forma eficaz e mantenha um ambiente controlado no servidor.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
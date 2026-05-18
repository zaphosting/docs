---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Configurar Whitelist"
description: "Aprenda como ativar e gerenciar uma whitelist no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A whitelist permite que você restrinja o acesso ao seu **servidor de jogos Over the Top WWI**, permitindo que apenas jogadores aprovados entrem. Isso é especialmente útil para servidores privados, comunidades ou ambientes de teste onde o acesso deve ser controlado.

Ao ativar a whitelist, somente os jogadores listados no arquivo de whitelist poderão se conectar ao servidor.

<InlineVoucher />

## Configuração

A whitelist é configurada dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos**, na seção **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre o seguinte parâmetro:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` ativa ou desativa o sistema de whitelist

- `False` → Desativado  
- `True` → Ativado

- `WhiteListPathString` define o arquivo usado para armazenar os IDs dos jogadores permitidos

Quando a whitelist está ativada, somente os jogadores listados no arquivo especificado poderão entrar no servidor.

## Gerenciando a whitelist

O arquivo da whitelist geralmente fica no diretório do seu servidor e contém uma lista dos IDs dos jogadores permitidos.

Cada jogador deve ser adicionado em uma nova linha dentro do arquivo:

```
SteamID1
SteamID2
SteamID3
```

Certifique-se de usar os identificadores corretos dos jogadores, caso contrário o acesso será negado. Após atualizar o arquivo da whitelist ou modificar o `ServerConfiguration.ini`, salve suas alterações e reinicie o servidor. A whitelist será aplicada.

## Conclusão

Parabéns! Você configurou com sucesso a whitelist no seu **servidor de jogos Over the Top WWI**. Isso permite que você controle quem pode acessar seu servidor e mantenha um ambiente privado ou moderado.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
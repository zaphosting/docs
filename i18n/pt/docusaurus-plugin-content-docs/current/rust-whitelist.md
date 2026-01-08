---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Informações sobre como colocar seu servidor Rust na whitelist com a ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Whitelist é um mecanismo de controle de acesso que limita quem pode entrar no seu servidor. Servidores dedicados de Rust não possuem uma função de whitelist nativa, então a abordagem comum usada pelos provedores de aluguel de servidores é instalar o uMod Oxide junto com um plugin de whitelist que bloqueia conexões a menos que o jogador esteja explicitamente autorizado.

<InlineVoucher />


## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e instale o uMod Oxide caso ele ainda não esteja presente. Depois que o uMod estiver instalado, envie o arquivo do plugin de whitelist `Whitelist.cs` para a pasta de plugins, geralmente `oxide/plugins/Whitelist.cs`.

Com o plugin no lugar, reinicie o servidor ou recarregue os plugins para que ele seja carregado. O plugin de whitelist normalmente funciona exigindo uma permissão específica antes que um jogador possa se conectar.

## Gerenciando Jogadores na Whitelist

Abra o Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting e conceda a permissão de whitelist para um jogador usando o SteamID64 dele.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Para revogar o acesso, remova a permissão.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Para verificar quais permissões um usuário possui, consulte as permissões dele.

```text
oxide.show user 76561198000000000
```

## Verificando o Funcionamento da Whitelist

Tente conectar com uma conta que não tenha a permissão de whitelist. O plugin deve negar a conexão. Depois, conecte com uma conta que você tenha concedido `whitelist.allow` para confirmar o acesso.

Se todo mundo ainda conseguir entrar, confirme se o plugin está carregado e se o uMod está rodando. Reiniciar o servidor após enviar o plugin é a forma mais confiável de garantir que ele esteja ativo.

## Conclusão

Se todos os passos acima foram seguidos corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor uma vez e verifique novamente os arquivos ou a saída dos comandos para confirmar que a alteração foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
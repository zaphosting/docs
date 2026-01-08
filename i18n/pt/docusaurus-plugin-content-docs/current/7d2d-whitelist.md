---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: Informações sobre como colocar seu servidor 7 Days To Die na whitelist da ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Whitelist é uma lista de acesso que limita quem pode entrar no seu servidor. No 7 Days To Die isso é geralmente gerenciado no arquivo serveradmin.xml, que armazena as contas Steam autorizadas. Uma vez ativada, só os jogadores listados ali podem se conectar.

<InlineVoucher />


## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e localize o arquivo `serveradmin.xml`. Na maioria das instalações hospedadas ele fica no diretório de save, geralmente em um caminho parecido com `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` ou diretamente em `7-days-to-die/Saves/serveradmin.xml`, dependendo da estrutura do provedor. Abra o arquivo e procure a seção `<whitelist>` dentro de `<adminTools>`.

Adicione pelo menos um SteamID64 na whitelist. O formato abaixo segue a estrutura padrão usada pelo jogo.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Salve o arquivo e reinicie o servidor para que a nova whitelist seja carregada. Se seu arquivo contém apenas exemplos comentados, certifique-se que sua linha `<user ... />` não está dentro de um comentário XML.

## Gerenciando Jogadores na Whitelist

Para adicionar outro jogador, repita a mesma alteração no `serveradmin.xml` adicionando outra entrada `<user ... />` dentro de `<whitelist>`. Use o SteamID64 do jogador para o atributo `steamID`.

Para remover um jogador, delete a linha `<user ... />` correspondente da seção `<whitelist>`, salve e reinicie o servidor.

Se preferir usar comandos, abra o Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting e use os comandos de whitelist integrados para adicionar ou remover jogadores. As mudanças feitas via comandos também serão refletidas nos dados da whitelist usados pelo servidor após o restart.

## Verificando o Funcionamento da Whitelist

Após o restart, tente conectar com uma conta que não esteja na whitelist. A tentativa de entrada deve ser rejeitada. Depois tente com uma conta autorizada para confirmar que o acesso funciona.

Se o servidor ainda permitir jogadores não autorizados, verifique novamente se suas entradas na whitelist não estão comentadas e se você editou o `serveradmin.xml` correto para o save ativo.

## Conclusão

Se todos os passos acima foram seguidos corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e confira o arquivo ou a saída dos comandos para confirmar que a alteração foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
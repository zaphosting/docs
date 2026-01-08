---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Informações sobre como colocar seu servidor de jogos Factorio na whitelist na ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que restringe o acesso ao servidor apenas para contas aprovadas do Factorio. Na maioria dos servidores hospedados, a whitelist é ativada assim que pelo menos um jogador é adicionado, e ela fica armazenada em um arquivo `server-whitelist.json`.

<InlineVoucher />

## Ativando a Whitelist

Abra o Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting e adicione o primeiro jogador na whitelist. Adicionar o primeiro nome geralmente ativa a whitelist imediatamente.

```text
/whitelist add PlayerName
```

Se o seu host disponibilizar um comando explícito para ativar, você também pode rodá-lo antes de adicionar os usuários.

```text
/whitelist enable
```

Normalmente não é necessário reiniciar para que a mudança tenha efeito, mas reiniciar uma vez após a configuração inicial garante que o arquivo da whitelist seja gravado e carregado na inicialização.

## Gerenciando Jogadores na Whitelist

Para adicionar mais jogadores, rode o comando add novamente com o nome de usuário do Factorio deles.

```text
/whitelist add AnotherPlayer
```

Para remover um jogador, use o comando remove.

```text
/whitelist remove PlayerName
```

Para mostrar a whitelist atual, use o comando get.

```text
/whitelist get
```

## Verificando o Funcionamento da Whitelist

Depois de adicionar pelo menos um jogador, tente entrar com uma conta que não esteja listada. A conexão deve ser rejeitada. Depois, entre com uma conta que esteja na whitelist para confirmar que funciona.

Se o servidor ainda permitir que todos entrem, verifique se os comandos foram executados no servidor correto e reinicie uma vez para garantir que o arquivo da whitelist seja carregado na inicialização.

## Conclusão

Se todas as etapas acima foram seguidas corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor uma vez e verifique novamente o arquivo ou a saída dos comandos para confirmar que a mudança foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
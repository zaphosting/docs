---
id: pathoftitans-becomeadmin
title: Tornar-se admin
description: "Descubra como atribuir e gerenciar permissões de administrador para controle total do seu servidor de jogos → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Preparação

A configuração das permissões de admin é feita através dos arquivos de configuração do seu servidor. Para isso, navegue no dashboard do seu servidor de jogos até **Configs** e abra o arquivo de configuração Game.ini.



## Configuração

Na seção [/Script/PathOfTitans.IGameSession], deve ser inserido o Alderon Games ID (AGID) do admin. A entrada para isso é `Server-Admins=` seguida do AGID. Se quiser adicionar vários admins, deve criar uma linha para cada um. Supondo que você queira atribuir permissões de admin para um total de três jogadores, a configuração ficaria assim:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Registro do Admin
ServerAdmins=XXX-XXX-XXX # 2. Registro do Admin
ServerAdmins=XXX-XXX-XXX # 3. Registro do Admin
```

Clique em Salvar e depois reinicie o servidor. As permissões de admin agora estão configuradas com sucesso. Uma vez que você tenha direitos de admin, pode nomear outros jogadores como admins via comandos de chat ou revogar o status de admin deles. Essas funções ficam disponíveis enquanto seu servidor estiver ativo. Você pode encontrar mais informações sobre os comandos na [Wiki oficial do GitHub](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusão

Parabéns, você configurou as permissões de administrador com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
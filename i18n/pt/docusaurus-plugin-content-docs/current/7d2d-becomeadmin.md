---
id: 7d2d-becomeadmin
title: "7 Days to Die: Como se tornar admin no 7 Days to Die"
description: "Descubra como atribuir e gerenciar permissões de administrador para controle total do servidor e funções personalizadas → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente nele. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração
Adicionar um admin é feito via o arquivo de configuração **serveradmin.xml**, que você encontra na interface web em Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Você pode encontrar seu SteamID64 acessando seu perfil Steam e clicando com o botão direito em qualquer lugar do perfil. Depois, clique em **Copiar URL do Steam**.

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Depois, abra uma das seguintes páginas e cole a URL do seu perfil lá:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Isso vai te mostrar informações gerais e o Steam ID da sua conta. Aqui, só precisamos do SteamID64. O SteamID64 deve ser inserido dentro de ``<admins>...</admins>``. Vai ficar assim:

```
 <users>
    <user steamID="76561198021925107" name="Dica de quem é esse usuário" permission_level="0" />
  </users>
```

:::danger  Registro de admin não está sendo reconhecido? 
Certifique-se de remover os caracteres de comentário `<!--` e `-->` para que a linha seja válida. Caso contrário, a linha continuará sendo apenas um comentário e não será aplicada. Basta remover esses caracteres no início e no fim da linha para ativá-la.
:::

O jogo permite definir diferentes níveis de permissão para as permissões de administrador. Isso significa que é possível criar grupos de administradores com permissões diferentes. O nível é definido pela opção ``permission_level``, que pode ser configurada de 0 a 1000. Dependendo dessa configuração, os administradores terão acesso às permissões atribuídas. Depois disso, as permissões de administrador estarão configuradas com sucesso.

## Permissões

As permissões para todos os comandos de administrador podem ser definidas em ``permissions``. Para isso, o ``permission_level`` deve ser ajustado, assim como ao adicionar administradores. Vai ficar assim:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

O nível de permissão é um valor entre 0 e 1000 que determina quais permissões um jogador tem. 1000 é o mais baixo (sem permissões) e 0 é o mais alto (permissões totais de administrador). Dependendo de como as permissões devem ser configuradas, ajuste esse valor conforme necessário.

## Conclusão

Parabéns, você configurou as permissões de administrador com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />
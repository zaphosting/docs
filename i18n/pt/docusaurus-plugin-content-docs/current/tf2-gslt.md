---
id: tf2-gslt
title: "Team Fortress 2: Crie um GSLT (Steam Game Server Login Token)"
description: "Descubra como autenticar seu servidor dedicado de jogos com um Steam Game Server Login Token válido para listagem correta e proteção VAC → Saiba mais agora"
sidebar_label: Criar GSLT
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

O **GSLT (Game Server Login Token)** é um token de login exigido pela Steam/Valve para rodar servidores dedicados de certos jogos. Ele está vinculado a uma conta Steam e garante que o servidor esteja devidamente autenticado.

Sem um GSLT válido, servidores afetados podem não aparecer na lista pública de servidores ou podem não conseguir usar a proteção VAC.

<InlineVoucher />



## Requisitos

Para usar um Game Server Login Token (GSLT), sua conta Steam não pode estar limitada, banida ou excluída da comunidade. Ela deve estar vinculada a um smartphone verificado, e você precisa possuir o jogo que deseja hospedar. Você pode criar até 1000 tokens por conta.

Lembre-se que você é totalmente responsável pelos seus tokens. Se um token for usado indevidamente ou banido, você pode perder o acesso ao jogo vinculado permanentemente. Nunca compartilhe seus tokens; se já compartilhou, delete-os imediatamente. Quando sua senha Steam for redefinida, todos os tokens são automaticamente regenerados. Tokens que ficarem muito tempo sem uso expiram, mas podem ser recriados a qualquer momento.



## Criar GSLT
Para criar um Game Server Login Token, faça login com sua conta Steam e acesse o [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Após o login, você pode criar um novo token usando o formulário exibido na página. No campo **App ID**, insira o App ID `440`, que pertence ao **Team Fortress 2**. Certifique-se de inserir o ID correto, pois o token não funcionará com um valor incorreto.

No campo **Memo**, você pode adicionar uma descrição à sua escolha. Isso ajuda a identificar o propósito do token depois, como o nome ou função do servidor. Depois de preencher ambos os campos, clique em **Create** para gerar o token. O token será exibido e pode ser usado na configuração de inicialização do seu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/z7DQwCJENepeHdC/download)

## Configuração do servidor

Agora o token de login precisa ser adicionado à configuração do seu servidor. Para isso, abra a interface de gerenciamento do seu servidor de jogos e vá até a seção **Configurações**. Insira o token no campo chamado **GSL Token** e salve.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Operando múltiplos servidores Team Fortress 2
Ao operar múltiplos servidores **Team Fortress 2**, você precisará de um GSLT para cada servidor. <u>**Não**</u> é possível operar vários servidores de jogos com um único GSLT.
:::



## Conclusão

O GSLT foi criado e aplicado na configuração do seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
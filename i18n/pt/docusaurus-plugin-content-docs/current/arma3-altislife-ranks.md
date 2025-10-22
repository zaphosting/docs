---
id: arma3-altislife-ranks
title: "Arma 3: Adicionando ranks em um servidor Altis Life"
description: "Aprenda como atribuir e gerenciar ranks de jogador como Policial, Médico e Admin no Arma 3 para melhorar a jogabilidade e os papéis no servidor → Saiba mais agora"
sidebar_label: Ranks Altis Life
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No Arma 3 existem diferentes ranks que podem ser atribuídos a um jogador. Isso inclui Policial, Médico e os diferentes ranks de Admin.  
Dependendo do servidor, podem existir outros ranks caso, por exemplo, uma nova facção ou profissão seja adicionada.  
A seguir, você vai aprender como atribuir os ranks para Policiais, Médicos e Administradores no jogo, sempre usando o banco de dados dentro da tabela **players**.

:::info
IMPORTANTE: Para encontrar o nome do jogador no banco de dados, você precisa se conectar ao servidor pelo menos uma vez!
:::

<InlineVoucher />

## Abrindo o banco de dados

Primeiro você precisa navegar até o seu banco de dados, que pode ser acessado pelo menu à esquerda em **Ferramentas** > **Bancos de dados**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

O login para o banco de dados pode ser acessado através deste ícone azul, no lado esquerdo você também encontra os dados de login (usuário e senha) para o seu banco de dados:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Após clicar nesse botão, você estará no phpMyAdmin, a interface de administração do seu banco de dados.  
Lá você escolhe o nome do seu banco de dados no lado esquerdo:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Depois, selecione a tabela **players** com um clique esquerdo, onde você poderá atribuir os ranks:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Procure pelo nome do jogador que você quer atribuir um rank e clique em **Editar**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Atribuindo ranks para Policiais e Médicos

Os campos para o nível de Policial e Médico ficam logo no topo da lista:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Lá você pode selecionar facilmente o nível do rank pelo menu dropdown, disponível do nível 1 ao 7 para policiais e do nível 1 ao 5 para médicos.  
Quanto maior o nível, mais permissões o Policial ou Médico tem no jogo, isso influencia, entre outras coisas, nas armas e veículos disponíveis.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Atribuindo ranks para administradores (nível admin)

Você define o nível de admin da mesma forma descrita acima, só que o campo fica mais abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Também é possível escolher entre 5 níveis diferentes pelo dropdown. Quanto maior o nível, mais direitos o administrador tem no jogo.

Para salvar as alterações, basta clicar no botão **GO** no canto inferior direito:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Os ranks agora foram salvos e vão entrar em vigor para o jogador, que precisa apenas reconectar ao servidor uma vez, não é necessário reiniciar o servidor.

<InlineVoucher />
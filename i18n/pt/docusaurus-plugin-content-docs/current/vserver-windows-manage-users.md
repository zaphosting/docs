---
id: vserver-windows-manage-users
title: "VPS: Gerencie Usuários no Windows Server"
description: "Descubra como gerenciar múltiplas contas de usuário no Windows Server para acesso remoto seguro e simultâneo com desktops personalizados → Saiba mais agora"
sidebar_label: Adicionar & Gerenciar Usuários
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Windows OS oferece um gerenciamento de usuários integrado que permite gerenciar facilmente usuários adicionais. Alguns dos benefícios de usar usuários individuais incluem acesso simultâneo (até 2) via área de trabalho remota com credenciais próprias, desktop e arquivos individuais, além de um sistema de permissões simples. Neste guia, vamos cobrir o processo de gerenciamento de usuários no seu servidor Windows.

<InlineVoucher />

## Preparação

Comece conectando ao seu servidor Windows via RDP. Se precisar de ajuda para isso, consulte nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md).

:::important Privilégios Administrativos
Garanta que você use o usuário **Administrador** ou qualquer usuário com privilégios administrativos para fazer login no seu servidor Windows, caso contrário, não será possível gerenciar usuários.
:::

Cada usuário que você criar no seu servidor Windows poderá usar suas próprias credenciais para se conectar ao servidor via Área de Trabalho Remota. Da mesma forma, cada usuário terá seu próprio desktop, arquivos e programas independentes dos demais, que só podem ser visualizados por usuários com privilégios administrativos. Programas instalados para todos os usuários estarão acessíveis globalmente.

Com a licença padrão do Windows Server, **2** contas podem fazer login e usar o servidor simultaneamente. Se esse limite for ultrapassado e outro usuário se conectar, o usuário que entrou primeiro será desconectado em favor do novo usuário. Fora isso, não há limite para a quantidade de contas de usuário que podem ser criadas.

## Acessando o Gerenciamento de Usuários

O gerenciamento de contas de usuário é feito pelas configurações no Painel de Controle. Comece abrindo o menu iniciar do Windows no seu servidor e selecione **Painel de Controle**. Escolha a opção **Contas de Usuário**, que deve levar você a um submenu.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Novamente, selecione a opção **Contas de Usuário** no menu, que levará você para uma área de visão geral.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Na página de visão geral, selecione a opção **Gerenciar outra conta** para acessar a seção **Gerenciar Contas**, usada principalmente para gerenciar usuários.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Agora você está pronto para gerenciar os usuários no seu servidor Windows. Continue com uma das seções abaixo, dependendo da ação que deseja realizar.

## Criando Novo Usuário

Para iniciar o processo de criação de usuário, selecione a opção **Adicionar uma conta de usuário** encontrada na seção **Gerenciar Contas**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Isso abrirá um prompt na sua tela, onde você deverá preencher alguns detalhes da conta, incluindo nome de usuário, senha e uma dica de senha. Certifique-se de que sua senha seja forte, caso contrário poderá receber um erro de validação.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Quando estiver pronto, basta clicar no botão próximo e seu novo usuário será criado.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Por fim, você precisará adicionar o novo usuário à lista de conexões de área de trabalho remota para garantir que o servidor aceite conexões RDP dele. Vá para o **Painel de Controle** e acesse **Sistema e Segurança**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Aqui, localize **Permitir acesso remoto** e selecione essa opção, que abrirá um novo menu.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

No menu, clique em **Selecionar Usuários...** na parte inferior, que exibirá um novo menu mostrando os usuários atuais com acesso à área de trabalho remota.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

No menu exibido, selecione **Adicionar...** para abrir um prompt de seleção de usuário e clique em **Avançado...** nele.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Isso expandirá a janela para facilitar a busca do seu usuário. Use o botão **Localizar Agora** para retornar uma lista de usuários e encontre seu novo usuário, neste exemplo, `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Selecione o usuário e use os botões **OK** para fechar todos os menus e confirmar as alterações.

Você criou com sucesso um novo usuário no seu servidor Windows com acesso à área de trabalho remota. Teste o acesso ao servidor via RDP usando as credenciais do novo usuário para garantir que tudo está funcionando.

## Gerenciando Usuários

Você pode gerenciar facilmente todos os usuários pela seção **Gerenciar Contas**. Basta selecionar o usuário que deseja gerenciar.

:::important Privilégios Administrativos
Para gerenciar usuários, você deve estar usando a conta principal **Administrador** ou um usuário com tipo de conta administrador, que possui todos os privilégios necessários para isso.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Agora na página, você poderá usar várias funções para gerenciar o usuário, incluindo alterar nome de usuário, senha, tipo de conta, além de excluir o usuário.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />
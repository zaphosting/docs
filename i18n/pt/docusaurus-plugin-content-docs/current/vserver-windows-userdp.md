---
id: vserver-windows-userdp
title: "VPS: Acessando Windows Server via Área de Trabalho Remota (RDP)"
description: "Descubra como se conectar com segurança ao seu servidor Windows remotamente usando RDP e gerenciar o acesso com facilidade → Saiba mais agora"
sidebar_label: Acesso Inicial (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema Windows usa o protocolo Área de Trabalho Remota (RDP) para facilitar a conexão remota a outros sistemas Windows. Neste guia, vamos mostrar o processo simples de conexão via RDP ao seu servidor Windows.

<InlineVoucher />

## Preparando os Detalhes de Conexão

Independente do aplicativo usado para acessar o servidor Windows, você sempre precisará inserir as credenciais para se conectar ao servidor.

Comece acessando o painel web do seu servidor e vá até a seção **Acesso & Segurança**. Nessa página, você poderá ver todas as informações necessárias, principalmente o **Endereço IP** do seu servidor e as credenciais de usuário para conexão. Suas credenciais são compostas pelo campo **Nome de Usuário**, que deve ser `Administrator`, e o campo **Senha**.

Se seu servidor for novo, você poderá acessar sua senha inicial gerada aleatoriamente nessa página via um prompt. Caso contrário, a senha estará oculta por motivos de segurança, mas se você esquecer a senha em algum momento, basta gerar ou definir uma nova na mesma página.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Agora que você tem as informações de conexão prontas, vá para a próxima seção para escolher um aplicativo adequado para se conectar.

## Conectando via Windows

Desde o lançamento do RDP, o Windows já vem com o aplicativo **Conexão de Área de Trabalho Remota** instalado como um app nativo do sistema. Você pode acessá-lo facilmente buscando por ele na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a busca do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Na nova janela, preencha o campo **Computador** com o Endereço IP do seu servidor e clique em **Conectar**. Agora você verá um prompt nativo do Windows para inserir as credenciais, onde deve colocar o **Nome de Usuário** como `Administrator` e a **Senha**, que é a senha do seu servidor Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Agora clique em **OK** e você deverá conseguir se conectar remotamente ao seu servidor Windows. Se estiver enfrentando problemas, confira se as credenciais que você digitou estão corretas.

:::info
Pode aparecer um erro de certificado na primeira conexão. Isso é normal e pode ser ignorado com segurança.
:::

Você conectou com sucesso ao seu Windows Server.

## Outros Apps de Conexão Remota (RDP)

### Apps para Desktop

Os programas a seguir são ótimas alternativas para se conectar ao seu servidor Windows via protocolo Área de Trabalho Remota (RDP). Recomendamos fortemente usar o aplicativo nativo se você estiver acessando o servidor pelo Windows (como mostrado no passo anterior), pois ele facilita tudo e funciona muito bem.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Apps para Dispositivos Móveis

Hoje em dia, a Microsoft oferece um app oficial de Área de Trabalho Remota (RDP) para os principais sistemas operacionais móveis. Recomendamos usar esses apps no celular, pois eles têm várias funcionalidades úteis.

O app pode ser encontrado aqui, conforme a plataforma: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) e [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />
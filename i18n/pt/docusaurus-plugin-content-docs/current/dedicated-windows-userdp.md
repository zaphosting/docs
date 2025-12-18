---
id: dedicated-windows-userdp
title: "Servidor Dedicado: Acessando o Windows Server via Remote Desktop (RDP)"
description: "Descubra como conectar facilmente ao seu servidor Windows remotamente usando RDP e acessá-lo com segurança de vários dispositivos → Saiba mais agora"
sidebar_label: Acesso Inicial (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema Windows usa o protocolo Remote Desktop (RDP) para facilitar a conexão remota a outros sistemas Windows. Neste guia, vamos mostrar o processo simples de conexão via RDP ao seu servidor Windows.





## Conectando via Windows

Desde o lançamento do RDP, o Windows já vem com o aplicativo **Conexão de Área de Trabalho Remota** instalado como um app nativo do sistema. Você pode acessá-lo facilmente buscando por ele na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a barra de busca do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Na nova janela, preencha o campo **Computador** com o endereço IP do seu servidor e clique em **Conectar**. Agora você verá a tela nativa de credenciais do Windows, onde deve inserir o **Nome de usuário** como `Administrator` e a **Senha**, que é a senha do seu servidor Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Agora clique em **OK** e você deverá conseguir se conectar remotamente ao seu servidor Windows. Se estiver enfrentando problemas, confira se as credenciais que você digitou estão corretas.

:::info
Pode aparecer um erro de certificado na primeira conexão. Isso é normal e pode ser ignorado com segurança.
:::

Você se conectou com sucesso ao seu Windows Server.

## Outros Apps de Conexão Remota (RDP)

### Apps para Desktop

Os programas abaixo são ótimas alternativas para conectar ao seu servidor Windows via protocolo Remote Desktop (RDP). Recomendamos fortemente usar o app nativo se você estiver acessando o servidor pelo Windows (como mostrado no passo anterior), pois ele é mais prático e funciona muito bem.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Apps para Dispositivos Móveis

Hoje em dia, a Microsoft oferece um app oficial de Remote Desktop (RDP) para os principais sistemas operacionais móveis. Recomendamos usar esses apps no celular, pois eles têm várias funcionalidades úteis.

O app pode ser encontrado aqui, conforme a plataforma: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) e [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)
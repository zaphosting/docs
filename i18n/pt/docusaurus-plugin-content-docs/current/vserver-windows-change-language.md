---
id: vserver-windows-change-language
title: "VPS: Gerencie Idiomas no Windows Server"
description: "Descubra como personalizar as configurações de idioma do seu servidor Windows para uma experiência local e melhorar a usabilidade → Saiba mais agora"
sidebar_label: Adicionar & Gerenciar Idiomas
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema Windows é localizado em uma grande variedade de idiomas, permitindo que você use facilmente seu idioma nativo. Neste guia, vamos mostrar os métodos disponíveis para alterar o idioma do seu servidor Windows.

:::info
Durante a configuração inicial do servidor, você pode escolher entre versões do servidor em inglês ou alemão, que são destacadas pelas tags **(EN)** e **(DE)** durante a seleção da versão do sistema operacional.
:::

<InlineVoucher />

## Adicionando Pacotes de Idioma

Pacotes de idioma são um recurso útil embutido no Windows que permite gerenciar facilmente pacotes de idioma localizados no seu servidor.

Comece conectando-se ao seu servidor Windows via RDP. Se precisar de ajuda para isso, consulte nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md).

Uma vez conectado, pesquise por **Idioma** na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a barra de pesquisa do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Nesta página, encontre a seção de idiomas e clique no botão **Adicionar um idioma**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

No menu, pesquise o idioma que deseja instalar e selecione-o clicando em **Avançar**. Na página seguinte, certifique-se de que todas as opções estejam marcadas, incluindo a opção **Definir como idioma de exibição do Windows** se quiser ativá-la imediatamente.

:::important
Para alterar o idioma em todo o sistema Windows, certifique-se de que o idioma selecionado suporte a funcionalidade **Idioma de Exibição**.
:::

:::tip
Se você não encontrar nenhum idioma com o campo **Idioma de Exibição**, instale as atualizações pendentes do Windows via **Atualização e Segurança** nas Configurações, o que resolve esse [bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

O Windows começará a baixar o pacote de idioma selecionado. Tenha paciência, pois isso pode levar algum tempo.

Após o download ser concluído, se você não selecionou a opção **Definir como idioma de exibição do Windows** durante o passo do download, volte para a página de idiomas e selecione essa opção no menu suspenso.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Por fim, reinicie seu servidor e o novo idioma será aplicado. Você gerenciou com sucesso os pacotes de idioma no seu servidor Windows.

## Reinstalando o Sistema Operacional do Servidor

Se estiver tendo problemas para alterar os pacotes de idioma ou seu servidor ainda for novinho, você pode optar por reinstalar seu servidor Windows em inglês ou alemão via as versões de SO disponíveis.

:::warning
Reinstalar o sistema operacional é um processo destrutivo e **irá** apagar todos os dados do servidor. Garanta que você faça backup de qualquer dado importante antes de prosseguir com esta etapa.
:::

Isso pode ser feito acessando o painel web do seu servidor e indo para a seção **Configurações**.

Nessa página, você poderá escolher entre **Windows (EN)** e **Windows (DE)** para o idioma respectivo e optar por reinstalar o servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Depois de iniciar a reinstalação, tenha paciência, pois pode levar um tempo (até 30 minutos) para o servidor completar todo o processo.

<InlineVoucher />
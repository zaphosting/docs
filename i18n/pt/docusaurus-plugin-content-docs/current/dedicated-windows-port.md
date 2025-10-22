---
id: dedicated-windows-port
title: "Servidor Dedicado: Gerenciando Regras do Firewall do Windows Defender"
description: "Descubra como gerenciar efetivamente as regras do Firewall do Windows Defender e otimizar o encaminhamento de portas para uma comunicação segura do servidor → Saiba mais agora"
sidebar_label: Encaminhamento de Portas (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O sistema Windows possui seu próprio Windows Defender Firewall, que gerencia o tráfego de entrada e saída entre o servidor e a internet. Neste guia, vamos passar pelo processo de gerenciamento das regras do firewall e dar dicas gerais para o encaminhamento de portas.

<InlineVoucher />

## Acessando o Windows Defender Firewall

O Windows inclui o aplicativo **Windows Defender Firewall com Segurança Avançada** como um app nativo do sistema, que permite gerenciar facilmente as regras do firewall em um único lugar.

Você pode acessá-lo simplesmente buscando por ele na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a barra de pesquisa do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gerenciando Regras

A maioria dos aplicativos e processos, especialmente aqueles que precisam ser acessíveis pela internet, como servidores de jogos ou servidores web, vão precisar de encaminhamento de portas para garantir que os clientes consigam se comunicar com seu servidor (host).

:::info
Por padrão, o Windows só abre o firewall para aplicativos que precisam, mantendo todas as outras portas fechadas. Isso é feito para evitar expor portas desnecessariamente, reduzindo riscos. Por isso, você pode ver prompts do UAC aparecerem ao abrir jogos pela primeira vez, por exemplo, para confirmar uma nova regra de firewall.
:::

No Windows, o gerenciamento das regras é simples e pode ser feito de duas formas: criando regras para programas ou criando regras que abrangem portas inteiras (e assim qualquer programa ou processo que use aquela porta).

Existem dois tipos de regras:
- Regra de Entrada (Inbound Rule): controla a comunicação de entrada (da internet para seu servidor).
- Regra de Saída (Outbound Rule): controla a comunicação de saída (do seu servidor para a internet).

Normalmente, para encaminhamento de portas, você precisará criar ambos os tipos de regras para permitir a comunicação com os clientes. Mas isso depende do seu caso e configuração específicos.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Regras por Programa

Criar uma regra por Programa é geralmente a melhor escolha porque restringe a comunicação a um programa ou processo específico, em vez de liberar uma porta inteira, o que permitiria que qualquer programa/serviço se comunicasse por ela.

Agora você vai criar duas Regras por Programa, uma de Entrada e outra de Saída, ambas permitindo conexão.

No exemplo abaixo, vamos configurar apenas a regra de **Entrada**. Os passos são exatamente os mesmos, então você deve repetir para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira etapa, selecione a opção **Program** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Agora você deve selecionar o programa para o qual deseja criar a regra de encaminhamento, usando o botão de navegação. No exemplo, o navegador Mozilla Firefox foi escolhido como app de exemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e continue para a etapa final. Aqui você deve dar um nome útil para lembrar da regra e pode adicionar uma descrição opcional, se quiser.

Quando estiver pronto, clique em **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Você criou com sucesso sua própria Regra por Programa para seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando-a na seção Outbound Rules.

### Regras por Porta

Criar uma Regra por Porta também pode ser útil para vários casos e segue passos similares aos anteriores.

Agora você vai criar duas Regras por Porta, uma de Entrada e outra de Saída, ambas permitindo conexão.

No exemplo abaixo, vamos configurar apenas a regra de **Entrada**. Os passos são os mesmos, então repita para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira etapa, selecione a opção **Port** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Agora você deve definir o tipo da porta (TCP ou UDP) e a(s) porta(s) que deseja encaminhar. Se precisar encaminhar tanto TCP quanto UDP, terá que criar duas regras separadas, uma para cada tipo.

No exemplo, a porta 25565 (TCP) foi usada como exemplo, que é a porta padrão do Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e continue para a etapa final. Dê um nome útil para a regra e adicione uma descrição opcional, se quiser.

Quando estiver pronto, clique em **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Você criou com sucesso sua própria Regra por Porta para seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando-a na seção Outbound Rules.

<InlineVoucher />
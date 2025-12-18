---
id: vserver-windows-port
title: "VPS: Gerenciando Regras do Firewall do Windows Defender"
description: "Descubra como gerenciar as regras do Firewall do Windows Defender e otimizar o redirecionamento de portas para uma comunicação segura do servidor → Saiba mais agora"
sidebar_label: Redirecionamento de Portas (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Windows OS vem com o próprio Windows Defender Firewall, que gerencia o tráfego de entrada e saída entre o servidor e a internet. Neste guia, vamos passar pelo processo de gerenciar as regras do firewall e dar dicas gerais para o redirecionamento de portas.

<InlineVoucher />

## Acessando o Windows Defender Firewall

O Windows OS inclui o aplicativo **Windows Defender Firewall com Segurança Avançada** como um app nativo do sistema, que permite gerenciar as regras do firewall de forma fácil e centralizada.

Você pode acessar isso simplesmente buscando pelo nome na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a barra de busca do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gerenciando Regras

A maioria dos aplicativos e processos, especialmente aqueles que precisam ser acessíveis pela internet, como servidores de jogos ou servidores web, vão precisar de redirecionamento de portas para garantir que os clientes consigam se comunicar com seu servidor (host).

:::info
Por padrão, o Windows só abre o firewall para aplicativos que realmente precisam, mantendo todas as outras portas fechadas. Isso evita expor portas desnecessariamente, reduzindo riscos. É por isso que você pode ver prompts do UAC aparecerem ao abrir jogos pela primeira vez, por exemplo, para confirmar uma nova regra no firewall.
:::

No Windows, gerenciar regras é fácil e pode ser feito de duas formas: criando regras para programas específicos ou criando regras que abrangem portas inteiras (e assim qualquer programa ou processo que use aquela porta).

Existem dois tipos de regras:
- Regra de Entrada (Inbound Rule): controla a comunicação que entra (da internet para seu servidor).
- Regra de Saída (Outbound Rule): controla a comunicação que sai (do seu servidor para a internet).

Normalmente, ao fazer redirecionamento de portas, você vai precisar criar ambos os tipos de regras para permitir a comunicação com os clientes. Mas isso depende do seu caso e configuração específicos.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Regras para Programas

Criar uma regra para Programa é geralmente a melhor escolha porque limita a comunicação a um programa ou processo específico, ao invés de liberar uma porta inteira, o que permitiria que qualquer programa/serviço usasse essa porta.

Agora você vai criar duas Regras para Programa, uma de Saída e outra de Entrada, ambas permitindo conexão.

No exemplo abaixo, vamos configurar apenas a regra de **Entrada**. Os passos são exatamente os mesmos, então você deve repetir para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira etapa, selecione a opção **Program** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Agora você deve selecionar o programa para o qual quer criar a regra de redirecionamento, usando o botão de navegação. No exemplo, escolhemos o navegador Mozilla Firefox como app exemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e siga para a última etapa. Aqui você deve dar um nome útil para a regra, para lembrar depois, e pode adicionar uma descrição opcional se quiser.

Quando estiver pronto, clique em **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Você criou com sucesso sua própria Regra para Programa no seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando ela na seção Outbound Rules.

### Regras para Portas

Criar uma Regra para Porta também pode ser útil em muitos casos e segue passos parecidos com os anteriores.

Agora você vai criar duas Regras para Porta, uma de Saída e outra de Entrada, ambas permitindo conexão.

No exemplo abaixo, vamos configurar apenas a regra de **Entrada**. Os passos são os mesmos, então repita para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira etapa, selecione a opção **Port** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Agora você deve definir o tipo da porta (TCP ou UDP) e a(s) porta(s) que quer redirecionar. Se precisar redirecionar tanto TCP quanto UDP, terá que criar duas regras separadas, uma para cada tipo.

No exemplo, usamos a porta 25565 (TCP), que é a porta padrão do Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e siga para a última etapa. Dê um nome útil para a regra e, se quiser, uma descrição opcional.

Quando estiver pronto, clique em **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Você criou com sucesso sua própria Regra para Porta no seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando ela na seção Outbound Rules.

<InlineVoucher />
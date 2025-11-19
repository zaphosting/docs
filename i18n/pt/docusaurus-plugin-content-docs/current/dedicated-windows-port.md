---
id: dedicated-windows-port
title: "Servidor Dedicado: Gerenciando Regras do Firewall do Windows Defender"
description: "Descubra como gerenciar efetivamente as regras do Firewall do Windows Defender e otimizar o redirecionamento de portas para uma comunicação segura do servidor → Saiba mais agora"
sidebar_label: Redirecionamento de Portas (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Windows OS possui seu próprio Windows Defender Firewall, que gerencia o tráfego de entrada e saída entre o servidor e a internet. Neste guia, vamos passar pelo processo de gerenciamento das regras do firewall e dicas gerais para redirecionamento de portas.

## Acessando o Windows Defender Firewall

O Windows OS inclui o aplicativo **Windows Defender Firewall com Segurança Avançada** como um aplicativo central do sistema, que permite gerenciar facilmente as regras do firewall em um único lugar.

Você pode acessá-lo simplesmente buscando por ele na barra de pesquisa do Windows ou pressionando a tecla/ícone do Windows e usando a barra de pesquisa do menu iniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gerenciando Regras

A maioria dos aplicativos e processos, especialmente aqueles que precisam ser acessíveis pela internet, como servidores de jogos ou servidores web, vão precisar de redirecionamento de portas para garantir que os clientes possam se comunicar com seu servidor (o host).

:::info
Por padrão, o Windows só abre o firewall para aplicativos que precisam, mantendo todas as outras portas fechadas. Isso é feito para evitar expor portas desnecessariamente, reduzindo riscos. É por isso que você pode ver prompts do UAC aparecerem ao iniciar jogos pela primeira vez, por exemplo, para confirmar uma nova regra do firewall.
:::

No Windows, o gerenciamento de regras é feito facilmente de duas formas: criando regras para programas ou criando regras que abrangem portas inteiras (e assim qualquer programa ou processo que as use).

Existem dois tipos de regras:
- Regra de Entrada (Inbound Rule): controla a comunicação de entrada (da internet para seu servidor).
- Regra de Saída (Outbound Rule): controla a comunicação de saída (do seu servidor para a internet).

Normalmente, ao fazer redirecionamento de portas, você precisará criar ambos os tipos de regras para permitir a comunicação com os clientes. Porém, isso depende do seu caso e configuração específicos.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Regras para Programas

Criar uma regra para Programa geralmente é a escolha recomendada porque restringe a comunicação a um programa ou processo específico, ao invés de uma porta inteira, que permitiria que qualquer programa/serviço se comunique por aquela porta.

Agora você vai criar duas Regras para Programa, uma de Saída e outra de Entrada, ambas permitindo conexão.

No exemplo abaixo, você vai configurar apenas a regra **de Entrada**. Os passos são exatamente os mesmos, então você deve repetir para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira seção, selecione a opção **Program** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Agora você deve selecionar o programa para o qual deseja criar a regra de redirecionamento, usando o botão de navegação. Neste exemplo, o navegador Mozilla Firefox foi escolhido como aplicativo exemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e continue para a seção final. Aqui você deve definir um nome útil para lembrar da regra e pode adicionar uma descrição opcional, se quiser.

Quando estiver pronto, clique no botão **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Você criou com sucesso sua própria Regra para Programa no seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando-a na seção Outbound Rules.

### Regras para Portas

Criar uma Regra para Porta geral também pode ser útil para muitos casos e segue passos similares aos anteriores.

Agora você vai criar duas Regras para Porta, uma de Saída e outra de Entrada, ambas permitindo conexão.

No exemplo abaixo, você vai configurar apenas a regra **de Entrada**. Os passos são exatamente os mesmos, então você deve repetir para criar a regra de Saída também.

Comece clicando com o botão direito em **Inbound Rules** na barra lateral e selecione a opção **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Na primeira seção, selecione a opção **Port** como tipo de regra.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Agora você deve definir o tipo de porta (TCP ou UDP) e a(s) porta(s) que deseja redirecionar. Se precisar redirecionar tanto TCP quanto UDP, terá que criar duas regras separadas, uma para cada tipo.

Neste exemplo, a porta 25565 (TCP) foi usada como exemplo, que é a porta padrão do Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Na seção de ação, selecione a opção **Allow the Connection** (Permitir a Conexão).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Na seção de perfil, mantenha todas as opções marcadas e continue para a seção final. Aqui você deve definir um nome útil para lembrar da regra e pode adicionar uma descrição opcional, se quiser.

Quando estiver pronto, clique no botão **Finish** para criar a regra.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Você criou com sucesso sua própria Regra para Porta no seu servidor Windows. Agora repita o processo para criar uma **Regra de Saída**, seguindo os mesmos passos, mas criando-a na seção Outbound Rules.
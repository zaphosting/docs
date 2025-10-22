---
id: domain-teamspeak-redirect
title: "Domínio: Configure o redirecionamento do TeamSpeak 3"
description: "Descubra como simplificar a conexão ao seu servidor de jogos TeamSpeak 3 usando domínios ou subdomínios personalizados para acesso fácil → Saiba mais agora"
sidebar_label: Redirecionamento TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Lembre-se que pode levar até 24 horas para que as alterações nos registros DNS entrem em vigor!
:::

## Introdução

Você pode redirecionar seu domínio inteiro ou apenas um subdomínio para o seu servidor de jogos TeamSpeak 3.  
Assim, ninguém precisa decorar o complicado endereço IP cheio de números e pode simplesmente se conectar ao seu servidor de jogos TeamSpeak 3 usando o domínio.

:::note
Por padrão, **novos** servidores de jogos TeamSpeak 3 agora recebem um alias `.zap.cloud` com um prefixo aleatório que pode ser usado para conexão.
:::

## Usando a configuração rápida TSDNS

Implementamos um novo sistema TSDNS para nossos servidores de jogos TeamSpeak 3, que permite configurar um subdomínio para seu servidor de jogos TeamSpeak 3 em poucos cliques! Se você não tem um domínio conosco, pule para a próxima seção para configurar manualmente os registros DNS.

Basta acessar a seção **Configurações->TSDNS** na interface web do seu TeamSpeak no nosso site. Lá você poderá escolher um subdomínio (prefixo antes do domínio) e escolher entre nosso `zap-ts3.com` ou um dos seus próprios domínios que você tenha conosco na sua conta ZAP-Hosting.

:::info
Para usar esse recurso de configuração rápida, você precisa [comprar um domínio perfeito diretamente conosco](https://zap-hosting.com/en/shop/product/domain/) ou transferir seu próprio domínio para sua conta ZAP-Hosting. Esses domínios aparecerão na seção TSDNS assim que estiverem configurados. Alternativamente, você pode usar o domínio padrão `zap-ts3.com` gratuitamente.
:::

No nosso exemplo, criamos um novo subdomínio usando o domínio `.zap.cloud`, que nos levará ao nosso servidor de jogos TeamSpeak 3 quando usado.

![](https://github.com/zaphosting/docs/assets/42719082/5b311ff1-625c-4f6d-82b8-6847d432beb9)

:::note
Lembre-se que pode levar até 3 horas para o domínio propagar e começar a funcionar.
:::

## Configuração DNS regular

Para redirecionar o endereço IP, crie um subdomínio que aponte para o endereço IP do servidor de jogos TeamSpeak 3, ou redirecione o domínio inteiro sem subdomínio.  
Isso é suficiente se o servidor de jogos TeamSpeak 3 usar a porta padrão **9987**.  
Porém, se o servidor de jogos TeamSpeak 3 usar uma porta diferente da padrão, será necessário adicionar um **registro SRV** para encaminhar o domínio ou subdomínio para a porta correta do servidor.

### Serviço SRV

O nome do serviço sempre começa com um **underscore**.  
Para um servidor de jogos TeamSpeak 3, o nome do serviço é sempre **_ts3**, sem exceções.

### Protocolo SRV

O protocolo especifica o protocolo de internet usado para a conexão. Aqui estão disponíveis **UDP** e **TCP**.  
A especificação do protocolo também sempre começa com um **underscore** e é **_udp** ou **_tcp**.  
Para um servidor de jogos TeamSpeak 3, sempre usamos **_udp**, sem exceções.

## Redirecionando o domínio sem subdomínio

Para redirecionar seu domínio para um servidor de jogos sem criar um subdomínio, primeiro abra seu domínio no dashboard, depois abra o Gerenciamento de DNS no menu à esquerda.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Lá você verá todos os registros DNS existentes para seu domínio.  
Se ainda não criou seus próprios registros, pode visualizar todos os registros existentes clicando no ícone da lixeira vermelha do lado direito.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Depois clique em **Novo registro** e você será levado para criar um novo registro DNS.  
Como **Nome** escolha o nome do domínio, por exemplo **teamspeak-server.de**, o **tipo é A** e o **valor** é o endereço IP do seu servidor de jogos TeamSpeak 3, neste caso **88.214.57.116**.  
Você pode deixar o campo **TTL** sem alterações.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Quando terminar, clique em **Salvar**, o registro será salvo nas configurações DNS e estará ativo dentro de 24 horas.

:::info
Pode levar até 24 horas para que novos registros DNS entrem em vigor. Infelizmente, ninguém tem controle sobre isso.
:::

## Redirecionando o domínio com subdomínio

Se quiser criar um subdomínio, por exemplo ts.teamspeak-server.de, faça como no exemplo anterior,  
porém, no campo **Nome** você não coloca o nome do domínio, mas sim o subdomínio.  
Ficaria assim:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Redirecionando o domínio com porta (SRV)

Se a porta padrão **9987** não for usada, é necessário criar um **registro SRV** adicional para encaminhar o domínio não só para o IP do servidor de jogos, mas também para a porta correta.

Primeiro, crie um **subdomínio** como descrito acima, ou redirecione o domínio diretamente para o servidor de jogos TeamSpeak 3, ambos funcionam.

### Redirecionamento sem subdomínio

Depois de redirecionar seu domínio para o endereço IP do seu servidor de jogos TeamSpeak 3 como descrito acima, clique em **Novo registro** e crie um registro assim:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

O campo **Nome** contém o nome do serviço, que neste caso é nosso servidor de jogos TeamSpeak 3, ou seja, **_ts3**. Também contém o tipo de protocolo, neste caso **_udp**, além do **nome do domínio**.  
O campo **Tipo** indica que tipo de registro é, neste caso um registro **SRV**.  
O campo **valor** contém a porta do jogo e o domínio, neste caso **0 1234 teamspeak-server.de**, onde **1234** é a **porta do jogo** e **teamspeak-server.de** é o domínio para onde o redirecionamento é feito.  
O valor **0** não é mais relevante e sempre permanece o mesmo. Os campos **TTL** e **Prio** também não são alterados.

Depois clique em **Salvar**.

:::info
É importante que um **ponto** seja colocado no final do domínio no campo **valor**!
:::

### Redirecionamento com subdomínio

Com subdomínio é quase igual. Primeiro, crie um subdomínio como descrito acima e redirecione para o endereço IP do seu servidor de jogos TeamSpeak 3. Depois clique em **Novo registro** e crie um registro com o seguinte conteúdo:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

O campo **Nome** contém o nome do serviço, que neste caso é nosso servidor de jogos TeamSpeak 3, ou seja, **_ts3**. Também contém o tipo de protocolo, neste caso **_udp**, além do **nome do domínio** junto com o **subdomínio**, que é **ts.teamspeak-server.de**.  
O campo **Tipo** indica que tipo de registro é, neste caso um registro **SRV**.  
O campo **valor** contém a porta e o domínio com subdomínio, neste caso **0 1234 ts.teamspeak-server.de**, onde **1234** é a **porta do servidor de jogos TeamSpeak 3** e **ts.teamspeak-server.de** é o domínio com subdomínio para onde o redirecionamento é feito.  
O valor **0** não é mais relevante e sempre permanece o mesmo. Os campos **TTL** e **Prio** também não são alterados.

<InlineVoucher />
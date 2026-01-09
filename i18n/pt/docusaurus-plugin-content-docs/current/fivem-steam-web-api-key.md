---
id: fivem-steam-web-api-key
title: "FiveM: Configuração da Steam Web API Key"
description: "Descubra como obter e ativar uma Steam Web API key para FiveM para habilitar autenticação e melhorar a funcionalidade do servidor → Saiba mais agora"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma Steam Web API key tem usos importantes para o FiveM. Isso inclui autenticação pela API Key quando o Steam é usado como identificador por diferentes scripts e/ou recursos.

<InlineVoucher />

## Preparação

É necessário ter uma conta Steam sem restrições para solicitar uma API key. Contas Steam restritas têm acesso limitado às funcionalidades do Steam, então sem acesso completo não é possível solicitar uma API key. Você precisa gastar pelo menos **5,00 USD** na loja Steam para desbloquear sua conta e suas funcionalidades.

## Solicitar uma API key

Assim que sua conta Steam estiver pronta, você poderá solicitar sua própria Steam Web API key. Faça isso se cadastrando [no site do Steam](https://steamcommunity.com/dev/apikey) com seu nome de usuário e senha Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Depois de logar, você deverá inserir um nome de domínio, confirmar os termos de uso da Steam Web API e clicar no botão **Register**. O domínio deve ser configurado com o seu **endereço IP do servidor** *(sem a porta)*, então insira ele ali.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Se tudo der certo, você verá sua Steam Web API Key, como mostrado abaixo.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Ativação da API key

Agora que você tem sua Steam Web API Key, deve colocá-la no arquivo de configuração do seu servidor (`server.cfg`) no seu servidor de jogos FiveM. Você pode acessar seu `server.cfg` pelo **painel txAdmin** em **CFG Editor**. Encontre uma linha existente ou crie uma nova se não existir, e adicione o seguinte, substituindo `YOUR_KEY_HERE` pela key que você gerou:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## Conclusão

Por fim, reinicie seu servidor. Sua Steam Web API key será carregada na próxima vez que o servidor iniciar completamente. Você adicionou com sucesso uma Steam Web API Key no seu servidor de jogos FiveM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />
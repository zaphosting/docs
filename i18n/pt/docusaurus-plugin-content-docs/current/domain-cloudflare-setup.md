---
id: domain-cloudflare-setup
title: "Domínio: Configurando domínio com Cloudflare"
description: "Descubra como melhorar a segurança e o desempenho do seu site usando Cloudflare com domínios ZAP-Hosting → Saiba mais agora"
sidebar_label: Configuração Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Cloudflare é um provedor de CDN (Content Delivery Network) super popular que turbina seus sites com proteção de segurança reforçada, mitigação de DDoS e oferece uma gestão fácil via dashboard. Este guia vai te mostrar como configurar seu domínio ZAP-Hosting para usar o Cloudflare através do ExpertDNS e ajustando os servidores de nomes.

<InlineVoucher />

## Preparação
Para seguir este guia, você vai precisar de:
- Um domínio na sua conta ZAP-Hosting
- Uma conta Cloudflare
  
## Passo 1: Ativando a opção ExpertDNS

Comece acessando o painel web do domínio escolhido na sua conta ZAP-Hosting. Encontre a opção **ExpertDNS** e ative-a marcando a caixa e clicando no botão salvar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Passo 2: Configurando seu domínio no Cloudflare

Agora vamos usar o Cloudflare, então faça login na sua conta Cloudflare. Com o login feito, adicione seu site ao dashboard seguindo os passos de configuração que o próprio Cloudflare fornece.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Quando chegar no passo 4 do processo, você vai receber os servidores de nomes que precisa configurar.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Volte para o painel web do seu domínio e acesse a seção **ExpertDNS**. Ali, remova os servidores de nomes padrão da ZAP-Hosting e substitua pelos que o Cloudflare te passou.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Não esqueça de salvar as alterações depois de fazer isso.

## Passo 3: Finalizando a configuração no Cloudflare

Volte para o dashboard do Cloudflare. Na página de configuração do seu domínio, você deve ver um botão para forçar o Cloudflare a verificar novamente os servidores de nomes.

:::info
Pode levar até 24 horas para que as mudanças nos servidores de nomes sejam reconhecidas, mas geralmente acontece bem mais rápido.
:::

Quando o Cloudflare reconhecer as mudanças, você vai receber um e-mail avisando que a configuração está pronta. Também pode conferir no dashboard do Cloudflare. Uma configuração bem-sucedida vai mostrar **Ativo** no domínio que você configurou.

Pronto! Você integrou seu domínio com o Cloudflare, liberando mais desempenho, segurança e facilidade de gerenciamento para seu site.

<InlineVoucher />
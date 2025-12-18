---
id: webspace-external-domain
title: "Hospedagem de sites: Vinculando Domínio hospedado externamente"
description: "Aprenda como conectar seu domínio externo à hospedagem de sites da ZAP-Hosting para funcionalidade perfeita de site e e-mail → Saiba mais agora"
sidebar_label: Vincular Domínio Externo
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Você já tem um domínio registrado com outro provedor e quer conectá-lo ao seu produto de hospedagem de sites da ZAP-Hosting? Sem problema! Para isso, você precisa ajustar as configurações de DNS no seu provedor de domínio. Neste guia, vamos mostrar exatamente quais registros DNS você precisa criar para que seu domínio aponte corretamente para sua hospedagem de sites.

:::info Transfira seu domínio
Transfira seu domínio para a ZAP-Hosting e aproveite uma gestão mais fácil. Conecte seu domínio à sua hospedagem de sites com apenas alguns cliques e aproveite muitos recursos extras. Saiba como transferir seu domínio no nosso guia [Transferência de Domínio](domain-transfer.md).
:::

<InlineVoucher />



## Vincular domínio no Plesk

Antes de vincular seu domínio externo à sua hospedagem de sites, você precisa adicionar o domínio no **Plesk**. Para isso, adicione seu domínio na seção **Configurações de Hospedagem**. Se ainda não sabe como fazer isso, você encontra instruções detalhadas no nosso guia [Adicionar Domínio](https://zap-hosting.com/guides/docs/webspace-adddomain).

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Configurar as configurações de DNS

Para conectar seu domínio externo à sua hospedagem de sites da ZAP-Hosting, você precisa primeiro ajustar as configurações de DNS no provedor onde seu domínio está registrado. Para que seu site e e-mails funcionem corretamente, seu domínio precisa saber para qual servidor direcionar os visitantes e o tráfego de e-mails. Isso é feito criando os registros DNS necessários.

Você vai precisar do endereço IP da sua instância de hospedagem de sites para configurar os registros A. Essa informação você encontra diretamente no seu dashboard da hospedagem de sites ZAP.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Com o endereço IP em mãos, você pode adicionar os registros DNS necessários no seu provedor de domínio. Isso inclui registros A para apontar seu domínio para sua hospedagem de sites, além de registros MX e TXT para gerenciar a entrega de e-mails e a verificação do domínio.

Para informações mais detalhadas sobre como funcionam os diferentes tipos de registros DNS e qual a função de cada um, recomendamos dar uma olhada no nosso guia [Registros de Domínio](domain-records.md).

Abaixo está uma tabela com todos os registros DNS necessários para sua configuração:

| Nome                           | Tipo | Valor                           | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | Endereço IP da instância webspace | 3600 | 0    |
| mail                           | A    | Endereço IP da instância webspace | 3600 | 0    |
| www                            | A    | Endereço IP da instância webspace | 3600 | 0    |
| domain.tld.                    | A    | Endereço IP da instância webspace | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning Alterações no DNS Podem Demorar

Alterações nas configurações de DNS podem levar até 24 horas para se propagarem completamente pelo mundo. Durante esse tempo, seu domínio pode não apontar imediatamente para sua nova hospedagem de sites ou serviços de e-mail, então tenha paciência enquanto as mudanças entram em vigor.
:::




## Conclusão
Seguindo esses passos, você vai configurar e vincular seu domínio à sua hospedagem de sites. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂


<InlineVoucher />
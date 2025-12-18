---
id: domain-records
title: "Domínio: Configurações de registros de domínio"
description: "Descubra como configurar e entender os diferentes tipos de registros DNS para otimizar a gestão do seu domínio → Saiba mais agora"
sidebar_label: Registros de Domínio
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Domínios podem ser configurados facilmente utilizando uma grande variedade de tipos de registros DNS que executam diferentes funções. Neste guia, vamos cobrir todos os tipos de registros e explicar como eles funcionam.

<InlineVoucher />

## Configuração

Você pode configurar os registros do domínio na administração do seu domínio, na seção de administração DNS. Para isso, clique no botão verde **Nova entrada**. Isso abrirá uma janela popup. A partir daí, você pode configurar e criar novos registros como desejar.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Usamos o domínio **zap-hosting.com** para ilustrar os tipos individuais de registros DNS. Por favor, use seu próprio domínio no seu caso.
:::

:::warning
Ao configurar um registro DNS, certifique-se de colocar um ponto no final do registro para definir que o nome do domínio está completo e evitar mal-entendidos durante a atribuição no sistema DNS.
:::

## Tipos de registros DNS

Existem vários tipos de registros DNS que têm significados e propósitos diferentes. O significado e as diferenças serão explicados abaixo.

### Registros A

Um registro A é usado para criar um redirecionamento de um "**subdomínio**" ou "**domínio principal**" para um "**endereço IPv4**".

| Nome (Exemplo)   | Tipo | Valor (Exemplo) | TTL  | Prioridade |
| ---------------- | ---- | --------------- | ---- | ---------- |
| zap-hosting.com. | A    | Endereço IPv4   | 1440 | 0          |

### Registros AAAA

Um registro AAAA é usado para criar um redirecionamento de um "**subdomínio**" ou "**domínio principal**" para um "**endereço IPv6**".

| Nome (Exemplo)   | Tipo | Valor (Exemplo) | TTL  | Prioridade |
| ---------------- | ---- | --------------- | ---- | ---------- |
| zap-hosting.com. | AAAA | Endereço IPv6   | 1440 | 0          |

### Registros CNAME

Um registro CNAME é usado para criar um redirecionamento de um "**subdomínio**" para um "**subdomínio**" ou "**domínio principal**".

| Nome (Exemplo) | Tipo  | Valor (Exemplo)   | TTL  | Prioridade |
| -------------- | ----- | ----------------- | ---- | ---------- |
| zap-test.      | CNAME | zap-hosting.com.  | 1440 | 0          |

### Registros MX

Um registro MX é usado para criar um redirecionamento de um "**subdomínio**" ou "**domínio principal**" para um "**domínio**" ou "**registro A**". Este registro MX é usado para especificar um ou mais servidores de e-mail. A prioridade especifica qual servidor de e-mail deve ser usado preferencialmente se houver múltiplos registros MX. A prioridade deve ser um número inteiro entre 0 e 65535, quanto menor o valor, maior a prioridade.

| Nome (Exemplo)   | Tipo  | Valor (Exemplo)    | TTL  | Prioridade |
| ---------------- | ----- | ------------------ | ---- | ---------- |
| zap-hosting.com. | MX    | mailserverxy.com.  | 1440 | 0          |

### Registros PTR

Um registro PTR é usado para criar um redirecionamento de um "**endereço IPv4**" ou "**endereço IPv6**" para um "**subdomínio**" ou "**domínio principal**". Este registro PTR representa o oposto do registro A ou AAAA.

| Nome (Exemplo)          | Tipo | Valor (Exemplo)     | TTL  | Prioridade |
| ----------------------- | ---- | ------------------- | ---- | ---------- |
| 1.0.0.127.in-addr.arpa. | PTR  | zap-hosting.com.    | 1440 | 0          |

### Registros RP

Um registro RP é usado para fornecer informações sobre o proprietário do domínio. Normalmente, um endereço de e-mail é inserido para esse propósito, onde o símbolo "**@**" é substituído por um "**ponto**".

| Nome (Exemplo) | Tipo | Valor (Exemplo)        | TTL  | Prioridade |
| -------------- | ---- | ---------------------- | ---- | ---------- |
| rp.            | RP   | info.zap-hosting.com.  | 1440 | 0          |

### Registros SRV

Um registro SRV é usado para criar um redirecionamento de um "**subdomínio**" ou "**domínio principal**" para um "**registro A**".  
Registros SRV são usados para aplicações onde não é usada uma porta padrão e, portanto, é necessário o redirecionamento de porta.  
A prioridade define qual dos serviços deve ser usado preferencialmente se múltiplos registros SRV forem usados para os mesmos serviços.  
A prioridade deve ser um número inteiro, quanto menor o valor, maior a prioridade.

| Nome (Exemplo)   | Tipo | Valor (Exemplo)           | TTL  | Prioridade |
| ---------------- | ---- | ------------------------- | ---- | ---------- |
| zap-hosting.com. | SRV  | 0 2006 zap-hosting.com.   | 1440 | 0          |

### Registros TXT

Um registro TXT é usado para adicionar texto de sua escolha. Em alguns sistemas, o conteúdo é usado para codificar dados administrativos. Este registro TXT é usado para criar entradas SPF, DMARC e DKIM.

| Nome (Exemplo)   | Tipo | Valor (Exemplo) | TTL  | Prioridade |
| ---------------- | ---- | --------------- | ---- | ---------- |
| zap-hosting.com. | TXT  | v=spf1 -all     | 1440 | 0          |

## Conclusão

Parabéns, você criou e configurou seus registros DNS com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />
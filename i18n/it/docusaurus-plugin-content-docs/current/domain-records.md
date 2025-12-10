---
id: domain-records
title: "Domain: Impostazioni dei record di dominio"
description: "Scopri come configurare e capire i diversi tipi di record DNS per ottimizzare la gestione del tuo dominio → Scopri di più ora"
sidebar_label: Record di Dominio
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I domini possono essere configurati facilmente utilizzando una vasta gamma di tipi di record DNS che svolgono azioni diverse. In questa guida, copriremo tutti i diversi tipi di record e spiegheremo come funzionano.

<InlineVoucher />

## Configurazione

Puoi configurare i record del dominio nella tua amministrazione dominio sotto la gestione DNS. Per farlo, clicca sul pulsante verde **Nuova voce**. Si aprirà una finestra popup. Da lì puoi configurare e creare nuovi record come preferisci.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Usiamo il dominio **zap-hosting.com** per illustrare i singoli tipi di record DNS. Usa il tuo dominio personale nel tuo caso.
:::

:::warning
Assicurati, quando configuri un record DNS, di inserire un punto alla fine del record per definire che il nome del dominio è completo e per evitare fraintendimenti durante l’assegnazione nel sistema DNS.
:::

## Tipi di record DNS

Esistono vari tipi di record DNS con significati e scopi diversi. Qui sotto spiegheremo il significato e le differenze.

### Record A

Un record A viene usato per creare un inoltro di un "**sottodominio**" o "**dominio principale**" a un "**indirizzo IPv4**".

| Nome (Esempio)   | Tipo | Valore (Esempio) | TTL  | Priorità |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | A    | Indirizzo IPv4  | 1440 | 0        |



### Record AAAA

Un record AAAA viene usato per creare un inoltro di un "**sottodominio**" o "**dominio principale**" a un "**indirizzo IPv6**".

| Nome (Esempio)   | Tipo | Valore (Esempio) | TTL  | Priorità |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | AAAA | Indirizzo IPv6  | 1440 | 0        |


### Record CNAME

Un record CNAME viene usato per creare un inoltro di un "**sottodominio**" a un "**sottodominio**" o "**dominio principale**".

| Nome (Esempio) | Tipo | Valore (Esempio) | TTL  | Priorità |
| ----------- | ---- | ------------ | ---- | -------- |
| zap-test. | CNAME  | zap-hosting.com | 1440 | 0        |



### Record MX

Un record MX viene usato per creare un reindirizzamento di un "**sottodominio**" o "**dominio principale**" a un "**dominio**" o "**record A**". Questo record MX serve a specificare uno o più server di posta. La priorità indica quale server di posta deve essere usato preferibilmente se ci sono più record MX. La priorità deve essere un numero intero tra 0 e 65535, più basso è il valore più alta è la priorità.

| Nome (Esempio)   | Tipo  | Valore (Esempio)  | TTL  | Priorità |
| ---------------- | ----- | ---------------- | ---- | -------- |
| zap-hosting.com. | CNAME | mailserverxy.com | 1440 | 0        |



### Record PTR

Un record PTR viene usato per creare un inoltro di un "**indirizzo IPv4**" o "**indirizzo IPv6**" a un "**sottodominio**" o "**dominio principale**". Questo record PTR rappresenta l’opposto del record A o AAAA.

| Nome (Esempio)          | Tipo  | Valore (Esempio)  | TTL  | Priorità |
| ----------------------- | ----- | ---------------- | ---- | -------- |
| 1.0.0.127.in-addr.arpa. | PTR | zap-hosting.com. | 1440 | 0        |



### Record RP

Un record RP viene usato per fornire informazioni sul proprietario del dominio. Di solito si inserisce un indirizzo e-mail dove il simbolo "**@**" è sostituito da un "**punto**".

| Nome (Esempio) | Tipo | Valore (Esempio)       | TTL  | Priorità |
| -------------- | ---- | --------------------- | ---- | -------- |
| rp.            | RP   | info.zap-hosting.com. | 1440 | 0        |

### Record SRV

Un record SRV viene usato per creare un inoltro di un "**sottodominio**" o "**dominio principale**" a un "**record A**".  
I record SRV sono usati per applicazioni dove non si usa una porta standard e quindi è necessario il port forwarding.  
La priorità definisce quale servizio deve essere usato preferibilmente se ci sono più record SRV per lo stesso servizio.  
La priorità deve essere un numero intero, più basso è il valore più alta è la priorità.

| Nome (Esempio) | Tipo | Valore (Esempio)       | TTL  | Priorità |
| -------------- | ---- | --------------------- | ---- | -------- |
| zap-hosting.com. | SRV   | 0 2006 zap-hosting.com. | 1440 | 0        |

### Record TXT

Un record TXT viene usato per aggiungere testo a scelta. Su alcuni sistemi il contenuto viene usato per codificare dati amministrativi. Questo record TXT viene usato per creare voci SPF, DMARC e DKIM.

| Nome (Esempio)   | Tipo | Valore (Esempio) | TTL  | Priorità |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | TXT   | v=spf1 -all     | 1440 | 0        |



## Conclusione

Congratulazioni, hai creato e configurato con successo i tuoi record DNS. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />
---
id: domain-records
title: "Domena: Ustawienia rekordów domeny"
description: "Dowiedz się, jak skonfigurować i zrozumieć różne typy rekordów DNS, aby zoptymalizować zarządzanie domeną → Sprawdź teraz"
sidebar_label: Rekordy domeny
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Domeny można łatwo konfigurować, korzystając z różnych typów rekordów DNS, które pełnią różne funkcje. W tym poradniku omówimy wszystkie typy rekordów i wyjaśnimy, jak działają.

<InlineVoucher />

## Konfiguracja

Rekordy domeny możesz skonfigurować w panelu administracyjnym domeny w sekcji zarządzania DNS. Aby to zrobić, kliknij zielony przycisk **Nowy wpis**. Otworzy się wtedy okno popup, w którym możesz dowolnie tworzyć i konfigurować nowe rekordy.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Do zilustrowania poszczególnych typów rekordów DNS używamy domeny **zap-hosting.com**. W Twoim przypadku użyj własnej domeny.
:::

:::warning
Podczas konfigurowania rekordu DNS upewnij się, że na końcu rekordu znajduje się kropka, która oznacza pełną nazwę domeny i zapobiega nieporozumieniom podczas przypisywania w systemie DNS.
:::

## Typy rekordów DNS

Istnieje wiele typów rekordów DNS, które mają różne znaczenia i zastosowania. Poniżej wyjaśniamy ich znaczenie i różnice.

### Rekordy A

Rekord A służy do przekierowania "**subdomeny**" lub "**głównej domeny**" na "**adres IPv4**".

| Nazwa (Przykład)   | Typ | Wartość (Przykład) | TTL  | Priorytet |
| ------------------ | --- | ------------------ | ---- | --------- |
| zap-hosting.com.   | A   | adres IPv4         | 1440 | 0         |


### Rekordy AAAA

Rekord AAAA służy do przekierowania "**subdomeny**" lub "**głównej domeny**" na "**adres IPv6**".

| Nazwa (Przykład)   | Typ  | Wartość (Przykład) | TTL  | Priorytet |
| ------------------ | ---- | ------------------ | ---- | --------- |
| zap-hosting.com.   | AAAA | adres IPv6         | 1440 | 0         |


### Rekordy CNAME

Rekord CNAME służy do przekierowania "**subdomeny**" na "**subdomenę**" lub "**główną domenę**".

| Nazwa (Przykład) | Typ   | Wartość (Przykład) | TTL  | Priorytet |
| ---------------- | ----- | ------------------ | ---- | --------- |
| zap-test.        | CNAME | zap-hosting.com    | 1440 | 0         |


### Rekordy MX

Rekord MX służy do przekierowania "**subdomeny**" lub "**głównej domeny**" na "**domenę**" lub "**rekord A**". Ten rekord MX określa jeden lub więcej serwerów pocztowych. Priorytet wskazuje, który serwer pocztowy powinien być używany w pierwszej kolejności, jeśli jest kilka rekordów MX. Priorytet musi być liczbą całkowitą od 0 do 65535, im niższa wartość, tym wyższy priorytet.

| Nazwa (Przykład)   | Typ   | Wartość (Przykład)  | TTL  | Priorytet |
| ------------------ | ----- | ------------------- | ---- | --------- |
| zap-hosting.com.   | CNAME | mailserverxy.com    | 1440 | 0         |


### Rekordy PTR

Rekord PTR służy do przekierowania "**adresu IPv4**" lub "**adresu IPv6**" na "**subdomenę**" lub "**główną domenę**". Rekord PTR jest odwrotnością rekordu A lub AAAA.

| Nazwa (Przykład)            | Typ  | Wartość (Przykład)  | TTL  | Priorytet |
| --------------------------- | ---- | ------------------- | ---- | --------- |
| 1.0.0.127.in-addr.arpa.     | PTR  | zap-hosting.com.    | 1440 | 0         |


### Rekordy RP

Rekord RP służy do podania informacji o właścicielu domeny. Zazwyczaj podaje się adres e-mail, gdzie znak "**@**" zastępuje się kropką "**.**".

| Nazwa (Przykład) | Typ | Wartość (Przykład)       | TTL  | Priorytet |
| ---------------- | --- | ------------------------ | ---- | --------- |
| rp.              | RP  | info.zap-hosting.com.    | 1440 | 0         |

### Rekordy SRV

Rekord SRV służy do przekierowania "**subdomeny**" lub "**głównej domeny**" na "**rekord A**".  
Rekordy SRV są używane w aplikacjach, które nie korzystają ze standardowego portu i wymagają przekierowania portów.  
Priorytet określa, który z serwisów powinien być używany w pierwszej kolejności, jeśli jest kilka rekordów SRV dla tych samych usług.  
Priorytet musi być liczbą całkowitą, im niższa wartość, tym wyższy priorytet.

| Nazwa (Przykład)   | Typ | Wartość (Przykład)          | TTL  | Priorytet |
| ------------------ | --- | --------------------------- | ---- | --------- |
| zap-hosting.com.   | SRV | 0 2006 zap-hosting.com.     | 1440 | 0         |

### Rekordy TXT

Rekord TXT służy do dodania dowolnego tekstu. Na niektórych systemach zawartość jest wykorzystywana do kodowania danych administracyjnych. Ten rekord TXT jest używany do tworzenia wpisów SPF, DMARC i DKIM.

| Nazwa (Przykład)   | Typ | Wartość (Przykład) | TTL  | Priorytet |
| ------------------ | --- | ------------------ | ---- | --------- |
| zap-hosting.com.   | TXT | v=spf1 -all        | 1440 | 0         |


## Podsumowanie

Gratulacje, pomyślnie utworzyłeś i skonfigurowałeś swoje rekordy DNS. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />
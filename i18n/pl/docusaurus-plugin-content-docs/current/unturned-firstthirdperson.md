---
id: unturned-firstthirdperson
title: "Unturned: Ustaw 1. lub 3. osobę na serwerze"
description: "Dowiedz się, jak dostosować perspektywę gracza na swoim serwerze Unturned między pierwszą, trzecią osobą lub obiema dla lepszej rozgrywki → Sprawdź teraz"
sidebar_label: 1. / 3. osoba
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Perspektywa 1. / 3. osoby

Unturned daje możliwość zmiany perspektywy na serwerze. Możesz wybrać między perspektywą pierwszej lub trzeciej osoby. Domyślnie gra jest prowadzona z perspektywy pierwszej osoby. Jednak od wersji 3.9.9.0 można to również zmienić. Poniżej wyjaśniamy, jak możesz to ustawić na swoim serwerze. 



## Konfiguracja

Zmiana odbywa się w pliku konfiguracyjnym **Commands.dat**. Znajdziesz go w **panelu administracyjnym w zakładce Configs**. W zależności od tego, jak ma być ustawiona perspektywa, do konfiguracji należy dodać następujące polecenie:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Perspektywa 1. osoby (domyślna): 

Ta opcja jest domyślnie aktywna, nawet jeśli polecenie nie zostało jeszcze dodane do konfiguracji. Mimo to, dla pełnej jasności, możesz bez problemu dodać to polecenie. Wygląda ono tak:

```
perspective first
```



### Perspektywa 3. osoby:

Jeśli zamiast 1. osoby chcesz używać perspektywy 3. osoby, możesz to ustawić. Polecenie wygląda tak:

```
perspective third
```



### Obie perspektywy:

Możesz też używać obu wariantów jednocześnie. W takim wypadku wystarczy zmienić wartość polecenia. Wygląda ono tak:

```
perspective both
```



Przy następnym uruchomieniu serwera wybrana opcja powinna być aktywna!

<InlineVoucher />
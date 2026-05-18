---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Włącz lub wyłącz czat głosowy"
description: "Dowiedz się, jak włączyć lub wyłączyć czat głosowy na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Włącz/Wyłącz czat głosowy"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Komunikacja głosowa może totalnie zmienić klimat na serwerze HumanitZ. Włączenie czatu głosowego pozwala graczom rozmawiać bezpośrednio w pobliżu, co zwiększa immersję i współpracę. Wyłączenie go może zachęcić do korzystania z zewnętrznych platform komunikacyjnych lub stworzyć cichsze, bardziej izolowane doświadczenie survivalowe.

W HumanitZ czat głosowy konfiguruje się bezpośrednio w pliku konfiguracyjnym serwera.

<InlineVoucher />



## Konfiguracja

Ustawienia czatu głosowego kontrolujesz w pliku `GameServerSettings.ini`. Możesz go znaleźć w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujący parametr:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

Konfiguracja działa tak:

- `Voip=true` lub `Voip=1` – Włącza czat głosowy  
- `Voip=false` lub `Voip=0` – Wyłącza czat głosowy  

Aby zmienić ustawienie czatu głosowego, po prostu zmodyfikuj wartość według własnych preferencji. Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienie zaczęło działać.



## Podsumowanie

Gratulacje! Modyfikując wartość `Voip` w pliku `GameServerSettings.ini`, pomyślnie włączyłeś lub wyłączyłeś czat głosowy na swoim serwerze HumanitZ. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂 

<InlineVoucher />
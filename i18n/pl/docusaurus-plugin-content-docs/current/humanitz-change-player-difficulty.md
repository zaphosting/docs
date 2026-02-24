---
id: humanitz-change-player-difficulty
title: "HumanitZ: Zmiana Trudności Gracza"
description: "Dowiedz się, jak dostosować trudność gracza i ustawienia przetrwania na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmiana Trudności Gracza"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Trudność gracza w HumanitZ określa, jak wymagające jest doświadczenie przetrwania. Od permanentnej śmierci, przez szybkość spadku parametrów życiowych, aż po siłę bandytów — te ustawienia bezpośrednio wpływają na to, jak trudny jest Twój serwer.

<InlineVoucher />

## Konfiguracja

Ustawienia trudności gracza kontrolujesz w pliku `GameServerSettings.ini`. Masz do niego dostęp w panelu administracyjnym serwera w zakładce **Konfiguracje**. W pliku znajdź następujące parametry:

````
;Gdy ustawione na true, gracz który zginął traci postać i musi stworzyć nową
PermaDeath=false

;0=Nie tracisz nic, 1=Tracisz plecak i broń w ręku, 2=Poprzednie + kieszenie i plecak, 3=Wszystko powyższe + ekwipunek
OnDeath=2

;Efekt braku snu false=Wyłączony true=Włączony
Sleep=true

;Jak szybko spadają parametry życiowe 0=Powoli, 1=Normalnie, 2=Szybko
VitalDrain=1

;Zdrowie psa towarzysza 0=Niskie 1=Domyślne 2=Wysokie
CompanionHealth=1

;Obrażenia psa towarzysza 0=Niskie 1=Domyślne 2=Wysokie
CompanionDmg=1

;Czas w minutach na respawn ludzkich bandytów, ustaw na 0 aby wyłączyć respawn
HumanRespawnTimer=90

;Trudność zdrowia ludzkich bandytów 0=Bardzo łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo trudne, 5=Koszmar
HumanHealth=2

;Trudność szybkości ludzkich bandytów 0=Bardzo łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo trudne, 5=Koszmar
HumanSpeed=2

;Trudność obrażeń ludzkich bandytów 0=Bardzo łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo trudne, 5=Koszmar
HumanDamage=2
````

Oto co kontroluje każde z tych ustawień:

- `PermaDeath` – Jeśli ustawione na `true`, gracz traci postać na stałe po śmierci i musi stworzyć nową  
- `OnDeath` – Określa, ile ekwipunku gracz traci po śmierci  
- `Sleep` – Włącza lub wyłącza efekt braku snu  
- `VitalDrain` – Kontroluje, jak szybko spadają głód, pragnienie i inne parametry życiowe  
- `CompanionHealth` – Ustawia poziom zdrowia psa towarzysza  
- `CompanionDmg` – Ustawia poziom obrażeń psa towarzysza  
- `HumanRespawnTimer` – Określa czas respawnu ludzkich bandytów (0 wyłącza respawn)  
- `HumanHealth` – Dostosowuje trudność zdrowia bandytów  
- `HumanSpeed` – Dostosowuje trudność szybkości bandytów  
- `HumanDamage` – Dostosowuje trudność obrażeń bandytów  

Zmień wartości według swojego wymarzonego poziomu trudności. Po edycji zapisz plik i zrestartuj serwer, aby nowe ustawienia zaczęły działać.



## Przykładowe Presety Trudności

### Łatwy Tryb Przetrwania

Ten setup tworzy bardziej luźne doświadczenie z wolniejszym spadkiem parametrów życiowych, słabszymi przeciwnikami i brakiem permanentnej śmierci.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Trudny Tryb Przetrwania

Ten setup zwiększa presję przetrwania z permanentną śmiercią, szybszym spadkiem parametrów i silniejszymi bandytami.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Podsumowanie

Gratulacje! Dostosowując wartości związane z trudnością w pliku `GameServerSettings.ini`, skutecznie spersonalizowałeś ustawienia trudności gracza na swoim serwerze HumanitZ. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
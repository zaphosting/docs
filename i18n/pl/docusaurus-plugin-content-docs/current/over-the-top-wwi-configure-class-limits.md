---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Konfiguracja limitów klas"
description: "Dowiedz się, jak skonfigurować limity klas na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Limity klas
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Limity klas w **Over the Top WWI** kontrolują, ilu graczy może korzystać z konkretnych typów jednostek, takich jak snajperzy, saperzy czy jednostki ciężkie. Dostosowanie tych limitów pomaga zbalansować rozgrywkę i zapobiega nadmiernemu wykorzystywaniu niektórych klas.

Konfigurując limity klas, zapewnisz uczciwe składy drużyn oraz stworzysz bardziej uporządkowane i taktyczne doświadczenie w grze.

<InlineVoucher />

## Konfiguracja

Limity klas konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz tego pliku znajdź następujące parametry:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` włącza lub wyłącza ograniczenia klas  
- `0` → Wyłączone  
- `1` → Włączone  

- `PercentofCavPerTeam` definiuje procent jednostek kawalerii dozwolonych na drużynę  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` określają, ilu graczy może korzystać z każdej klasy  

- `NumberofInfOfficers` kontroluje liczbę dostępnych ról oficerów  

- `MinimumNumOfPlayerForClassLimits` definiuje minimalną liczbę graczy na serwerze, przy której limity klas zaczynają obowiązywać  

Dostosuj te wartości, aby kontrolować, ilu graczy może wybrać każdą klasę i zbalansować serwer według swojego stylu gry.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe limity klas zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś limity klas na swoim **serwerze Over the Top WWI**. Dzięki temu możesz zbalansować składy drużyn i poprawić ogólne doświadczenie z gry.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
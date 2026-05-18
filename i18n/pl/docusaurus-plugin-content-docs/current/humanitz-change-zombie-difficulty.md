---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Zmień Trudność Zombie"
description: "Dowiedz się, jak dostosować ustawienia trudności zombie i AI na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmień Trudność Zombie"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Trudność zombie odgrywa kluczową rolę w kształtowaniu doświadczenia przetrwania w HumanitZ. Od siły i szybkości zombie, przez mnożniki pojawiania się, aż po wydarzenia AI z rajdami – te ustawienia decydują, jak niebezpieczny stanie się świat.

Wszystkie opcje trudności związane z zombie i AI konfiguruje się w pliku `GameServerSettings.ini`, co pozwala Ci w pełni kontrolować intensywność starć PvE na Twoim serwerze.

<InlineVoucher />

## Konfiguracja

Ustawienia trudności zombie kontrolujesz w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujące parametry:

```
;Trudność zdrowia gdzie 0=Bardzo Łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo Trudne, 5=Koszmar
ZombieDiffHealth=1

;Trudność szybkości gdzie 0=Bardzo Łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo Trudne, 5=Koszmar
ZombieDiffSpeed=2

;Trudność obrażeń gdzie 0=Bardzo Łatwe, 1=Łatwe, 2=Domyślne, 3=Trudne, 4=Bardzo Trudne, 5=Koszmar
ZombieDiffDamage=3

;Mnożnik ilości zombie, np. 2 oznacza dwa razy więcej zombie. 0.5 oznacza połowę liczby zombie.
ZombieAmountMulti=1

;Mnożnik ilości ludzkich bandytów, np. 2 oznacza dwa razy więcej bandytów. 0.5 oznacza połowę liczby bandytów.
HumanAmountMulti=1

;Zombie psy pojawiają się głównie w nocy. 2 oznacza dwa razy więcej zombie psów. 0.5 oznacza połowę liczby zombie psów.
ZombieDogMulti=1

;Czas w minutach potrzebny na respawn zombie, ustaw na 0, aby wyłączyć respawn.
ZombieRespawnTimer=90

;Gra czasem generuje wydarzenia AI, takie jak rajdy zombie lub ludzi na Twoją lokalizację. 0 = Wyłączone, 1 = Niskie, 2 = Domyślne, 3 = Wysokie, 4 = Szalone
AIEvent=2
```

Poniżej znajdziesz wyjaśnienie, co kontroluje każde ustawienie:

- `ZombieDiffHealth` – Kontroluje trudność zdrowia zombie  
- `ZombieDiffSpeed` – Kontroluje szybkość poruszania się zombie  
- `ZombieDiffDamage` – Kontroluje obrażenia zadawane przez zombie  
- `ZombieAmountMulti` – Mnoży całkowitą liczbę pojawiających się zombie  
- `HumanAmountMulti` – Mnoży liczbę pojawiających się ludzkich bandytów  
- `ZombieDogMulti` – Mnoży liczbę pojawiających się zombie psów  
- `ZombieRespawnTimer` – Określa czas respawnu zombie (0 wyłącza respawn)  
- `AIEvent` – Kontroluje częstotliwość wydarzeń rajdów AI  

Po wprowadzeniu zmian zapisz plik i zrestartuj serwer, aby nowe ustawienia zaczęły działać.



## Przykładowe Presety Trudności

### Łatwa konfiguracja zombie

Ta konfiguracja tworzy bardziej wyrozumiałe PvE z mniejszą liczbą wrogów i obniżonym poziomem zagrożenia.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Trudna konfiguracja zombie

Ta konfiguracja zwiększa siłę wrogów, tempo pojawiania się i częstotliwość wydarzeń, tworząc znacznie bardziej niebezpieczny świat.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Podsumowanie

Gratulacje! Dostosowując wartości związane z zombie w pliku `GameServerSettings.ini`, skutecznie spersonalizowałeś ustawienia trudności zombie na swoim serwerze HumanitZ. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
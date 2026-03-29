---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Konfiguracja systemu wskrzeszania"
description: "Dowiedz się, jak skonfigurować mechanikę wskrzeszania na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: System wskrzeszania
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System wskrzeszania w **Over the Top WWI** określa, jak gracze mogą wrócić do walki po upadku. Dostosowanie tych ustawień pozwala Ci kontrolować, jak wyrozumiała lub wymagająca jest rozgrywka.

Szybszy lub bardziej niezawodny system wskrzeszania może uczynić grę bardziej przystępną, podczas gdy surowsze ustawienia zwiększają realizm i konsekwencje błędów.

<InlineVoucher />

## Konfiguracja

System wskrzeszania konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdziesz następujące parametry:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` określa, ile czasu zajmuje wskrzeszenie gracza
- `ReviveChance` ustala szansę powodzenia wskrzeszenia
- `ReviveMaxDamage` definiuje maksymalne obrażenia, jakie gracz może mieć, aby nadal można go było wskrzeszać

Dostosuj te wartości, aby kontrolować, jak często wskrzeszenia się udają i ile trwa cały proces.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia systemu wskrzeszania zostaną automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś system wskrzeszania na swoim **serwerze Over the Top WWI**. Dzięki temu możesz precyzyjnie dostosować trudność walki i poprawić ogólne wrażenia z gry.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
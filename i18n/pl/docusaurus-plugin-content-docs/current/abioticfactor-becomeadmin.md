---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Zostań adminem"
description: "Dowiedz się, jak przyznać graczom prawa admina, aby mieć pełną kontrolę nad serwerem i lepsze zarządzanie rozgrywką → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W **Abiotic Factor** administratorzy serwera potrzebują podwyższonych uprawnień, aby zarządzać graczami, wykonywać komendy serwera lub modyfikować ustawienia podczas rozgrywki.

<InlineVoucher />

## Konfiguracja

Konfiguracja odbywa się przez plik `admin.ini`. Aby do niego dotrzeć, otwórz sekcję **Konfiguracje** w panelu administracyjnym serwera gier i znajdź plik `admin.ini`. Domyślnie plik powinien zawierać następujący wpis, gdzie możesz zdefiniować administratorów. Zamień wartości `ExampleID` na odpowiadające **SteamID64** graczy, którym chcesz przyznać prawa admina.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Podsumowanie

Po poprawnym dodaniu informacji i restarcie serwera, wskazany gracz będzie miał pełny dostęp admina w grze. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />
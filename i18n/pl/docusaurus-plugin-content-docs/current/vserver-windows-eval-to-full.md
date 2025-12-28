---
id: vserver-windows-eval-to-full
title: "VPS: Konwersja Windows Server Evaluation na Pełną Wersję"
description: "Dowiedz się, jak przekonwertować Windows Server Evaluation na Pełną Wersję → Sprawdź teraz"
sidebar_label: Konwersja Eval na Full
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Edycje Windows Server Evaluation są przeznaczone do testów i mają ograniczony czas działania. Aby kontynuować korzystanie z tej samej instalacji w środowisku produkcyjnym, edycję testową można przekonwertować na pełną wersję z licencją, bez konieczności reinstalacji systemu operacyjnego.

Microsoft wspiera taką konwersję na miejscu za pomocą narzędzia DISM, pod warunkiem, że posiadasz ważny klucz produktu dla docelowej edycji.

<InlineVoucher />



## Wymagania wstępne

Przed rozpoczęciem konwersji upewnij się, że masz ważny klucz produktu dla edycji Windows Server, na którą chcesz przejść, np. Standard lub Datacenter. Klucz produktu musi dokładnie odpowiadać docelowej edycji.



## Sprawdzenie aktualnej edycji

Aby zweryfikować, która edycja jest aktualnie zainstalowana, otwórz w trybie administratora Wiersz polecenia lub PowerShell i wykonaj następujące polecenie:

```powershell
DISM /Online /Get-CurrentEdition
```

Wynik pokaże identyfikator aktywnej edycji. Instalacje testowe zwykle wyświetlane są jako `ServerStandardEval` lub `ServerDatacenterEval`.



## Sprawdzenie obsługiwanych edycji docelowych

Nie każdą edycję można przekonwertować na dowolną inną. Aby zobaczyć, które licencjonowane edycje są dostępne dla Twojej instalacji, uruchom polecenie:

```
DISM /Online /Get-TargetEditions
```

Wyświetlone edycje to poprawne cele, na które można przeprowadzić konwersję.



## Aktualizacja Evaluation do Pełnej Wersji

Gdy znasz już docelową edycję i masz ważny klucz produktu, możesz rozpocząć aktualizację. Wartość `<TargetEdition>` musi odpowiadać jednej z obsługiwanych edycji zwróconych przez polecenie DISM.

Najczęściej używane edycje docelowe to:
- `ServerStandard`
- `ServerDatacenter`

Użyj poniższego polecenia, aby rozpocząć konwersję. Zamień `<TargetEdition>` na wybraną edycję, a `<ProductKey>` na swój 25-znakowy klucz produktu Windows Server:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Edycja systemu operacyjnego    | Uniwersalny klucz licencyjny Volume License |
| ------------------------------ | ------------------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832               |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF               |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H               |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33               |

Podczas procesu postęp może chwilowo się zatrzymać — to normalne zachowanie. Po zakończeniu konwersji wymagany jest restart, aby sfinalizować zmianę edycji.



## Weryfikacja wersji Windows Server

Po restarcie serwera otwórz ponownie Wiersz polecenia lub PowerShell w trybie administratora i wpisz:

```powershell
DISM /Online /Get-CurrentEdition
```

Wynik powinien teraz pokazać licencjonowaną edycję, np. `ServerStandard` lub `ServerDatacenter`, co potwierdza, że konwersja z wersji testowej zakończyła się sukcesem.

Na tym etapie zobaczysz znak wodny **Aktywuj Windows** w prawym dolnym rogu ekranu. Teraz możesz użyć zakupionej licencji Windows Server, aby aktywować edycję Standard lub Datacenter.



## Podsumowanie

Gratulacje! Właśnie pomyślnie zmieniłeś wersję Windows Server z EVAL na Pełną. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />
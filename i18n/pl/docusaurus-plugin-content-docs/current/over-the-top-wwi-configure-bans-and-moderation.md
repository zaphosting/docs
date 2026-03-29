---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Konfiguracja banów i moderacji"
description: "Dowiedz się, jak skonfigurować listy banów i ustawienia moderacji na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Bany & Moderacja
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Narzędzia moderacji w **Over the Top WWI** pozwalają Ci kontrolować zachowanie graczy i utrzymać uczciwe oraz przyjemne środowisko na Twoim serwerze. Konfigurując listy banów i ustawienia moderacji, możesz ograniczyć dostęp, zarządzać karami i przekazać jasne instrukcje dla graczy.

Te ustawienia są szczególnie przydatne na serwerach społecznościowych, gdzie wymagana jest aktywna moderacja.

<InlineVoucher />

## Konfiguracja

Ustawienia banów i moderacji konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu zarządzania serwerem gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik konfiguracyjny `ServerConfiguration.ini`. W tym pliku znajdź następujące parametry:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` określa plik zawierający graczy z banem stałym  
- `TempBanPathstring` określa plik zawierający graczy z banem tymczasowym  

- `CustomUnBanString` pozwala zdefiniować własną wiadomość, która informuje graczy, jak mogą poprosić o odbanowanie. Przykład: link do Discorda lub strony www

### Użycie pliku banów

Pliki z banami znajdują się w katalogu Twojego serwera i zawierają identyfikatory graczy.

Każdy zbanowany gracz powinien być wpisany w nowej linii w pliku:

```
SteamID1
SteamID2
SteamID3
```

Te pliki są automatycznie odczytywane przez serwer, aby zablokować dostęp wymienionym graczom. Dostosowanie tych ustawień pozwala Ci określić, jak banowanie jest obsługiwane i jak gracze mogą się odwołać.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Zaktualizowane ustawienia moderacji zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia banów i moderacji na swoim **serwerze Over the Top WWI**. Dzięki temu możesz skutecznie zarządzać zachowaniem graczy i utrzymać kontrolowane środowisko serwera.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
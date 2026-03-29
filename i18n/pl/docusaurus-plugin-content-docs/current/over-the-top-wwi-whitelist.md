---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Konfiguracja Whitelisty"
description: "Dowiedz się, jak włączyć i zarządzać whitelistą na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist pozwala Ci ograniczyć dostęp do Twojego **serwera gier Over the Top WWI**, tak aby mogli dołączyć tylko zatwierdzeni gracze. To super opcja dla prywatnych serwerów, społeczności czy środowisk testowych, gdzie chcesz mieć kontrolę nad dostępem.

Po włączeniu whitelisty, tylko gracze wpisani w pliku whitelisty będą mogli połączyć się z serwerem.

<InlineVoucher />

## Konfiguracja

Whitelistę konfiguruje się w pliku konfiguracyjnym serwera. Możesz go znaleźć i edytować w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdź następujące parametry:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` włącza lub wyłącza system whitelisty

- `False` → Wyłączona
- `True` → Włączona

- `WhiteListPathString` określa plik, w którym przechowywane są ID dozwolonych graczy

Gdy whitelist jest włączona, tylko gracze wpisani w określonym pliku będą mogli dołączyć do serwera.

## Zarządzanie whitelistą

Plik whitelisty zazwyczaj znajduje się w katalogu serwera i zawiera listę dozwolonych ID graczy.

Każde ID gracza musi być wpisane w nowej linii w pliku:

```
SteamID1
SteamID2
SteamID3
```

Upewnij się, że używasz poprawnych identyfikatorów graczy, bo inaczej dostęp zostanie zablokowany. Po aktualizacji pliku whitelisty lub zmianie `ServerConfiguration.ini`, zapisz zmiany i zrestartuj serwer. Whitelist będzie wtedy aktywna.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś whitelistę na swoim **serwerze gier Over the Top WWI**. Dzięki temu masz pełną kontrolę nad tym, kto może dołączyć do Twojego serwera i możesz utrzymać prywatne lub moderowane środowisko.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
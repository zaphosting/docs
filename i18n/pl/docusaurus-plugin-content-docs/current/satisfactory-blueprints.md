---
id: satisfactory-blueprints
title: "Satisfactory: Zarządzanie Blueprintami (Import/Eksport)"
description: "Dowiedz się, jak tworzyć, udostępniać i zarządzać własnymi blueprintami dla efektywnych budowli i układów w Satisfactory → Sprawdź teraz"
sidebar_label: Zarządzanie Blueprintami
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Satisfactory oferuje system własnych blueprintów, który pozwala użytkownikom tworzyć i dzielić się planami budowli z innymi członkami społeczności. Blueprinty obejmują wszystko — od efektywnych układów fabryk, przez misternie zaprojektowane salony, aż po skomplikowane systemy kolejowe.

Szeroki wybór blueprintów znajdziesz na stronie Satisfactory Calculator. Blueprinty można łatwo importować i eksportować.

<InlineVoucher />

## Zarządzanie Blueprintami

Zarządzanie blueprintami na serwerze Satisfactory odbywa się w całości przez FTP. Jeśli jeszcze nie wiesz, jak połączyć się z serwerem przez FTP, zajrzyj do naszego osobnego [poradnika Dostęp FTP](gameserver-ftpaccess.md), który pomoże Ci zacząć.

### Importowanie Blueprintów
Na początek potrzebujesz plików blueprintów, które chcesz wgrać. Składają się one z pliku `.sbp` oraz opcjonalnie z pliku konfiguracyjnego `.sbpcfg`. Pliki te mogą pochodzić z zaufanych źródeł społeczności lub być stworzone na innych instancjach gry.

Przed wgraniem plików zalecamy całkowite wyłączenie serwera przez panel zarządzania. Zapewnia to brak konfliktów plików lub problemów z pamięcią podczas przesyłania.

Następnie połącz się z serwerem przez klienta FTP. Po zalogowaniu przejdź do katalogu blueprintów:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

W tym katalogu musi znajdować się podfolder dokładnie o nazwie świata (lub sesji), z którego korzystasz. Ta nazwa odpowiada nazwie pliku `.sav` na serwerze. Jeśli folder jeszcze nie istnieje, utwórz go ręcznie, wpisując dokładną nazwę pliku zapisu.

Gdy masz już odpowiedni podfolder, wgraj do niego pliki blueprintów. Pamiętaj, aby dołączyć zarówno plik `.sbp`, jak i, jeśli jest dostępny, plik `.sbpcfg`. Po zakończeniu przesyłania uruchom serwer ponownie. Po restarcie wgrane blueprinty będą dostępne w grze przez interfejs Projektanta Blueprintów, dzięki czemu możesz z nich normalnie korzystać.

### Eksportowanie Blueprintów

Eksport blueprintów z serwera Satisfactory oznacza pobranie plików blueprintów na lokalny komputer. Zacznij od wyłączenia serwera, co gwarantuje, że pliki blueprintów są spójne i dostępne. Otwórz klienta FTP i połącz się z serwerem. Przejdź do katalogu:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Znajdź podfolder odpowiadający światu/sesji, z której chcesz eksportować blueprinty. W tym folderze znajdziesz pliki `.sbp` oraz opcjonalne `.sbpcfg` dla każdego zapisanego blueprintu.

Pobierz wybrane pliki blueprintów bezpośrednio na swój komputer za pomocą klienta FTP. Po zakończeniu transferu możesz je zarchiwizować, otworzyć lokalnie lub zaimportować do innej instalacji lub środowiska serwera. Jeśli planujesz ponowne użycie blueprintów na innym serwerze, postępuj dokładnie według procedury importu opisanej powyżej.

## Podsumowanie

Zarządzanie blueprintami na serwerze Satisfactory jest proste, jeśli postępujesz zgodnie z tym poradnikiem. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />
---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Import własnego świata"
description: "Dowiedz się, jak zaimportować i udostępnić własne światy Minecraft Bedrock na swoim serwerze, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Import własnego świata
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Minecraft Bedrock Edition pozwala na tworzenie własnych światów i korzystanie z nich na Twoim serwerze. W tym poradniku pokażemy Ci, jak zaimportować własny świat do Twojego Minecraft: Bedrock Serwera, aby podzielić się nim ze znajomymi.

<InlineVoucher />

## Przygotowanie

Aby zaimportować świat do swojego Minecraft Bedrock Serwera, musisz połączyć się przez FTP. Jeśli nie masz z tym doświadczenia, polecamy zajrzeć do [poradnika o dostępie FTP](gameserver-ftpaccess.md).

Upewnij się, że masz już zapisany świat, który chcesz zaimportować, na swoim komputerze. Świat powinien znajdować się w folderze z odpowiednimi plikami.
Jeśli chcesz przesłać świat z trybu single-player Minecraft: Bedrock, znajdziesz go pod następującą ścieżką:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Instalacja

### Zatrzymaj serwer

Przed rozpoczęciem importu musisz zatrzymać swój Minecraft Bedrock Serwer. Zapewni to brak utraty danych i płynny przebieg importu.

### Prześlij świat

Przejdź przez FTP do katalogu, w którym przechowywane są światy Twojego serwera. Ścieżka to zazwyczaj:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Znajdziesz tam foldery wszystkich światów aktualnie zapisanych na Twoim serwerze. Każdy świat ma unikalną nazwę.

Prześlij folder swojego świata, który chcesz zaimportować, do tego katalogu. Upewnij się, że nazwa folderu nie została zmieniona, bo Minecraft inaczej nie rozpozna świata.

Następnie otwórz plik `server.properties`, który znajduje się w głównym folderze serwera, i zmień wartość `level-name` na nazwę folderu Twojego świata:

```
level-name=Bedrock level
```
:::tip
Jeśli chcesz wrócić do domyślnego świata, wystarczy, że zmienisz wartość z powrotem na `Bedrock level` i zrestartujesz serwer!
:::

### Uruchom serwer

Po pomyślnym przesłaniu świata, uruchom ponownie swój serwer. Zaimportowany świat powinien teraz ładować się automatycznie.

### Sprawdź zmiany

Połącz się z serwerem i sprawdź, czy zaimportowany świat został poprawnie załadowany. Teraz powinieneś móc grać w nowym świecie. Jeśli coś nie działa jak należy, sprawdź jeszcze raz kroki i upewnij się, że foldery świata mają poprawne nazwy i są na właściwym miejscu.

## Podsumowanie

Import własnego świata do Minecraft Bedrock Serwera to prosty proces, który pozwala dzielić się swoimi kreacjami z innymi. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
---
id: satisfactory-addmods
title: "Satisfactory: Instalacja Modów"
description: "Dowiedz się, jak bezpiecznie zarządzać i instalować mody na serwerach Satisfactory, jednocześnie chroniąc swój savegame → Sprawdź teraz"
sidebar_label: Instalacja Modów
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**WAŻNE**

Mody obecnie nie działają!
:::

:::info
**UWAGA**

Mody **nie są oficjalnie** wspierane przez twórców, ale są tolerowane!

W najgorszym wypadku instalacja modów może uszkodzić savegame, uczynić go tymczasowo niegrywalnym po aktualizacji lub całkowicie zniszczyć!

Przed instalacją modów **koniecznie zrób kopię zapasową** i regularnie twórz backupy na wszelki wypadek!
:::

<InlineVoucher />

## Instalacja zmodyfikowanego Satisfactory na serwerze

Aby w ogóle móc instalować mody na swoim serwerze, musisz najpierw zamówić Modded Satisfactory Server: https://zap-hosting.com/en/satisfactory-server-hosting/
Jeśli masz już wynajęty serwer Satisfactory, grę możesz zmienić w każdej chwili dzięki systemowi chmurowemu, jak opisano w [Zmiana Gry](gameserver-gameswitch.md).

## Instalacja Mod-Managera

Narzędzie "SatisfactoryModManager" znacznie ułatwia zarządzanie i instalację modów i można to zrobić kilkoma kliknięciami.
Narzędzie jest dostępne na Windows i Linux i można je pobrać tutaj: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Na podanej stronie znajdziesz wszystkie wersje; zazwyczaj powinno się korzystać z najnowszej wersji, czyli pierwszego wpisu od góry.
Narzędzie pobierasz pod "Assets". W zależności od systemu operacyjnego (Windows lub Linux) kliknij odpowiedni plik, który automatycznie rozpocznie pobieranie lub, w zależności od przeglądarki i ustawień, będziesz musiał je potwierdzić.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Po zakończeniu pobierania uruchom plik i zainstaluj mod manager na swoim PC, wybierając opcje, które Ci odpowiadają podczas instalacji.

## Instalacja Modów

Te same mody muszą być zainstalowane 1:1 na kliencie (przez wszystkich graczy!) oraz na serwerze, aby połączenie było możliwe i nie dochodziło do crashów.
Na początku mody są kompilowane i instalowane na kliencie, aby potem można je było przenieść na serwer.

:::info
**OSTRZEŻENIE**

Nie wszystkie mody są kompatybilne z multiplayerem!

Jeśli mod jest kompatybilny z multiplayerem, zazwyczaj jest to zawsze zaznaczone w opisie moda.

Uwaga: Nawet jeśli mod jest oznaczony jako kompatybilny z multiplayerem, nie jest to gwarancja!
:::

### Klient

Mody są zapisywane w profilach, dzięki czemu np. można testować inne mody w świecie testowym i jednym kliknięciem wrócić do standardowych modów.
Najpierw wybierz profil lub stwórz nowy, jak pokazano na zrzucie ekranu.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Najpierw ustaw filtr na "Compatible", aby wyświetlały się tylko mody aktualnie kompatybilne z wersją.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mody można teraz instalować po prostu klikając ikonę pobierania, jeśli jest pewność, że mod jest kompatybilny z multiplayerem, jak opisano wyżej.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Serwer

Po zainstalowaniu wszystkich wybranych modów na kliencie i upewnieniu się, że mod jest kompatybilny z multiplayerem, mody można teraz zainstalować na serwerze.
Aby uniknąć problemów z transferem zmian, upewnij się, że serwer jest wyłączony!

Połącz się teraz z serwerem przez FTP, aby móc przesłać mody w kolejnym kroku.
Wszystko o połączeniu FTP opisaliśmy w [Dostęp przez FTP](gameserver-ftpaccess.md).
Po nawiązaniu połączenia otwórz ścieżkę folderu: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Teraz musisz otworzyć lokalny folder Satisfactory na swoim PC.
Kroki różnią się nieco między Steam a Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Jeśli masz zainstalowany Satisfactory przez Steam, możesz otworzyć folder bezpośrednio przez klienta Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games nie ma przycisku do otwarcia folderu instalacji, więc trzeba to zrobić ręcznie.
Otwórz Eksplorator Windows i przejdź do folderu, gdzie zainstalowałeś Epic Games.
Zazwyczaj jest to ścieżka: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Mody zainstalowane na kliencie przez mod managera muszą teraz zostać przesłane przez FTP.
Aby dostać się do samych modów, trzeba kolejno otworzyć foldery: `FactoryGame -> Mods`.

Teraz zaznacz wszystkie foldery **oprócz folderu SML** przytrzymując klawisz CTRL i klikając na foldery.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Zaznaczone foldery przeciągnij i upuść do wcześniej otwartego folderu modów na FTP.

## Uruchomienie serwera

Po przesłaniu modów serwer można po prostu uruchomić przez panel główny. Serwer powinien być teraz dostępny do dołączenia, o czym dowiesz się więcej z [Poradnika Połączenia z Serwerem](satisfactory-connect.md).

<InlineVoucher />
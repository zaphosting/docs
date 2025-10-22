---
id: minecraft-faultyworld
title: "Minecraft: Usuń uszkodzone chunk'i ze świata"
description: "Dowiedz się, jak naprawić błędy chunków w Minecraft i przywrócić płynną rozgrywkę poprzez usunięcie uszkodzonych fragmentów świata → Sprawdź teraz"
sidebar_label: Uszkodzony świat (Chunki)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Twój świat jest częściowo przeciążony lub zawiera błędy, co ogranicza rozgrywkę i nie możesz już grać poprawnie? Może się tak zdarzyć, jeśli w niektórych obszarach świata jest za dużo przedmiotów lub jeśli ogólnie zawiera uszkodzone chunk'i. Błąd chunków to dość powszechny glitch w Minecraft, który pojawia się, gdy chunk ładuje się niepoprawnie.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Przygotowanie

Istnieje kilka narzędzi, które pozwalają modyfikować światy Minecraft. Jednym z najpopularniejszych jest [MCA Selector](https://github.com/Querz/mcaselector), którego użyjemy w tym poradniku. Pobierz plik `MCA_Selector_Setup.exe`.

Poza tym potrzebujesz plików swojego świata na komputerze. Świat możesz pobrać przez FTP. Jeśli nie znasz FTP, polecamy zajrzeć do naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md). Pobierz katalog `world` z katalogu serwera gier.

## Załaduj świat

Gdy już pobierzesz narzędzie i świat, możesz zaimportować świat do programu. Kliknij w narzędziu w nawigacji `File -> Open World`. Po tym powinieneś zobaczyć swój świat, tak jak na naszym przykładzie.

:::info
W zależności od współrzędnych może być konieczne najpierw oddalenie widoku myszką, aby znaleźć odpowiedni obszar.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Usuń chunk(i)

Pojedyncze pola (chunk'i) możesz zaznaczyć kliknięciem myszki. Znajdź i wybierz chunk'i, które sprawiają problemy i chcesz je usunąć. Następnie kliknij w nawigacji `Selection -> Delete selected Chunks`.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

W efekcie wybrane chunk'i zostaną usunięte i możesz ponownie przesłać świat na swój serwer przez FTP.

## Podsumowanie

Gratulacje, pomyślnie usunąłeś uszkodzone chunk'i i powinieneś móc ponownie normalnie grać na tym świecie. W razie dalszych pytań lub pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
---
id: minecraft-worlds
title: "Minecraft: Zarządzanie światami"
description: "Dowiedz się, jak zarządzać, konwertować i tworzyć kopie zapasowe światów Minecraft na różnych platformach, aby chronić postępy w grze i zapewnić płynność → Sprawdź teraz"
sidebar_label: Zarządzaj Światami
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Minecraft przechowuje zapisy gry jako **światy**, z których każdy jest osobnym, samodzielnym zapisem. W tym poradniku pokażemy, jak zarządzać światami na Twoim serwerze gier Minecraft, w tym jak konwertować światy między platformami, regenerować światy, tworzyć kopie zapasowe lokalnych i serwerowych światów oraz jak przesyłać światy na serwer.

<InlineVoucher />

## Przygotowanie

Aby zarządzać swoimi światami, musisz najpierw uzyskać dostęp do swojego serwera gier Minecraft przez FTP. Jeśli nie znasz się na FTP, sprawdź nasz [poradnik Dostęp przez FTP](gameserver-ftpaccess.md).

## Porównanie różnic między platformami

Kluczową różnicą między vanilla serwerem a platformami serwerowymi jest to, że vanilla serwery łączą normalny świat, Nether i The End w jeden zapis.

Natomiast alternatywne platformy serwerowe, takie jak Spigot, PaperMC i Bukkit, dzielą każdy wymiar na osobny zapis świata. Poniżej znajdziesz tabelę porównującą, jak przykładowy świat o nazwie **zapdocs** jest traktowany przez oba typy platform serwerowych.

| Wymiar świata   | Vanilla Server (połączony) | Platformy serwerowe (osobne)  |
| --------------- | -------------------------- | ----------------------------- |
| Normalny/Overworld | zapdocs                   | zapdocs                       |
| Nether           | zapdocs                   | zapdocs_nether                |
| The End          | zapdocs                   | zapdocs_the_end               |

## Konwersja światów

Przy przełączaniu się między vanilla serwerem a platformą serwerową możesz chcieć zachować swój zapis świata. Ze względu na powyższe różnice, będziesz musiał dostosować strukturę plików, aby wyodrębnić lub połączyć osobne światy Nether i The End, w zależności od działania.

:::info
To jest wymagane tylko wtedy, gdy przechodzisz między vanilla a platformami serwerowymi i chcesz zachować oraz przenieść istniejący świat. Jeśli po prostu zmieniasz się między vanilla lub różnymi platformami serwerowymi, nie musisz nic konwertować.
:::

:::note
Upewnij się, że wyłączysz serwer przed rozpoczęciem, aby uniknąć konfliktów lub cofnięć zmian.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Konwersja z Vanilla" default>

Aby przekonwertować świat z vanilla na format platformy serwerowej, musisz wyodrębnić określone foldery, tworząc nowe, osobne światy dla każdego wymiaru. Oczywiście zakładamy, że przenosisz wszystkie światy na nowy serwer działający na platformie serwerowej takiej jak Spigot, PaperMC lub Bukkit.

Połącz się z serwerem przez FTP i przejdź do ścieżki `../vanilla/[twoj_swiat]`, aby uzyskać dostęp do zapisu świata, który chcesz przekonwertować. Znajdź foldery **DIM1** i **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

Folder **DIM1** zawiera dane The End, natomiast folder **DIM-1** dane Nether.

Musisz przenieść każdy z tych folderów do osobnego folderu nowego świata, według poniższych zasad:
- Dla Nether utwórz nowy folder `[twoj_swiat]_nether` w katalogu głównym. Przenieś do niego folder **DIM-1**.
- Podobnie dla The End utwórz nowy folder `[twoj_swiat]_the_end` w katalogu głównym. Przenieś do niego folder **DIM1**.

:::info
Może być konieczne nadpisanie folderów `DIM`, ale to normalne, ponieważ platformy serwerowe domyślnie generują wszystkie wymiary od razu.
:::

W tym przykładzie świat nazywa się `world`, więc utworzono nowe foldery `world_nether` i `world_the_end` w katalogu głównym, a odpowiednie foldery `DIM` zostały do nich przeniesione.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Teraz trzy osobne światy są gotowe do użycia na platformach serwerowych.

</TabItem>

<TabItem value="converting-to-vanilla" label="Konwersja do Vanilla">

Aby przekonwertować świat z platformy serwerowej na format vanilla, proces jest praktycznie taki sam, ale odwrotny. Musisz wyodrębnić dane z osobnych światów Nether i The End i połączyć je w jeden zapis świata. Oczywiście zakładamy, że przenosisz połączony świat na nowy serwer vanilla.

Połącz się z serwerem przez FTP i przejdź do katalogu głównego. Znajdź trzy osobne foldery światów: `[twoj_swiat]`, `[twoj_swiat]_nether` i `[twoj_swiat]_the_end`, gdzie `[twoj_swiat]` to nazwa Twojego świata.

Otwórz folder `[twoj_swiat]_nether` i przenieś folder `DIM-1` do głównego folderu `[twoj_swiat]`. W tym przykładzie, jak wcześniej, świat nazywa się domyślnie `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Teraz powtórz to samo dla folderu `[twoj_swiat]_the_end` i przenieś folder `DIM1` do głównego folderu `[twoj_swiat]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Połączony świat jest teraz gotowy do użycia na vanilla serwerze.

</TabItem>
</Tabs>

## Generowanie światów

Generowanie światów jest proste i możesz wybrać, czy chcesz wygenerować całkowicie nowy świat, czy zregenerować obecny jako świeży. Minecraft korzysta z systemu **seedów**, gdzie każdy świat ma unikalny seed, co oznacza, że znając seed, możesz odtworzyć dokładną kopię startową świata.

<Tabs>
<TabItem value="generating-new" label="Wygeneruj nowy świat" default>

Aby wygenerować nowy świat, po prostu wyłącz serwer i połącz się z nim przez FTP. Otwórz plik konfiguracyjny `server.properties`, albo przez sekcję **Konfiguracje** w panelu webowym serwera, albo przez FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Teraz, aby wygenerować nowy świat, możesz:
- Przez FTP znaleźć świat o nazwie zgodnej z parametrem `level-name` w pliku konfiguracyjnym i go usunąć.
- Edytować parametr `level-name` w pliku konfiguracyjnym na inną nazwę i zapisać.

Jeśli chcesz zachować stary zapis, polecamy opcję 2, dzięki czemu stary świat pozostanie na serwerze, ale będzie "nieaktywny".

Teraz uruchom serwer ponownie, a serwer zauważy brak świata o nazwie `level-name` i wygeneruje nowy świat z nowym seedem.

</TabItem>

<TabItem value="regenerating-current" label="Zregeneruj obecny świat">

Aby zregenerować obecny świat, musisz znać seed. Możesz go sprawdzić w sekcji **Konsola** na panelu webowym serwera lub bezpośrednio w grze (wymagane uprawnienia OP).

Wpisz komendę `/seed` w konsoli lub w grze, która zwróci wartość **seed** obecnego świata. Zapisz ten seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Znając seed, musisz zmienić parametr `level-seed` w pliku konfiguracyjnym `server.properties`. Możesz to zrobić przez sekcję **Konfiguracje** w panelu webowym lub przez FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Upewnij się, że wyłączysz serwer przed edycją, aby plik został poprawnie zapisany.
:::

Zmień parametr `level-seed` na wartość seeda i zapisz plik. Połącz się z serwerem przez FTP.

Aby zregenerować świat, możesz:
- Przez FTP znaleźć świat o nazwie zgodnej z parametrem `level-name` i go usunąć.
- Edytować parametr `level-name` na inną nazwę i zapisać.

Jeśli chcesz zachować stary zapis, polecamy opcję 2, dzięki czemu stary świat pozostanie na serwerze, ale będzie "nieaktywny".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Uruchom serwer ponownie, a serwer zauważy brak świata o nazwie `level-name` i zregeneruje obecny świat, używając seeda podanego w parametrze `level-seed`.

</TabItem>
</Tabs>

## Kopia zapasowa światów

### Lokalne zapisy

Lokalne zapisy światów to te, które stworzyłeś grając w trybie single player. Znajdziesz je w folderze Windows AppData, dokładnie pod ścieżką:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Możesz łatwo dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania ścieżkę: `%appdata%/.minecraft/saves/`. Po prostu kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

W tym folderze zobaczysz wszystkie lokalne zapisy światów w jednym miejscu.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Dostęp do zapisów przez FTP

Tworzenie kopii zapasowej zapisu świata z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, po prostu przejdź do katalogu głównego platformy serwerowej, której używasz. Zapisy światów znajdują się bezpośrednio tam, a domyślna nazwa świata to `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatyczna kopia zapasowa

Oferujemy również opcję automatycznego tworzenia kopii zapasowych zapisu świata (i pliku konfiguracyjnego) bezpośrednio przez nasz panel webowy. Wystarczy wejść do panelu swojego serwera gier i przejść do sekcji **Narzędzia->Kopie zapasowe**. Tam możesz skonfigurować różne opcje harmonogramu automatycznych kopii zapasowych. Udostępniamy 10 GB darmowej przestrzeni na kopie zapasowe, gdzie będą przechowywane Twoje backupy. Więcej informacji o kopiach zapasowych znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Przesyłanie zapisu świata

Podobnie jak przy tworzeniu kopii zapasowej, przesyłanie zapisu świata jest proste. Najpierw upewnij się, że połączyłeś się z serwerem gier przez klienta FTP. Gdy jesteś gotowy, przejdź do katalogu głównego platformy serwerowej, której używasz.

:::info Światy Vanilla & Platform Serwerowych
Pamiętaj, że vanilla serwer i platformy serwerowe przechowują światy w nieco innym formacie.

Jeśli przenosisz zapis z vanilla na platformę serwerową taką jak PaperMC lub odwrotnie, sprawdź sekcję konwersja światów w tym poradniku.
:::

Po prostu przeciągnij i upuść dowolny zapis świata do katalogu głównego przez klienta FTP, a zostanie on przesłany na Twój serwer.

:::tip
Warto skopiować nazwę folderu zapisu gry, który przesłałeś, ponieważ będzie Ci potrzebna, jeśli chcesz go aktywować w następnej sekcji.
:::

## Aktywacja zapisu świata

Aby użyć konkretnego zapisu świata, musisz edytować plik konfiguracyjny `server.properties`, a dokładniej parametr `level-name`.

Możesz to zrobić przez sekcję **Konfiguracje** w panelu webowym serwera lub przez FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

W pliku znajdź parametr `level-name` i zmień go tak, aby odpowiadał nazwie folderu Twojego zapisu świata. Jeśli używasz platformy serwerowej, użyj nazwy głównego folderu, a nie folderów `_nether` czy `_the_end`.





## Podsumowanie

Teraz wiesz, jak pewnie zarządzać swoimi światami Minecraft. Od konwersji zapisów między vanilla a platformami serwerowymi, przez generowanie nowych światów, regenerację starych za pomocą seedów, tworzenie solidnych kopii zapasowych, przesyłanie własnych światów, aż po ich aktywację na serwerze. Z tą wiedzą możesz sprawnie zarządzać swoimi światami i dbać o bezpieczeństwo oraz porządek swoich przygód.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
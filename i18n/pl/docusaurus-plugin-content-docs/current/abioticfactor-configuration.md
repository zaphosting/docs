---
id: abioticfactor-configuration
title: "Abiotic Factor: Konfiguracja Serwera"
description: "Dowiedz się, jak dostosować ustawienia serwera Abiotic Factor, aby zoptymalizować rozgrywkę i wydajność serwera → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Abiotic Factor oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować do swoich potrzeb. W tym poradniku omówimy wszystkie dostępne obecnie parametry konfiguracyjne i wyjaśnimy je szczegółowo.

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym Twojego serwera gier i wyszukanie tam odpowiednich opcji, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowy plik, możesz to zrobić w sekcji **Konfiguracje** w panelu administracyjnym serwera gier, klikając niebieski przycisk edycji pliku, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Otworzy się wtedy edytor tekstu bezpośrednio na stronie, umożliwiający edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda zajmuje więcej czasu, a jeśli chcesz bezpośrednio edytować zawartość pliku, lepiej użyć sekcji **Konfiguracje** w panelu administracyjnym serwera gier, jak wspomniano wyżej.

</TabItem>
</Tabs>

## Opcje Konfiguracji Serwera

Poniżej znajdziesz tabele z informacjami o szerokim zakresie opcji konfiguracyjnych dostępnych dla serwerów dedykowanych Abiotic Factor.

### Ważne Ustawienia Serwera

Te ustawienia można zmieniać tylko bezpośrednio przez panel administracyjny serwera gier w sekcji **Ustawienia**.

| Nazwa Parametru    | Przykład                 | Opis                                                                     |
| ------------------ | ------------------------ | ------------------------------------------------------------------------ | 
| Server Name        | ZAP-Hosting Docs Test    | Ustaw nazwę swojego serwera                                              |
| Password           | iLoveZAP!2024            | Ustaw hasło do serwera lub pozostaw puste, jeśli brak hasła             |

Po dokonaniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych ustawień.

### Ustawienia Konfiguracji Rozgrywki

Abiotic Factor oferuje szeroki zakres opcji konfiguracyjnych rozgrywki, nazwanych **Sandbox Settings**. Plik o nazwie **SandboxSettings.ini** powinien znajdować się w głównym folderze `world` podczas dostępu do serwera przez FTP.

Jeśli nie widzisz tego pliku, utwórz go lokalnie na swoim komputerze i skopiuj następującą zawartość: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Następnie możesz dostosować wartości według własnych preferencji. Po zakończeniu prześlij ten plik do głównego folderu `world` przez FTP, pod ścieżką:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

W poniższej tabeli podsumowujemy kilka kluczowych ustawień rozgrywki z pliku **SandboxSettings.ini**. Jeśli chcesz zobaczyć wszystkie dostępne opcje, sprawdź [Oficjalną stronę GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Nazwa Parametru             | Przykład    | Opis                                                                    |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Włącz lub wyłącz pojawianie się łupów na mapie                         |
| PowerSocketsOffAtNight       | true/false | Włącz lub wyłącz wyłączanie zasilania w nocy                           |
| DayNightCycleSpeedMultiplier | 1.0        | Ustaw mnożnik prędkości cyklu dnia i nocy                              |
| EnemySpawnRate               | 1.0        | Ustaw częstotliwość pojawiania się wrogów                             |
| EnemyHealthMultiplier        | 1.0        | Ustaw mnożnik zdrowia wrogów                                           |
| EnemyPlayerDamageMultiplier  | 1.0        | Ustaw mnożnik obrażeń, jakie wrogowie zadają graczom                   |
| DetectionSpeedMultiplier     | 1.0        | Ustaw mnożnik szybkości wykrywania graczy przez wrogów                 |
| PlayerXPGainMultiplier       | 1.0        | Ustaw mnożnik zdobywanego doświadczenia przez graczy                   |
| ItemStackSizeMultiplier      | 1.0        | Ustaw mnożnik maksymalnej liczby przedmiotów w jednym slocie ekwipunku |
| ItemDurabilityMultiplier     | 1.0        | Ustaw mnożnik wytrzymałości przedmiotów                                |
| ShowDeathMessages            | true/false | Włącz lub wyłącz powiadomienia o śmierci jednostek                     |
| AllowRecipeSharing           | true/false | Włącz lub wyłącz możliwość dzielenia się przepisami na przedmioty      |

Po dokonaniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer użyje podanych ustawień.

<InlineVoucher />
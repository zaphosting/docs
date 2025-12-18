---
id: valheim-plus
title: "Valheim: Serwer Valheim Plus"
description: "Dowiedz się, jak ulepszyć rozgrywkę w Valheim dzięki Valheim Plus, z lepszymi funkcjami i upgrade'ami serwera → Sprawdź teraz"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

:::info
Valheim Plus to modyfikacja po stronie klienta. Pozwala na zmiany w podstawowej grze.
:::

<InlineVoucher />

## Instalacja Valheim Plus na kliencie

Najpierw musisz otworzyć folder Valheim na swoim PC.  
Aby to zrobić, kliknij prawym przyciskiem myszy na Valheim w bibliotece Steam, wybierz "***Zarządzaj***" w opcjach, a następnie "***Przeglądaj pliki lokalne***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Po otwarciu tego folderu, musisz pobrać plik "***WindowsClient.zip***".  
Plik "***WindowsClient.zip***" możesz pobrać [tutaj](https://github.com/valheimPlus/ValheimPlus/releases) (przejdź do sekcji "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Następnie zawartość "***WindowsClient.zip***" należy rozpakować do wcześniej otwartego folderu serwera Valheim.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Potem możesz uruchomić Valheim i konfiguracja klienta jest zakończona.

## Instalacja Valheim Plus na serwerze

Aby zmienić grę, najpierw otwieramy zakładkę gier na naszym serwerze:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Teraz szukamy Valheim Plus w sekcji "Dostępne gry" i klikamy przycisk pobierania:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Po tym serwer zostanie przeinstalowany. Po zakończeniu reinstalacji możesz usunąć hasło w zakładce "**Konfiguracje**" i teraz możesz zrobić upgrade na więcej slotów.

## Upgrade slotów

Aby wykonać upgrade slotów, musisz otworzyć funkcję "**UP and Downgrade**" w panelu głównym serwera gier.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Teraz wybierz pożądaną liczbę slotów na stronie UP and Downgrade.

:::info
Tutaj płacisz tylko za "**dopłatę**", która jest liczona proporcjonalnie do pozostałego czasu działania
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Aby zakończyć upgrade, na dole strony wybierz metodę płatności.  
Po wybraniu kliknij przycisk "***Wykonaj upgrade***" i upgrade zostanie przeprowadzony.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Konfiguracja Valheim Plus

Aby otworzyć plik konfiguracyjny, musisz wejść na stronę "**Konfiguracje**" w panelu serwera gier, gdzie zobaczysz "*ValheimPlus: valheim_plus.cfg*".  
Możesz go otworzyć klikając niebieską ikonę obok pliku konfiguracyjnego.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Lista wszystkich komend, które możesz użyć w pliku konfiguracyjnym:

### [Player]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany gracza |
| baseMegingjordBuff | 150 (float) | zwiększa udźwig o 150 |
| baseMaximumWeight | 300 (float) | ustawia maksymalny udźwig na 300 |
| baseAutoPickUpRange | 2 (float) | ustawia zasięg podnoszenia przedmiotów na 2 |
| disableCameraShake | true / false | włącza lub wyłącza drgania kamery |
| experienceGainedNotifications | true / false | włącza lub wyłącza wyświetlanie zdobytych punktów doświadczenia w lewym górnym rogu |

### [Food]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany dotyczące jedzenia |
| foodDuration | 0-100% | zmienia czas trwania efektu jedzenia o ustawiony procent |

### [Fermenter]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany fermentera |
| fermenterDuration | 2400 (float) = 48 godzin w grze | ustawia czas produkcji w fermenterze, im niższa wartość tym szybsza produkcja |
| fermenterItemsProduced | 6 (integer) | ustawia liczbę przedmiotów produkowanych w fermenterze |

### [Furnace]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany pieca |
| maximumOre | 10 (integer) | ustawia maksymalną ilość rudy w piecu |
| maximumCoal | 20 (integer) | ustawia maksymalną ilość węgla w piecu |
| productionSpeed | 30 (float) | ustawia czas produkcji w piecu, im niższa wartość tym szybsza produkcja |
| coalUsedPerProduct | 2 (integer) | ustawia ilość węgla zużywanego na produkt |

### [Kiln]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany w piecu do wypalania (Kiln) |
| productionSpeed | 15 (float) | ustawia czas produkcji w piecu, im niższa wartość tym szybsza produkcja |
| maximumWood | 25 (integer) | ustawia maksymalną ilość drewna w piecu |

### [Items]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany przedmiotów |
| noTeleportPrevention | true / false | zapobiega użyciu teleportu |
| baseItemWeight | 0 (float) | ustawia wagę przedmiotów, -50% = mniejsza waga, +50% = większa waga |
| itemStackMultiplier | 0 (float) | ustawia maksymalną liczbę przedmiotów w stacku, tylko wartości dodatnie. 50 = 50% więcej maksymalnych przedmiotów w stacku. *uwaga* jeśli zmniejszysz tę wartość, wszystko powyżej zostanie usunięte |

### [Building]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany budynków |
| noInvalidPlacementRestriction | true / false | usuwa ograniczenie *nieprawidłowego umiejscowienia* |
| noWeatherDamage | true / false | usuwa uszkodzenia budynków spowodowane pogodą (np. deszcz) |
| maximumPlacementDistance | 5 (float) | ustawia maksymalny zasięg stawiania |

### [Beehive]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany w ulu |
| maximumHoneyPerBeehive | 4 (integer) | ustawia maksymalną ilość miodu z ula |
| honeyProductionSpeed | 1200 (float) = 24 godziny w grze | ustawia czas produkcji miodu, im niższa wartość tym szybsza produkcja |

### [Server]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany serwera |
| maxPlayers | 10 (int) | ustawia liczbę slotów, będzie ustawione zgodnie z wartością przy UP- i Downgrade |
| disableServerPassword | true / false | usuwa hasło serwera |
| enforceConfiguration | true / false | jeśli włączone, tylko gracze z taką samą konfiguracją mogą dołączyć do serwera |
| enforceMod | true / false | jeśli włączone, tylko gracze z tym samym modem mogą dołączyć do serwera |

### [Map]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany mapy |
| exploreRadius | 100 (float) | ustawia promień wokół każdego gracza, w którym mapa jest odkrywana |
| shareMapProgression | true / false | jeśli włączone, odkrywanie mapy jest współdzielone między graczami, tylko widoczni gracze mają na to wpływ |

### [Hotkeys]

Listę możliwych klawiszy znajdziesz [tutaj](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | przewiń do przodu |
| rollBackwards | F10 | przewiń do tyłu |
| enterAdvancedBuildingMode | F1 | zamraża obiekty i pozwala na zaawansowaną kontrolę |
| exitAdvancedBuildingMode | F3 | kończy zaawansowany tryb budowania i odblokowuje obiekty |
| enterAdvancedEditingMode | Keypad0 | wybrany obiekt jest zaznaczany i modyfikowany w AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | potwierdza zmiany wszystkich zaznaczonych i zmodyfikowanych obiektów |
| resetAdvancedEditingMode | F7 | resetuje pozycję i rotację zaznaczonych obiektów w AEM |
| abortAndExitAdvancedEditingMode | F8 | resetuje pozycję i rotację zaznaczonych obiektów w AEM i wychodzi z trybu AEM |

### [AdvancedBuildingMode]

| Komenda | Wartości | Funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany w zaawansowanym trybie budowania |

### [AdvancedEditingMode]

| komenda | wartości | funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany w zaawansowanym trybie edycji |

### [Stamina]

| komenda | wartości | funkcja |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | włącza lub wyłącza zmiany wytrzymałości |
| dodgeStaminaUsage | 10 (float) | ustawia ilość staminy zużywanej na unik |
| encumberedStaminaDrain | 10 (float) | ustawia ilość staminy zużywanej przy obciążeniu |
| sneakStaminaDrain | 5 (float) | ustawia ilość staminy zużywanej przy cichym poruszaniu się |
| runStaminaDrain | 10 (float) | ustawia ilość staminy zużywanej przy bieganiu |
| staminaRainDelay | 1 (float) | ustawia opóźnienie regeneracji staminy |
| staminaRain | 5 (float) | ustawia ilość staminy regenerowanej |
| swimStaminaDrain | 5 (float) | ustawia ilość staminy zużywanej podczas pływania |
| jumpStaminaUsage | 10 (float) | ustawia ilość staminy zużywanej podczas skoku |


<InlineVoucher />
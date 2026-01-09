---
id: palworld-configuration
title: "Palworld: Konfiguracja serwera Palworld"
description: "Dowiedz się, jak dostosować ustawienia serwera Palworld, aby uzyskać spersonalizowane doświadczenie w grze i zoptymalizować rozgrywkę → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Serwery Palworld oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować do swoich potrzeb. W tym poradniku przeanalizujemy wszystkie dostępne obecnie parametry konfiguracyjne i wyjaśnimy każdy z nich bardziej szczegółowo.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Konfiguracja serwera Palworld w zaledwie MINUTĘ!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Dostęp do pliku konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym Twojego serwera gier i znalezienie tam odpowiednich opcji, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowy plik, możesz to zrobić w sekcji **Konfiguracje** w panelu administracyjnym serwera gier, klikając niebieski przycisk edycji pliku, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Otworzy się wtedy edytor tekstu bezpośrednio na stronie, umożliwiający edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">


#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ edycja i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z naszym [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda zajmuje więcej czasu, a jeśli chcesz bezpośrednio edytować zawartość pliku, polecamy po prostu korzystać z sekcji **Konfiguracje** w panelu administracyjnym serwera gier, jak wspomniano wcześniej.

</TabItem>
</Tabs>

## Opcje konfiguracji serwera

### Włącz wsparcie Crossplay

Serwery dedykowane Palworld obsługują wiele platform, więc możesz korzystać z crossplay. Domyślnie ustawiona jest platforma Steam. Jeśli chcesz aktywować wsparcie dla Xbox, PS5 i Mac, możesz to zrobić w panelu administracyjnym serwera gier w ustawieniach.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay między wersjami gry Steam a Microsoft Store/Xbox nadal nie jest możliwy. Twój serwer może działać albo dla Steam, albo dla Microsoft Store/Xbox.
:::

:::info
Na konsolach Xbox nie można łączyć się bezpośrednio przez adres IP, dlatego jeśli planujesz grać na Xbox, musisz ustawić swój serwer dedykowany jako publiczny.

Powinieneś też ustawić nazwę serwera, którą łatwo będzie znaleźć — zobacz nasz [poradnik Konfiguracja serwera](palworld-configuration.md), jak to zrobić.
:::

### Ważne ustawienia serwera

To są kluczowe opcje konfiguracyjne serwera, które pozwalają dostosować listing serwera, zabezpieczyć go hasłem i inne ustawienia wewnętrzne.

:::tip
Nie zalecamy zmiany ustawień Portu ani IP, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana wartości IP/Port może spowodować problemy z działaniem serwera!
:::

| Nazwa parametru               | Przykład                               | Opis                                                        |
| ------------------------------ | ------------------------------------- | ----------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                     | Maksymalna liczba graczy, którzy mogą dołączyć do serwera (max 32) |
| ServerName                    | ZAP-Hosting Docs Test                 | Nazwa Twojego serwera                                       |
| ServerDescription             | This is a server that we are testing on | Opis Twojego serwera                                        |
| AdminPassword                 | ctRQvhPAWVHq                         | Hasło administratora do komend admina                       |
| ServerPassword                | iLoveZAP!2024                       | Zabezpieczenie serwera hasłem (prywatny)                   |
| PublicPort                   | 8211 (domyślny)                     | Publiczny port, na którym działa serwer                     |
| PublicIP                     | 123.123.123.123                    | Publiczny adres IP serwera                                  |
| RCONEnabled                  | true                                | Włącz/wyłącz użycie RCON                                    |
| RCONPort                    | 8222                                | Numer portu do RCON                                         |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer będzie korzystał z podanych ustawień.

### Ustawienia konfiguracji rozgrywki

To mniej istotne opcje konfiguracyjne serwera, głównie do zmiany rozgrywki, progresji oraz mapy i świata, w którym grasz.

| Nazwa parametru                 | Opis                                               | 
| -------------------------------- | -------------------------------------------------- | 
| DayTimeSpeedRate                | Ustaw prędkość upływu czasu w ciągu dnia           |
| NightTimeSpeedRate              | Ustaw prędkość upływu czasu w nocy                  |
| ExpRate                       | Ustaw tempo zdobywania doświadczenia (XP)           |
| PalCaptureRate                | Tempo łapania Palów                                  |
| PalSpawnNumRate               | Częstotliwość pojawiania się Palów                   |
| PalDamageRateAttack           | Mnożnik obrażeń zadawanych przez Paly                |
| PalDamageRateDefense          | Mnożnik obrażeń otrzymywanych przez Paly             |
| PlayerDamageRateAttack        | Mnożnik obrażeń zadawanych przez gracza              |
| PlayerDamageRateDefense       | Mnożnik obrażeń otrzymywanych przez gracza           |
| PlayerStomachDecreaceRate     | Tempo spadku głodu gracza                             |
| PlayerStaminaDecreaceRate     | Tempo spadku wytrzymałości gracza                     |
| PlayerAutoHPRegeneRate        | Tempo automatycznej regeneracji HP gracza            |
| PlayerAutoHpRegeneRateInSleep | Tempo regeneracji HP gracza podczas snu               |
| PalStomachDecreaceRate        | Tempo spadku głodu Palów                              |
| PalStaminaDecreaceRate        | Tempo spadku wytrzymałości Palów                      |
| PalAutoHPRegeneRate           | Tempo automatycznej regeneracji HP Palów              |
| PalAutoHpRegeneRateInSleep    | Tempo regeneracji zdrowia Palów podczas snu (w Palbox) |
| BuildObjectDamageRate         | Mnożnik obrażeń zadawanych budowlom                   |
| BuildObjectDeteriorationDamageRate | Tempo niszczenia budowli                            |
| CollectionDropRate            | Mnożnik ilości zbieranych przedmiotów                 |
| CollectionObjectHpRate        | Mnożnik HP zbieralnych obiektów                        |
| CollectionObjectRespawnSpeedRate | Czas odnowienia zbieralnych obiektów                |
| EnemyDropItemRate             | Mnożnik ilości przedmiotów upuszczanych przez wrogów |
| DeathPenalty                  | Kara za śmierć (Brak/Przedmiot)                       |
| GuildPlayerMaxNum             | Maksymalna liczba graczy w gildii                      |
| PalEggDefaultHatchingTime    | Czas (w godzinach) inkubacji masowego jaja            |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer będzie korzystał z podanych ustawień.

<InlineVoucher />
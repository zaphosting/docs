---
id: vrising-configuration
title: "V Rising: Konfiguracja Serwera"
description: "Dowiedz się, jak dostosować ustawienia serwera V Rising dla optymalnej rozgrywki i pełnej kontroli nad swoim serwerem → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery V Rising oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować według własnych upodobań. W tym poradniku przeanalizujemy wszystkie dostępne obecnie opcje konfiguracji i wyjaśnimy je szczegółowo.

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby móc edytować dowolne parametry. Istnieje kilka sposobów na edycję tego pliku.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Najwygodniejszą metodą jest przejście do sekcji **Ustawienia** w panelu administracyjnym twojego serwera gier i wyszukanie tam odpowiednich opcji, jak na poniższym przykładzie:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Przez plik konfiguracyjny w WI">

#### Przez plik konfiguracyjny w WI

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ zmiany wprowadzone podczas działania serwera zostaną cofnięte po restarcie.
:::

Alternatywnie, jeśli chcesz bezpośrednio edytować surowy plik, możesz to zrobić w sekcji **Konfiguracje** w panelu administracyjnym serwera gier, klikając niebieski przycisk edycji pliku, jak na poniższym obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Otworzy się wtedy edytor tekstu bezpośrednio na stronie, umożliwiający edycję.

</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, ponieważ zmiany wprowadzone podczas działania serwera zostaną cofnięte po restarcie.
:::

Ostatnią metodą dostępu do surowego pliku jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z [poradnikiem Dostęp przez FTP](gameserver-ftpaccess.md). Jednak ta metoda jest wolniejsza, a jeśli chcesz bezpośrednio edytować zawartość pliku, polecamy po prostu użyć sekcji **Konfiguracje** w panelu administracyjnym serwera gier, jak wspomniano wyżej.

</TabItem>
</Tabs>

## Opcje Konfiguracji Serwera

W poniższych sekcjach znajdziesz tabele z informacjami o dostępnych opcjach konfiguracji, zarówno dotyczących samego serwera, jak i ustawień rozgrywki.

:::tip
Nie zalecamy zmiany ustawień Portów, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana wartości portów może spowodować problemy z działaniem serwera!
:::

### Najważniejsze Ustawienia Serwera

Ta sekcja podsumowuje najważniejsze ustawienia serwera, które znajdują się w pliku konfiguracyjnym **ServerHostSettings.json**. Pełną listę opcji konfiguracji znajdziesz w [oficjalnym poradniku na GitHubie gry](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Nazwa Parametru    | Przykład                  | Opis                                                                       |
| ------------------ | ------------------------- | -------------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test     | Ustaw nazwę swojego serwera                                                |
| Description        | ZAP is the best!          | Ustaw opis swojego serwera                                                 |
| Port               | 9876 (domyślny)           | Ustaw port sieciowy używany przez grę                                     |
| QueryPort          | 9877 (domyślny)           | Ustaw port zapytań zwracający informacje o serwerze na liście serwerów    |
| MaxConnectedUsers  | 10                        | Ustaw maksymalną liczbę graczy, którzy mogą jednocześnie być na serwerze  |
| MaxConnectedAdmins | 4                         | Ustaw liczbę adminów, którzy mogą dołączyć do pełnego serwera              |
| ServerFps          | 30 (zalecany domyślny)    | Ustaw liczbę klatek na sekundę serwera, zalecamy pozostawić domyślną wartość |
| SaveName           | ZAPDocsTest               | Ustaw nazwę zapisu świata                                                  |
| Password           | iLoveZAP!2024             | Ustaw hasło do serwera lub pozostaw puste, jeśli brak                     |
| ListOnMasterServer | true/false                | Włącz lub wyłącz wyświetlanie serwera na liście serwerów                   |
| AutoSaveCount      | 15                        | Określ, ile starszych zapisów ma być przechowywanych                      |
| AutoSaveInterval   | 600                       | Ustaw odstęp czasowy między automatycznymi zapisami                       |
| RCON Enabled       | true/false                | Włącz lub wyłącz RCON                                                     |
| RCON Port          | 25575                     | Ustaw port RCON                                                           |
| RCON Password      | iLoveZAP!2024             | Ustaw hasło do połączenia RCON                                            |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer będzie korzystał z nowych ustawień.

### Kluczowe Ustawienia Konfiguracji Rozgrywki

V Rising oferuje mnóstwo parametrów i opcji konfiguracyjnych do dostosowania rozgrywki. W tej sekcji podsumujemy najważniejsze z nich, które znajdują się w pliku **ServerGameSettings.json**.

| Nazwa Parametru           | Przykład                       | Opis                                                                                                  |
| ------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------- | 
| GameDifficulty            | Normal                        | Ustaw poziom trudności gry w twoim świecie                                                           |
| GameModeType              | PvP, PvE                      | Ustaw typ trybu gry w twoim świecie                                                                   |
| CastleDamageMode          | Always, Never, TimeRestricted | Ustaw, kiedy zamki mogą być uszkadzane, używając parametru VSCastle do wyboru czasu dla "TimeRestricted" |
| PlayerDamageMode          | Always, TimeRestricted        | Ustaw, czy inni gracze mogą być uszkadzani, używając parametru VSPlayer do wyboru czasu dla "TimeRestricted" |
| PvPProtectionMode         | Short, Medium, Long           | Ustaw, jak długo nowi gracze są niewrażliwi na obrażenia                                              |
| DeathContainerPermission  | Anyone, ClanMembers           | Ustaw, kto może plądrować przedmioty po śmierci gracza                                                |
| CanLootEnemyContainers    | true/false                    | Ustaw, czy gracz może plądrować skrzynie innych graczy spoza klanu                                    |
| BloodBoundEquipment       | true/false                    | Ustaw, czy zachowujesz ekwipunek po śmierci                                                          |
| TeleportBoundItems        | true/false                    | Ustaw, czy przedmioty mogą blokować teleportację przez Bramki Wampira                                |
| AllowGlobalChat           | true/false                    | Włącz lub wyłącz globalny czat                                                                        |

Po wprowadzeniu zmian pamiętaj, aby zapisać plik i zrestartować serwer. Przy następnym uruchomieniu serwer będzie korzystał z nowych ustawień.

<InlineVoucher />
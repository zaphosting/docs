---
id: soulmask-configuration
title: "Soulmask: Konfiguracja Serwera"
description: "Dowiedz się, jak dostosować ustawienia serwera Soulmask i zoptymalizować konfiguracje rozgrywki dla spersonalizowanego doświadczenia → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Soulmask oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować według własnych upodobań. W tym poradniku omówimy wszystkie dostępne obecnie parametry konfiguracji i wyjaśnimy każdy z nich bardziej szczegółowo.

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do plików konfiguracyjnych, aby móc edytować dowolne parametry. Ustawienia serwera możesz zmieniać przez webinterface, a ustawienia rozgrywki przez FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Przez Webinterface" default>

#### Przez Webinterface

Głównym sposobem na dostęp do opcji konfiguracji serwera jest przejście do sekcji **Ustawienia** w panelu głównym Twojego serwera gier i wyszukanie tam odpowiednich opcji, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Przez FTP">

#### Przez FTP

:::note
Serwer musi być zatrzymany przed edycją pliku konfiguracyjnego, w przeciwnym razie zmiany zostaną cofnięte po restarcie serwera.
:::

Głównym sposobem na dostęp do pliku konfiguracyjnego rozgrywki jest FTP. Jeśli nie znasz się na FTP, polecamy zapoznać się z [Poradnikiem Dostępu przez FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Opcje Konfiguracji Serwera
W kolejnych sekcjach omówimy, jak uzyskać dostęp do opcji konfiguracji oraz przyjrzymy się dostępnym ustawieniom zarówno serwera, jak i rozgrywki.

### Ważne Ustawienia Serwera

Obecnie jedynym sposobem na zmianę ustawień serwera jest sekcja **Ustawienia** w webinterface Twojego serwera gier. W tej sekcji możesz zmienić następujące opcje:

| Nazwa Parametru     | Przykład              | Opis                                                    |
| ------------------- | --------------------- | ------------------------------------------------------- | 
| Nazwa serwera       | ZAP-Hosting Docs Test | Ustaw nazwę swojego serwera                             |
| Hasło serwera gier  | iLoveZAP!2024         | Ustaw hasło do serwera lub pozostaw puste, jeśli brak  |
| Hasło administratora| iLoveZAP!2024         | Ustaw hasło do dostępu administratora                   |
| Tryb gry            | PVE/PVP               | Wybierz, czy chcesz rozgrywkę PVE czy PVP               |

Po zakończeniu pamiętaj, aby zapisać zmiany przyciskiem na dole sekcji i zrestartować serwer.

### Ustawienia Konfiguracji Rozgrywki

Aktualnie jedyną opcją dostępu do pliku konfiguracyjnego jest FTP. Upewnij się, że serwer jest zatrzymany przed edycją pliku, inaczej zmiany mogą zostać cofnięte.

Przejdź do następującej ścieżki i otwórz plik **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Ten plik zawiera wiele opcji konfiguracji rozgrywki, które możesz dostosować według własnych preferencji.

Po dokonaniu zmian zapisz plik i zrestartuj serwer. Przy następnym uruchomieniu serwer załaduje Twoje ustawienia.

<InlineVoucher />
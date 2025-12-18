---
id: unturned-workshop
title: "Unturned: Instalacja zawartości Workshop na serwerze"
description: "Dowiedz się, jak wzbogacić swój serwer Unturned o niestandardową zawartość ze Steam Workshop dla spersonalizowanej rozgrywki → Sprawdź teraz"
sidebar_label: Zawartość Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Steam Workshop daje Ci możliwość jeszcze większej personalizacji serwera. Poniżej wyjaśnimy, jak dodać więcej zawartości na swój serwer, korzystając ze Steam Workshop.

### Przygotowanie

Istnieje wiele źródeł, z których możesz pobierać mody, mapy, modele itd. Najpopularniejszym jest Steam Workshop. Znajdziesz tam mnóstwo zasobów, które możesz zainstalować na swoim serwerze. Najpierw musisz znaleźć interesujące Cię elementy Workshop. Steam Workshop dla Unturned znajdziesz tutaj: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Gdy już wybierzesz, musisz skopiować ID wybranego elementu Workshop i dodać je w panelu. W zależności od tego, czy przeglądasz Steam Workshop przez przeglądarkę, czy przez Steam Client, ID skopiujesz tak, jak poniżej:

- **Steam Client**

  Kliknij prawym przyciskiem na stronie elementu Workshop i wybierz „Kopiuj adres strony”. Skopiuj ID z URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

- **Przeglądarka**

  W pasku adresu znajdziesz ciąg cyfr po **.../?id=**. Skopiuj go.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)

### Dodawanie zawartości

Gdy już zbierzesz wybrane elementy, dodaj je na serwer. Wybrane elementy określasz w pliku konfiguracyjnym **WorkshopDownloadConfig.json**, który znajdziesz w panelu pod zakładką Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Teraz dodajemy ID poszczególnych elementów Steam Workshop do pola 'FileIDs'. Przykładowy efekt końcowy może wyglądać tak:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Przykład (Placeholder)
    0987654321  // Przykład (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Wykryto aktualizację pliku Workshop, wyłączanie za: {0}",
  "Shutdown_Kick_Message": "Wyłączanie z powodu aktualizacji pliku Workshop."
}
```

Następnie uruchom serwer. Dodana zawartość zostanie automatycznie pobrana podczas startu serwera. Zobaczysz to w Konsoli na żywo. Wyjście powinno wyglądać tak:

```
1 element(ów) Workshop do pobrania...
Pobieranie elementu Workshop 1567256534
Pomyślnie pobrano element Workshop: 1567256534
```

Zawartość została pomyślnie pobrana, zainstalowana i powinna być aktywna.

<InlineVoucher />
---
id: scp-colored-servername
title: "SCP Secret Laboratory: Kolorowa Nazwa Serwera"
description: "Dowiedz się, jak spersonalizować nazwę serwera za pomocą kolorowego tekstu dla lepszej widoczności i stylu → Sprawdź teraz"
sidebar_label: Kolorowa Nazwa Serwera
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Aby Twój serwer pojawił się na publicznej liście serwerów, musisz ustawić ID pastebin. Nasz poradnik znajdziesz tutaj: [Pastebin ID](scp-pastebin.md).

Serwer musi być wyłączony, aby zmiany zaczęły działać.
:::

<InlineVoucher />

Otwórz ustawienia swojego serwera i sprawdź, czy pole 'SCP Servername' jest puste.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

Jeśli jesteś pewny, że nic tam nie ma, przejdź do zakładki 'Configs', która jest jedno menu poniżej ustawień.

Teraz otwórz plik config_gameplay.txt, klikając niebieski przycisk.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Nasz edytor konfiguracji jest teraz otwarty, możesz zmodyfikować nazwę serwera za pomocą "server_name". Korzystając z [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html), możesz użyć różnych kolorów.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

W tym przykładzie chcę, aby "Green Text", "Blue Text" i "Red Text" były wyświetlane w odpowiednich kolorach.

Aby to zrobić, musisz użyć tagu `<color="COLOR">Twój Tekst</color>`. Wszystkie dostępne kolory znajdziesz [tutaj](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Możesz też zmieniać inne atrybuty, jak rozmiar.
:::info
Pamiętaj, że cudzysłowy " " są wymagane wokół koloru w tagu, tak jak w powyższym przykładzie.
:::

Po zakończeniu personalizacji zapisz zmiany.

:::info
Uruchom serwer, a nazwa serwera będzie teraz kolorowa.
:::

<InlineVoucher />
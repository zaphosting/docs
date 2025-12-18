---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Instalacja dodatków"
description: "Dowiedz się, jak wzbogacić swój serwer gier Minecraft Bedrock o dodatki, które rozszerzą rozgrywkę i pozwolą spersonalizować świat → Sprawdź teraz"
sidebar_label: Instalacja dodatków
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Wprowadzenie
Minecraft Bedrock Edition ma natywne wsparcie dla modów i ogromną społeczność, co pozwala na rozszerzanie i ulepszanie rozgrywki razem z przyjaciółmi. W tym poradniku pokażemy, jak zainstalować i aktywować dodatek na Twoim serwerze gier Minecraft Bedrock.

<InlineVoucher />

## Przygotowanie

Aby zainstalować mapę z dodatkiem na swoim serwerze Minecraft: Bedrock, musisz połączyć się z nim przez FTP. Jeśli nie znasz się na tym, polecamy zajrzeć do naszego [poradnika o dostępie FTP](gameserver-ftpaccess.md).

Przed instalacją musisz też znaleźć dodatki, które chcesz zainstalować na serwerze. Polecamy przeglądać [CurseForge](https://www.curseforge.com/minecraft-bedrock), gdzie znajdziesz ogromną bibliotekę dodatków i pakietów zasobów stworzonych przez społeczność.

## Instalacja

Są dwa sposoby na instalację dodatku w Minecraft Bedrock. Możesz zainstalować dodatki w nowym świecie, co jest bardzo proste, albo w istniejącym świecie, co jest trudniejsze.

## Nowy świat (łatwe)

Aby stworzyć nowy świat z dodatkami, wystarczy otworzyć pobrany plik `.mcaddon` lub `.mcpack`.
Spowoduje to uruchomienie Minecraft Bedrock i zaimportowanie dodatku do gry.

### Tworzenie świata

Aby stworzyć świat i zainstalować do niego dodatki, kliknij `Graj`, a następnie `Utwórz nowy świat`.
Możesz wtedy wybrać wszystkie standardowe ustawienia świata, które chcesz:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Instalacja dodatków

Przed kliknięciem `Utwórz` przejdź do `Pakiety zasobów` lub `Pakiety zachowań`.
Tam kliknij `Aktywuj` obok nazwy dodatku:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Niektóre dodatki mają zarówno pakiet zasobów, jak i pakiet zachowań, więc musisz aktywować oba. Po aktywowaniu wszystkich wybranych dodatków kliknij `Utwórz`.

Aby wyeksportować świat i przesłać go na serwer, skorzystaj z [poradnika Import własnego świata](minecraft-bedrock-add-world.md).

## Istniejący świat (trudniejsze)

Instalacja dodatku do istniejącego świata jest trudniejsza, ale pozwala grać z dodatkiem i zachować dotychczasowy postęp.

### Instalacja 7-zip

Aby zainstalować dodatek do istniejącego świata Minecraft, musisz zainstalować 7-zip, żeby rozpakować plik dodatku.
Proces instalacji jest prosty — odwiedź [stronę pobierania 7-zip](https://www.7-zip.org/) i pobierz najnowszą wersję instalatora:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Po pobraniu otwórz plik i kliknij **Zainstaluj**.

### Rozpakowywanie dodatku

Gdy pobierzesz wybrany dodatek, rozpakuj go za pomocą 7-zip, klikając prawym przyciskiem na plik `.mcaddon`, najedź na `7-zip` i wybierz `Wypakuj do NAZWA_FOLDERU`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Jeśli dodatek zawiera zarówno pakiet zasobów, jak i pakiet zachowań, musisz zrobić to samo dla zawartości folderu, ponieważ są to również pliki `.mcpack`:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

Różnicę między pakietami zasobów a pakietami zachowań widać w nazwie folderu. Foldery pakietów zasobów mają w nazwie `RP`, a pakietów zachowań `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Pakiet zasobów" default>

### Wgrywanie pakietu zasobów

Aby wgrać pakiet zasobów, przejdź do tego folderu w kliencie FTP:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Następnie przeciągnij i upuść katalog RP do klienta FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Upewnij się, że wgrywasz właściwy folder, który bezpośrednio zawiera pakiet zasobów, a nie tylko podfolder.
Zawartość folderu, który wgrywasz, powinna wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Aktywacja pakietu zasobów

Aby aktywować pakiet zasobów, otwórz plik `manifest.json` w folderze RP. Następnie przejdź do folderu świata w kliencie FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Tam otwórz plik `world_resource_packs.json`.
Jeśli nigdy nie instalowałeś dodatków, musisz utworzyć ten plik. Wklej do niego następujący tekst:

```
[
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  }
]
```

Zamień wartości `pack_id` i `version` na te z pliku manifest.json, który otworzyłeś wcześniej:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Jeśli chcesz zainstalować więcej niż jeden pakiet, możesz dodać kolejne wpisy.
Ważne, aby wartości oddzielać przecinkiem `,`, ale nie stawiaj przecinka po ostatnim elemencie:

```
[
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  },
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  },
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Pakiet zachowań">

### Wgrywanie pakietu zachowań

Aby wgrać pakiet zachowań, przejdź do tego folderu w kliencie FTP:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Następnie przeciągnij i upuść katalog BP do klienta FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Upewnij się, że wgrywasz właściwy folder, który bezpośrednio zawiera pakiet zachowań, a nie tylko podfolder.
Zawartość folderu, który wgrywasz, powinna wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Aktywacja pakietu zachowań

Aby aktywować pakiet zachowań, otwórz plik `manifest.json` w folderze BP. Następnie przejdź do folderu świata w kliencie FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Tam otwórz plik `world_behavior_packs.json`.
Jeśli nigdy nie instalowałeś dodatków, musisz utworzyć ten plik. Wklej do niego następujący tekst:

```
[
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  }
]
```

Zamień wartości `pack_id` i `version` na te z pliku manifest.json, który otworzyłeś wcześniej:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Jeśli chcesz zainstalować więcej niż jeden pakiet, możesz dodać kolejne wpisy.
Ważne, aby wartości oddzielać przecinkiem `,`, ale nie stawiaj przecinka po ostatnim elemencie:

```
[
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  },
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  },
  {
    "pack_id" : "TU WPISZ UUID",
    "version" : [wersja, numer, tutaj]
  }
]
```
:::
</TabItem>
</Tabs>

### Sprawdzenie zmian

Uruchom serwer, połącz się z nim i sprawdź, czy dodatki zostały poprawnie zainstalowane. Przetestuj nowe funkcje lub zasoby, aby upewnić się, że wszystko działa jak należy. Jeśli coś poszło nie tak, sprawdź jeszcze raz kroki instalacji, upewnij się, że pliki zostały poprawnie wgrane i poszukaj błędów w konsoli serwera.

## Podsumowanie

Instalacja dodatków na Twoim serwerze gier Minecraft Bedrock to świetny sposób na rozszerzenie rozgrywki i dodanie nowej zawartości. Dzięki temu poradnikowi możesz łatwo zainstalować dodatki i spersonalizować swój serwer. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
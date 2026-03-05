---
id: csgo-fastdl
title: "CS:GO: Konfiguracja FastDL"
description: "Dowiedz się, jak zoptymalizować dostarczanie zawartości gry za pomocą FastDL, aby przyspieszyć pobieranie i zmniejszyć obciążenie serwera dla graczy CS:GO → Sprawdź teraz"
sidebar_label: FastDL
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

FastDL (Fast Download) to metoda dostarczania niestandardowej zawartości, takiej jak mapy, dźwięki czy modele, za pomocą zewnętrznego serwera HTTP zamiast samego serwera gier. Dzięki temu pobieranie jest szybsze, a obciążenie serwera mniejsze.

Aby korzystać z FastDL, potrzebujesz dostępu do publicznego serwera HTTP. Świetnym wyborem jest **pakiet hostingu ZAP-Hosting Webspace**, który idealnie nadaje się do dostarczania zawartości gry. Ten poradnik pokaże Ci, jak skonfigurować FastDL korzystając z hostingu ZAP.

<InlineVoucher />

## Wymagania

Potrzebujesz aktywnego serwera CS:GO hostowanego przez ZAP-Hosting oraz dodatkowego pakietu hostingu. Musisz mieć dostęp FTP lub do Menedżera Plików zarówno na serwerze gier, jak i na hostingu.

Po stronie serwera gier pliki, które chcesz udostępnić (np. mapy `.bsp`, pliki dźwiękowe czy modele), muszą być już poprawnie zorganizowane. Taka sama struktura folderów będzie wymagana na hostingu, aby FastDL działał poprawnie.

## Przygotowanie hostingu

Do zarządzania i przesyłania plików FastDL polecamy korzystać z **Menedżera Plików** dostępnego w panelu hostingu ZAP. Znajdziesz go bezpośrednio w panelu pod **Webspace > Menedżer Plików**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

W katalogu głównym hostingu stwórz folder o nazwie `fastdl`. W jego środku utwórz podfoldery takie jak `maps`, `sound` czy `models` – w zależności od tego, jaką zawartość chcesz udostępniać. Struktura folderów musi dokładnie odpowiadać tej, której używa Twój serwer CS:GO.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Przed przesłaniem plików upewnij się, że są **skompresowane w formacie `.bz2`** (bzip2). Większość silników opartych na Source wymaga dostarczania plików właśnie w tym formacie. Na przykład plik mapy `custom_map.bsp` powinien być przesłany jako `custom_map.bsp.bz2`.

:::info Kompresja za pomocą 7-Zip
Aby przygotować pliki do FastDL, możesz użyć narzędzia **7-Zip** i spakować je do formatu `.bz2`. Kliknij prawym przyciskiem na plik, wybierz **7-Zip > Dodaj do archiwum...**, ustaw format archiwum na `bzip2` i zatwierdź.
:::

Po przesłaniu skompresowanych plików do odpowiednich folderów, upewnij się, że **wszystkie katalogi i pliki mają poprawne uprawnienia do odczytu**, aby były publicznie dostępne. Menedżer Plików pozwala na łatwą zmianę uprawnień folderów i plików.

Gdy pliki będą już przesłane i uprawnienia ustawione, zawartość FastDL będzie dostępna pod następującym publicznym adresem URL:

```
https://[twoja-domena].zap.cloud/fastdl/
```

Możesz to przetestować, otwierając ten adres w przeglądarce i sprawdzając, czy pliki są dostępne.

## Konfiguracja serwera gier

W panelu ZAP, w administracji serwera gier, otwórz plik `server.cfg` na stronie **Konfiguracje** i dodaj następujące linie:

```cfg
sv_downloadurl "https://[twoja-domena].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Upewnij się, że adres FastDL dokładnie odpowiada strukturze na Twoim hostingu. Po zapisaniu pliku zrestartuj serwer gier, aby zastosować zmiany.

## Podsumowanie

FastDL możesz szybko i pewnie skonfigurować korzystając z własnego hostingu ZAP. Dzięki temu dostarczysz niestandardową zawartość szybko i efektywnie, poprawiając doświadczenia wszystkich graczy na Twoim serwerze CS:GO.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />
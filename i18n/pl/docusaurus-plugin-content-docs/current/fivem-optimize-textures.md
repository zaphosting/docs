---
id: fivem-optimize-textures
title: "FiveM: Optymalizacja tekstur"
description: "Dowiedz się, jak zoptymalizować tekstury modów GTA5, aby zmniejszyć ich rozmiar i poprawić wydajność gry → Sprawdź teraz"
sidebar_label: Optymalizacja tekstur
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Chcesz zoptymalizować tekstury swojego moda do GTA5 i zmniejszyć ich rozmiar bez utraty jakości? W tym poradniku pokażemy Ci, jak skutecznie skompresować tekstury do mniej niż 16MB. Kilka prostych kroków i odpowiednie narzędzia pozwolą Ci poprawić wydajność gry i zaoszczędzić miejsce na dysku. To także pomaga uniknąć potencjalnych problemów takich jak:

```
Asset hevo/hevo.ytd uses 166.0 MiB of physical memory. Oversized assets can and will lead to streaming issues (models not loading/rendering, commonly known as 'texture loss', 'city bug' or 'streaming isn't great').
```

<InlineVoucher />


## Przygotowanie

Zanim zaczniesz, upewnij się, że pobrałeś i zainstalowałeś niezbędne narzędzia. Pobierz **OpenIV** oraz **XnResize** z oficjalnych stron i postępuj zgodnie z instrukcjami instalacji. Te narzędzia posłużą Ci do edycji tekstur:

- **OpenIV**  [(Pobierz)](https://openiv.com/)
- **XnResize** [(Pobierz)](https://www.xnview.com/en/xnresize/#downloads)



## Konfiguracja
Gdy już pobierzesz i zainstalujesz potrzebne narzędzia, możesz zacząć edytować tekstury. Znajdź plik .ytd swojego moda w OpenIV i otwórz go, aby uzyskać dostęp do tekstur.

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

W OpenIV znajdziesz opcję "Export all textures" w lewym dolnym rogu. Kliknij ją, aby wyeksportować wszystkie tekstury swojego moda. Zapisz je w folderze w katalogu moda pojazdu, na przykład w folderze "textures". 



## Optymalizacja

Teraz, gdy wyeksportowałeś wszystkie tekstury, czas je edytować i zmienić rozmiar. Uruchom XnResize na swoim komputerze. Przeciągnij wszystkie wyeksportowane pliki .dds do okna XnResize. Powinieneś zobaczyć wszystkie swoje tekstury w aplikacji. W zakładce "Action" w XnResize ustaw szerokość i wysokość na procent i zmniejsz rozmiar tekstur do 50% oryginalnego rozmiaru. Pamiętaj, aby zachować proporcje.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



W zakładce "Output" wybierz folder docelowy dla edytowanych tekstur, na przykład "textures_resized", i ustaw format na DDS - Direct Draw Surface.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Podsumowanie
Po edycji wszystkich tekstur i dostosowaniu ich rozmiaru, zamień stare tekstury w swoim modzie na nowe, skompresowane wersje. Zauważysz, że rozmiar skompresowanych tekstur jest znacznie mniejszy, co nie tylko oszczędza miejsce na dysku, ale też poprawia wydajność gry.

| **Opis**                   | **Oryginalny słownik tekstur** | Skompresowany słownik tekstur | Ile razy lepiej      |
| :-------------------------- | :------------------------------ | :---------------------------- | :------------------- |
| **Rozmiar skompresowany**   | 11.8 MB                         | 1.23 MB                       | 9.6x                 |
| **Rozmiar nieskompresowany**| 164 MB                          | 11 MB                        | 14.9x                |
| **Pamięć wirtualna**        | 0.05 MiB                       | 0.05 MiB                     | -                    |
| **Pamięć fizyczna**         | 166.00 MiB                     | 10.69 MiB                    | 15.5x                |

Nie zapomnij przetestować tekstur w grze. Jeśli pojawią się problemy, zawsze możesz przywrócić pojedyncze tekstury do oryginalnego rozmiaru lub użyć oryginalnych plików .dds.

<InlineVoucher />
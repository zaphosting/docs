---
id: redm-deletecache
title: "RedM: Wyczyść Cache"
description: "Dowiedz się, jak wyczyszczenie cache serwera RedM poprawia wydajność i rozwiązuje błędy, zapewniając płynniejszą rozgrywkę → Sprawdź teraz"
sidebar_label: Usuń Cache
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Wyczyszczenie cache na serwerze RedM usuwa tymczasowo przechowywane pliki. Dzięki temu serwer przy następnym uruchomieniu pobierze lub wygeneruje wszystkie potrzebne pliki na nowo. Pomaga to pozbyć się przestarzałych lub uszkodzonych danych, co może rozwiązać problemy z wydajnością, błędy skryptów, crash’e lub problemy z ładowaniem świata gry.

<InlineVoucher />

## Prosta metoda

Usunięcie cache na Twoim serwerze gier RedM jest naprawdę proste. Najpierw przejdź do panelu administracyjnego swojego serwera gier. Znajdź i otwórz sekcję **Ustawienia** w panelu administracyjnym serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Następnie przewiń na dół strony, gdzie znajdziesz kilka przycisków w podsekcji **Akcje**. Kliknij przycisk **Usuń pliki cache**, aby wyczyścić cache swojego serwera gier.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
To natychmiast zrestartuje Twój serwer, aby wyczyścić pliki cache, więc upewnij się, że jesteś na to gotowy.
:::


## Alternatywna metoda

Najpierw musisz połączyć się z serwerem przez FTP. Jeśli nie znasz się na FTP, polecamy zajrzeć do naszego [poradnika o dostępie FTP](gameserver-ftpaccess.md). Następnie musisz znaleźć folder cache i go usunąć. Przejdź do ścieżki `/gXXXXXX/redm-txadmin/server-data/cache`, aby dostać się do folderu cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Teraz wystarczy wyczyścić/opuścić cache. Kliknij na folder **Cache**, a potem na **Pliki**. Zaznacz wszystkie foldery znajdujące się w folderze **Cache** i usuń je.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Na koniec zrestartuj swój serwer RedM, aby zmiany zaczęły działać. Po restarcie serwer automatycznie odbuduje cache.



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, pomyślnie wyczyściłeś cache swojego serwera. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
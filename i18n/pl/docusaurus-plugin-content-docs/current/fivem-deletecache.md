---
id: fivem-deletecache
title: "FiveM: Wyczyść Cache"
description: "Dowiedz się, jak wyczyszczenie cache serwera FiveM poprawia wydajność i rozwiązuje błędy, zapewniając płynniejszą rozgrywkę → Sprawdź teraz"
sidebar_label: Usuń Cache
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Wyczyszczenie cache na serwerze FiveM usuwa tymczasowo przechowywane pliki. Dzięki temu serwer przy następnym uruchomieniu pobierze lub wygeneruje wszystkie potrzebne pliki od nowa. Pomaga to pozbyć się przestarzałych lub uszkodzonych danych, co może rozwiązać problemy z wydajnością, błędy skryptów, crash’e lub problemy z ładowaniem świata gry.

<InlineVoucher />

## Prosta metoda

Usunięcie cache na Twoim serwerze gier FiveM jest naprawdę proste. Najpierw przejdź do panelu administracyjnego swojego serwera gier. Znajdź i otwórz sekcję **Ustawienia** w panelu administracyjnym serwera.



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



Następnie przewiń stronę na dół, gdzie znajdziesz kilka przycisków w podsekcji **Akcje**. Kliknij przycisk **Usuń pliki cache**, aby wyczyścić cache swojego serwera gier.

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
To spowoduje natychmiastowy restart serwera w celu wyczyszczenia plików cache, więc upewnij się, że jesteś na to gotowy.
:::


## Alternatywna metoda

Najpierw musisz połączyć się z serwerem przez FTP. Jeśli nie znasz się na FTP, polecamy zajrzeć do naszego [poradnika o dostępie FTP](gameserver-ftpaccess.md). Następnie znajdź folder cache i usuń go. Ścieżka do folderu cache to `/gXXXXXX/fivem/server-data/cache`.

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

Teraz wystarczy wyczyścić cache. Kliknij na folder **Cache**, a potem na **Pliki**. Zaznacz wszystkie foldery znajdujące się w folderze **Cache** i usuń je.

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

Na koniec zrestartuj swój serwer FiveM, aby zmiany weszły w życie. Po restarcie serwer automatycznie odbuduje cache.



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, pomyślnie wyczyściłeś cache swojego serwera. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />
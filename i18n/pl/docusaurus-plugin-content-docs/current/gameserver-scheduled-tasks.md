---
id: gameserver-scheduled-tasks
title: "Serwer gier: Zadania zaplanowane (Cron)"
description: "Dowiedz się, jak zautomatyzować procesy na serwerze za pomocą zadań zaplanowanych do backupów, zarządzania usługami i komend → Sprawdź teraz"
sidebar_label: Zadania zaplanowane
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Twórz zadania zaplanowane, które są automatycznie wykonywane o określonych porach. Dzięki temu możesz zautomatyzować różne procesy na swoim serwerze. Możesz określić, czy zadanie ma być wykonane tylko raz, czy wielokrotnie. 



## Typy zadań

Zadania zaplanowane pozwalają na wykonywanie różnych typów zadań. Obecnie obsługiwane są następujące typy: 

- Uruchom usługę
- Zatrzymaj usługę
- Uruchom ponownie usługę
- Uruchom ponownie serwer (tylko jeśli jest online)
- Utwórz kopię zapasową
- Wykonaj komendę

Predefiniowane typy pozwalają na szeroką automatyzację zarządzania serwerem. Szczególnie typ **Wykonaj komendę** umożliwia tworzenie wielu bardziej specyficznych i spersonalizowanych zadań. 

:::warning Limity częstotliwości
Niektóre zaplanowane zadania mają limity częstotliwości, co oznacza, że nie mogą być wykonywane nieskończoną ilość razy i mają okresy oczekiwania/limity.
 :::

## Tworzenie zadań

Przejdź do Zadania zaplanowane w panelu administracyjnym serwera gier w zakładce Ustawienia. Aby utworzyć nowe zadanie zaplanowane, kliknij zielony przycisk z symbolem plusa po prawej stronie listy zadań. Otworzy się nowe okno, w którym możesz skonfigurować swoje zadanie. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Zarządzanie zadaniami

W konfiguracji zadania możesz określić, jaki typ zadania chcesz utworzyć. Nadaj nazwę (opcjonalnie) i wybierz jeden z dostępnych typów zadań. Ten przykład pokazuje, jak utworzyć zadanie zaplanowane do regularnego restartu usługi. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Wybierz opcję `powtarzające się` jako typ powtarzania. W polu wyrażenia Cron musisz teraz określić interwały, w jakich zadanie ma być wykonywane. W tym przypadku usługa jest restartowana co trzy godziny. 

:::tip Generator Cron

Nie znasz struktury lub składni Cron? Skorzystaj z [**Crontab Guru**](https://crontab.guru/). To prosta aplikacja, która pozwala zbudować i skopiować wyrażenia cron kilkoma kliknięciami. 

:::

Aby zakończyć tworzenie, wybierz okres, w którym zadanie ma być aktywne, a następnie kliknij zapisz.

## Usuwanie zadań

Chcesz usunąć istniejące zadania? Usuń je z listy, klikając czerwony przycisk kosza po prawej stronie. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Podsumowanie

Teraz wiesz, jak tworzyć, zarządzać i usuwać zadania zaplanowane. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />

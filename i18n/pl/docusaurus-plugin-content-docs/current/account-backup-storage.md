---
id: account-backup-storage
title: "Backup Storage: Przechowuj, Przywracaj i Pobieraj Kopie Zapasowe"
description: "Dowiedz się, jak bezpiecznie przechowywać i zarządzać kopiami zapasowymi dzięki skalowalnym opcjom storage’u, które ułatwiają przywracanie i dostęp → Sprawdź teraz"
sidebar_label: Backup Storage
---

## Wprowadzenie

Backup Storage to centralne miejsce do przechowywania kopii zapasowych tworzonych z Twoich usług. Pozwala bezpiecznie trzymać pliki backupu, przywracać je bezpośrednio do usług lub pobierać na lokalny dysk.

Każde konto zawiera 10 GB darmowego miejsca w Backup Storage. Jeśli potrzebujesz więcej przestrzeni, możesz ją rozszerzyć do 200 GB za dodatkową opłatą.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Funkcje Backup Storage

Kopie zapasowe tworzy się bezpośrednio przez webowy interfejs danej usługi. Po wygenerowaniu backup jest automatycznie zapisywany w Backup Storage. Przechowywane kopie możesz wykorzystać na dwa sposoby:

- Przywrócić bezpośrednio do odpowiedniej usługi przez jej funkcję backupu
- Pobierać z Backup Storage na lokalny dysk



## Dostęp do plików kopii zapasowych

Pliki backupu są dostępne w Backup Storage zaraz po ich utworzeniu. Oprócz przywracania przez interfejs usługi, możesz też uzyskać do nich dostęp przez połączenie FTP.



## Łączenie się z Backup Storage przez FTP

Aby dostać się do Backup Storage przez FTP, zainstaluj klienta FTP, np. FileZilla, dla swojego systemu operacyjnego i uruchom aplikację po instalacji. Po otwarciu zobaczysz interfejs FileZilla:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Aby nawiązać połączenie, wpisz dane dostępu FTP w pola u góry FileZilla. Wymagane dane znajdziesz w panelu administracyjnym na stronie Backup Storage. Otwórz sekcję Backup Storage i kliknij ikonę na górze paska menu.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Na stronie Backup Storage dane dostępu FTP są pokazane w podświetlonym obszarze, jak poniżej. Wprowadź w FileZilla:

- **Serwer**: adres IP
- **Nazwa użytkownika**: nazwa użytkownika FTP
- **Hasło**: hasło FTP

Port nie musi być podawany, jeśli jest ustawiony na **21**. Kliknij **Połącz**, aby nawiązać połączenie. Po udanym połączeniu zobaczysz kopie zapasowe utworzone przez Twoje usługi w odpowiednich folderach.

Wpisz adres IP w polu **Serwer**, użytkownika w polu **Nazwa użytkownika** i hasło w polu **Hasło**. Nie musisz podawać portu, jeśli jest równy *21*. Teraz kliknij **Połącz**. 
Jeśli połączenie się powiedzie, znajdziesz kopie zapasowe swoich usług w odpowiednich folderach.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Komunikaty i logi backupu

Sekcja **Wiadomości** w pasku bocznym pokazuje log działań związanych z kopiami zapasowymi. Widać tam, które zdarzenia backupu zostały wywołane, dla jakiej usługi lub pakietu oraz o jakiej godzinie.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)

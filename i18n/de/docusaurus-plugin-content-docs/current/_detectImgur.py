import os
import re
import webbrowser

def read_file_with_different_encodings(file_path, encodings=['utf-8', 'latin-1', 'cp1252']):
    """
    Versucht eine Datei mit verschiedenen Kodierungen zu lesen, bis es erfolgreich ist.
    """
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as file:
                print(f"[DEBUG] Datei erfolgreich gelesen mit Kodierung: {encoding}")
                return file.read()
        except UnicodeDecodeError:
            print(f"[DEBUG] UnicodeDecodeError mit Kodierung: {encoding} für Datei: {file_path}")
            continue
    print(f"[ERROR] Keine der Kodierungen konnte die Datei {file_path} erfolgreich lesen.")
    raise UnicodeDecodeError(f'Keine der Kodierungen konnte die Datei {file_path} erfolgreich lesen.')

def convert_to_direct_link(imgur_link):
    """
    Konvertiert einen Imgur-Link in einen direkten Bildlink.
    """
    # Wenn der Link bereits auf eine Bilddatei verweist, gib ihn unverändert zurück
    if imgur_link.endswith(('.jpg', '.png', '.gif')):
        return imgur_link
    # Wenn der Link auf eine Imgur-Seite verweist, hänge .jpg an, um den direkten Bildlink zu erhalten
    return imgur_link + '.jpg'

def find_imgur_links_in_markdown(directory):
    imgur_links = []
    imgur_pattern = re.compile(r'!\[.*?\]\((https?://i\.imgur\.com/.*?)\)')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                print(f"[INFO] Verarbeite Datei: {file_path}")
                try:
                    content = read_file_with_different_encodings(file_path)
                    matches = imgur_pattern.findall(content)
                    if matches:
                        print(f"[INFO] {len(matches)} Imgur-Link(s) in Datei gefunden: {file_path}")
                    else:
                        print(f"[INFO] Keine Imgur-Links in Datei gefunden: {file_path}")
                    imgur_links.extend(matches)
                except UnicodeDecodeError:
                    print(f"[WARNUNG] Datei {file_path} konnte nicht gelesen werden.")
    
    print(f"[INFO] Insgesamt {len(imgur_links)} Imgur-Links gefunden.")
    return imgur_links

def open_links_in_browser(links):
    for link in links:
        direct_link = convert_to_direct_link(link)
        print(f"[INFO] Öffne direkten Link im Browser: {direct_link}")
        webbrowser.open(direct_link)

if __name__ == "__main__":
    # Verwende das aktuelle Verzeichnis, in dem das Skript ausgeführt wird
    directory = os.getcwd()
    print(f"[INFO] Durchsuche das Verzeichnis: {directory}")
    
    # Finde alle Imgur-Links in den Markdown-Dateien
    imgur_links = find_imgur_links_in_markdown(directory)
    
    # Öffne alle konvertierten Imgur-Links im Browser
    open_links_in_browser(imgur_links)

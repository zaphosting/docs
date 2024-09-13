import os
import re
import frontmatter

# Pfad zum aktuellen Verzeichnis
current_directory = os.getcwd()

# Speichere alle sidebar_label von Markdown-Dateien
label_map = {}

# 1. Gehe durch alle Markdown-Dateien und speichere den sidebar_label
for filename in os.listdir(current_directory):
    if filename.endswith('.md'):
        filepath = os.path.join(current_directory, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            content = frontmatter.load(file)  # Verwende 'frontmatter' zum Auslesen
            sidebar_label = content.get('sidebar_label')
            if sidebar_label:
                label_map[filename] = sidebar_label  # Speichere den sidebar_label für die Datei
            else:
                print(f'Warnung: Kein sidebar_label gefunden in {filename}')

# 2. Durchsuche alle Markdown-Dateien und ersetze den Link-Text mit dem sidebar_label
for filename in os.listdir(current_directory):
    if filename.endswith('.md'):
        filepath = os.path.join(current_directory, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()

        # Finde alle Links im Format [link-text](filename.md)
        def replace_link(match):
            link_target = match.group(2)

            # Prüfe, ob der verlinkte Dateiname in der label_map ist
            if link_target in label_map:
                # Ersetze den Linktext durch den aktuellen sidebar_label
                return f'[{label_map[link_target]}]({link_target})'
            return match.group(0)  # Keine Änderung, wenn kein sidebar_label gefunden wurde

        # Ersetze alle Links im Dateiinhalt
        updated_content = re.sub(r'\[([^\]]+)\]\(([^)]+\.md)\)', replace_link, content)

        # Schreibe die Änderungen zurück in die Datei, falls es Änderungen gab
        if updated_content != content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(updated_content)

print('Alle Links wurden erfolgreich aktualisiert.')

---
id: vserver_linux_phpmyadmin
title: VPS: Setting up phpMyAdmin on Linux VPS
description: Information on how to install and set up phpMyAdmin on your Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: phpMyAdmin
---

> ⚠️ A working MySQL/MariaDB and an Apache2 server is required!

## 🔄 System Update

First, you should check whether the server is up to date. To do this, the update command is executed: 

```
sudo apt update
```

If the server has found new updates/packages, they can be installed with the upgrade command. 

```
sudo apt upgrade -y
```

The server is now up to date. 

> ℹ️ If "sudo" is not found, this can be installed with the following command: 

```
apt install sudo -y
```

## 📥 Start the Installation of phpMyAdmin

First, the installation directory is selected in which phpMyAdmin is to be installed. This is done with the following command: 

```
cd /usr/share
```

Then, the latest phpMyAdmin version is downloaded to the installation directory using wget:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

> ℹ️ If "wget" is not found, this can be installed with the following command: 

```
sudo apt install wget -y
```

As soon as the download is complete, the ZIP file can be extracted using the following command: 

```
unzip phpmyadmin.zip
```

> ℹ️ If "unzip" is not found, this can be installed with the following command: 

```
sudo apt install unzip -y
```

Now, the extracted archive can be renamed to a simpler name: 

```
mv phpMyAdmin-*-all-languages phpmyadmin
```

After this is done, the original ZIP file can be removed and the necessary rights for the phpMyAdmin directory can be set by using this: 

```
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

### 🔨 Creation of the Apache2 phpMyAdmin-Config 

The Apache2-phpMyAdmin-Config is created with the following command:

```
nano /etc/apache2/conf-available/phpmyadmin.conf
```
The empty Apache2-phpMyAdmin-Config must now be equipped with the following content: 

```
# phpMyAdmin Apache configuration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Disallow web access for security to directories that don't need it
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

If the Apache2-phpMyAdmin-Config is now filled with the content, it can be saved and closed with *** CTRL + X ***, then press the *** Y key *** and with *** Enter *** to confirm. The newly created Apache2-phpMyAdmin-Config must be activated/read in by the Apache2 server:

```
a2enconf phpmyadmin
```

The Apache2 server must then be reloaded: 

```
systemctl reload apache2
```

### 📁 Creating the required temporary directory for phpMyAdmin

For phpMyAdmin to work properly, the following directory must be created:

```
mkdir /usr/share/phpmyadmin/tmp/
```

The directory just created still needs the correct rights, here is how to do this:

```
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

✅ The phpMyAdmin installation is finished. 

The phpMyAdmin web interface can now be opened via browser with/phpmyadmin, e.g. 123.123.123.123/phpmyadmin

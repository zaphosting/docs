---
id: dedicated-linux-webserver
title: "Configurar Nginx e Apache em um Servidor Linux - Monte Ambientes Poderosos para seu Servidor de Jogos"
description: "Descubra como configurar e instalar servidores web Nginx ou Apache para hospedar seu site de forma eficiente → Saiba mais agora"
sidebar_label: Instalar servidor web
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Nginx e Apache são serviços web populares usados para entregar páginas web ao navegador do usuário. Abaixo, vamos mostrar como instalar um desses serviços no seu sistema.



## Preparação

Antes de começar a instalação do servidor web, é necessário garantir que o sistema esteja atualizado. Para isso, conecte-se ao servidor via SSH. Se você não sabe o que é SSH ou como usar, confira este guia: [Acesso inicial (SSH)](vserver-linux-ssh.md).

Uma vez conectado, atualize o sistema com o comando correspondente ao seu sistema operacional:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Instalação

Com a preparação concluída, agora você pode iniciar a instalação do servidor web. Dependendo do sistema operacional e do servidor web, execute os comandos abaixo:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

Após instalar o servidor web, você pode enviar os arquivos do seu site. Conecte-se ao seu servidor via FTP/SFTP, navegue até o diretório abaixo e faça o upload dos arquivos.

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

Depois de instalar o servidor web, envie os arquivos do seu site. Conecte-se via FTP/SFTP, navegue até o diretório abaixo e faça o upload.

```
/usr/share/nginx/html
```



## Verificação da Versão

Após a instalação, use os comandos `apache2 -v` (Apache) e `nginx -v` (Nginx) para conferir se a instalação foi bem-sucedida. A saída deve ser parecida com esta:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

Se aparecer algo parecido com isso, seu servidor web foi instalado com sucesso.
---
id: dedicated-linux-webserver
title: "إعداد Nginx و Apache على سيرفر Linux - تكوين بيئات سيرفر ويب قوية"
description: "اكتشف كيفية إعداد وتكوين سيرفرات ويب Nginx أو Apache لاستضافة موقعك بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت سيرفر ويب
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Nginx و Apache هما خدمتان شهيرتان تُستخدمان لتوصيل صفحات الويب إلى متصفح المستخدم. في الأسفل سنوضح لك كيفية تثبيت واحدة من هذه الخدمات على نظامك.

## التحضير

قبل بدء تثبيت سيرفر الويب فعليًا، من الضروري التأكد من تحديث النظام. للقيام بذلك، نتصل بالسيرفر عبر SSH. إذا لم تكن تعرف ما هو SSH وكيف تستخدمه، تحقق من هذا الدليل: [الوصول الأولي (SSH)](vserver-linux-ssh.md).

بمجرد الاتصال، يمكنك تحديث النظام باستخدام الأمر المناسب لنظام التشغيل الخاص بك:

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

## التثبيت

بعد الانتهاء من التحضير، يمكن الآن بدء تثبيت سيرفر الويب. اعتمادًا على نظام التشغيل وسيرفر الويب، يجب تنفيذ الأوامر التالية:

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

بعد تثبيت سيرفر الويب، يمكنك رفع ملفات موقعك. اتصل بسيرفرك عبر FTP/SFTP، وانتقل إلى الدليل التالي وارفع الملفات:

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

بعد تثبيت سيرفر الويب، يمكنك رفع ملفات موقعك. اتصل بسيرفرك عبر FTP/SFTP، وانتقل إلى الدليل التالي وارفع الملفات:

```
/usr/share/nginx/html
```

## التحقق من الإصدار

بعد الانتهاء من التثبيت، يمكنك استخدام الأوامر `apache2 -v` (لـ Apache) و `nginx -v` (لـ Nginx) للتحقق من نجاح التثبيت. يجب أن يكون الناتج مشابهًا لما يلي:

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

إذا ظهر أي من الناتجين أعلاه، فهذا يعني أن سيرفر الويب تم تثبيته بنجاح.
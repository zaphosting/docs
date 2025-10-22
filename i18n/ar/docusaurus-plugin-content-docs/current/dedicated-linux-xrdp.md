---
id: dedicated-linux-xrdp
title: "سيرفر مخصص: تثبيت xRDP (سطح المكتب البعيد)"
description: "اكتشف كيفية إعداد الوصول إلى سطح المكتب البعيد على سيرفرات أوبونتو وديبيان لإدارة وتحكم أسهل → تعلّم المزيد الآن"
sidebar_label: تثبيت xRDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

على لينوكس، عادةً ما يكون هناك وحدة تحكم SSH افتراضية لإدارة السيرفر. في بعض الحالات قد يكون من الأسهل استخدام اتصال سطح مكتب بعيد، مشابه لويندوز.  
يمكن إجراء تثبيت بعدي لمعظم توزيعات لينوكس. في هذا الدليل نشرح ذلك لأوبونتو وديبيان.

:::info
مهم: يجب استخدام أوبونتو 18.04.X LTS (Bionic Beaver) أو ديبيان 10 (Buster) على الأقل كنظام تشغيل. يُفضل استخدام الإصدارات الأحدث.
:::

<InlineVoucher />

## تثبيت xRDP

أولاً، يجب تحديث السيرفر: 
```
// ديبيان
sudo apt update; sudo apt upgrade -y

// أوبونتو
sudo apt update; sudo apt upgrade -y
```

بعد التحديث، سيتم تثبيت الحزم اللازمة: 
```
// ديبيان
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// أوبونتو
sudo apt install ubuntu-desktop -y
```

ثم يمكن تثبيت xRDP: 
```
// ديبيان
sudo apt install xrdp

// أوبونتو
sudo apt install xrdp
```

بعد التثبيت، يجب أن تظهر الحالة "نشط": 
```
// ديبيان
sudo systemctl status xrdp

// أوبونتو
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

إذا كانت الحالة جيدة، يجب إنشاء مستخدم. ثم إعادة تشغيل خدمة xRDP: 
```
// ديبيان
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// أوبونتو
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

عند الانتهاء من الإعداد، يمكنك الاتصال ببيانات root أو بيانات المستخدم المعني على السيرفر عبر سطح المكتب البعيد.  
المنفذ الافتراضي هو: 3389

## الاتصال

يمكن إجراء الاتصال عبر أي أداة RDP، متصلة بـ IP:PORT.  
عند الاتصال سيُطلب منك بيانات الدخول: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

بعد تسجيل الدخول بنجاح سترى سطح المكتب.  
مع أوبونتو الشكل مختلف قليلاً عن ديبيان:

أوبونتو: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

ديبيان: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)

<InlineVoucher />
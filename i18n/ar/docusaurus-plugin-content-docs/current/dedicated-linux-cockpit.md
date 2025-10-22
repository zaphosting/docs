---
id: dedicated-linux-cockpit
title: "سيرفر مخصص: تثبيت Cockpit"
description: "اكتشف كيف تدير سيرفرات لينكس بكفاءة مع واجهة الويب الخاصة بـ Cockpit للمراقبة والإدارة → تعلّم المزيد الآن"
sidebar_label: تثبيت Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Cockpit هي واجهة ويب لإدارة سيرفر لينكس واحد أو أكثر (عنقود). من عرض سجلات بسيطة إلى إدارة RAID، يقدم Cockpit العديد من الميزات.  
Cockpit مناسب للمبتدئين وأيضًا للمستخدمين المتقدمين الذين يريدون رؤية/إدارة كل شيء مهم بسرعة. بالإضافة إلى ذلك، يمكن الوصول إليه من أي جهاز تقريبًا.  
يمكن الوصول إلى موقع المشروع على https://cockpit-project.org/. 

:::info
هذا الدليل يشرح التثبيت على Debian (ابتداءً من Buster) / على Ubuntu (ابتداءً من Bionic Beaver). التثبيت متاح أيضًا على صفحة المشروع لـ Fedora، Red Hat، Fedora CoreOS، CentOS، Clear Linux، Archlinux و Tumbleweed.  
:::

<InlineVoucher />

## التثبيت

أولًا، يجب تحديث السيرفر:
```
// تحديث
sudo apt update; sudo apt upgrade -y
```
بعدها يمكن تنفيذ التثبيت:
```
// تثبيت Cockpit
sudo apt install cockpit -y
```
بمجرد اكتمال التثبيت، يمكن الوصول إلى لوحة Cockpit عبر IP:9090.  
يتم تسجيل الدخول باستخدام بيانات الدخول العادية للسيرفر/المستخدم. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)

<InlineVoucher />
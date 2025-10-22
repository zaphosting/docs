---
id: vserver-linux-cockpit
title: "VPS: تثبيت Cockpit"
description: "اكتشف كيفية إدارة سيرفرات Linux بكفاءة مع واجهة الويب Cockpit للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Cockpit
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Cockpit هي واجهة ويب لإدارة سيرفر ألعاب Linux واحد أو أكثر (عنقود). من عرض سجلات بسيطة إلى إدارة RAID، يقدم Cockpit العديد من الميزات.  
Cockpit مناسب للمبتدئين وأيضًا للمستخدمين المتقدمين الذين يريدون رؤية/إدارة كل شيء مهم بسرعة. بالإضافة إلى ذلك، يمكن الوصول إليه من أي جهاز تقريبًا.  
يمكن الوصول إلى موقع المشروع على https://cockpit-project.org/. 

:::info
هذا الدليل يشرح التثبيت على Debian (من Buster) / على Ubuntu (من Bionic Beaver). التثبيت متاح أيضًا على صفحة المشروع لـ Fedora، Red Hat، Fedora CoreOS، CentOS، Clear Linux، Archlinux و Tumbleweed.  
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

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## الخلاصة

مبروك، لقد قمت بتثبيت وتكوين Cockpit بنجاح! إذا كان لديك أي أسئلة أو مشاكل أخرى، يرجى التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا! 

<InlineVoucher />
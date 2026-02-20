---
id: vserver-linux-cockpit
title: "تثبيت Cockpit على سيرفر لينكس - إدارة سيرفرك عبر واجهة ويب"
description: "اكتشف كيف تدير سيرفرات لينكس بكفاءة مع واجهة الويب الخاصة بـ Cockpit للمبتدئين والمحترفين → تعلّم المزيد الآن"
sidebar_label: تثبيت Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Cockpit هي واجهة ويب لإدارة سيرفر لينكس واحد أو أكثر (عنقود). من عرض سجلات بسيطة إلى إدارة RAID، يقدم Cockpit العديد من الميزات.  
Cockpit مناسب للمبتدئين وأيضًا للمستخدمين المتقدمين الذين يريدون رؤية/إدارة كل شيء مهم بسرعة. بالإضافة إلى ذلك، يمكن الوصول إليه من أي جهاز تقريبًا.  
يمكن الوصول إلى موقع المشروع على https://cockpit-project.org/. 

:::info
هذا الدليل يشرح التثبيت على ديبيان (ابتداءً من Buster)/ أوبونتو (ابتداءً من Bionic Beaver). التثبيت متاح أيضًا على صفحة المشروع لفيدورا، ريد هات، Fedora CoreOS، سنتوس، Clear Linux، archlinux وTumbleweed.  
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
تسجيل الدخول يتم باستخدام بيانات الدخول العادية للسيرفر/المستخدم. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين Cockpit بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا! 

<InlineVoucher />
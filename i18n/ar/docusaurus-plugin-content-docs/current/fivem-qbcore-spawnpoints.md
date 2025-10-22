---
id: fivem-qbcore-spawnpoints
title: "FiveM: إدارة وتخصيص نقاط الظهور مع QbCore"
description: "اكتشف كيفية تخصيص وإضافة نقاط الظهور في إطار عمل QBCore لتحسين تجربة اللعب → تعلّم المزيد الآن"
sidebar_label: نقاط الظهور
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

حابب تغيّر نقاط الظهور الافتراضية أو تضيف نقاط جديدة؟ التعامل مع نقاط الظهور في **إطار عمل QBCore** يتم عبر مورد `qb-spawn`. في التالي راح نشرح لك كيف تقدر تخصصها.

<InlineVoucher />

## التهيئة

نقاط الظهور يتم تعديلها من خلال ملف التهيئة `config.lua` الخاص بمورد `qb-spawn`. تقدر تعدل هذا الملف عبر FTP. إذا ما تعرف تستخدم FTP بعد، ننصحك تطّلع على [دليل وصول FTP](gameserver-ftpaccess.md).

التهيئة الافتراضية لنقاط الظهور تكون كالتالي:

```
QB.Spawns = {
    ["legion"] = { -- مؤشر للجدول
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- مكان ظهور اللاعب
        location = "legion", -- هذا كيف جافاسكريبت تعرف أي نقطة اخترت
        label = "Legion Square", -- اللي يشوفه اللاعب في القائمة
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

لو حابب تضيف نقاط ظهور أكثر، لازم تضيف سجل جديد في ملف التهيئة:

```
["new_spawn_name"] = { -- لازم يكون فريد
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- إحداثيات ظهور اللاعب
    location = "new_spawn_name", -- لازم يكون فريد
    label = "New spawn name", -- هذا هو العنوان اللي بيظهر في قائمة الاختيار.
},
```

:::info تحديد الإحداثيات
تحتاج مورد مناسب عشان تحصل على الإحداثيات الحالية. راح تلاقي عدة خيارات على الإنترنت وتقدر تختار الأنسب لك. :)
:::

النتيجة النهائية راح تكون كالتالي:

```
    QB.Spawns = {
    
        ["legion"] = { -- مؤشر للجدول
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- مكان ظهور اللاعب
            location = "legion", -- هذا كيف جافاسكريبت تعرف أي نقطة اخترت
            label = "Legion Square", -- اللي يشوفه اللاعب في القائمة
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- لازم يكون فريد
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- إحداثيات ظهور اللاعب
        location = "new_spawn_name", -- لازم يكون فريد
        label = "New spawn name", -- هذا هو العنوان اللي بيظهر في قائمة الاختيار.
         },
    }
```




## الخلاصة

لقد نجحت في تغيير نقاط الظهور الموجودة أو إضافة نقاط جديدة باتباع هذه الطريقة. لأي أسئلة إضافية أو مساعدة، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لخدمتك! 🙂

<InlineVoucher />
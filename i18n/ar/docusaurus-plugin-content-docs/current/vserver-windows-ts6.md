---
id: vserver-windows-ts6
title: "VPS: إعداد سيرفر Teamspeak 6 على VPS ويندوز الخاص بك"
description: "اكتشف كيفية إعداد وتحسين نسخة البيتا من سيرفر TeamSpeak 6 لاستضافة سلسة وأداء ممتاز → تعلّم المزيد الآن"
sidebar_label: تثبيت سيرفر Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

في صيف 2025، أطلقت TeamSpeak النسخة **البيتا** من **سيرفر TeamSpeak 6**. الآن يمكنك تجربة الجيل القادم من TeamSpeak بنفسك!

تفكر تستضيف الخدمة بنفسك؟ راح نرشدك خطوة بخطوة لكيفية الإعداد والتكوين، وكل شيء لازم تعرفه.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />

## المتطلبات الأساسية

قبل تثبيت **سيرفر Teamspeak 6**، تأكد أن بيئة الاستضافة عندك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| العتاد      | الحد الأدنى  | توصية ZAP-Hosting          |
| ----------- | ------------ | -------------------------- |
| CPU         | 1 نواة vCPU  | 4 أنوية vCPU               |
| RAM         | 1 جيجابايت   | 4 جيجابايت                 |
| مساحة القرص | 1 جيجابايت   | 25 جيجابايت                |

## التحضير

قبل إعداد **سيرفر TeamSpeak 6**، لازم تجهز نظامك. عشان تتأكد أن نظامك يشتغل بأحدث البرامج وتحسينات الأمان، لازم تسوي تحديثات للنظام أولاً.

هذا يضمن أن نظامك يحتوي على أحدث تصحيحات الأمان وإصدارات البرامج قبل المتابعة.

## التثبيت

بعد ما تحقق كل المتطلبات وأكملت التحضيرات اللازمة، تقدر تبدأ بتثبيت تطبيق سيرفر Teamspeak 6. لتحميل أحدث إصدار، نزّل ملف الريليز من GitHub: [TeamSpeak 6 Server (ويندوز 64-بت)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

بعدين، فك الضغط عن الملف في مجلد تختاره. افتح **PowerShell** وروح للمجلد اللي فكيت فيه ملفات السيرفر. شغّل السيرفر بالأمر:

```
.\tsserver.exe
```

في أول تشغيل، راح تطلع لك نافذة اتفاقية الترخيص لازم توافق عليها. بعدها، راح تظهر بيانات حساب مدير Server Query ومفتاح الصلاحيات. هذي البيانات تظهر مرة وحدة فقط، فاحفظها في مكان آمن.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

بعد التأكيد، سيرفر TeamSpeak 6 بيشتغل في الخلفية وجاهز للاستخدام.

##### 

## التكوين

تقدر تضبط إعدادات إضافية لسيرفر **TeamSpeak 6** باستخدام **وسائط سطر الأوامر**. الخيارات تُمرر مباشرة عند تشغيل السيرفر. قائمة كاملة بالخيارات متوفرة في الوثائق الرسمية لـ [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). مثال:

```
./tsserver --default-voice-port 9987
```

## إنشاء الاتصال

بعد تشغيل سيرفر TeamSpeak 6، تقدر تتصل باستخدام عميل TeamSpeak 6. ببساطة استخدم عنوان IP الخاص بسيرفرك مع المنفذ الصحيح. أدخل هذي البيانات في العميل عشان تتصل بالسيرفر وتبدأ الاختبار.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

## الخلاصة والمزيد من الموارد

مبروك! الآن ثبتت وضبطت سيرفر Teamspeak 6 على VPS الخاص فيك بنجاح. ننصحك تطّلع على الموارد التالية، اللي ممكن تساعدك أكثر خلال عملية تكوين السيرفر:

- [الموقع الرسمي](https://teamspeak.com/en/) - معلومات وتنزيلات TeamSpeak 6
- [منتدى المجتمع](https://community.teamspeak.com/) - دعم المستخدمين والنقاشات
- [قضايا GitHub](https://github.com/teamspeak/teamspeak6-server/issues) - للإبلاغ عن الأخطاء وتتبع القضايا المفتوحة

عندك أسئلة محددة ما تغطيها هذي الصفحة؟ لأي استفسار أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لمساعدتك! 🙂
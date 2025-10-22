---
id: vserver-linux-ssh2fa
title: "VPS: المصادقة الثنائية عبر SSH"
description: "اكتشف كيف تعزز أمان SSH باستخدام Google Authenticator 2FA للوصول الآمن إلى السيرفر وحماية بيئة لينكس الخاصة بك → تعلّم المزيد الآن"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

خدمة المصادقة الثنائية عبر SSH من جوجل، المعروفة باسم **Google Authenticator SSH**، تعزز أمان الوصول عبر SSH (Secure Shell) بإضافة طبقة ثانية من التحقق. رغم أن SSH يوفر بالفعل طريقة آمنة لإنشاء اتصال مشفر مع سيرفر بعيد، إلا أن دمج المصادقة الثنائية يزيد من مستوى الأمان بطلب إدخال المستخدمين ليس فقط كلمة المرور، بل أيضاً رمز تحقق لمرة واحدة يتم توليده بواسطة Google Authenticator. في هذا الدليل، سنستعرض خطوات تثبيت وتكوين خدمة **Google Authenticator SSH** على سيرفر لينكس.

<InlineVoucher />

## التثبيت

أولاً، تحتاج لتثبيت Google Authenticator على VPS لينكس الخاص بك. نفذ الأمر التالي:

```
sudo apt install libpam-google-authenticator
```

سيُطلب منك كتابة "Y" لتثبيت الحزمة، اكتبها واضغط Enter وسيتم تثبيت Google Authenticator!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

ابدأ Google Authenticator بكتابة 'google-authenticator'. تأكد من أن حجم نافذتك كافٍ لعرض رمز QR، وإذا لم يكن كذلك اضغط "CTRL+C" وأعد تشغيل الأمر.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

سيُطلب منك مرة أخرى إذا كنت تريد المتابعة، اكتب "Y" للموافقة. ستحصل الآن على رمز QR. افتح تطبيق المصادقة على هاتفك الذكي وامسح رمز QR. في هذا المثال نستخدم Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

تأكد من نسخ أكواد النسخ الاحتياطي، حيث يمكن استخدام كل منها مرة واحدة في حال فقدت تطبيق المصادقة.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

الآن يعرض التطبيق الرموز التي ستحتاجها لتسجيل الدخول لاحقاً. في هذه الحالة تبدو هكذا:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

الأسئلة التالية ستظهر الآن:

1. هل تريد حفظ إعدادات Google Authenticator؟
2. هل تريد تسجيل دخول واحد فقط كل 30 ثانية؟
3. هل يجب زيادة الوقت الذي يكون فيه الرمز صالحاً؟
4. هل يجب السماح بثلاث محاولات تسجيل دخول فقط كل 30 ثانية؟ (حماية ضد هجمات القوة الغاشمة)

لأسباب أمنية ننصح بالموافقة على جميعها بـ نعم.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## التكوين

الآن علينا تعديل Google Authenticator ليتم استخدامه فعلياً. هذا يتطلب تعديلين.

### /etc/ssh/sshd_config

فعّل الوحدات المطلوبة في ملف `/etc/ssh/sshd_config`. افتح الملف بكتابة:
```
sudo nano /etc/ssh/sshd_config
```

أنت الآن في محرر نصوص. يمكنك التنقل باستخدام الأسهم، حذف النص وإدخاله بحرية، ثم اضغط 'CTRL + X' ثم 'Y' وأخيراً 'Enter' لحفظ الملف.

تأكد من أن السطرين 'UsePAM' و 'ChallengeResponseAuthentication' مضبوطين على 'yes'، مثل هذا:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

احفظ الملف بـ 'CTRL + X' ثم 'Y' وأخيراً 'Enter'. أعد تشغيل SSH بالأمر التالي:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

الآن نضيف Google Authenticator إلى عملية تسجيل الدخول في ملف `/etc/pam.d/sshd`. افتح الملف بكتابة:
```
sudo nano /etc/pam.d/sshd
```
انتقل إلى نهاية الملف وأضف السطر التالي:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

احفظ الملف بـ 'CTRL + X' ثم 'Y' وأخيراً 'Enter'.

## اختبار الوصول

حان الوقت لتسجيل الدخول لأول مرة باستخدام المصادقة الثنائية. بعد اتباع الخطوات السابقة، كل ما عليك فعله هو إعادة تشغيل اتصال SSH الخاص بك.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

أدخل كلمة المرور كالمعتاد. سيُطلب منك إدخال رمز، فقط أدخل رمز 2FA الحالي.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

الآن أنت مسجل دخول!

## الخلاصة

مبروك، لقد فعلت وكونت المصادقة الثنائية لـ SSH بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يومياً!

<InlineVoucher />
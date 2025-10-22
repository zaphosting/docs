---
id: dedicated-windows-docker
title: "سيرفر مخصص: إعداد Docker على ويندوز"
description: "اكتشف كيف تنشر وتدير التطبيقات بثقة باستخدام حاويات Docker لتوسيع وتحديث فعال → تعلّم المزيد الآن"
sidebar_label: تثبيت Docker
services:
  - سيرفر مخصص
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Docker هو منصة مفتوحة لتطوير، شحن، وتشغيل التطبيقات داخل حاويات. الحاوية تجمع التطبيق مع كل تبعياته في وحدة موحدة يمكن تشغيلها بثبات عبر بيئات مختلفة.

هذا الأسلوب يزيل المشاكل الناتجة عن الاختلافات بين أنظمة التطوير، الاختبار، والإنتاج. مع Docker، يمكن نشر التطبيقات بسرعة، توسيعها بكفاءة، وتحديثها بدون توقف.

تفكر تستضيف الخدمة بنفسك؟ هنمشي معاك خطوة بخطوة لكيفية الإعداد والتكوين، وكل شيء لازم تعرفه.

<InlineVoucher />

## المتطلبات الأساسية

قبل تثبيت **Docker**، تأكد أن بيئة الاستضافة عندك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| العتاد      | الحد الأدنى | توصية ZAP-Hosting         |
| ----------- | ----------- | ------------------------- |
| CPU         | 1 نواة CPU  | 4 أنوية CPU               |
| RAM         | 4 جيجابايت  | 4 جيجابايت                |
| مساحة القرص | 10 جيجابايت | 25 جيجابايت               |

## التثبيت

لتثبيت Docker على ويندوز سيرفر، حمّل وشغّل سكربت PowerShell `install-docker-ce.ps1`. هذا السكربت يُفعّل ميزات النظام المطلوبة للحاويات ويثبت بيئة تشغيل Docker. افتح PowerShell كمسؤول ونفذ الأمر التالي:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

السكربت يُفعّل ميزات ويندوز المتعلقة بالحاويات، يثبت محرك Docker وواجهة الأوامر الخاصة به، ويسجل خدمة Docker لتشغيلها تلقائياً.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

سيتم إعادة تشغيل النظام أثناء التثبيت ويجب أن يستمر تلقائياً بعد ذلك. بعد إعادة التشغيل، سجّل الدخول وشغّل نفس الأمر مرة أخرى إذا طلب السكربت ذلك لإكمال تهيئة الخدمة. بعد الانتهاء، ستظهر لك النتيجة بهذا الشكل:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```

## التكوين

### تشغيل وإيقاف Docker

Docker يعمل كخدمة على ويندوز. بعد التثبيت يبدأ تلقائياً. للتحكم به يدوياً:

```
Start-Service docker    # تشغيل خدمة Docker
Stop-Service docker     # إيقاف خدمة Docker
Restart-Service docker  # إعادة تشغيل خدمة Docker
```

### تشغيل وإيقاف الحاوية

شغّل حاوية باستخدام `docker run`. مثال: سيرفر ويب IIS يربط المنفذ 80 داخل الحاوية بالمنفذ 8080 على المضيف:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

### التحقق من حالة الحاوية

تحقق من حالة الحاويات باستخدام:

```
docker ps        # الحاويات المشغلة
docker ps -a     # كل الحاويات، بما فيها المتوقفة
docker inspect web   # معلومات مفصلة
docker logs web      # سجلات الحاوية
```

#### الموارد والحالة

```
docker stats            # استهلاك CPU/RAM/IO مباشر
```

## الخلاصة والمزيد من الموارد

مبروك! الآن ثبت وضبط Docker بنجاح على سيرفرك المخصص. ننصحك أيضاً تطّلع على الموارد التالية، اللي ممكن تساعدك أكثر خلال إعداد السيرفر:

- [Docker.com](https://Docker.com/) - الموقع الرسمي
- [docs.docker.com](https://docs.docker.com/) - توثيق Docker

عندك أسئلة محددة مش مغطاة هنا؟ لأي استفسار أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يومياً لخدمتك! 🙂
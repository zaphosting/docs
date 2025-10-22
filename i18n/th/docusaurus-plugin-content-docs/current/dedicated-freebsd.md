---
id: dedicated-freebsd
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง FreeBSD"
description: "ค้นพบวิธีติดตั้งและตั้งค่า FreeBSD บนเซิร์ฟเวอร์เฉพาะของคุณเพื่อประสิทธิภาพและความน่าเชื่อถือสูงสุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

ต่อไปนี้จะอธิบายขั้นตอนทีละขั้นตอนเกี่ยวกับวิธีการติดตั้งและตั้งค่าระบบปฏิบัติการ FreeBSD บนเซิร์ฟเวอร์เฉพาะของคุณ ทำตามคำแนะนำอย่างระมัดระวังเพื่อให้แน่ใจว่าคุณตั้งค่าระบบปฏิบัติการได้สำเร็จและใช้งานได้อย่างเต็มประสิทธิภาพ

:::info

โครงสร้างของคู่มือนี้อ้างอิงจากการใช้ระบบปฏิบัติการ FreeBSD 13.0 การติดตั้งจากเวอร์ชันก่อนหน้าหรือใหม่กว่าอาจมีความแตกต่างเล็กน้อยในกระบวนการ

:::

<InlineVoucher />

## การเตรียมตัว

สำหรับการติดตั้งและตั้งค่าระบบปฏิบัติการ สิ่งสำคัญอันดับแรกคือการเมานต์ไฟล์ ISO ของระบบปฏิบัติการนั้น มีหลายวิธีที่สามารถเมานต์ได้:

1. เมานต์ผ่านการตั้งค่าเริ่มต้น
2. เมานต์ผ่าน iLO (Virtual Media)
3. เมานต์ผ่าน iLO (Remote Console)

ถ้าคุณยังไม่คุ้นเคยกับการเมานต์ไฟล์ ISO แนะนำให้ดูที่ [การตั้งค่าเริ่มต้น](dedicated-setup.md) หรือ [ISO ของตัวเอง](dedicated-iso.md) ของเรา



## การติดตั้ง
เมื่อโหลดไฟล์ ISO สำเร็จ เซิร์ฟเวอร์จะเข้าสู่กระบวนการตั้งค่า

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

เริ่มการติดตั้งโดยกด `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

เลือกแผนผังแป้นพิมพ์ที่คุณชอบแล้วกดดำเนินการต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

เลือกโฮสต์เนมที่คุณต้องการ

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

คุณสามารถเลือกแพ็กเกจระบบเสริมที่ต้องการติดตั้งได้ หลังจากเลือกเสร็จแล้วกด OK เพื่อดำเนินการต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

ในขั้นตอนนี้คุณสามารถสร้างพาร์ติชันได้ ในตัวอย่างนี้เราใช้ RAID0 ข้อมูลเพิ่มเติมเกี่ยวกับ RAID อธิบายไว้ใน [ตั้งค่า RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

ถ้าไม่มีการเปลี่ยนแปลงใด ๆ ให้กด `Enter` เพื่อดำเนินการต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

เนื่องจากเราใช้ RAID0 เลือกไม่มีความซ้ำซ้อน (no redundancy)

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

ทำเครื่องหมายที่โวลุ่มของคุณด้วย `Space` แล้วกด `Enter` เพื่อดำเนินการต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

เราจะยืนยันว่าข้อมูลทั้งหมดจะถูกลบ

:::info
เซิร์ฟเวอร์ของคุณกำลังดำเนินการตั้งค่า อาจใช้เวลาหลายนาที
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

กรอกพาสเวิร์ดของคุณแล้วกด `Enter` เพื่อดำเนินการต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

เลือก "No" สำหรับการตั้งค่า IPv4/IPv6 ซึ่งจะตั้งค่าภายหลัง

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

เลือก "Yes" และตั้งค่าโซนเวลาและวันที่/เวลา

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

คุณสามารถเปลี่ยนระบบที่จะเริ่มทำงานอัตโนมัติเมื่อเซิร์ฟเวอร์บูตได้

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

ถ้าจำเป็น คุณสามารถแก้ไขการตั้งค่าความปลอดภัยได้

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

การตั้งค่าเสร็จสิ้นแล้ว เลือก "Exit" และยืนยันด้วยการกด `Enter`

:::info
ลบไฟล์ ISO ใน iLO ของคุณและเลือก "Reboot"
:::



## การตั้งค่า

### เครือข่าย

เพื่อเปิดใช้งานอุปกรณ์เครือข่าย กรุณาเข้าสู่ระบบด้วยพาสเวิร์ดของคุณ

เปิดไฟล์ loader.conf ด้วยโปรแกรมแก้ไขที่คุณชอบ เช่น `ee /boot/loader.conf` แล้วเพิ่มบรรทัดนี้:

```if_oce_load="YES"```

ออกจากโปรแกรมแก้ไขโดยกด `CTRL+C` แล้วพิมพ์ exit จากนั้นรีบูตเซิร์ฟเวอร์เฉพาะของคุณ

***

หลังจากรีบูต เราต้องแก้ไขไฟล์ rc.conf เช่นโดยใช้ `ee /etc/rc.conf` แล้วเพิ่มบรรทัดนี้:

```
ifconfig_oce0="DHCP"
```

:::caution
ชื่อของอะแดปเตอร์เครือข่ายในตัวอย่าง **oce0** อาจแตกต่างกัน ตรวจสอบให้แน่ใจว่าคุณระบุอะแดปเตอร์เครือข่ายที่ถูกต้อง ซึ่งสามารถตรวจสอบได้ด้วยคำสั่ง ifconfig ข้อมูลจะถูกดึงโดยอัตโนมัติผ่านเซิร์ฟเวอร์ DHCP
:::

ตัวอย่างควรมีลักษณะดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

ออกจากโปรแกรมแก้ไขโดยกด `CTRL+C` แล้วพิมพ์ "exit" จากนั้นรันคำสั่ง `/etc/netstart` ครั้งหนึ่ง

:::info
เซิร์ฟเวอร์ของคุณควรมีการเชื่อมต่ออินเทอร์เน็ตที่ใช้งานได้แล้ว
:::



## สรุป

ยินดีด้วย คุณได้ติดตั้งระบบปฏิบัติการ FreeBSD บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />
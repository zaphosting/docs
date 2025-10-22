---
id: minecraft-add-own-world
title: "Minecraft: เพิ่มโลกของคุณเองลงในเซิร์ฟเวอร์"
description: "เรียนรู้วิธีอัปโหลดและตั้งค่าโลก Minecraft แบบกำหนดเองบนเซิร์ฟเวอร์ของคุณ เพื่อประสบการณ์การเล่นเกมที่เป็นตัวคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เพิ่มโลกของคุณเอง
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณอยากใช้โลกของคุณเองหรือโลกที่ดาวน์โหลดมาจากอินเทอร์เน็ตบนเซิร์ฟเวอร์เกมของคุณใช่ไหม? ถ้าใช่ นี่แหละที่ที่ใช่สำหรับคุณ! สิ่งที่คุณต้องมีก็คือโลกของคุณและโปรแกรม FTP client ถ้าคุณไม่รู้ว่า FTP client คืออะไรและใช้งานยังไง ลองดูคู่มือต่อไปนี้ได้เลย: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="วิธีอัปโหลดแผนที่แบบกำหนดเองบนเซิร์ฟเวอร์ Minecraft ของคุณ" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>

เมื่อเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP ได้แล้ว คุณก็สามารถเริ่มตั้งค่าโลกของคุณเองได้เลย โดยก่อนอื่นคุณต้องเข้าไปที่ไดเรกทอรีที่เก็บโลกปัจจุบันอยู่ ซึ่งจะอยู่ที่ไดเรกทอรีนี้: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

ตอนนี้ต้องอัปโหลดโลกใหม่เข้าไปในไดเรกทอรีนี้ คุณสามารถลบและแทนที่โฟลเดอร์ **world** เก่า หรือจะอัปโหลดโลกใหม่ในชื่ออื่นก็ได้ ในตัวอย่างนี้เราจะอัปโหลดโลกใหม่ในชื่อใหม่:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

ตอนนี้โลกที่อัปโหลดใหม่ต้องถูกตั้งค่าในไฟล์ **server.properties** คุณสามารถหาไฟล์นี้ได้ใน **การจัดการเซิร์ฟเวอร์เกม** ภายใต้เมนู **Configs** ที่นั่นคุณต้องปรับค่าของคำสั่ง **level-name=** ให้ตรงกับชื่อโลกใหม่:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

หลังจากรีสตาร์ทเซิร์ฟเวอร์ โลกใหม่ก็จะถูกนำมาใช้แล้ว สนุกกับโลกใหม่ของคุณ! 🙂

<InlineVoucher />

<InlineVoucher />
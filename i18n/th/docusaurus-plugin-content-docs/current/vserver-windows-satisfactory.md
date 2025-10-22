---
id: vserver-windows-satisfactory
title: "VPS: ตั้งค่า Satisfactory Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Satisfactory Dedicated Server บน VPS หรือเซิร์ฟเวอร์เฉพาะของคุณได้อย่างรวดเร็วและง่ายดาย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มี VPS หรือเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมใช่ไหม? เช่น Satisfactory Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณได้อย่างไร

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="ตั้งค่า Satisfactory Dedicated Server บน Windows VPS" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>
<InlineVoucher />

## เตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ Satisfactory จำเป็นต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้ดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นจะเป็นขั้นตอนดาวน์โหลด ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** หลังจากแตกไฟล์แล้ว ให้รันไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ Satisfactory ได้เลย



## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** รันคำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 1690800` ซึ่ง App ID **1690800** คือแอปพลิเคชัน **Satisfactory Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::



ไปที่โฟลเดอร์ที่คุณติดตั้งไว้ แล้วเข้าไปที่ซับไดเรกทอรีนี้: **../steamapps/common/SatisfactoryDedicatedServer**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพเพื่อรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: server-start.bat

:::info
อย่าลืมเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้แน่ใจว่าไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ เพิ่มโค้ดนี้ลงไปแล้วบันทึก:

```
Factoryserver.exe -log -unattended
```



จากนั้นรันไฟล์นี้ ในการสตาร์ทครั้งแรกจะมีหน้าต่างป๊อปอัพแจ้งว่าต้องติดตั้งคอมโพเนนต์บางอย่างเพื่อรันโปรแกรม เกมต้องการ Visual C++ Runtime ให้คลิก Yes และติดตั้งให้เสร็จ

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก ต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ที่ใช้ในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


ต้องเพิ่มกฎใหม่ในไฟร์วอลล์ โดยคลิกที่กฎขาเข้าและขาออกตามภาพด้านล่าง แล้วเพิ่มกฎสำหรับโปรโตคอล UDP และพอร์ต 15000



## การตั้งค่า

การตั้งค่าพื้นฐานเสร็จแล้ว คุณสามารถปรับแต่งเพิ่มเติมได้ในไฟล์ config **ServerSettings.ini** ที่นี่คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ และตัวเลือกอื่น ๆ ไปที่โฟลเดอร์นี้:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## เล่นเกม

เมื่อเสร็จสิ้นการตั้งค่า คุณสามารถเริ่มเซิร์ฟเวอร์ได้โดยรันไฟล์ **server-start.bat** ที่สร้างไว้ จะเปิดคอนโซลเซิร์ฟเวอร์และเริ่มกระบวนการสตาร์ทเซิร์ฟเวอร์ หากทุกอย่างถูกต้อง เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังจากเริ่มต้นสำเร็จ



## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Satisfactory บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />
---
id: vserver-windows-vrising
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ V-Rising บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Windows สำหรับ V Rising เพื่อประสิทธิภาพการเล่นเกมที่ดีที่สุดและการโฮสต์ที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="วิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ V RISING บน Windows!" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอที่อธิบายทุกอย่างให้คุณแบบชัดเจน ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>
<InlineVoucher />

## ข้อมูลพื้นฐาน: 
ต้องใช้เซิร์ฟเวอร์ที่รันบน Windows Server 2016/2019 โดยมี CPU อย่างน้อย 4 คอร์ ที่ความเร็ว 2.4 GHz (AMD/Intel) และ RAM อย่างน้อย 4GB (DDR3/4) พร้อมพื้นที่ว่างบนดิสก์ 6GB (SSD หรือดีกว่า แนะนำ) เซิร์ฟเวอร์ต้องใช้สถาปัตยกรรม 64 บิต

## ขั้นตอนที่ 1 สร้างโฟลเดอร์สำหรับ V-Rising

ก่อนอื่น คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ของคุณโดยใช้ [Initial Access (RDP)](vserver-windows-userdp.md) หลังจากเชื่อมต่อแล้ว ให้สร้างโฟลเดอร์ใหม่บนเซิร์ฟเวอร์เพื่อเก็บไฟล์ของ V-Rising  
ในตัวอย่างนี้ เราจะสร้างโฟลเดอร์ใหม่บน Desktop  
ทำได้โดยคลิกขวา แล้วเลือก "ใหม่ -> โฟลเดอร์"

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

ตั้งชื่อโฟลเดอร์ตามที่คุณต้องการ ในตัวอย่างนี้เราตั้งชื่อว่า "VRising"

## ขั้นตอนที่ 2 ดาวน์โหลด SteamCMD ลงบนเซิร์ฟเวอร์ Windows ของคุณ

เปิดเบราว์เซอร์แล้วไปที่ [ลิงก์นี้](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) เพื่อดาวน์โหลด SteamCMD สำหรับ Windows ลงบนเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

ไฟล์จะถูกดาวน์โหลดและอยู่ในโฟลเดอร์ดาวน์โหลด (โฟลเดอร์ดาวน์โหลดอาจแตกต่างกันไป)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

เพื่อความสะดวก เราจะคัดลอกไฟล์ steamcmd.zip ไปยังโฟลเดอร์ VRising ที่สร้างไว้บน Desktop  
คลิกที่ไฟล์แล้วกด "CTRL+C"  
จากนั้นเปิดโฟลเดอร์ VRising บน Desktop แล้วกด "CTRL+V"  
ตอนนี้คุณจะเห็นไฟล์อยู่ในโฟลเดอร์ VRising

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

คลิกขวาที่ไฟล์ steamcmd.zip แล้วเลือก Extract All ยืนยันข้อความที่ขึ้นมาโดยกดปุ่ม Extract

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

เมื่อเสร็จแล้ว ให้ดับเบิลคลิกที่ไฟล์ steamcmd  
จะมีหน้าต่างใหม่เปิดขึ้นมาเพื่อติดตั้งไฟล์ steamcmd

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## ขั้นตอนที่ 3 ดาวน์โหลดไฟล์ V Rising

หลังจากติดตั้งไฟล์ steamcmd แล้ว คุณจะเห็นหน้าต่างนี้

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

ตอนนี้ให้กำหนดตำแหน่งที่จะดาวน์โหลดไฟล์ด้วยคำสั่ง "force_install_dir"  
คำสั่งเต็มในตัวอย่างนี้คือ:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

จากนั้นล็อกอินด้วยผู้ใช้ anonymous โดยพิมพ์คำสั่ง "login anonymous"

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

เมื่อเสร็จแล้ว เราสามารถดาวน์โหลดไฟล์ได้เลย  
ใช้คำสั่งนี้:  
app_update 1829350 validate

ไฟล์จะถูกดาวน์โหลด ซึ่งอาจใช้เวลาสักครู่

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

เมื่อเสร็จแล้ว คุณจะเห็นไฟล์ทั้งหมดในโฟลเดอร์ VRising บนเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## ขั้นตอนที่ 4 เริ่มและตั้งค่าเซิร์ฟเวอร์ V Rising

คุณสามารถแก้ไขไฟล์ start_server_example.bat เพื่อปรับแต่งบางอย่าง  
คลิกขวาที่ไฟล์แล้วเลือกแก้ไข  
คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์และเส้นทางที่บันทึกข้อมูลได้

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

คุณยังสามารถแก้ไขไฟล์ config เพิ่มเติมได้ในโฟลเดอร์ VRisingServer_Data\StreamingAssets\Settings

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

ในไฟล์ ServerHostSettings.json คุณสามารถตั้งค่าทั่วไป เช่น กำหนดพอร์ต, คำอธิบายเซิร์ฟเวอร์, ระยะเวลาการบันทึกอัตโนมัติ และรหัสผ่านเซิร์ฟเวอร์เกม  
ผมเปลี่ยนชื่อเซิร์ฟเวอร์ในไฟล์นี้เป็น "ZAP-Hosting Test Server"

เพื่อเริ่มเซิร์ฟเวอร์ ให้ดับเบิลคลิกที่ไฟล์ start_server_example.bat

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

กระบวนการเริ่มต้นจะใช้เวลาสักครู่  
ถ้าพอร์ตถูกตั้งค่าให้ส่งต่อถูกต้องในขั้นตอนถัดไป คุณจะเห็นเซิร์ฟเวอร์ในรายการเซิร์ฟเวอร์

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## ขั้นตอนที่ 5 ปลดล็อกพอร์ตในไฟร์วอลล์

เซิร์ฟเวอร์ต้องเปิดให้เข้าถึงได้สาธารณะเพื่อเล่นกับเพื่อน ๆ ดังนั้นพอร์ตของเซิร์ฟเวอร์ต้องถูกเปิดในไฟร์วอลล์ของ Windows  
พอร์ต 9876 และ 9877 ต้องถูกปล่อยให้ใช้งานได้ทั้งโปรโตคอล TCP และ UDP  
พอร์ต 9876 คือพอร์ตเซิร์ฟเวอร์เกม และ 9877 คือพอร์ต Query  
วิธีเปิดพอร์ตบน Windows ดูได้ที่ [Port Forwarding (Firewall)](vserver-windows-port.md)  

หลังจากปล่อยพอร์ตแล้ว เซิร์ฟเวอร์จะเปิดให้เข้าถึงได้สาธารณะ ถ้าเซิร์ฟเวอร์ถูกสตาร์ทแล้ว

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่า V-Rising บน VPS ของคุณเรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />
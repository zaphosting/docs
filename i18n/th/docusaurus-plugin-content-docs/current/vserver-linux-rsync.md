---
id: vserver-linux-rsync
title: "VPS: สำรองข้อมูลเซิร์ฟเวอร์ Linux ด้วย Rsync"
description: "เรียนรู้วิธีสร้างสำรองข้อมูลแบบเพิ่มทีละนิดอย่างมีประสิทธิภาพด้วย Rsync สำหรับการซิงค์ข้อมูลทั้งในเครื่องและระยะไกล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้างสำรองข้อมูลด้วย Rsync
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync:

สามารถสำรองข้อมูลได้ด้วยเครื่องมือ Rsync  
โดยสามารถคัดลอกข้อมูลไปยังไดเรกทอรี/ไดรฟ์อื่นในเครื่องเดียวกัน หรือไปยังระบบระยะไกลก็ได้  

## คัดลอกข้อมูลไปยังไดเรกทอรีหรือไดรฟ์ในเครื่องอื่น:

:::info
ระวัง: การรันครั้งแรกอาจใช้เวลานานกว่าครั้งถัดไปมาก ขึ้นอยู่กับปริมาณข้อมูล เพราะครั้งแรก Rsync จะซิงค์ข้อมูลทั้งหมด แต่ตั้งแต่ครั้งที่สองเป็นต้นไปจะซิงค์เฉพาะข้อมูลที่เปลี่ยนแปลงเท่านั้น  
:::
> ดังนั้นจะได้สำรองข้อมูลแบบเพิ่มทีละนิด (incremental backup)  

## ขั้นตอนที่ 1

สามารถติดตั้ง Rsync ด้วยคำสั่งนี้:

```
apt install rsync
```

เมื่อติดตั้งเสร็จแล้วก็สามารถใช้งานได้ทันที  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="สำรองข้อมูลรายวันไปยังไดเรกทอรี/ไดรฟ์ในเครื่อง">

## ขั้นตอนที่ 2

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup ภายใต้ /home  

สามารถทำได้ด้วยคำสั่งนี้: 

```
rsync -arz /home/Client /home/Backup
```
-a=เก็บรักษาคุณสมบัติของไฟล์ทั้งหมด (archiving)  
<br/>
-r=ซิงค์แบบเรียกซ้ำ (recursive) รวมโฟลเดอร์ย่อยด้วย  
<br/>
-z=บีบอัดข้อมูล ขึ้นกับปริมาณ/ขนาดข้อมูล  

โฟลเดอร์ถูกซิงค์เรียบร้อยแล้ว  

ถ้าไฟล์ในโฟลเดอร์ Client ถูกลบตอนนี้ ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 จริง ๆ ก็สามารถแก้ไขคำสั่ง rsync ได้ง่าย ๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup ด้วย  

คำสั่งที่แก้ไขแล้วคือ: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=เก็บรักษาคุณสมบัติของไฟล์ทั้งหมด (archiving)  
<br/>
-r=ซิงค์แบบเรียกซ้ำ (recursive) รวมโฟลเดอร์ย่อยด้วย  
<br/>
-z=บีบอัดข้อมูล ขึ้นกับปริมาณ/ขนาดข้อมูล  
<br/>
--delete=ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง  

## ขั้นตอนที่ 3

เพื่อไม่ต้องรันคำสั่งนี้ด้วยมือทุกครั้ง สามารถตั้งเป็น cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข  
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

เมื่อเปิดไฟล์ด้วย nano แล้ว ก็สามารถสร้างและใส่ crontab ได้เลย  
สามารถสร้าง crontab ได้จาก [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะหน้าตาแบบนี้: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งนี้จะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
<TabItem value="Daily backup to a remote system" label="สำรองข้อมูลรายวันไปยังระบบระยะไกล">

## ขั้นตอนที่ 4

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup บนระบบระยะไกล  
การเชื่อมต่อจะใช้ SSH key เพื่อให้สามารถตั้งสำรองข้อมูลอัตโนมัติได้  
>สำคัญ: ต้องติดตั้ง Rsync บนเซิร์ฟเวอร์ระยะไกลด้วย  
>```
>apt install rsync
>```

ตัวอย่างคำสั่งสำหรับสำรองข้อมูลไปยังโฮสต์ระยะไกล (ปรับแต่งตามต้องการ): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=เก็บรักษาคุณสมบัติของไฟล์ทั้งหมด (archiving)  
<br/>
-r=ซิงค์แบบเรียกซ้ำ (recursive) รวมโฟลเดอร์ย่อยด้วย  
<br/>
-z=บีบอัดข้อมูล ขึ้นกับปริมาณ/ขนาดข้อมูล  
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)  
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]  
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]  
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้และที่อยู่ของโฮสต์ระยะไกล: name@IP/โดเมน  
<br/>
ไดเรกทอรีเป้าหมายบนโฮสต์ระยะไกล(:/home/Backup/Home-Server1/)= :/[path to target directory]  

หลังรันคำสั่ง โฟลเดอร์/ไฟล์จะถูกซิงค์และบันทึกลงไดเรกทอรีระยะไกลเรียบร้อยแล้ว  

ถ้าไฟล์ในโฟลเดอร์ Client ถูกลบ ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup บนโฮสต์ระยะไกล  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 จริง ๆ ก็สามารถแก้ไขคำสั่ง rsync ได้ง่าย ๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup บนโฮสต์ระยะไกลด้วย  

คำสั่งที่แก้ไขแล้วคือ:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=เก็บรักษาคุณสมบัติของไฟล์ทั้งหมด (archiving)  
<br/>
-r=ซิงค์แบบเรียกซ้ำ (recursive) รวมโฟลเดอร์ย่อยด้วย  
<br/>
-z=บีบอัดข้อมูล ขึ้นกับปริมาณ/ขนาดข้อมูล  
<br/>
--delete=ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง  
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)  
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]  
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]  
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้และที่อยู่ของโฮสต์ระยะไกล: name@IP/โดเมน  
<br/>
ไดเรกทอรีเป้าหมายบนโฮสต์ระยะไกล(:/home/Backup/Home-Server1/)= :/[path to target directory]  

## ขั้นตอนที่ 5

เพื่อไม่ต้องรันคำสั่งนี้ด้วยมือทุกครั้ง สามารถตั้งเป็น cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข  
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

เมื่อเปิดไฟล์ด้วย nano แล้ว ก็สามารถสร้างและใส่ crontab ได้เลย  
สามารถสร้าง crontab ได้จาก [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะหน้าตาแบบนี้: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งนี้จะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
</Tabs>

<InlineVoucher />
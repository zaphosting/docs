---
id: vserver_linux_ftp
title: vServer: FTP service does not work - Troubleshooting
description: Information on how to fix FTP problems on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: FTP Service isn't working
---

## What can you do if the gameserver or teamspeak server is not accessible via FTP?

> ⚠️ Attention: The following steps only work on your own vServer/Root Server if the ZAP web interface has been installed!

If the created server cannot be reached via FTP, the FTP service (ProFTPD) is not active in most cases. In rare cases this can also be due to an incorrect config or an occupied port, i.e. FTP port 21 is used / occupied by another program.

## Check the FTP problem more closely:

### Check Availability
You can easily do this using the FTP browser in the web interface. Click on "FTP browser" in the menu under Tools of the respective server

![](https://screensaver01.zap-hosting.com/index.php/s/SmJ4zQaFjz67mXm/preview)

Then press the "Direct Connection" button once. 

![](https://screensaver01.zap-hosting.com/index.php/s/szbdPj6k4kpoKk7/preview)

Now you will probably see the following picture:

![](https://screensaver01.zap-hosting.com/index.php/s/egSesA5JyCTgfPQ/preview)

If you have already tried an FTP tool, it will very likely have already displayed an error similar to the following:

![](https://screensaver01.zap-hosting.com/index.php/s/kHwStfCDqbkJpJW/preview)


Since it is now clear that a connection via WebFTP or FTP tool is not possible, you have to take a closer look at the FTP service on the vServer or root server.

### Check ProFTPD Status

To do this, you connect to your server via SSH / Console and then enter the command "service proftpd status". The status is now read out and displayed accordingly:

![](https://screensaver01.zap-hosting.com/index.php/s/dtPGebjqBgrFwrH/preview)


There you can see that the status reports "dead", in short the service is offline and therefore not accessible.


### Restart FTP Service
The FTP service can be restarted with the following command:

```
service proftpd start
```

If there is no response after the command has been executed, the service is usually online/available again.

The whole thing can then be verified again with the command "service proftpd status". It should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/6DtNF7c6g7pTxHN/preview)

Since the status is now "active" again and no longer "dead", the FTP connection can be tried again using the FTP tool and WebFTP.

### Check the connection again
You should now be able to establish a connection and view your data:

#### Via WebFTP: 

![](https://screensaver01.zap-hosting.com/index.php/s/r2XG5dgJDj98mZH/preview)


#### Via FTP-Tool: 

![](https://screensaver01.zap-hosting.com/index.php/s/yFyKEnL8gYYrj3C/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/8TKakoMaR6kLbRq/preview)

### Problem Solved
✅ The FTP service (ProFTPD) is now started/active again and nothing stands in the way of data exchange!

---
id: vserver_linux_ssh2fa
title: VPS: Setting up two-factor authentication for Linux servers
description: Information on how to set up two-factor authentication for your Linux VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Two factor authentication
---


## 💾 Install Google Authenticator

First you need to install the Google Authenticator on your Linux vServer/Rootserver. Execute the following command:

```
sudo apt install libpam-google-authenticator
```

You will then be prompted to type "Y" to install the package, type this, press Enter and then the Google Authenticator will be installed!

![](https://user-images.githubusercontent.com/61839701/166183966-276ee6c7-4b17-4fb3-9283-94f2a663b0a1.png)

## ⌨ Run Google Authenticator

Start the Google Authenticator by typing 'google-authenticator'. Make sure that your window size is sufficient for the QR Code, otherwise press "CTRL+C" and enter it again.

![](https://user-images.githubusercontent.com/61839701/166183981-22467640-91a8-41e2-ad2d-a48532e1b9fc.png)

You will now be prompted again if you want to execute it, type "Y" to accept. 

You will now get a QR Code. Open your Authenticator app on your smartphone and scan the QR Code.For this example we use the Google Authenticator:

![image](https://user-images.githubusercontent.com/13604413/159171815-4a7368da-fab1-4284-9c90-e310a577dbbf.png)

Make sure to copy the backup codes, these can each be used once in case you lose your authenticator.

![](https://user-images.githubusercontent.com/61839701/166183994-39e1b89a-0227-4c92-b455-23995d06acb5.png)

Now the app already shows you the codes you need to log in later. In this case it looks like this:

![](https://user-images.githubusercontent.com/61839701/166184007-8faed2ff-1559-4f19-8143-f4acaee70918.png)

The following questions are now prompted:

1. Do you want to save the Google Authenticator configuration?
2. Do you want only one login every 30 seconds? 
3. Should the time in which a code is usable be increased?
4. Should only three logins be possible every 30 seconds? (Protection against Brute Force)

For security reasons we recommend to confirm all with Yes. 

![](https://user-images.githubusercontent.com/61839701/166184028-9636c936-18da-414d-bc1e-4ea233bb6185.png)

## 💽 Configure Google Authenticator

Now we have to adjust the Google Authenticator so that it is also used. This requires two adjustments. 

### /etc/ssh/sshd_config

Activate the required modules in the `/etc/ssh/sshd_config'. Open the `/etc/ssh/sshd_config' file by typing 
```
sudo nano /etc/ssh/sshd_config
``` 

You are now in a text editor. You can move around with the arrow keys, freely delete text and enter and then press 'CTRL + X' then 'Y' and lastly 'Enter' to save the file.

Make sure that the two lines 'UsePAM' and 'ChallengeResponseAuthentication' are set to 'yes'. Like this:

![](https://user-images.githubusercontent.com/61839701/166184047-0f7784fc-67bd-4380-9f68-5630736a9422.png)

![](https://user-images.githubusercontent.com/61839701/166184062-5de87b6c-2e49-4352-9665-9823178257c9.png)

Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`. Restart SSH afterwards with the following command:
```
sudo systemctl restart ssh
``` 

### /etc/pam.d/sshd

Now we add the Google Authenticator to the login in the `/etc/pam.d/sshd`.Open the `/etc/pam.d/sshd` file by typing `sudo nano /etc/pam.d/sshd`. 

The last step is to scroll down to the end of the file and enter 'auth required pam_google_authenticator.so'.

![](https://user-images.githubusercontent.com/61839701/166184084-1e07230b-6691-4bb8-8977-bcc784342afa.png)

Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`

## 💻 Log in with 2FA

Now it is time to log in for the first time with 2FA. After you have followed the steps above, all you need to do is restart your SSH connection.

![image](https://user-images.githubusercontent.com/13604413/159171829-90fb3349-c238-4558-818a-0657b87062e5.png)

You now enter your password as normal. You will be asked for a code, simply enter the recent 2FA code.

![](https://user-images.githubusercontent.com/61839701/166184108-ed9c504c-e6cc-4b28-8afa-210f245f76d3.png)

Now you are logged in!

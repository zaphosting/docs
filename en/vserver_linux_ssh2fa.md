---
id: vserver_linux_ssh2fa
title: Two factor authentication
sidebar_label: Two factor authentication
---


## 💾 Install Google Authenticator

First you need to install the Google Authenticator on your Linux vServer/Rootserver. Execute the following command:

```
sudo apt install libpam-google-authenticator
```

You will then be prompted to type "Y" to install the package, type this, press Enter and then the Google Authenticator will be installed!

![](https://screensaver01.zap-hosting.com/index.php/s/MFfdxA2ib4FnxJe/preview)

## ⌨ Run Google Authenticator

Start the Google Authenticator by typing 'google-authenticator'. Make sure that your window size is sufficient for the QR Code, otherwise press "CTRL+C" and enter it again.

![](https://screensaver01.zap-hosting.com/index.php/s/Cs3oCH27xKr3C2a/preview)

You will now be prompted again if you want to execute it, type "Y" to accept. 

You will now get a QR Code. Open your Authenticator app on your smartphone and scan the QR Code.For this example we use the Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/ZnabwTXa5qZPtkS/preview)

Make sure to copy the backup codes, these can each be used once in case you lose your authenticator.

![](https://screensaver01.zap-hosting.com/index.php/s/yJGHF9pgseSCdMj/preview)

Now the app already shows you the codes you need to log in later. In this case it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/QZcizgQPn5QYC2n/preview)

The following questions are now prompted:

1. Do you want to save the Google Authenticator configuration?
2. Do you want only one login every 30 seconds? 
3. Should the time in which a code is usable be increased?
4. Should only three logins be possible every 30 seconds? (Protection against Brute Force)

For security reasons we recommend to confirm all with Yes. 

![](https://screensaver01.zap-hosting.com/index.php/s/Z8HibKcB9WnseR8/preview)

## 💽 Configure Google Authenticator

Now we have to adjust the Google Authenticator so that it is also used. This requires two adjustments. 

### /etc/ssh/sshd_config

Activate the required modules in the `/etc/ssh/sshd_config'. Open the `/etc/ssh/sshd_config' file by typing 
```
sudo nano /etc/ssh/sshd_config
``` 

Now you will see this window:

![](https://screensaver01.zap-hosting.com/index.php/s/ykWsTHCYKNoRNwg/preview)

You are now in a text editor. You can move around with the arrow keys, freely delete text and enter and then press 'CTRL + X' then 'Y' and lastly 'Enter' to save the file.

Make sure that the two lines 'UsePAM' and 'ChallengeResponseAuthentication' are set to 'yes'. Like this:

![](https://screensaver01.zap-hosting.com/index.php/s/DH9nDHjfyPGYtbz/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/rteESXsZzWLRJPa/preview)


Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`. Restart SSH afterwards with the following command:
```
sudo systemctl restart ssh
``` 

### /etc/pam.d/sshd

Now we add the Google Authenticator to the login in the `/etc/pam.d/sshd`.Open the `/etc/pam.d/sshd` file by typing `sudo nano /etc/pam.d/sshd`. Now you will see this window:

![](https://screensaver01.zap-hosting.com/index.php/s/NHxgbcYfZFPqJEy/preview)

The last step is to scroll down to the end of the file and enter 'auth required pam_google_authenticator.so'.

![](https://screensaver01.zap-hosting.com/index.php/s/pTpMQYZ2FDNR5yE/preview)

Save the file with 'CTRL + X' then 'Y' and lastly 'Enter`

## 💻 Log in with 2FA

Now it is time to log in for the first time with 2FA. After you have followed the steps above, all you need to do is restart your SSH connection.

![](https://screensaver01.zap-hosting.com/index.php/s/meaMHTJBYqPwJnt/preview)

You now enter your password as normal. You will be asked for a code, simply enter the recent 2FA code.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwe4cMfFwBGnnNM/preview)

Now you are logged in!

# Becoming a FiveM Admin with txAdmin

## Introduction  
In this guide, you will learn how to become an admin on a FiveM server using txAdmin. This includes the necessary steps to set up your admin permissions through the txAdmin interface.

## Requirements  
- Access to your FiveM server via the ZAP-Hosting web interface or panel  
- txAdmin must be installed and running on your FiveM server  
- Basic understanding of FiveM server management  

## Step-by-Step Guide

### 1. Access the txAdmin Panel  
1. Log in to your ZAP-Hosting account.  
2. Navigate to your FiveM server dashboard.  
3. Click on the **Open txAdmin** button to launch the txAdmin interface.  
   
   ![Open txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Log in to txAdmin  
1. If this is your first time accessing txAdmin, you will be prompted to create an admin account.  
2. Fill in your desired username and password, then save.  
3. If you already have an account, simply enter your credentials to log in.  

### 3. Add Your Admin Permissions  
1. In the txAdmin dashboard, navigate to the **Players** tab.  
2. Find your player by searching your Steam ID or in-game name.  
3. Click the **Manage** button next to your player entry.  
4. In the permissions section, assign yourself the **admin** role or the necessary permissions you require.  
   
   ![Assign Admin Role](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Configure Permissions (Optional)  
1. Go to the **Settings** tab in txAdmin.  
2. Select **Permissions** to fine-tune the specific commands and privileges available to admins.  
3. Adjust according to your needs and save the changes.  

### 5. Save and Restart Server  
1. After assigning permissions, return to the **Dashboard** tab.  
2. Click on **Restart Server** to apply all changes.  
   
   ```bash
   # Alternatively, restart via the ZAP-Hosting panel:
   # 1. Navigate to your server dashboard
   # 2. Click "Restart"
   ```  

### 6. Verify Your Admin Status In-Game  
1. Join your FiveM server.  
2. Open the in-game console (usually with the F8 key).  
3. Test admin commands such as:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. If commands execute successfully, you have admin rights.  

> **Note:** If you experience issues, double-check your Steam ID or server whitelist settings in txAdmin.

## Conclusion  
Following these steps, you have successfully set yourself up as an admin on your FiveM server using txAdmin. You can now manage your server efficiently with administrative privileges.
# FiveM ESX Installation Guide

## Introduction

In this guide, you will learn how to install the ESX framework on your FiveM server using the ZAP-Hosting panel. ESX is one of the most popular roleplay frameworks for FiveM.

## Prerequisites

- A FiveM server rented from ZAP-Hosting with access to the ZAP-Hosting Webinterface/Panel  
- Basic knowledge of navigating the ZAP-Hosting panel  
- A stable internet connection  
- FTP client or the File Manager in the ZAP-Hosting panel  
- Access to the server console via the ZAP-Hosting panel  

## Installation Steps

### 1. Access Your ZAP-Hosting Panel

1. Log in to your ZAP-Hosting account.  
2. Navigate to your FiveM server under "My Services."  
3. Open the server management panel.

### 2. Stop Your Server

1. In the panel, click **Stop** to shut down your server before making any changes.

### 3. Upload ESX Resources

You can upload ESX either via FTP or the File Manager in the panel.

#### Using FTP

1. Connect to your server via FTP using the credentials provided in the panel.  
2. Download the latest ESX framework from the official GitHub repository:  
   - https://github.com/esx-framework/esx-legacy  
3. Upload the ESX folders (e.g., `es_extended`, `esx_menu_default`, `esx_society`, etc.) to the `resources` directory on your server.

#### Using File Manager

1. Download the ESX framework ZIP from the official GitHub repository.  
2. In the File Manager, upload and extract the ZIP file into the `resources` directory.

> **Hint:** Make sure you upload all required ESX modules you want to use.

### 4. Configure the `server.cfg`

1. Open your `server.cfg` file in the File Manager or via FTP.  
2. Add the following lines to start ESX resources, adjusting based on your uploaded resources:

```plaintext
ensure mysql-async
ensure es_extended
ensure esx_menu_default
ensure esx_society
ensure esx_billing
# Add other ESX modules you uploaded
```

3. Also, make sure your database connection details are correctly set in the ESX configuration files (usually in `es_extended/config.lua`).

### 5. Setup MySQL Database

1. In your ZAP-Hosting panel, go to **Databases** and create a new MySQL database if you haven't done so yet.  
2. Import the ESX SQL files (found in the `es_extended` folder under `sql`) into your MySQL database using phpMyAdmin or any MySQL client.  
3. Configure your database connection credentials in the ESX config files (`config.lua` or relevant config files).

### 6. Start Your Server

1. Return to the ZAP-Hosting panel.  
2. Click **Start** to launch the server.  
3. Monitor the console for any errors related to ESX startup.

### 7. Verify Installation

1. Connect to your FiveM server.  
2. Use in-game commands or check logs to verify ESX is running correctly.  
3. Troubleshoot any errors by reviewing logs and double-checking configuration.

## Conclusion

You have successfully installed the ESX framework on your FiveM server using ZAP-Hosting. Enjoy building your roleplay server!
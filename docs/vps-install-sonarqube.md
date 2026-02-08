---
id: vps-install-sonarqube
title: "How to install SonarQube on VPS"
description: "Information on Admin commands for Rust from ZAP-Hosting"
sidebar_label: SonarQube VPS
services:
  - vps
---

# How to Install SonarQube on Debian 12

SonarQube is the leading tool for continuous code quality and security analysis. This guide will walk you through the installation of SonarQube (version 10.x) on a Debian 12 server using PostgreSQL as the backend database.

## 1. System Prerequisites

SonarQube is resource-intensive due to its reliance on Elasticsearch. Ensure your VPS has at least **4 GB of RAM**.

### System Update

```bash
sudo apt update && sudo apt upgrade -y

```

### Kernel Configuration

Elasticsearch requires higher virtual memory limits to function correctly.

1. Edit the configuration file: `sudo nano /etc/sysctl.conf`
2. Add these lines at the end of the file:
```text
vm.max_map_count=262144
fs.file-max=65536

```


3. Apply the changes:
```bash
sudo sysctl -p

```



---

## 2. Installing Java (OpenJDK 17)

SonarQube 10.x strictly requires the Java 17 runtime environment.

```bash
sudo apt install openjdk-17-jdk -y

```

---

## 3. Database Configuration

SonarQube no longer supports MySQL; **PostgreSQL** is the standard choice.

1. **Install PostgreSQL:**
```bash
sudo apt install postgresql postgresql-contrib -y

```


2. **Create Database and User:**
Access the PostgreSQL shell:
```bash
sudo -u postgres psql

```


Execute the following commands (replace `'your_password'` with a secure one):
```sql
CREATE USER sonar WITH PASSWORD 'your_password';
CREATE DATABASE sonarqube OWNER sonar;
GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonar;
\q

```



---

## 4. Installing SonarQube

For security reasons, SonarQube should never be run as the `root` user.

1. **Create a dedicated user:**
```bash
sudo useradd -b /opt/sonarqube -s /bin/bash sonar

```


2. **Download and Extract SonarQube:**
```bash
cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.3.0.82913.zip
sudo apt install unzip -y
sudo unzip sonarqube-*.zip
sudo mv sonarqube-10.3.0.82913 sonarqube
sudo chown -R sonar:sonar /opt/sonarqube

```



---

## 5. Application Configuration

Link SonarQube to your PostgreSQL database.

1. Open the `sonar.properties` file:
```bash
sudo nano /opt/sonarqube/conf/sonar.properties

```


2. Uncomment (remove the `#`) and modify the following lines:
```properties
sonar.jdbc.username=sonar
sonar.jdbc.password=your_password
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube

```



---

## 6. Creating the Systemd Service

To manage SonarQube as a system service (enabling auto-start on boot):

1. Create the service file: `sudo nano /etc/systemd/system/sonar.service`
2. Paste the following configuration:
```ini
[Unit]
Description=SonarQube service
After=network.target

[Service]
Type=forking
ExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start
ExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop
User=sonar
Group=sonar
Restart=always
LimitNOFILE=65536
LimitNPROC=4096

[Install]
WantedBy=multi-user.target

```


3. **Reload and Start the Service:**
```bash
sudo systemctl daemon-reload
sudo systemctl enable sonar
sudo systemctl start sonar

```



---

## 7. Accessing the Web Interface

Initialization can take up to 2 minutes. Once ready, open your browser:

* **URL:** `http://YOUR_SERVER_IP:9000`
* **Default Credentials:**
* **Username:** `admin`
* **Password:** `admin`



> [!IMPORTANT]
> SonarQube will prompt you to change the default password immediately upon your first login.

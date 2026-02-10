---
id: vserver-linux-sonarqube-install
title: "VPS: How to Install SonarQube Server"
description: "Learn how to install and configure SonarQube 26.2 on Debian 13."
sidebar_label: Install SonarQube
services:
  - vserver
---

# How to Install SonarQube on a VPS (Debian 13)

This guide provides a detailed walkthrough for installing **SonarQube Server 26.2** on **Debian 13 (Trixie)**. This version includes the latest performance optimizations and requires precise system configuration to operate correctly in a production environment.

## 1. System Prerequisites

SonarQube includes an internal Elasticsearch engine. To prevent startup failures, you must adjust the Debian kernel limits.

### Kernel Limits Update

```bash
sudo apt update && sudo apt upgrade -y

# Configure virtual memory limits for Elasticsearch
sudo nano /etc/sysctl.conf

```

Add these lines to the end of the file:

```text
vm.max_map_count=524288
fs.file-max=131072

```

Apply the changes: `sudo sysctl -p`

### User File Limits

Create a specific limits file for the `sonar` user:

```bash
sudo nano /etc/security/limits.d/99-sonarqube.conf

```

Paste the following content:

```text
sonar   soft    nofile          131072
sonar   hard    nofile          131072
sonar   soft    nproc           8192
sonar   hard    nproc           8192

```

---

## 2. Java and Database

### Java 21 Installation

SonarQube 26.2 strictly requires **Java 21**.

```bash
sudo apt install openjdk-21-jdk fontconfig -y

```

### PostgreSQL 17 Configuration

1. **Installation:** `sudo apt install postgresql postgresql-contrib -y`
2. **Database Creation:**
```bash
sudo -u postgres psql

```


```sql
CREATE USER sonar WITH PASSWORD 'Your_Secure_Password';
CREATE DATABASE sonarqube OWNER sonar;
GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonar;
\q

```



---

## 3. Installing SonarQube 26.2

We will separate the binaries (the program) from the data (logs, index, cache) to simplify future updates.

1. **Create Dedicated User:**
```bash
sudo useradd -b /opt/sonarqube -s /bin/bash sonar

```


2. **Download and Extraction:**
```bash
cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-26.2.0.119303.zip
sudo apt install unzip -y
sudo unzip sonarqube-26.2.0.119303.zip
# Create a symbolic link for easier updates
sudo ln -s /opt/sonarqube-26.2.0.119303 /opt/sonarqube

```


3. **Storage Directories (Official Recommendation):**
```bash
sudo mkdir -p /var/sonarqube/data /var/sonarqube/temp
sudo chown -R sonar:sonar /opt/sonarqube-26.2.0.119303 /var/sonarqube

```



---

## 4. Application Configuration

Modify the main configuration file: `sudo nano /opt/sonarqube/conf/sonar.properties`

Update the following sections:

```properties
# PostgreSQL Credentials
sonar.jdbc.username=sonar
sonar.jdbc.password=Your_Secure_Password
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube

# Separate Data Paths (Production)
sonar.path.data=/var/sonarqube/data
sonar.path.temp=/var/sonarqube/temp

# Performance: Allocated Memory (adjust based on your RAM)
sonar.web.javaOpts=-Xmx2G -Xms2G -XX:+HeapDumpOnOutOfMemoryError

```

---

## 5. Creating the Systemd Service

It is essential to use a service to ensure SonarQube restarts after a VPS reboot.

1. `sudo nano /etc/systemd/system/sonar.service`
2. Paste this optimized configuration:
```ini
[Unit]
Description=SonarQube service
After=network.target network-online.target postgresql.service

[Service]
Type=forking
User=sonar
Group=sonar
ExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start
ExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop
LimitNOFILE=131072
LimitNPROC=8192
TimeoutStartSec=5min
Restart=on-failure
StandardOutput=journal

[Install]
WantedBy=multi-user.target

```


3. **Start the Service:**
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sonar

```



---

## 6. Access and Security

Wait approximately 60 to 90 seconds for Elasticsearch to initialize.

* **URL:** `http://YOUR_VPS_IP:9000`
* **Default Credentials:** `admin` / `admin`

> [!IMPORTANT]
> Change the password immediately upon first login. For production environments, it is highly recommended to use an **Nginx Reverse Proxy** with an SSL certificate to encrypt traffic.

# Automated Installation Script

To save time, you can use the following script to perform all the steps above automatically.

```bash
#!/bin/bash

# ==========================================================================
# SonarQube 26.2 LTA Auto-Install Script - Debian 13 (2026)
# ==========================================================================

# --- CONFIGURATION ---
DB_PASSWORD="Change_This_Secure_Password"
SONAR_VERSION="26.2.0.119303"
SONAR_ZIP_URL="https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-${SONAR_VERSION}.zip"

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root (sudo)."
   exit 1
fi

echo "--- Starting SonarQube ${SONAR_VERSION} Installation ---"

# 1. System Updates
echo "1/7 Updating system and dependencies..."
apt update && apt upgrade -y
apt install -y openjdk-21-jdk fontconfig wget unzip postgresql postgresql-contrib

# 2. Kernel Configuration
echo "2/7 Configuring kernel limits..."
cat <<EOF > /etc/sysctl.d/99-sonarqube.conf
vm.max_map_count=524288
fs.file-max=131072
EOF
sysctl -p /etc/sysctl.d/99-sonarqube.conf

# 3. User & File Limits
echo "3/7 Creating sonar user and setting limits..."
if ! id "sonar" &>/dev/null; then
    useradd -b /opt/sonarqube -s /bin/bash sonar
fi

cat <<EOF > /etc/security/limits.d/99-sonarqube.conf
sonar   soft    nofile          131072
sonar   hard    nofile          131072
sonar   soft    nproc           8192
sonar   hard    nproc           8192
EOF

# 4. PostgreSQL Setup
echo "4/7 Configuring database..."
sudo -u postgres psql -c "CREATE USER sonar WITH PASSWORD '${DB_PASSWORD}';"
sudo -u postgres psql -c "CREATE DATABASE sonarqube OWNER sonar;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonar;"

# 5. Download & Install
echo "5/7 Downloading SonarQube..."
cd /opt
wget -q $SONAR_ZIP_URL
unzip -q sonarqube-${SONAR_VERSION}.zip
rm sonarqube-${SONAR_VERSION}.zip
rm -f /opt/sonarqube
ln -s /opt/sonarqube-${SONAR_VERSION} /opt/sonarqube

mkdir -p /var/sonarqube/data /var/sonarqube/temp
chown -R sonar:sonar /opt/sonarqube-${SONAR_VERSION} /var/sonarqube

# 6. Properties Configuration
echo "6/7 Configuring sonar.properties..."
PROP_FILE="/opt/sonarqube/conf/sonar.properties"
sed -i "s/#sonar.jdbc.username=/sonar.jdbc.username=sonar/" $PROP_FILE
sed -i "s/#sonar.jdbc.password=/sonar.jdbc.password=${DB_PASSWORD}/" $PROP_FILE
sed -i "s|#sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube?currentSchema=my_schema|sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube|" $PROP_FILE
echo "sonar.path.data=/var/sonarqube/data" >> $PROP_FILE
echo "sonar.path.temp=/var/sonarqube/temp" >> $PROP_FILE

# 7. Systemd Service
echo "7/7 Creating systemd service..."
cat <<EOF > /etc/systemd/system/sonar.service
[Unit]
Description=SonarQube service
After=network.target network-online.target postgresql.service

[Service]
Type=forking
User=sonar
Group=sonar
ExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start
ExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop
LimitNOFILE=131072
LimitNPROC=8192
TimeoutStartSec=5min
Restart=on-failure
StandardOutput=journal

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now sonar

echo "--------------------------------------------------------"
echo " Installation completed successfully!"
echo " Access: http://$(hostname -I | awk '{print $1}'):9000"
echo " Credentials: admin / admin"
echo "--------------------------------------------------------"

```

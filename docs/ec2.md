# Deploying MERN Full Stack Apps to AWS EC2

## Setup EC2 Instance

```bash
sudo apt update
sudo apt upgrade
```

## Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Rsync

The `rsync` command is a powerful tool for efficiently copying and synchronizing files and directories between two locations. It is commonly used in Unix-like operating systems, including Linux.

```bash
rsync -avz \
--exclude 'node_modules' \
--exclude '.git' \
--exclude '.env' \
-e "ssh -i ~/.ssh/your-key.pem" . ubuntu@ip-address:~/app
```

## Systemd

### Step 1: Create the Environment File

Create a new file for your environment variables and open the file in Vim:

```bash
sudo vim /etc/app.env
```

In Vim, add your variables in the format `VARIABLE=value`. For example:

```
MONGODB_URI=seu-mongodb-uri
PORT=3000
NODE_ENV=development
```

**Note:** To save and exit Vim, press `esc` then `:wq` then `enter`.

Restrict the file permissions for security.

```bash
sudo chmod 600 /etc/app.env
sudo chown ubuntu:ubuntu /etc/app.env
```

### Step 2: Create the systemd Service File

Navigate to the systemd directory and create a new service file, `myapp.service`.

```bash
sudo vim /etc/systemd/system/myapp.service
```

Define the service settings. Add the following content in Vim, modifying as needed for your application:

```
[Unit]
Description=Node.js App
After=network.target multi-user.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/app
ExecStart=/usr/bin/npm start
Restart=always
Environment=NODE_ENV=production
EnvironmentFile=/etc/app.env
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=myapp

[Install]
WantedBy=multi-user.target
```

Reload systemd and start your service.

```bash
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service
```

Verify that the service is running properly.

```bash
sudo systemctl status myapp.service
```

### View Logs

```bash
sudo journalctl -u myapp.service
```

Tail logs:

```bash
sudo journalctl -fu myapp.service
```

## Caddy

### Step 1: Install Caddy

Follow the instructions on the [Caddy website](https://caddyserver.com/docs/install) or use the commands below:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

Edit the Caddyfile:

```bash
sudo vim /etc/caddy/Caddyfile
```

Add the following content:

```
:80 {
    reverse_proxy localhost:3000
}
```

Restart Caddy:

```bash
sudo systemctl restart caddy
```

### Step 2: Configure Caddy to Use HTTPS

Add a domain name for your server.

Update the Caddyfile to use your domain name and enable HTTPS.

```bash
sudo vim /etc/caddy/Caddyfile
```

Modify the file:

```
mydomain.com {
    reverse_proxy localhost:3000
}
```

Restart Caddy:

```bash
sudo systemctl restart caddy
```

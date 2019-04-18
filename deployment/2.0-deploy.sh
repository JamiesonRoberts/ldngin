#!/bin/sh

# REMEMBER: pass a deployment environment to this script as an argument! ie, `source deploy.sh STAGE`

# Zip up the application
zip -r ~/app.zip ./

# Define our deployment user and deployment path from our passed deployment environment.
# (ie REMOTE_SSH_USER_<environment>)
deploy_user="REMOTE_SSH_USER_$1"
deploy_path="REMOTE_SSH_DEPLOY_PATH_$1"

# Copy the Zip file to the server.
scp ~/app.zip ${!deploy_user}:${!deploy_path}

# SSH into the deployment server and change directory to the application directory.
# Unzip the application in that directory.
# Run the postdeploy.sh script.
# Remove the deployment directory.
# Then the SSH session.
ssh ${!deploy_user} -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o PreferredAuthentications=publickey '
	cd '${!deploy_path}';
	unzip -o app.zip -d ./;
	rm -r deployment;
    php artisan migrate --force;
    php artisan view:clear;
    php artisan config:clear;
    exit;'

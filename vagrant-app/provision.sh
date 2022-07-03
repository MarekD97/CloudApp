# update
sudo apt-get update
# sudo apt-get -y upgrade

sudo apt-get -y install software-properties-common python-software-properties
sudo apt-get install gcc g++ make
# sudo apt-get update

echo "Installing nodejs and npm"
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs --force-yes
sudo apt-get install -y npm

echo "Installing git"
sudo apt-get install -y git
cd /home/vagrant
git clone https://github.com/MarekD97/CloudApp
cd CloudApp

echo "Installing Angular CLI"
sudo npm install -g @angular/cli

echo "Installing MySQL server"
echo "mysql-server-5.5 mysql-server/root_password password root" | debconf-set-selections
echo "mysql-server-5.5 mysql-server/root_password_again password root" | debconf-set-selections
apt-get -y install mysql-server
sudo mysql -uroot -proot -e "create database fifa; use fifa; source FIFA-21-Complete.sql;"

echo "Installing frontend and backend npm"
cd backend
sudo npm install
cd ../frontend
sudo npm install

echo "Starting backend"
cd ../backend
npm start &

echo "Starting frontend"
cd ../frontend
ng serve --host 0.0.0.0 --port 8081
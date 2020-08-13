(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{242:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order\nto run and use this panel.")]),e._v(" "),a("p",[e._v("This panel does not exist as a drag-and-drop service to run your servers. It is a highly complex system\nrequiring multiple dependencies and administrators willing to spend some time learning how to use it. If you expect\nto be able to install this with no understanding of basic Linux system administration you should stop and turn\naround now.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#picking-a-server-os"}},[e._v("Picking a Server OS")])]),a("li",[a("a",{attrs:{href:"#dependencies"}},[e._v("Dependencies")]),a("ul",[a("li",[a("a",{attrs:{href:"#example-dependency-installation"}},[e._v("Example Dependency Installation")])]),a("li",[a("a",{attrs:{href:"#installing-composer"}},[e._v("Installing Composer")])])])]),a("li",[a("a",{attrs:{href:"#download-files"}},[e._v("Download Files")])]),a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")]),a("ul",[a("li",[a("a",{attrs:{href:"#environment-configuration"}},[e._v("Environment Configuration")])]),a("li",[a("a",{attrs:{href:"#database-setup"}},[e._v("Database Setup")])]),a("li",[a("a",{attrs:{href:"#add-the-first-user"}},[e._v("Add The First User")])]),a("li",[a("a",{attrs:{href:"#set-permissions"}},[e._v("Set Permissions")])])])]),a("li",[a("a",{attrs:{href:"#queue-listeners"}},[e._v("Queue Listeners")]),a("ul",[a("li",[a("a",{attrs:{href:"#crontab-configuration"}},[e._v("Crontab Configuration")])]),a("li",[a("a",{attrs:{href:"#create-queue-worker"}},[e._v("Create Queue Worker")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"picking-a-server-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picking-a-server-os"}},[e._v("#")]),e._v(" Picking a Server OS")]),e._v(" "),a("p",[e._v("Pterodactyl runs on a wide range of operating systems, so pick whichever you are most comfortable using.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Pterodactyl does not support most OpenVZ systems due to incompatabilities with Docker. If you are planning on running\nthis software on an OpenVZ based system you will — most likely — not be successful.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Operating System")]),e._v(" "),a("th",[e._v("Version")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Supported")]),e._v(" "),a("th",[e._v("Notes")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Ubuntu")])]),e._v(" "),a("td",[e._v("18.04")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td",[e._v("Documentation written assuming Ubuntu 18.04 as the base OS.")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/community/installation-guides/panel/ubuntu2004.html"}},[e._v("20.04")])],1),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("CentOS")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/community/installation-guides/panel/centos7.html"}},[e._v("7")])],1),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td",[e._v("Extra repos are required.")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/community/installation-guides/panel/centos8.html"}},[e._v("8")])],1),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td",[e._v("All required packages are part of the base repos.")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Debian")])]),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/community/installation-guides/panel/debian9.html"}},[e._v("9")])],1),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td",[e._v("Extra repos are required.")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[a("RouterLink",{attrs:{to:"/community/installation-guides/panel/debian10.html"}},[e._v("10")])],1),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),a("td",[e._v("All required packages are part of the base repos.")])])])]),e._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("ul",[a("li",[e._v("PHP "),a("code",[e._v("7.2")]),e._v(" with the following extensions: "),a("code",[e._v("cli")]),e._v(", "),a("code",[e._v("openssl")]),e._v(", "),a("code",[e._v("gd")]),e._v(", "),a("code",[e._v("mysql")]),e._v(", "),a("code",[e._v("PDO")]),e._v(", "),a("code",[e._v("mbstring")]),e._v(", "),a("code",[e._v("tokenizer")]),e._v(", "),a("code",[e._v("bcmath")]),e._v(", "),a("code",[e._v("xml")]),e._v(" or "),a("code",[e._v("dom")]),e._v(", "),a("code",[e._v("curl")]),e._v(", "),a("code",[e._v("zip")]),e._v(", and "),a("code",[e._v("fpm")]),e._v(" if you are planning to use nginx")]),e._v(" "),a("li",[e._v("MySQL "),a("code",[e._v("5.7")]),e._v(" "),a("strong",[e._v("or")]),e._v(" MariaDB "),a("code",[e._v("10.1.3")]),e._v(" or higher")]),e._v(" "),a("li",[e._v("Redis ("),a("code",[e._v("redis-server")]),e._v(")")]),e._v(" "),a("li",[e._v("A webserver (Apache, NGINX, Caddy, etc.)")]),e._v(" "),a("li",[a("code",[e._v("curl")])]),e._v(" "),a("li",[a("code",[e._v("tar")])]),e._v(" "),a("li",[a("code",[e._v("unzip")])]),e._v(" "),a("li",[a("code",[e._v("git")])]),e._v(" "),a("li",[a("code",[e._v("composer")])])]),e._v(" "),a("h3",{attrs:{id:"example-dependency-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-dependency-installation"}},[e._v("#")]),e._v(" Example Dependency Installation")]),e._v(" "),a("p",[e._v("The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Add "add-apt-repository" command')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" software-properties-common "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add additional repositories for PHP, Redis, and MariaDB")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("LC_ALL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("C.UTF-8 add-apt-repository -y ppa:ondrej/php\nadd-apt-repository -y ppa:chris-lea/redis-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Update repositories list")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add universe repository if you are on Ubuntu 18.04")]),e._v("\napt-add-repository universe\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install Dependencies")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" php7.2 php7.2-cli php7.2-gd php7.2-mysql php7.2-pdo php7.2-mbstring php7.2-tokenizer php7.2-bcmath php7.2-xml php7.2-fpm php7.2-curl php7.2-zip mariadb-server nginx "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" redis-server\n")])])]),a("h3",{attrs:{id:"installing-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-composer"}},[e._v("#")]),e._v(" Installing Composer")]),e._v(" "),a("p",[e._v("Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sS https://getcomposer.org/installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" php -- --install-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/bin --filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("composer\n")])])]),a("h2",{attrs:{id:"download-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-files"}},[e._v("#")]),e._v(" Download Files")]),e._v(" "),a("p",[e._v("The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /var/www/pterodactyl\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /var/www/pterodactyl\n")])])]),a("p",[e._v("Once you have created a new directory for the Panel and moved into it you'll need to download the Panel files. This\nis as simple as using "),a("code",[e._v("curl")]),e._v(" to download our pre-packaged content. Once it is downloaded you'll need to unpack the archive\nand then set the correct permissions on the "),a("code",[e._v("storage/")]),e._v(" and "),a("code",[e._v("bootstrap/cache/")]),e._v(" directories. These directories\nallow us to store files as well as keep a speedy cache available to reduce load times.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/download/v0.7.18/panel.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -xzvf panel.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" storage/* bootstrap/cache/\n")])])]),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Now that all of the files have been downloaded we need to configure some core aspects of the Panel.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Database Configuration")]),e._v(" "),a("p",[e._v("You will need a database setup and a user with the correct permissions created for that database before\ncontinuing any further. If you are unsure how to do this, please have a look at "),a("RouterLink",{attrs:{to:"/tutorials/mysql_setup.html"}},[e._v("Setting up MySQL")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("First we will copy over our default environment settings file, install core dependencies, and then generate a\nnew application encryption key.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" .env.example .env\ncomposer "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Only run the command below if you are installing this Panel for")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the first time and do not have any Pterodactyl Panel data in the database.")]),e._v("\nphp artisan key:generate --force\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("Back up your encryption key (APP_KEY in the "),a("code",[e._v(".env")]),e._v(" file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys).\nStore it somewhere safe - not just on your server. If you lose it, all encrypted data is useless and can't be restored, even if you have database backups.")])]),e._v(" "),a("h3",{attrs:{id:"environment-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration"}},[e._v("#")]),e._v(" Environment Configuration")]),e._v(" "),a("p",[e._v("Pterodactyl's core environment is easily configured using a few different CLI commands built into the app. This step\nwill cover setting up things such as sessions, caching, database credentials, and email sending.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:environment:setup\nphp artisan p:environment:database\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# To use PHP\'s internal mail sending (not recommended), select "mail". To use a')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# custom SMTP server, select "smtp".')]),e._v("\nphp artisan p:environment:mail\n")])])]),a("h3",{attrs:{id:"database-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-setup"}},[e._v("#")]),e._v(" Database Setup")]),e._v(" "),a("p",[e._v("Now we need to setup all of the base data for the Panel in the database you created earlier. "),a("strong",[e._v("The command below\nmay take some time to run depending on your machine. Please "),a("em",[e._v("DO NOT")]),e._v(" exit the process until it is completed!")]),e._v(" This\ncommand will setup the database tables and then add all of the Nests & Eggs that power Pterodactyl.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan migrate --seed\n")])])]),a("h3",{attrs:{id:"add-the-first-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-the-first-user"}},[e._v("#")]),e._v(" Add The First User")]),e._v(" "),a("p",[e._v("You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below.\nAt this time passwords "),a("strong",[e._v("must")]),e._v(" meet the following requirements: 8 characters, mixed case, at least one number.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:user:make\n")])])]),a("h3",{attrs:{id:"set-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),a("p",[e._v("The last step in the installation process is to set the correct permissions on the Panel files so that the webserver can\nuse them correctly.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data * \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx *\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache *\n")])])]),a("h2",{attrs:{id:"queue-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue-listeners"}},[e._v("#")]),e._v(" Queue Listeners")]),e._v(" "),a("p",[e._v("We make use of queues to make the application faster and handle sending emails and other actions in the background.\nYou will need to setup the queue worker for these actions to be processed.")]),e._v(" "),a("h3",{attrs:{id:"crontab-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab-configuration"}},[e._v("#")]),e._v(" Crontab Configuration")]),e._v(" "),a("p",[e._v("The first thing we need to do is create a new cronjob that runs every minute to process specific Pterodactyl tasks, such\nas session cleanup and sending scheduled tasks to daemons. You'll want to open your crontab using "),a("code",[e._v("sudo crontab -e")]),e._v(" and\nthen paste the line below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("* * * * * php /var/www/pterodactyl/artisan schedule:run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v("\n")])])]),a("h3",{attrs:{id:"create-queue-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-queue-worker"}},[e._v("#")]),e._v(" Create Queue Worker")]),e._v(" "),a("p",[e._v("Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible\nfor sending emails and handling many other background tasks for Pterodactyl.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you are using Ubuntu 14.04 you cannot use this method to run your queue worker. Please see these instructions for\ninstalling Supervisor and setting up your queue. Ensure you use the same ExecStart line as below.")])]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("pteroq.service")]),e._v(" in "),a("code",[e._v("/etc/systemd/system")]),e._v(" with the contents below.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Pterodactyl Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Pterodactyl Queue Worker\nAfter=redis-server.service\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Redis on CentOS")]),e._v(" "),a("p",[e._v("If you are using CentOS, you will need to replace "),a("code",[e._v("redis-server.service")]),e._v(" with "),a("code",[e._v("redis.service")]),e._v(" at the "),a("code",[e._v("After=")]),e._v(" line in order to ensure "),a("code",[e._v("redis")]),e._v(" starts before the queue worker.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you are not using "),a("code",[e._v("redis")]),e._v(" for anything you should remove the "),a("code",[e._v("After=")]),e._v(" line, otherwise you will encounter errors\nwhen the service starts.")])]),e._v(" "),a("p",[e._v("If you are are using redis for your system, you will want to make sure to enable that it will start on boot. You can do that by running the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" --now redis-server\n")])])]),a("p",[e._v("Finally, enable the service and set it to boot on machine start.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" --now pteroq.service\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
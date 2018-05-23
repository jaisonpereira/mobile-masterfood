# Java
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install java-common oracle-java8-installer
# sudo update-alternatives --config java
sudo apt-get install oracle-java8-set-default
echo "export JAVA_HOME=$(update-alternatives --query javac | sed -n -e 's/Best: *\(.*\)\/bin\/javac/\1/p')" >> ~/.zshrc
source ~/.zshrc

# Android Studio
sudo add-apt-repository ppa:maarten-fonville/android-studio
sudo apt-get update
sudo apt-get install android-studio
/opt/android-studio/bin/studio.sh
echo "export ANDROID_HOME=$HOME/Android/Sdk" >> ~/.zshrc
source ~/.zshrc
touch $HOME/.android/repositories.cfg
sudo $ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"

# NodeJS / NPM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
source ~/.zshrc
nvm install --lts
nvm install node

# Visual Studio Code
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt-get update
sudo apt-get install code
code --install-extension Telerik.nativescript
code --install-extension dbaeumer.vscode-eslint
code --install-extension eg2.tslint
code --install-extension johnpapa.Angular2
code --install-extension robertohuertasm.vscode-icons
code --install-extension wwwalkerrun.nativescript-ng2-snippets
code --install-extension xabikos.JavaScriptSnippets
code --install-extension Angular.ng-template
code --install-extension PeterJausovec.vscode-docker
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension EditorConfig.editorconfig
code --install-extension Arjun.swagger-viewer
code --install-extension PeterJausovec.vscode-docker

# VirtualBox
sudo apt-get install virtualbox

# Angular CLI & Nativescript
npm i -g @angular/cli
npm i -g nativescript --unsafe-perm

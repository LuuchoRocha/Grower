
# Grower
### Prerequisites
You have to install Node.js along with npm. At [https://nodejs.org/](https://nodejs.org/) you will find the instructions on how to install it on your platform. 
After you have installed Node.js and npm, then you will have to install two packages: ***yarn*** and ***react-native-cli***.
To do so, execute the following commands:

    npm install -g react-native-cli
    npm install -g yarn

### Build and run
First, to install build dependencies you will have to execute:

    yarn install
Then, to start the package bundler run:

    yarn start

At this point, you have to open your device emulator or connect an Android device using ADB. After that, you can run the app in the device using:

    react-native run-android

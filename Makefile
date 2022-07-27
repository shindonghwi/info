ios-clean:
		rm -rf ~/Library/Developer/Xcode/DerivedData/* && cd ios && rm -rf Podfile.lock && arch -x86_64 pod install

android-clean:
		cd android && ./gradlew clean

all-clean:
		make ios-clean
		make android-clean

.PHONY: ios-clean andorid-clean all-clean

@echo off
echo Starting Android Emulator (medium_phone)...
start "" "C:\Users\anshi\AppData\Local\Android\Sdk\emulator\emulator.exe" -avd medium_phone -gpu swiftshader_indirect -no-snapshot-load -no-display-layout

echo Waiting for emulator to connect to adb...
C:\Users\anshi\AppData\Local\Android\Sdk\platform-tools\adb.exe wait-for-device

echo Waiting for Android boot to complete...
:wait_boot
for /f "tokens=*" %%a in ('C:\Users\anshi\AppData\Local\Android\Sdk\platform-tools\adb.exe shell getprop sys.boot_completed 2^>nul') do set BOOT=%%a
if not "%BOOT%"=="1" (
    timeout /t 2 /nobreak >nul
    goto wait_boot
)

echo Configuring port reverse for Metro bundler...
C:\Users\anshi\AppData\Local\Android\Sdk\platform-tools\adb.exe reverse tcp:8081 tcp:8081

echo Dismissing system startup dialogs...
C:\Users\anshi\AppData\Local\Android\Sdk\platform-tools\adb.exe shell input keyevent 4

echo Launching Weatherly application...
C:\Users\anshi\AppData\Local\Android\Sdk\platform-tools\adb.exe shell am start -n com.weatherly/.MainActivity

echo.
echo ===================================================
echo  Emulator is running (GUI visible on Desktop)
echo  Weatherly is open inside the emulator
echo  Metro is running on port 8081
echo  Ready for screen recording!
echo ===================================================
pause

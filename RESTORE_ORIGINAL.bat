@echo off
title Restoring Original Project...
color 0A

cd /d "C:\Users\JEEVADHARSAN M\OneDrive\Desktop\AI career twin"

echo.
echo ============================================
echo  Removing Professional Update...
echo  Restoring your ORIGINAL project files.
echo ============================================
echo.

git checkout 8a96f40a522ad6ce91447e6c4935acbc336ffeb5 -- frontend/src

echo.
echo ============================================
echo  DONE! Original project restored.
echo  All professional CSS changes removed.
echo ============================================
echo.
pause

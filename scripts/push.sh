# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 提交修改到github
git add .
git cm -m '优化组件'
git push

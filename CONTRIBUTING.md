Collaboratiion Workflow


# clone
git clone https://github.com/your-username/CourseforAll.git
cd CourseforAll

# sync main
git checkout main
git pull origin main

# create feature branch
git checkout -b feature/my-feature

# after work
git add .
git commit -m "feat: add X"
git push -u origin feature/my-feature

# rebase before pushing or merging
git fetch origin
git rebase origin/main   # resolve conflicts -> git rebase --continue
git push --force-with-lease

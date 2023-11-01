---
title: "Shell Script: Daily Log Opener"
tags:
  - shell
  - small-project
  - post
---

On [October 28th](/log/2023-10-28), I mentioned that I had written a little script that allowed me to quickly and easily create or open my daily log entry for the day. I was inspired to do this because of a similar feature in [Obsidian](https://obsidian.md/).

## Algorithm

1. Get the date and time
2. If it's very early in the morning, use yesterday's date
3. Generate a filename based on the date (YYYY-mm-dd).md
4. Announce the name and location (in the configured folder) of the file
5. Check if a file of that name already exists
    - If it does exist, open it
    - If it doesn't exist,
        1. Take the template
        2. Replace all instances of {% raw %}`{{date}}`{% endraw %} with the date
        3. Put the output in a new file
        4. Open the file

## Configuration

I would love to make this script pleasant and useful enough for someone else to get to use! In the hopes of that, I've added in some configurations at the top of the script. I wonder how configuration files work, and if that might be better in the long run.

Here's what can be configured right now:
- **editor** (can be any terminal command; mine is vim)
- **hour** past midnight to change the day (6 for 6am for me, because I'll never wake up before then)
- **folder** save location for the log entries
- **template** location

## Code

Here, I'll break down the script code.

### Scripting language
{% raw %}
```bash
#!/bin/zsh
```
I'm not sure if this should be bash or zsh. I use zsh, and when I tried to run the script explicitly with bash, it still told me it was using zsh. All of the resources I used for syntax were about bash. Not sure what to do!

### Configuration
```bash
# What editor command would you like to use?
EDITOR=vim

# When do you want to acknowledge it's tomorrow? (24h fmt)
DAYCHANGE=6

# What directory will log entries go in?
FOLDER=".../log/entries"

# If you have a template, where is it?
TEMPLATE=".../log/entries/template.md"
```
I need to add a check to behave properly when no template variable is set. I'm not sure how it would fail right now.

### Date and Time
```bash
DATE=$(date +"%Y-%m-%d")
HOUR=$(date +"%H")

if [[ $HOUR -lt $DAYCHANGE ]]
then
  # It's still late, so pretend it's still yesterday.
  DATE=$(date -d yesterday +"%Y-%m-%d")
fi
```
I was very impressed about the [date](https://tecadmin.net/get-current-date-and-time-in-bash/) command. It's so easy and simple to use!

[If statements](https://linuxize.com/post/bash-if-else-statement/) and comparison operators have a strange syntax. I'm not sure if I've ever seen it before. I don't understand what double brackets versus single brackets means. Below, I use single because it's from a different tutorial. [Apparently it can be good for backwards compatability to do the single brackets](https://linuxize.com/post/bash-check-if-file-exists/), but I get an error when doing that up here.

Instead of doing the math of what yesterday was, I just call date again. It's cheap, and handles all of the special exceptions itself.

### File Creation

```bash
FILE="$FOLDER/$DATE.md"

if [ ! -f "$FILE" ]; then
  # Log entry file doesn't exist,
  # so generate one from the template.
  echo "Creating $DATE at $FOLDER"
  sed "s/{{date}}/$DATE/g" "$TEMPLATE" >> "$FILE"
fi
```
I'm glad to know how to [check if a file exists](https://linuxize.com/post/bash-check-if-file-exists/) now, because I wouldn't want to overwrite anything important.

I used [sed](https://linuxize.com/post/how-to-use-sed-to-find-and-replace-string-in-files/) to find and replace all occurrences of `{{date}}` in the template. (The double quotes are important for using varialbes.) It appends the output to the (nonexistent) file to create and populate it. I chose to append instead of replace the contents, just in case I encounter a bug someday and run into data loss. This way, it's safer.

I wonder how much work it would be to add a verbosity option. I don't think it should announce every time it creates a file, but I'm keeping it now for my trialing period.

### Opening
```bash
$EDITOR "$FILE"
```
Finally, the file is opened. I love that you can have a whole command as a variable like this, because it's just text replacement!

{% endraw %}

## Next Steps

I have some cleaning up to do, and then I'll post it on GitHub.

On my system, I have to remind myself how to add a script to the list of scripts that will run without specifying their location. An 'alias', is it called?

I find myself wanting a similar tool that commits daily logs to git. My commit messages are very formulaic, so it should work well. Maybe it can be an optional feature of this tool, so that I never forget.

To release the plugin:
* bump package.json to the appropriate version
* bump bower.json to the appropriate version
* run:

```
GITHUB_USERNAME=<username> GITHUB_PASSWORD='<password>' grunt release

```
Note: The password may or may not need to be escaped with "'" depending on the characters
      used for your password

Output should be something like:

```
Running "clean:0" (clean) task
>> 1 path cleaned.

Running "clean:1" (clean) task
>> 1 path cleaned.

Running "less:production" (less) task
>> 1 stylesheet created.

Running "copy:dist" (copy) task
Created 2 directories, copied 60 files

Running "compress:files" (compress) task
>> Compressed 68 files.

Running "github-release:files" (github-release) task
>> Upload complete
```


## Gmail Ads Starter Pack

This package is to simplify developing of Custom HTML Gmail Ads.

What it does

- Compile scss file to style.css
- Inline CSS
- Release a zip file for upload to Google Ads

### How to start

`git clone https://github.com/jinjie/gmail-ads-html.git`

You may want to remove `.git` by `rm -rf .git` to remove the version control

### Start developing

`gulp watch`

Edit or update these files as required:

- `./src/index.html`
- `./src/style.scss`
- `./src/teaser.txt`
- `./src/logo.png` - This can be removed and use other supported formats.

### Build a zip file to upload to Google Ads

After you are happy with the result, 

`gulp release` will build a zip file in `./uploads`

The zip file will include the files in `./build/`. This folder removes the scss file and the html file is inline with
the css.

This file can be uploaded to Gmail Ads.

### Author

Kong Jin Jie / [Swift DevLabs](https://www.swiftdev.sg/)

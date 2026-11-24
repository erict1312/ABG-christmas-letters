# Christmas Letters starter

A static GitHub Pages starter based on HTML5 UP Story. Each recipient has a separate URL under `letters/person-XX/` and a separate `letter-config.js`.

## Mobile support

The letter pages include a responsive viewport declaration and mobile-specific CSS for narrow screens, readable text, safe-area spacing, full-width touch-friendly password controls, and prevention of iOS input zoom. The layout is designed for visitors opening the page from a QR code on a phone.

Before printing the QR codes, test each recipient URL on at least one iPhone/Safari and one Android/Chrome device, including portrait orientation and a narrow viewport (320–390 CSS pixels). Also test a long letter and a wrong password.

## Configure a recipient

Edit `letters/person-XX/letter-config.js`:

```js
window.LETTER_CONFIG = {
  recipientName: 'John',
  password: 'christmas2026',
  pageTitle: 'A Christmas Letter for John',
  letterTitle: 'Merry Christmas, John!',
  greeting: 'Dear John,',
  paragraphs: [
    'First paragraph of your letter.',
    'Second paragraph of your letter.'
  ],
  closing: 'Merry Christmas and Happy New Year!',
  signature: 'Eric'
};
```

## Deploy

Keep `index.html`, `assets/`, `images/`, and `letters/` at the repository root. In GitHub repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/(root)**.

## Important security note

This is a convenience password gate only. Because the pages are static and public, passwords and letter text are delivered to the browser and can be discovered by someone inspecting the source or network requests. Do not put highly confidential information here.

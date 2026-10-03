# hamadshafiq.com — portfolio site

Upload BOTH `index.html` and the `media/` folder, keeping them side by side.
The project videos and screenshots live in `media/`.

`index.html` contains everything else: HTML, CSS, JavaScript, your photo, all client
avatars, and the country flags. There are no other files to upload and nothing
to install or build.

Only two external requests are made, both to Google Fonts (Bricolage Grotesque,
Instrument Sans, JetBrains Mono). If those ever fail, the page falls back to
system fonts and still works.

---

## Deploy

### Netlify (fastest — about two minutes)
1. Go to app.netlify.com/drop
2. Drag this whole folder onto the page
3. Site Settings → Domain management → Add custom domain → hamadshafiq.com
4. Point your domain's DNS at Netlify using the records it shows you

### Vercel
1. `npm i -g vercel`
2. Run `vercel` inside this folder, then `vercel --prod`
3. Add hamadshafiq.com in the project's Domains tab

### Any normal web host (cPanel, Hostinger, shared hosting)
Upload `index.html` into `public_html/`. That's it.

### GitHub Pages
Push this folder to a repo, then Settings → Pages → deploy from the main branch.

---

## Before you go live

- [ ] Add `og-image.jpg` next to index.html (1200x630) — this is the preview
      image shown when the link is shared on LinkedIn, WhatsApp or Slack.
      The meta tags already point at `https://hamadshafiq.com/og-image.jpg`.
- [ ] Fix the Fiverr profile link, or remove that row. It currently redirects
      logged-out visitors to a Fiverr signup page.
- [ ] Make your résumé and LinkedIn say 8 years, so they match the site.

---

## Editing the page

Open index.html in any text editor. Search for the section you want:

| Search for          | What it is                                    |
|---------------------|-----------------------------------------------|
| `id="why"`          | Why hire me — the two pillars                 |
| `id="agents"`       | AI agents and automation                      |
| `id="trust"`        | Proof — the verification cards                |
| `id="services"`     | What I do                                     |
| `id="work"`         | The three case studies + More work            |
| `class="feat"`      | Robert Romulus's LinkedIn recommendation      |
| `class="rv-masonry"`| The 12 client reviews                         |
| `id="process"`      | How working together goes                     |
| `id="contact"`      | Contact form and links                        |

### Add a review
Copy one `<article class="rc rv">` block inside `rv-masonry`, paste it where you
want it in the order, and replace the text, name and country. For the flag,
change `#f-us` to `#f-fr`, `#f-de`, `#f-se`, `#f-ge` or `#f-uz`. To add a new
country, copy one of the `<symbol id="f-...">` blocks near the top of the file.

### Add a demo video to a case study
Find `<div class="vslot">` and replace everything inside it with:

    <video src="demo.mp4" poster="poster.jpg" muted loop playsinline controls></video>

Then put demo.mp4 and poster.jpg in this folder next to index.html.

### Change colours
All colours are CSS variables at the very top of the file, in `:root`.
`--accent` is the orange. Dark mode values are in the two blocks just below it.

---

## Contact details in the page

Email: hamad@hamadshafiq.com
LinkedIn: linkedin.com/in/hamadpk
GitHub: github.com/Hamaddogar

The contact form composes an email and hands it to the visitor's mail app.
Nothing is sent to a server, so there is no backend to run and nothing to break.
If you later want submissions delivered to your inbox, Formspree or Netlify
Forms will do it with one line of HTML.


---

## The project popup

Clicking a project card in Selected work opens a full-screen panel with the
video, screenshots, the write-up, the metrics, and a button through to Upwork.

All of it comes from one object near the bottom of index.html. Search for
`var PROJECTS =` and you will find three entries: `fixfinanz`, `nuvita`, `posh`.

To add media to a project, drop the files in `media/` and add them to that
project's `media` array:

    media: [
      {type:'video', src:'media/my-demo.mp4', poster:'media/my-poster.jpg',
       thumb:'media/my-poster.jpg', label:'Project walkthrough'},
      {type:'image', src:'media/screen-1.jpg', thumb:'media/screen-1.jpg',
       label:'Dashboard'}
    ]

An empty `media: []` shows the confidentiality note instead.

To add a fourth project, copy one entry, give it a new key, and add a card in
the HTML with `data-project="yourkey"`.

### A note on Upwork

Upwork blocks its pages from being displayed inside another website, so the
project panel cannot show upwork.com directly. That is a restriction on their
side and no site can work around it. The panel reproduces the content on your
own domain instead, which loads faster and keeps visitors on your site, and the
"View on Upwork" button opens the real page in a new tab.

### Compressing video

Screen recordings are usually far too large to put on a website. The FixFinanz
clip arrived at 15 MB and ships at 438 KB. To compress your own:

    ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 27 -preset slow \
           -pix_fmt yuv420p -movflags +faststart -an output.mp4

Aim for under 2 MB per clip and 30–60 seconds.

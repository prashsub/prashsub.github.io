---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Contact Me
layout: single
author_profile: true
classes: wide
permalink: /pages/contact/     
---

<form
  action="https://formspree.io/mqkybqye"
  method="POST"
>
  <label>
    Your Name:
    <input type="text">
  </label>
  <label>
    Your email:
    <input type="text" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->

  <button type="submit">Send</button>
</form>